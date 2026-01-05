import { useState, useEffect } from 'react'
import './AddHotelModal.css'

export default function AddHotelModal({ isOpen, onClose, onSave, hotel }) {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    country: 'Cameroun',
    address: '',
    contact: '',
    phone: '',
    website: '',
    latitude: '',
    longitude: '',
    description: '',
    rooms: 0,
    floors: 1,
    status: 'Actif',
    amenities: {
      piscine: false,
      conference: false,
      restaurant: false
    },
    photos: []
  })

  useEffect(() => {
    if (hotel) {
      setFormData({
        name: hotel.name || '',
        city: hotel.city || '',
        country: hotel.country || 'Cameroun',
        address: hotel.address || '',
        contact: hotel.contact || '',
        phone: hotel.phone || '',
        website: hotel.website || '',
        latitude: hotel.latitude || '',
        longitude: hotel.longitude || '',
        description: hotel.description || '',
        rooms: hotel.rooms || 0,
        floors: hotel.floors || 1,
        status: hotel.status || 'Actif',
        amenities: {
          piscine: hotel.amenities?.includes('Piscine') || false,
          conference: hotel.amenities?.includes('Salle de conférence') || false,
          restaurant: hotel.amenities?.includes('Restaurant') || false
        },
        photos: hotel.photos || []
      })
    } else {
      setFormData({
        name: '',
        city: '',
        country: 'Cameroun',
        address: '',
        contact: '',
        phone: '',
        website: '',
        latitude: '',
        longitude: '',
        description: '',
        rooms: 0,
        floors: 1,
        status: 'Actif',
        amenities: {
          piscine: false,
          conference: false,
          restaurant: false
        },
        photos: []
      })
    }
  }, [hotel])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleAmenityChange = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: { ...prev.amenities, [amenity]: !prev.amenities[amenity] }
    }))
  }

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files)
    const validFiles = files.filter(file => {
      const isValidType = ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)
      const isValidSize = file.size <= 5 * 1024 * 1024 // 5MB
      return isValidType && isValidSize
    })

    const newPhotos = validFiles.map(file => ({
      file,
      url: URL.createObjectURL(file),
      preview: URL.createObjectURL(file),
      name: file.name,
      isMain: formData.photos.length === 0 // Première photo = principale par défaut
    }))

    setFormData(prev => ({ ...prev, photos: [...prev.photos, ...newPhotos] }))
  }

  const handleRemovePhoto = (index) => {
    const photoToRemove = formData.photos[index]
    
    setFormData(prev => {
      const newPhotos = prev.photos.filter((_, i) => i !== index)
      
      // Si on supprime la photo principale et qu'il reste des photos, la première devient principale
      if (photoToRemove.isMain && newPhotos.length > 0) {
        newPhotos[0].isMain = true
      }
      
      return { ...prev, photos: newPhotos }
    })
  }

  const handleSetMainPhoto = (index) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.map((photo, i) => ({
        ...photo,
        isMain: i === index
      }))
    }))
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.city || !formData.contact) {
      alert('Veuillez remplir tous les champs requis (Nom, Ville, Contact)')
      return
    }

    // Validation GPS
    if (formData.latitude && formData.longitude) {
      const lat = parseFloat(formData.latitude)
      const lng = parseFloat(formData.longitude)
      if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
        alert('Coordonnées GPS invalides')
        return
      }
    }

    const amenitiesList = []
    if (formData.amenities.piscine) amenitiesList.push('Piscine')
    if (formData.amenities.conference) amenitiesList.push('Salle de conférence')
    if (formData.amenities.restaurant) amenitiesList.push('Restaurant')

    const hotelData = {
      ...formData,
      latitude: formData.latitude ? parseFloat(formData.latitude) : null,
      longitude: formData.longitude ? parseFloat(formData.longitude) : null,
      amenities: amenitiesList,
      updatedAt: new Date().toISOString().split('T')[0]
    }

    onSave(hotelData)
  }

  if (!isOpen) return null

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent hotelModal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <button className="backBtn" onClick={onClose}>
            ← RETOUR
          </button>
          <div className="modalTitle">
            <h2>{hotel ? 'Modifier l\'Hôtel' : 'Ajouter un Hôtel'}</h2>
            <p>
              Renseignez les informations de l'établissement et configurez ses équipements.
            </p>
          </div>
        </div>

        <div className="modalBody">
          {/* Informations Générales */}
          <section className="formSection">
            <h3 className="sectionTitle">📋 Informations Générales</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Nom de l'Hôtel *</label>
                <p className="labelHelp">Nom complet de l'établissement</p>
              </div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Ex: Hôtel La Résidence - Douala"
                required
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Ville *</label>
              </div>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                placeholder="Ex: Douala"
                required
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Pays *</label>
              </div>
              <select
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
              >
                <option>Cameroun</option>
                <option>Gabon</option>
                <option>Congo</option>
                <option>RDC</option>
                <option>Tchad</option>
                <option>Côte d'Ivoire</option>
                <option>Sénégal</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Adresse Complète</label>
              </div>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Ex: Av. des Cocotiers, Akwa, Douala"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Site Web</label>
                <p className="labelHelp">URL du site web de l'hôtel</p>
              </div>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https://www.hotel.com"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Description</label>
                <p className="labelHelp">Description courte de l'établissement</p>
              </div>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Décrivez l'hôtel en quelques lignes..."
                rows="3"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Nombre de Chambres</label>
              </div>
              <input
                type="number"
                value={formData.rooms}
                onChange={(e) => handleInputChange('rooms', Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Nombre d'Étages</label>
              </div>
              <input
                type="number"
                value={formData.floors}
                onChange={(e) => handleInputChange('floors', Number(e.target.value))}
                min="1"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Statut</label>
              </div>
              <select
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
              >
                <option>Actif</option>
                <option>Inactif</option>
                <option>Maintenance</option>
              </select>
            </div>
          </section>

          {/* Contact */}
          <section className="formSection">
            <h3 className="sectionTitle">📞 Contact</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Email IT/Réception *</label>
                <p className="labelHelp">Email de contact principal</p>
              </div>
              <input
                type="email"
                value={formData.contact}
                onChange={(e) => handleInputChange('contact', e.target.value)}
                placeholder="Ex: it@hotel.com"
                required
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Téléphone</label>
              </div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Ex: +237 233 42 56 78"
              />
            </div>
          </section>

          {/* Localisation GPS */}
          <section className="formSection">
            <h3 className="sectionTitle">📍 Localisation GPS</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Latitude</label>
                <p className="labelHelp">Coordonnée latitude (ex: 4.0511)</p>
              </div>
              <input
                type="number"
                step="0.0001"
                value={formData.latitude}
                onChange={(e) => handleInputChange('latitude', e.target.value)}
                placeholder="Ex: 4.0511"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Longitude</label>
                <p className="labelHelp">Coordonnée longitude (ex: 9.7679)</p>
              </div>
              <input
                type="number"
                step="0.0001"
                value={formData.longitude}
                onChange={(e) => handleInputChange('longitude', e.target.value)}
                placeholder="Ex: 9.7679"
              />
            </div>

            {formData.latitude && formData.longitude && (
              <div className="gpsPreview">
                <p className="gpsInfo">
                  📍 Coordonnées: {formData.latitude}, {formData.longitude}
                </p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${formData.latitude},${formData.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gpsLink"
                >
                  🗺️ Vérifier sur Google Maps
                </a>
              </div>
            )}
          </section>

          {/* Équipements */}
          <section className="formSection">
            <h3 className="sectionTitle">🎯 Équipements (Niveau Hôtel)</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Sélectionner les Équipements</label>
                <p className="labelHelp">Cochez les équipements disponibles dans l'établissement</p>
              </div>
              <div className="checkboxGroup">
                <label className="checkboxLabel">
                  <input
                    type="checkbox"
                    checked={formData.amenities.piscine}
                    onChange={() => handleAmenityChange('piscine')}
                  />
                  <span>🏊 Piscine</span>
                </label>
                <label className="checkboxLabel">
                  <input
                    type="checkbox"
                    checked={formData.amenities.conference}
                    onChange={() => handleAmenityChange('conference')}
                  />
                  <span>🎤 Salle de Conférence</span>
                </label>
                <label className="checkboxLabel">
                  <input
                    type="checkbox"
                    checked={formData.amenities.restaurant}
                    onChange={() => handleAmenityChange('restaurant')}
                  />
                  <span>🍽️ Restaurant</span>
                </label>
              </div>
            </div>
          </section>

          {/* Photos */}
          <section className="formSection">
            <h3 className="sectionTitle">📸 Photos de l'Hôtel</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Ajouter des Photos</label>
                <p className="labelHelp">
                  Formats acceptés: JPEG, PNG. Taille max: 5MB par photo.
                  Cliquez sur l'étoile pour définir la photo principale.
                </p>
              </div>
              <div className="photoUploadSection">
                <label htmlFor="photo-upload" className="uploadBtn">
                  📸 Choisir des Photos
                </label>
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/jpeg,image/png,image/jpg"
                  multiple
                  onChange={handlePhotoUpload}
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            {formData.photos.length > 0 && (
              <div className="photosPreview">
                {formData.photos.map((photo, index) => (
                  <div key={index} className="photoItem">
                    <img src={photo.preview || photo.url} alt={`Photo ${index + 1}`} />
                    
                    <button
                      type="button"
                      className={`mainPhotoStar ${photo.isMain ? 'active' : ''}`}
                      onClick={() => handleSetMainPhoto(index)}
                      title={photo.isMain ? 'Photo principale' : 'Définir comme photo principale'}
                    >
                      ⭐
                    </button>
                    
                    <button
                      type="button"
                      className="removePhotoBtn"
                      onClick={() => handleRemovePhoto(index)}
                    >
                      ✕
                    </button>
                    
                    <p className="photoName">{photo.name}</p>
                    {photo.isMain && <span className="mainLabel">Principale</span>}
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        <div className="modalFooter">
          <button className="btn btnPrimary" onClick={handleSubmit}>
            {hotel ? 'Sauvegarder les Modifications' : 'Ajouter l\'Hôtel'}
          </button>
          <button className="btn btnSecondary" onClick={onClose}>
            Annuler
          </button>
          {hotel && (
            <button className="btn btnDanger" onClick={() => {
              if (confirm('Supprimer cet hôtel définitivement ?')) {
                onClose()
              }
            }}>
              Supprimer l'Hôtel
            </button>
          )}
        </div>
      </div>
    </div>
  )
}