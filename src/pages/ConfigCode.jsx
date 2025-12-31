import { useState } from 'react'
import Layout from '../components/Layout'
import './ConfigCode.css'

export default function ConfigCode({ onNavigate }) {
  const [config, setConfig] = useState({
    uploadClearAddress: 1500,
    downloadClearAddress: 1500,
    uploadGuestPass: 1500,
    downloadGuestPass: 1500,
    maxPassDuration: 180,
    maxCountPass: 600,
    outageModeEnabled: false
  })

  const [hasChanges, setHasChanges] = useState(false)

  const handleChange = (field, value) => {
    setConfig(prev => ({ ...prev, [field]: value }))
    setHasChanges(true)
  }

  const handleModify = () => {
    console.log('Saving configuration:', config)
    
    // TODO: API call
    // try {
    //   const response = await fetch('/api/guest-config', {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(config)
    //   })
    //   const data = await response.json()
    //   setHasChanges(false)
    //   alert('Configuration updated successfully!')
    // } catch (error) {
    //   console.error('Error:', error)
    //   alert('Failed to update configuration')
    // }

    alert('Configuration updated successfully!')
    setHasChanges(false)
  }

  const handleRestoreDefaults = () => {
    if (!confirm('Are you sure you want to restore default settings?')) return
    
    setConfig({
      uploadClearAddress: 1500,
      downloadClearAddress: 1500,
      uploadGuestPass: 1500,
      downloadGuestPass: 1500,
      maxPassDuration: 180,
      maxCountPass: 600,
      outageModeEnabled: false
    })
    setHasChanges(true)
  }

  return (
    <Layout activePage="LOGINS" activeSubPage="Config Code" onNavigate={onNavigate}>
      <div className="configCodePage">
        <div className="pageHeader">
          <h1 className="pageTitle">Guest Global Configuration</h1>
          <p className="pageSubtitle">
            General guest configuration settings for the OVI client.
          </p>
        </div>

        <div className="warningBanner">
          <strong>⚠️ Important:</strong> Maximum value for Max Count Guest Pass Creation is 1000.
        </div>

        <div className="configCard">
          <div className="configSection">
            <h3 className="sectionTitle">General Info</h3>

            <div className="configGrid">
              <div className="configField">
                <label htmlFor="uploadClearAddress">
                  guestConfig.defaultUploadClearAddress
                </label>
                <p className="fieldDescription">Clear Address Upload Default</p>
                <input
                  id="uploadClearAddress"
                  type="number"
                  value={config.uploadClearAddress}
                  onChange={(e) => handleChange('uploadClearAddress', Number(e.target.value))}
                  min="0"
                  max="15000"
                />
              </div>

              <div className="configField">
                <label htmlFor="downloadClearAddress">
                  guestConfig.defaultDownloadClearAddress
                </label>
                <p className="fieldDescription">Clear Address Download Default</p>
                <input
                  id="downloadClearAddress"
                  type="number"
                  value={config.downloadClearAddress}
                  onChange={(e) => handleChange('downloadClearAddress', Number(e.target.value))}
                  min="0"
                  max="15000"
                />
              </div>

              <div className="configField">
                <label htmlFor="uploadGuestPass">
                  guestConfig.defaultUploadGuestPass
                </label>
                <p className="fieldDescription">Guest Pass Upload Default</p>
                <input
                  id="uploadGuestPass"
                  type="number"
                  value={config.uploadGuestPass}
                  onChange={(e) => handleChange('uploadGuestPass', Number(e.target.value))}
                  min="0"
                  max="15000"
                />
              </div>

              <div className="configField">
                <label htmlFor="downloadGuestPass">
                  guestConfig.defaultDownloadGuestPass
                </label>
                <p className="fieldDescription">Guest Pass Download Default</p>
                <input
                  id="downloadGuestPass"
                  type="number"
                  value={config.downloadGuestPass}
                  onChange={(e) => handleChange('downloadGuestPass', Number(e.target.value))}
                  min="0"
                  max="15000"
                />
              </div>

              <div className="configField">
                <label htmlFor="maxPassDuration">
                  guestConfig.maxPassDuration
                </label>
                <p className="fieldDescription">
                  Maximum passcode duration in days (max 1,365 days)
                </p>
                <input
                  id="maxPassDuration"
                  type="number"
                  value={config.maxPassDuration}
                  onChange={(e) => handleChange('maxPassDuration', Number(e.target.value))}
                  min="1"
                  max="1365"
                />
              </div>

              <div className="configField">
                <label htmlFor="maxCountPass">
                  guestConfig.maxCountPass
                </label>
                <p className="fieldDescription">Max Count Passcode Creation</p>
                <input
                  id="maxCountPass"
                  type="number"
                  value={config.maxCountPass}
                  onChange={(e) => handleChange('maxCountPass', Number(e.target.value))}
                  min="1"
                  max="1000"
                />
              </div>

              <div className="configField radioField">
                <label>servletConfig.outageModeEnabled</label>
                <p className="fieldDescription">
                  Activate outage mode for 3rd Party Login Pages (MPA, Elevance, Generic API)
                </p>
                <div className="radioGroup">
                  <label className="radioLabel">
                    <input
                      type="radio"
                      name="outageMode"
                      checked={config.outageModeEnabled === true}
                      onChange={() => handleChange('outageModeEnabled', true)}
                    />
                    <span>True</span>
                  </label>
                  <label className="radioLabel">
                    <input
                      type="radio"
                      name="outageMode"
                      checked={config.outageModeEnabled === false}
                      onChange={() => handleChange('outageModeEnabled', false)}
                    />
                    <span>False</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="configActions">
            <button 
              className="btn btnPrimary" 
              onClick={handleModify}
              disabled={!hasChanges}
            >
              Modify
            </button>
            <button className="btn btnSecondary" onClick={handleRestoreDefaults}>
              Restore Defaults
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}