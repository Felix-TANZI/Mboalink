import { useEffect, useState } from 'react'
import { mboalinkService, type CaptivePortalEntity } from '@/services/mboalinkService'
import './HotelDetailsModal.css'

type HotelDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  hotel?: Record<string, any> | null;
  onChanged?: () => void;
};

export default function HotelDetailsModal({ isOpen, onClose, hotel, onChanged }: HotelDetailsModalProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [portals, setPortals] = useState<CaptivePortalEntity[]>([])
  const [portalForm, setPortalForm] = useState({ name: '', ssid: '', authMode: 'HOTEL_GUEST' as 'HOTEL_GUEST' | 'UUID_ONLY' })
  const [isSavingPortal, setIsSavingPortal] = useState(false)
  const [isPortalFormOpen, setIsPortalFormOpen] = useState(false)

  const loadPortals = async () => {
    if (!hotel?.id) return
    try {
      const data = await mboalinkService.listCaptivePortals(hotel.id)
      setPortals(data)
    } catch {
      setPortals(hotel.captivePortals || [])
    }
  }

  useEffect(() => {
    if (!isOpen || !hotel?.id) return
    setPortalForm({ name: '', ssid: '', authMode: hotel.siteType === 'ESTABLISHMENT' ? 'UUID_ONLY' : 'HOTEL_GUEST' })
    setIsPortalFormOpen(false)
    loadPortals()
  }, [isOpen, hotel?.id])

  if (!isOpen || !hotel) return null


  const handleCreatePortal = async () => {
    if (!hotel?.id) return
    if (!portalForm.name.trim() || !portalForm.ssid.trim()) {
      alert('Nom et SSID du portail requis')
      return
    }

    try {
      setIsSavingPortal(true)
      await mboalinkService.createCaptivePortal(hotel.id, {
        name: portalForm.name.trim(),
        ssid: portalForm.ssid.trim(),
        status: 'ACTIVE',
        authMode: portalForm.authMode,
      })
      setPortalForm({ name: '', ssid: '', authMode: hotel.siteType === 'ESTABLISHMENT' ? 'UUID_ONLY' : 'HOTEL_GUEST' })
      setIsPortalFormOpen(false)
      await loadPortals()
      onChanged?.()
    } catch (error) {
      alert((error as Error).message || 'Impossible de créer le portail captif')
    } finally {
      setIsSavingPortal(false)
    }
  }

  const handleUpdatePortal = async (portal: CaptivePortalEntity, field: 'name' | 'ssid' | 'status' | 'authMode', value: string) => {
    if (!hotel?.id) return
    try {
      await mboalinkService.updateCaptivePortal(hotel.id, portal.id, { [field]: value })
      await loadPortals()
      onChanged?.()
    } catch (error) {
      alert((error as Error).message || 'Impossible de modifier le portail captif')
    }
  }

  const handleDeletePortal = async (portal: CaptivePortalEntity) => {
    if (!hotel?.id || portal.isDefault) return
    if (!confirm(`Supprimer le portail ${portal.name} ?`)) return
    try {
      await mboalinkService.deleteCaptivePortal(hotel.id, portal.id)
      await loadPortals()
      onChanged?.()
    } catch (error) {
      alert((error as Error).message || 'Suppression impossible')
    }
  }

  const photos = hotel.photos || []
  const currentPhoto = photos[currentPhotoIndex]

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const amenityIcons: Record<string, string> = {
    'Piscine': '🏊',
    'Salle de conférence': '🎤',
    'Restaurant': '🍽️'
  }

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent detailsModal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <button className="backBtn" onClick={onClose}>
            ← FERMER
          </button>
          <div className="modalTitle">
            <h2>{hotel.name}</h2>
            <p>Détails complets de l'établissement</p>
          </div>
          <span className={`statusBadgeLarge ${hotel.status.toLowerCase()}`}>
            {hotel.status}
          </span>
        </div>

        <div className="modalBody detailsBody">
          {/* Galerie Photos */}
          {photos.length > 0 && (
            <section className="photoGallerySection">
              <h3 className="sectionTitle">📸 Galerie Photos</h3>
              
              <div className="mainPhotoContainer">
                <img 
                  src={currentPhoto?.url || '/api/placeholder/800/500'} 
                  alt={hotel.name}
                  className={`mainPhoto ${isZoomed ? 'zoomed' : ''}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                  style={{ cursor: 'zoom-in' }}
                />
                
                {photos.length > 1 && (
                  <>
                    <button className="photoNavBtn prevBtn" onClick={prevPhoto}>
                      ‹
                    </button>
                    <button className="photoNavBtn nextBtn" onClick={nextPhoto}>
                      ›
                    </button>
                  </>
                )}

                {currentPhoto?.isMain && (
                  <div className="mainPhotoBadge">⭐ Photo Principale</div>
                )}

                <div className="photoCounter">
                  {currentPhotoIndex + 1} / {photos.length}
                </div>
              </div>

              <div className="thumbnailsStrip">
                {photos.map((photo, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${index === currentPhotoIndex ? 'active' : ''}`}
                    onClick={() => setCurrentPhotoIndex(index)}
                  >
                    <img src={photo.url} alt={`Photo ${index + 1}`} />
                    {photo.isMain && <span className="starBadge">⭐</span>}
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="detailsGrid">
            {/* Informations Générales */}
            <section className="infoSection">
              <h3 className="sectionTitle">ℹ️ Informations Générales</h3>
              
              <div className="infoGrid">
                <div className="infoItem">
                  <span className="infoLabel">Ville</span>
                  <span className="infoValue">{hotel.city}</span>
                </div>
                <div className="infoItem">
                  <span className="infoLabel">Pays</span>
                  <span className="infoValue">{hotel.country}</span>
                </div>
                <div className="infoItem fullWidth">
                  <span className="infoLabel">Adresse</span>
                  <span className="infoValue">{hotel.address || 'Non renseignée'}</span>
                </div>
                <div className="infoItem">
                  <span className="infoLabel">Site Web</span>
                  <span className="infoValue">
                    {hotel.website ? (
                      <a href={hotel.website} target="_blank" rel="noopener noreferrer">
                        {hotel.website}
                      </a>
                    ) : 'Non renseigné'}
                  </span>
                </div>
              </div>

              {hotel.description && (
                <div className="descriptionBox">
                  <p>{hotel.description}</p>
                </div>
              )}
            </section>

            {/* Contact */}
            <section className="infoSection">
              <h3 className="sectionTitle">📞 Contact</h3>
              
              <div className="contactInfo">
                <div className="contactItem">
                  <span className="contactIcon">✉️</span>
                  <div>
                    <div className="contactLabel">Email IT/Réception</div>
                    <div className="contactValue">
                      <a href={`mailto:${hotel.contact}`}>{hotel.contact}</a>
                    </div>
                  </div>
                </div>
                <div className="contactItem">
                  <span className="contactIcon">📱</span>
                  <div>
                    <div className="contactLabel">Téléphone</div>
                    <div className="contactValue">
                      <a href={`tel:${hotel.phone}`}>{hotel.phone}</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="captivePortalDetailsSection">
            <div className="portalSectionHeader">
              <div>
                <h3 className="sectionTitle">🌐 Portails captifs</h3>
                <p>{portals.length} portail{portals.length > 1 ? 's' : ''} dédié{portals.length > 1 ? 's' : ''} à cet établissement.</p>
              </div>
              <button
                type="button"
                className="createPortalToggleBtn"
                onClick={() => setIsPortalFormOpen((open) => !open)}
              >
                {isPortalFormOpen ? 'Annuler' : '+ Créer un portail'}
              </button>
            </div>

            {isPortalFormOpen && (
            <div className="portalCreateRow">
              <input
                value={portalForm.name}
                onChange={(event) => setPortalForm((prev) => ({ ...prev, name: event.target.value }))}
                placeholder="Nom du portail: Client, Bureau, Staff..."
              />
              <input
                value={portalForm.ssid}
                onChange={(event) => setPortalForm((prev) => ({ ...prev, ssid: event.target.value }))}
                placeholder="SSID: OBEN CLIENT"
              />
              <select value={portalForm.authMode} onChange={(event) => setPortalForm((prev) => ({ ...prev, authMode: event.target.value as 'HOTEL_GUEST' | 'UUID_ONLY' }))}>
                <option value="HOTEL_GUEST">Hôtel : nom/chambre ou UUID</option>
                <option value="UUID_ONLY">UUID/code uniquement</option>
              </select>
              <button type="button" onClick={handleCreatePortal} disabled={isSavingPortal}>Ajouter</button>
            </div>
            )}

            <div className="portalCardsList">
              {portals.map((portal) => (
                <article key={portal.id} className="portalManageCard">
                  <div className="portalManageHeader">
                    <input
                      defaultValue={portal.name}
                      onBlur={(event) => {
                        const nextName = event.target.value.trim()
                        if (nextName && nextName !== portal.name) handleUpdatePortal(portal, 'name', nextName)
                      }}
                      aria-label="Nom du portail"
                    />
                    <span className="portalPortReadonly">:{portal.port}</span>
                  </div>
                  <div className="portalManageGrid">
                    <label>
                      SSID
                      <input
                        defaultValue={portal.ssid}
                        onBlur={(event) => {
                          const nextSsid = event.target.value.trim()
                          if (nextSsid && nextSsid !== portal.ssid) handleUpdatePortal(portal, 'ssid', nextSsid)
                        }}
                      />
                    </label>
                    <label>
                      Statut
                      <select value={portal.status} onChange={(event) => handleUpdatePortal(portal, 'status', event.target.value)}>
                        <option value="ACTIVE">Actif</option>
                        <option value="INACTIVE">Inactif</option>
                      </select>
                    </label>
                    <label>
                      Mode d'accès
                      <select value={portal.authMode || 'HOTEL_GUEST'} onChange={(event) => handleUpdatePortal(portal, 'authMode', event.target.value)}>
                        <option value="HOTEL_GUEST">Hôtel : nom/chambre ou UUID</option>
                        <option value="UUID_ONLY">UUID/code uniquement</option>
                      </select>
                    </label>
                  </div>
                  <div className="portalManageFooter">
                    {portal.captivePortalUrl && (
                      <a href={portal.captivePortalUrl} target="_blank" rel="noopener noreferrer">Ouvrir le portail</a>
                    )}
                    {portal.isDefault ? <span>Portail principal</span> : <button type="button" onClick={() => handleDeletePortal(portal)}>Supprimer</button>}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Statistiques */}
          <section className="statsSection">
            <h3 className="sectionTitle">📊 Statistiques</h3>
            
            <div className="statsCards">
              <div className="statCardDetail">
                <div className="statIcon">🛏️</div>
                <div className="statContent">
                  <div className="statNumber">{hotel.rooms}</div>
                  <div className="statText">Chambres</div>
                </div>
              </div>
              <div className="statCardDetail">
                <div className="statIcon">🏢</div>
                <div className="statContent">
                  <div className="statNumber">{hotel.floors}</div>
                  <div className="statText">Étages</div>
                </div>
              </div>
              <div className="statCardDetail">
                <div className="statIcon">🎯</div>
                <div className="statContent">
                  <div className="statNumber">{hotel.amenities.length}</div>
                  <div className="statText">Équipements</div>
                </div>
              </div>
            </div>
          </section>

          {/* Équipements */}
          {hotel.amenities.length > 0 && (
            <section className="amenitiesSection">
              <h3 className="sectionTitle">🎯 Équipements Disponibles</h3>
              
              <div className="amenitiesGrid">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="amenityCard">
                    <span className="amenityIcon">{amenityIcons[amenity] || '✨'}</span>
                    <span className="amenityName">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Carte Interactive */}
          {hotel.latitude && hotel.longitude && (
            <section className="mapSection">
              <h3 className="sectionTitle">📍 Localisation</h3>
              
              <div className="mapContainer">
                <div className="mapPlaceholder">
                  <div className="mapInfo">
                    <p className="mapCoords">
                      📍 Coordonnées GPS: {hotel.latitude.toFixed(4)}, {hotel.longitude.toFixed(4)}
                    </p>
                    <p className="mapNote">
                      Carte interactive avec OpenStreetMap (intégration Leaflet à venir)
                    </p>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${hotel.latitude},${hotel.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mapLink"
                    >
                      🗺️ Ouvrir dans Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Historique */}
          <section className="historySection">
            <h3 className="sectionTitle">🕐 Historique</h3>
            
            <div className="historyGrid">
              <div className="historyItem">
                <span className="historyLabel">Créé le</span>
                <span className="historyValue">{new Date(hotel.createdAt).toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="historyItem">
                <span className="historyLabel">Dernière modification</span>
                <span className="historyValue">{new Date(hotel.updatedAt).toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Modal Zoom Photo */}
      {isZoomed && (
        <div className="zoomOverlay" onClick={() => setIsZoomed(false)}>
          <img 
            src={currentPhoto?.url} 
            alt="Zoom"
            className="zoomedImage"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="closeZoom" onClick={() => setIsZoomed(false)}>✕</button>
        </div>
      )}
    </div>
  )
}
