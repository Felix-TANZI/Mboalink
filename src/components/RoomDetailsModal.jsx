import { useState } from 'react'
import './RoomDetailsModal.css'

export default function RoomDetailsModal({ isOpen, onClose, room }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  if (!isOpen || !room) return null

  const photos = room.photos || []
  const currentPhoto = photos[currentPhotoIndex]

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent detailsModal roomDetailsModal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <button className="backBtn" onClick={onClose}>
            ← FERMER
          </button>
          <div className="modalTitle">
            <h2>{room.type}</h2>
            <p>Détails complets de la chambre</p>
          </div>
          <div className="hotelBadge">
            🏨 {room.hotelName}
          </div>
        </div>

        <div className="modalBody detailsBody">
          {/* Galerie Photos */}
          {photos.length > 0 && (
            <section className="photoGallerySection">
              <h3 className="sectionTitle">📸 Galerie Photos</h3>
              
              <div className="mainPhotoContainer">
                <img 
                  src={currentPhoto?.url || '/api/placeholder/800/500'} 
                  alt={room.type}
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
                  <span className="infoLabel">Type de Chambre</span>
                  <span className="infoValue">{room.type}</span>
                </div>
                <div className="infoItem">
                  <span className="infoLabel">Hôtel</span>
                  <span className="infoValue">{room.hotelName}</span>
                </div>
                <div className="infoItem">
                  <span className="infoLabel">Capacité</span>
                  <span className="infoValue">{room.capacity} personne{room.capacity > 1 ? 's' : ''}</span>
                </div>
                <div className="infoItem">
                  <span className="infoLabel">Étage</span>
                  <span className="infoValue">{room.floor}</span>
                </div>
                <div className="infoItem">
                  <span className="infoLabel">Superficie</span>
                  <span className="infoValue">{room.surface} m²</span>
                </div>
                <div className="infoItem">
                  <span className="infoLabel">Équipements</span>
                  <span className="infoValue">{room.equipments.length} équipement{room.equipments.length > 1 ? 's' : ''}</span>
                </div>
              </div>

              {room.description && (
                <div className="descriptionBox">
                  <p>{room.description}</p>
                </div>
              )}
            </section>

            {/* Statistiques */}
            <section className="infoSection statsHighlight">
              <h3 className="sectionTitle">📊 Caractéristiques</h3>
              
              <div className="characteristicsGrid">
                <div className="charCard">
                  <div className="charIcon">👥</div>
                  <div className="charContent">
                    <div className="charNumber">{room.capacity}</div>
                    <div className="charText">Personnes</div>
                  </div>
                </div>
                <div className="charCard">
                  <div className="charIcon">🏢</div>
                  <div className="charContent">
                    <div className="charNumber">{room.floor}</div>
                    <div className="charText">Étage</div>
                  </div>
                </div>
                <div className="charCard">
                  <div className="charIcon">📐</div>
                  <div className="charContent">
                    <div className="charNumber">{room.surface}</div>
                    <div className="charText">m²</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Équipements */}
          {room.equipments.length > 0 && (
            <section className="amenitiesSection">
              <h3 className="sectionTitle">🎯 Équipements Disponibles</h3>
              
              <div className="equipmentsGrid">
                {room.equipments.map((equipment, index) => (
                  <div key={index} className="equipmentCard">
                    <span className="equipmentIcon">✨</span>
                    <span className="equipmentName">{equipment}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Configuration WiFi Suggérée */}
          <section className="wifiConfigSection">
            <h3 className="sectionTitle">📶 Configuration WiFi Suggérée</h3>
            
            <div className="wifiConfigGrid">
              <div className="wifiConfigItem">
                <span className="wifiConfigLabel">Nombre d'Appareils</span>
                <span className="wifiConfigValue">
                  {room.capacity === 2 ? '2 devices' : 
                   room.capacity <= 4 ? `${room.capacity * 2} devices` : 
                   '8+ devices'}
                </span>
              </div>
              <div className="wifiConfigItem">
                <span className="wifiConfigLabel">Bande Passante</span>
                <span className="wifiConfigValue">Standard (1500 Kb/s)</span>
              </div>
              <div className="wifiConfigItem">
                <span className="wifiConfigLabel">Durée Session</span>
                <span className="wifiConfigValue">24 heures</span>
              </div>
            </div>

            <p className="wifiNote">
              💡 Ces paramètres sont basés sur la capacité de la chambre. 
              Configurez les règles WiFi dans la section <strong>WiFi Policies</strong>.
            </p>
          </section>

          {/* Historique */}
          <section className="historySection">
            <h3 className="sectionTitle">🕐 Historique</h3>
            
            <div className="historyGrid">
              <div className="historyItem">
                <span className="historyLabel">Créé le</span>
                <span className="historyValue">{new Date(room.createdAt).toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="historyItem">
                <span className="historyLabel">Dernière modification</span>
                <span className="historyValue">{new Date(room.updatedAt).toLocaleDateString('fr-FR', { 
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