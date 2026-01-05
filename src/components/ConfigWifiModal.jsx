import { useState, useEffect } from 'react'
import './ConfigWifiModal.css'

export default function ConfigWifiModal({ isOpen, onClose, onSave, config }) {
  const [formData, setFormData] = useState({
    ssid: '',
    password: '',
    authMethod: 'Portail Captif',
    sessionDuration: 24,
    sessionUnit: 'hours',
    maxDevices: 2,
    uploadSpeed: 1500,
    downloadSpeed: 1500,
    zones: [],
    captivePortal: {
      logo: '',
      welcomeMessage: '',
      termsUrl: ''
    },
    status: 'Actif'
  })

  const authMethods = [
    'Portail Captif',
    'Guest Pass',
    'Numéro de Chambre',
    'Voucher',
    'Code SMS',
    'Email'
  ]

  const availableZones = [
    'PUBLIC',
    'GUEST-ROOM',
    'CONFERENCE',
    'IROH',
    'RC',
    'RESTAURANT',
    'LOBBY',
    'POOL'
  ]

  useEffect(() => {
    if (config) {
      setFormData({
        ssid: config.ssid || '',
        password: '',
        authMethod: config.authMethod || 'Portail Captif',
        sessionDuration: config.sessionDuration || 24,
        sessionUnit: config.sessionUnit || 'hours',
        maxDevices: config.maxDevices || 2,
        uploadSpeed: config.uploadSpeed || 1500,
        downloadSpeed: config.downloadSpeed || 1500,
        zones: config.zones || [],
        captivePortal: {
          logo: config.captivePortal?.logo || '',
          welcomeMessage: config.captivePortal?.welcomeMessage || '',
          termsUrl: config.captivePortal?.termsUrl || ''
        },
        status: config.status || 'Actif'
      })
    }
  }, [config])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCaptivePortalChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      captivePortal: { ...prev.captivePortal, [field]: value }
    }))
  }

  const handleZoneToggle = (zone) => {
    setFormData(prev => ({
      ...prev,
      zones: prev.zones.includes(zone)
        ? prev.zones.filter(z => z !== zone)
        : [...prev.zones, zone]
    }))
  }

  const handleLogoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        handleCaptivePortalChange('logo', event.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    if (!formData.ssid) {
      alert('Veuillez renseigner le SSID')
      return
    }

    if (formData.zones.length === 0) {
      alert('Veuillez sélectionner au moins une zone réseau')
      return
    }

    onSave(formData)
  }

  if (!isOpen || !config) return null

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent configWifiModal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <button className="backBtn" onClick={onClose}>
            ← RETOUR
          </button>
          <div className="modalTitle">
            <h2>Configuration WiFi - {config.hotelName}</h2>
            <p>
              Paramétrez les accès réseau et le portail captif pour cet hôtel.
            </p>
          </div>
        </div>

        <div className="modalBody">
          {/* Paramètres Réseau */}
          <section className="formSection">
            <h3 className="sectionTitle">📶 Paramètres Réseau</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>SSID (Nom du Réseau) *</label>
                <p className="labelHelp">Nom visible par les clients</p>
              </div>
              <input
                type="text"
                value={formData.ssid}
                onChange={(e) => handleInputChange('ssid', e.target.value)}
                placeholder="Ex: HotelName-Guest"
                required
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Mot de Passe WiFi</label>
                <p className="labelHelp">Optionnel - Laissez vide pour réseau ouvert</p>
              </div>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="••••••••"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Méthode d'Authentification</label>
                <p className="labelHelp">Comment les clients s'identifient</p>
              </div>
              <select
                value={formData.authMethod}
                onChange={(e) => handleInputChange('authMethod', e.target.value)}
              >
                {authMethods.map((method, idx) => (
                  <option key={idx} value={method}>{method}</option>
                ))}
              </select>
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Statut</label>
              </div>
              <select
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
              >
                <option value="Actif">Actif</option>
                <option value="Inactif">Inactif</option>
              </select>
            </div>
          </section>

          {/* Durée et Limitations */}
          <section className="formSection">
            <h3 className="sectionTitle">⏱️ Durée et Limitations</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Durée de Session</label>
                <p className="labelHelp">Temps de connexion autorisé</p>
              </div>
              <div className="durationGroup">
                <input
                  type="number"
                  value={formData.sessionDuration}
                  onChange={(e) => handleInputChange('sessionDuration', Number(e.target.value))}
                  min="1"
                  max="999"
                />
                <select
                  value={formData.sessionUnit}
                  onChange={(e) => handleInputChange('sessionUnit', e.target.value)}
                >
                  <option value="hours">Heures</option>
                  <option value="days">Jours</option>
                </select>
              </div>
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Nombre Max d'Appareils</label>
                <p className="labelHelp">Par utilisateur/chambre</p>
              </div>
              <input
                type="number"
                value={formData.maxDevices}
                onChange={(e) => handleInputChange('maxDevices', Number(e.target.value))}
                min="1"
                max="20"
              />
            </div>
          </section>

          {/* Bande Passante */}
          <section className="formSection">
            <h3 className="sectionTitle">🚀 Bande Passante</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Vitesse Upload (Kb/s)</label>
              </div>
              <div className="sliderGroup">
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={formData.uploadSpeed}
                  onChange={(e) => handleInputChange('uploadSpeed', Number(e.target.value))}
                />
                <span className="sliderValue">{formData.uploadSpeed} Kb/s</span>
              </div>
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Vitesse Download (Kb/s)</label>
              </div>
              <div className="sliderGroup">
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={formData.downloadSpeed}
                  onChange={(e) => handleInputChange('downloadSpeed', Number(e.target.value))}
                />
                <span className="sliderValue">{formData.downloadSpeed} Kb/s</span>
              </div>
            </div>
          </section>

          {/* Zones Réseau */}
          <section className="formSection">
            <h3 className="sectionTitle">📍 Zones Réseau</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Zones Autorisées *</label>
                <p className="labelHelp">Sélectionnez les zones où ce WiFi est accessible</p>
              </div>
              <div className="zonesCheckboxes">
                {availableZones.map((zone, idx) => (
                  <label key={idx} className="zoneCheckbox">
                    <input
                      type="checkbox"
                      checked={formData.zones.includes(zone)}
                      onChange={() => handleZoneToggle(zone)}
                    />
                    <span>{zone}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Portail Captif */}
          {formData.authMethod === 'Portail Captif' && (
            <section className="formSection captivePortalSection">
              <h3 className="sectionTitle">🌐 Portail Captif</h3>

              <div className="formRow">
                <div className="formLabel">
                  <label>Logo de l'Hôtel</label>
                  <p className="labelHelp">Image affichée sur la page de connexion</p>
                </div>
                <div className="logoUploadSection">
                  {formData.captivePortal.logo ? (
                    <div className="logoPreview">
                      <img src={formData.captivePortal.logo} alt="Logo" />
                      <button 
                        type="button"
                        className="removeLogoBtn"
                        onClick={() => handleCaptivePortalChange('logo', '')}
                      >
                        ✕ Supprimer
                      </button>
                    </div>
                  ) : (
                    <>
                      <label htmlFor="logo-upload" className="uploadBtn">
                        📤 Télécharger un Logo
                      </label>
                      <input
                        id="logo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        style={{ display: 'none' }}
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="formRow">
                <div className="formLabel">
                  <label>Message de Bienvenue</label>
                  <p className="labelHelp">Texte affiché sur le portail</p>
                </div>
                <textarea
                  value={formData.captivePortal.welcomeMessage}
                  onChange={(e) => handleCaptivePortalChange('welcomeMessage', e.target.value)}
                  placeholder="Ex: Bienvenue à l'Hôtel X..."
                  rows="3"
                />
              </div>

              <div className="formRow">
                <div className="formLabel">
                  <label>Conditions d'Utilisation (URL)</label>
                  <p className="labelHelp">Lien vers les CGU</p>
                </div>
                <input
                  type="url"
                  value={formData.captivePortal.termsUrl}
                  onChange={(e) => handleCaptivePortalChange('termsUrl', e.target.value)}
                  placeholder="https://hotel.com/terms"
                />
              </div>
            </section>
          )}

          {/* Aperçu Configuration */}
          <section className="formSection configPreview">
            <h3 className="sectionTitle">📋 Aperçu de la Configuration</h3>
            
            <div className="previewGrid">
              <div className="previewItem">
                <span className="previewLabel">SSID</span>
                <span className="previewValue">{formData.ssid || 'Non défini'}</span>
              </div>
              <div className="previewItem">
                <span className="previewLabel">Authentification</span>
                <span className="previewValue">{formData.authMethod}</span>
              </div>
              <div className="previewItem">
                <span className="previewLabel">Durée</span>
                <span className="previewValue">
                  {formData.sessionDuration} {formData.sessionUnit === 'hours' ? 'heure(s)' : 'jour(s)'}
                </span>
              </div>
              <div className="previewItem">
                <span className="previewLabel">Devices Max</span>
                <span className="previewValue">{formData.maxDevices}</span>
              </div>
              <div className="previewItem">
                <span className="previewLabel">Bande Passante</span>
                <span className="previewValue">
                  ⬆️ {formData.uploadSpeed} / ⬇️ {formData.downloadSpeed} Kb/s
                </span>
              </div>
              <div className="previewItem">
                <span className="previewLabel">Zones</span>
                <span className="previewValue">{formData.zones.length} zone(s)</span>
              </div>
            </div>
          </section>
        </div>

        <div className="modalFooter">
          <button className="btn btnPrimary" onClick={handleSubmit}>
            💾 Sauvegarder la Configuration
          </button>
          <button className="btn btnSecondary" onClick={onClose}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  )
}