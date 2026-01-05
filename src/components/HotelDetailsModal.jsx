import { useState } from 'react'
import './HotelDetailsModal.css'

export default function HotelDetailsModal({ isOpen, onClose, hotel }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  if (!isOpen || !hotel) return null

  const photos = hotel.photos || []
  const currentPhoto = photos[currentPhotoIndex]

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const amenityIcons = {
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