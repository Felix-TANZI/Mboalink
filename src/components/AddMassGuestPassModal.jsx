import { useState } from 'react'
import './AddGuestPassModal.css'

export default function AddMassGuestPassModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    quantity: 1,
    label: '',
    duration: '',
    durationType: 'Hours',
    maxUses: 0,
    expiryDate: '',
    expiryTime: '00:00',
    uploadCap: 1500,
    downloadCap: 1500,
    zones: {
      CONFERENCE: false,
      PUBLIC: false,
      GUEST_ROOM: false,
      IROH: false,
      RC: false
    }
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleZoneChange = (zone) => {
    setFormData(prev => ({
      ...prev,
      zones: { ...prev.zones, [zone]: !prev.zones[zone] }
    }))
  }

  const handleSubmit = () => {
    if (formData.quantity < 1 || formData.quantity > 1000) {
      alert('Quantity must be between 1 and 1000')
      return
    }

    console.log('Creating mass guest passes:', formData)
    
    // TODO: API call
    if (onSubmit) onSubmit(formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <button className="backBtn" onClick={onClose}>
            ← BACK
          </button>
          <div className="modalTitle">
            <h2>Add Mass Guest Pass</h2>
            <p>
              Create multiple guest passes at once with the same settings.
            </p>
          </div>
        </div>

        <div className="modalBody">
          {/* General Information */}
          <section className="formSection">
            <h3 className="sectionTitle">General Information</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Number of Passes</label>
                <p className="labelHelp">How many guest passes to create (max 1000).</p>
              </div>
              <input
                type="number"
                value={formData.quantity}
                onChange={(e) => handleInputChange('quantity', Number(e.target.value))}
                min="1"
                max="1000"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Label Prefix</label>
                <p className="labelHelp">Optional prefix for all generated passes.</p>
              </div>
              <input
                type="text"
                value={formData.label}
                onChange={(e) => handleInputChange('label', e.target.value)}
                placeholder="Enter label prefix (optional)"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Duration</label>
                <p className="labelHelp">
                  Select a unit of time before specifying duration. Duration cannot be longer than 180 days.
                </p>
              </div>
              <div className="durationGroup">
                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  placeholder="0"
                  min="0"
                />
                <select
                  value={formData.durationType}
                  onChange={(e) => handleInputChange('durationType', e.target.value)}
                >
                  <option>Hours</option>
                  <option>Days</option>
                </select>
              </div>
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Max Number of Uses</label>
                <p className="labelHelp">For unlimited uses, use '0'.</p>
              </div>
              <input
                type="number"
                value={formData.maxUses}
                onChange={(e) => handleInputChange('maxUses', Number(e.target.value))}
                min="0"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Expiry Date</label>
              </div>
              <div className="dateTimeGroup">
                <input
                  type="date"
                  value={formData.expiryDate}
                  onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                />
                <input
                  type="time"
                  value={formData.expiryTime}
                  onChange={(e) => handleInputChange('expiryTime', e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Bandwidth Settings */}
          <section className="formSection">
            <h3 className="sectionTitle">Bandwidth Settings</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Upload Cap</label>
              </div>
              <div className="sliderGroup">
                <input
                  type="range"
                  min="0"
                  max="15000"
                  step="100"
                  value={formData.uploadCap}
                  onChange={(e) => handleInputChange('uploadCap', Number(e.target.value))}
                />
                <span className="sliderValue">{formData.uploadCap}</span>
              </div>
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Download Cap</label>
              </div>
              <div className="sliderGroup">
                <input
                  type="range"
                  min="0"
                  max="15000"
                  step="100"
                  value={formData.downloadCap}
                  onChange={(e) => handleInputChange('downloadCap', Number(e.target.value))}
                />
                <span className="sliderValue">{formData.downloadCap}</span>
              </div>
            </div>
          </section>

          {/* Zone Information */}
          <section className="formSection">
            <h3 className="sectionTitle">Zone Information</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Allowable Zones</label>
              </div>
              <div className="checkboxGroup">
                {Object.keys(formData.zones).map((zone) => (
                  <label key={zone} className="checkboxLabel">
                    <input
                      type="checkbox"
                      checked={formData.zones[zone]}
                      onChange={() => handleZoneChange(zone)}
                    />
                    <span>{zone.replace('_', '-')}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="modalFooter">
          <button className="btn btnPrimary" onClick={handleSubmit}>
            Create {formData.quantity} Guest Pass{formData.quantity > 1 ? 'es' : ''}
          </button>
          <button className="btn btnSecondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}