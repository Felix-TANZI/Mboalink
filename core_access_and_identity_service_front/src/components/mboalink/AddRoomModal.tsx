import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'
import './AddRoomModal.css'

type AddRoomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Record<string, unknown>) => void;
  room?: Record<string, any> | null;
  hotels: Array<Record<string, any>>;
};

export default function AddRoomModal({ isOpen, onClose, onSave, room, hotels }: AddRoomModalProps) {
  // Equipment Catalog (normalement vient de l'API)
  const equipmentCatalog = [
    'Smart TV 55"',
    'Smart TV 50"',
    'TV connectée',
    'Mini-bar',
    'Bureau',
    'Coffre-fort',
    'Machine à café',
    'Jacuzzi',
    'Balcon',
    'Vue mer',
    'Vue ville'
  ]

  const [formData, setFormData] = useState<Record<string, any>>({
    hotelId: '',
    type: '',
    name: '',
    capacity: 2,
    floor: 1,
    surface: 25,
    description: '',
    equipments: [],
    customEquipment: '',
    photos: []
  })

  useEffect(() => {
    if (room) {
      setFormData({
        hotelId: room.hotelId || '',
        type: room.type || '',
        name: room.name || '',
        capacity: room.capacity || 2,
        floor: room.floor || 1,
        surface: room.surface || 25,
        description: room.description || '',
        equipments: room.equipments || [],
        customEquipment: '',
        photos: room.photos || []
      })
    } else {
      setFormData({
        hotelId: hotels.length > 0 ? hotels[0].id : '',
        type: '',
        name: '',
        capacity: 2,
        floor: 1,
        surface: 25,
        description: '',
        equipments: [],
        customEquipment: '',
        photos: []
      })
    }
  }, [room, hotels])

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleEquipmentToggle = (equipment: string) => {
    setFormData(prev => ({
      ...prev,
      equipments: prev.equipments.includes(equipment)
        ? prev.equipments.filter(e => e !== equipment)
        : [...prev.equipments, equipment]
    }))
  }

  const handleAddCustomEquipment = () => {
    if (formData.customEquipment.trim()) {
      setFormData(prev => ({
        ...prev,
        equipments: [...prev.equipments, formData.customEquipment.trim()],
        customEquipment: ''
      }))
    }
  }

  const handleRemoveEquipment = (equipment: string) => {
    setFormData(prev => ({
      ...prev,
      equipments: prev.equipments.filter(e => e !== equipment)
    }))
  }

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? [])
    const validFiles = files.filter(file => {
      const isValidType = ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)
      const isValidSize = file.size <= 5 * 1024 * 1024
      return isValidType && isValidSize
    })

    const newPhotos = validFiles.map(file => ({
      file,
      url: URL.createObjectURL(file),
      preview: URL.createObjectURL(file),
      name: file.name,
      isMain: formData.photos.length === 0
    }))

    setFormData(prev => ({ ...prev, photos: [...prev.photos, ...newPhotos] }))
  }

  const handleRemovePhoto = (index: number) => {
    const photoToRemove = formData.photos[index]
    
    setFormData(prev => {
      const newPhotos = prev.photos.filter((_, i) => i !== index)
      
      if (photoToRemove.isMain && newPhotos.length > 0) {
        newPhotos[0].isMain = true
      }
      
      return { ...prev, photos: newPhotos }
    })
  }

  const handleSetMainPhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.map((photo, i) => ({
        ...photo,
        isMain: i === index
      }))
    }))
  }

  const handleSubmit = () => {
    if (!formData.hotelId || !formData.type || !formData.name || !formData.description) {
      alert('Veuillez remplir tous les champs requis (Hôtel, Type, Numéro, Description)')
      return
    }

    onSave(formData)
  }

  if (!isOpen) return null

  const isDuplicate = room && !room.id

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent roomModal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <button className="backBtn" onClick={onClose}>
            ← RETOUR
          </button>
          <div className="modalTitle">
            <h2>
              {isDuplicate ? 'Dupliquer la Chambre' : room ? 'Modifier la Chambre' : 'Ajouter une Chambre'}
            </h2>
            <p>
              Configurez le type de chambre et ses équipements pour cet hôtel client.
            </p>
          </div>
        </div>

        <div className="modalBody">
          {/* Informations Générales */}
          <section className="formSection">
            <h3 className="sectionTitle">📋 Informations Générales</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Hôtel *</label>
                <p className="labelHelp">Sélectionnez l'hôtel client</p>
              </div>
              <select
                value={formData.hotelId}
                onChange={(e) => handleInputChange('hotelId', e.target.value)}
                required
              >
                <option value="">-- Sélectionner un hôtel --</option>
                {hotels.map(hotel => (
                  <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
                ))}
              </select>
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Type de Chambre *</label>
                <p className="labelHelp">Ex: Suite Présidentielle, Chambre Standard, Suite Deluxe</p>
              </div>
              <input
                type="text"
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
                placeholder="Ex: Suite Présidentielle"
                required
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Numéro de chambre *</label>
                <p className="labelHelp">Ex: 101, 204B, Suite 12. Ce numéro identifie la chambre dans l'hôtel.</p>
              </div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Ex: 101"
                required
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Capacité (personnes) *</label>
              </div>
              <input
                type="number"
                value={formData.capacity}
                onChange={(e) => handleInputChange('capacity', Number(e.target.value))}
                min="1"
                max="10"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Étage</label>
              </div>
              <input
                type="number"
                value={formData.floor}
                onChange={(e) => handleInputChange('floor', Number(e.target.value))}
                min="0"
                max="50"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Superficie (m²)</label>
              </div>
              <input
                type="number"
                value={formData.surface}
                onChange={(e) => handleInputChange('surface', Number(e.target.value))}
                min="10"
                max="500"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Description *</label>
                <p className="labelHelp">Description détaillée de la chambre</p>
              </div>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Décrivez la chambre, ses particularités..."
                rows="4"
                required
              />
            </div>
          </section>

          {/* Équipements */}
          <section className="formSection">
            <h3 className="sectionTitle">🎯 Équipements</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Équipements Disponibles</label>
                <p className="labelHelp">Sélectionnez depuis le catalogue</p>
              </div>
              <div className="equipmentCheckboxes">
                {equipmentCatalog.map((equipment, index) => (
                  <label key={index} className="equipmentCheckbox">
                    <input
                      type="checkbox"
                      checked={formData.equipments.includes(equipment)}
                      onChange={() => handleEquipmentToggle(equipment)}
                    />
                    <span>{equipment}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Ajouter Équipement Personnalisé</label>
                <p className="labelHelp">Ajoutez un équipement non listé</p>
              </div>
              <div className="customEquipmentInput">
                <input
                  type="text"
                  value={formData.customEquipment}
                  onChange={(e) => handleInputChange('customEquipment', e.target.value)}
                  placeholder="Ex: Cheminée, Piano, etc."
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      handleAddCustomEquipment()
                    }
                  }}
                />
                <button 
                  type="button"
                  className="btn btnSecondary"
                  onClick={handleAddCustomEquipment}
                >
                  + Ajouter
                </button>
              </div>
            </div>

            {formData.equipments.length > 0 && (
              <div className="selectedEquipments">
                <p className="selectedLabel">Équipements sélectionnés :</p>
                <div className="equipmentsList">
                  {formData.equipments.map((equipment, index) => (
                    <div key={index} className="selectedEquipmentItem">
                      <span>{equipment}</span>
                      <button
                        type="button"
                        className="removeEquipmentBtn"
                        onClick={() => handleRemoveEquipment(equipment)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Photos */}
          <section className="formSection">
            <h3 className="sectionTitle">📸 Photos de la Chambre</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Ajouter des Photos</label>
                <p className="labelHelp">
                  Formats acceptés: JPEG, PNG. Taille max: 5MB par photo.
                  Cliquez sur l'étoile pour définir la photo principale.
                </p>
              </div>
              <div className="photoUploadSection">
                <label htmlFor="room-photo-upload" className="uploadBtn">
                  📸 Choisir des Photos
                </label>
                <input
                  id="room-photo-upload"
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
            {isDuplicate ? 'Dupliquer la Chambre' : room ? 'Sauvegarder les Modifications' : 'Ajouter la Chambre'}
          </button>
          <button className="btn btnSecondary" onClick={onClose}>
            Annuler
          </button>
          {room && room.id && (
            <button className="btn btnDanger" onClick={() => {
              if (confirm('Supprimer cette chambre définitivement ?')) {
                onClose()
              }
            }}>
              Supprimer la Chambre
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
