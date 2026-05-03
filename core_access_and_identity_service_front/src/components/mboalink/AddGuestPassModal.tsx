import { useState } from 'react'
import './AddGuestPassModal.css'

function generateCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

function todayStr() {
  return new Date().toISOString().split('T')[0]
}

const defaultForm = () => ({
  passCode:     generateCode(),
  label:        '',
  duration:     '',
  durationType: 'Hours',
  maxUses:      0,
  expiryDate:   '',
  expiryTime:   '00:00',
  uploadCap:    1500,
  downloadCap:  1500,
  zones: {
    CONFERENCE: false,
    PUBLIC:     false,
    GUEST_ROOM: false,
    IROH:       false,
    RC:         false,
  },
})

type GuestPassModalProps = {
  isOpen:    boolean
  onClose:   () => void
  onSubmit?: (data: Record<string, unknown>) => void
}

export default function AddGuestPassModal({ isOpen, onClose, onSubmit }: GuestPassModalProps) {
  const [formData, setFormData] = useState<Record<string, any>>(defaultForm())

  const handleInputChange = (field: string, value: string | number) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  const handleNumericInput = (field: string, value: string) => {
    const normalized = value === '' ? '' : Number(value)
    setFormData((prev) => ({ ...prev, [field]: normalized }))
  }

  const handleZoneChange = (zone: string) =>
    setFormData((prev) => ({ ...prev, zones: { ...prev.zones, [zone]: !prev.zones[zone] } }))

  const handleSubmit = () => {
    if (onSubmit) onSubmit(formData)
    setFormData(defaultForm())
    onClose()
  }

  const handleClose = () => {
    setFormData(defaultForm())
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modalOverlay" onClick={handleClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <button className="backBtn" onClick={handleClose}>← BACK</button>
          <div className="modalTitle">
            <h2>Add A Guest Pass</h2>
            <p>
              Le code est généré aléatoirement. Le label est facultatif — il sert uniquement à
              identifier ou catégoriser le code (ex : "Conférence Total Energie", "Chambre VIP").
              Il n'a aucun impact sur le code lui-même.
            </p>
          </div>
        </div>

        <div className="modalBody">
          {/* General Information */}
          <section className="formSection">
            <h3 className="sectionTitle">General Information</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Pass Code</label>
                <p className="labelHelp">Code généré automatiquement. Vous pouvez le remplacer par le vôtre.</p>
              </div>
              <input
                type="text"
                value={formData.passCode}
                onChange={(e) => handleInputChange('passCode', e.target.value.toUpperCase())}
                maxLength={20}
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Label <span style={{ fontWeight: 400, color: '#94a3b8' }}>(optionnel)</span></label>
                <p className="labelHelp">
                  Permet d'identifier ou catégoriser ce code. Ex : "Séminaire RH", "Suite Présidentielle", "Journaliste accrédité".
                  Le code reste indépendant du label.
                </p>
              </div>
              <input
                type="text"
                value={formData.label}
                onChange={(e) => handleInputChange('label', e.target.value)}
                placeholder="Ex : Conférence Total Energie"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Duration</label>
                <p className="labelHelp">
                  Choisissez l'unité puis la valeur. Durée maximale : 180 jours.
                </p>
              </div>
              <div className="durationGroup">
                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => handleNumericInput('duration', e.target.value)}
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
                <p className="labelHelp">Utilisations illimitées : saisir 0.</p>
              </div>
              <input
                type="number"
                value={formData.maxUses}
                onChange={(e) => handleNumericInput('maxUses', e.target.value)}
                min="0"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Expiry Date <span style={{ fontWeight: 400, color: '#94a3b8' }}>(optionnel)</span></label>
                <p className="labelHelp">Laissez vide pour aucune expiration. Les dates passées sont bloquées.</p>
              </div>
              <div className="dateTimeGroup">
                <input
                  type="date"
                  value={formData.expiryDate}
                  min={todayStr()}
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
                <p className="labelHelp">Glissez ou tapez directement (0 – 15 000 kb/s).</p>
              </div>
              <div className="capGroup">
                <input
                  type="range" min="0" max="15000" step="100"
                  value={formData.uploadCap}
                  onChange={(e) => handleNumericInput('uploadCap', e.target.value)}
                  className="capSlider"
                />
                <input
                  type="number" min="0" max="15000" step="100"
                  value={formData.uploadCap}
                  onChange={(e) => handleNumericInput('uploadCap', e.target.value)}
                  className="capInput"
                />
                <span className="capUnit">kb/s</span>
              </div>
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Download Cap</label>
                <p className="labelHelp">Glissez ou tapez directement (0 – 15 000 kb/s).</p>
              </div>
              <div className="capGroup">
                <input
                  type="range" min="0" max="15000" step="100"
                  value={formData.downloadCap}
                  onChange={(e) => handleNumericInput('downloadCap', e.target.value)}
                  className="capSlider"
                />
                <input
                  type="number" min="0" max="15000" step="100"
                  value={formData.downloadCap}
                  onChange={(e) => handleNumericInput('downloadCap', e.target.value)}
                  className="capInput"
                />
                <span className="capUnit">kb/s</span>
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
          <button className="btn btnPrimary" onClick={handleSubmit}>Add Guest Pass</button>
          <button className="btn btnSecondary" onClick={handleClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}