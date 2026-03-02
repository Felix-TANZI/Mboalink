import { useEffect, useState } from 'react'
import Layout from '@/components/mboalink/Layout'
import { mboalinkService } from '@/services'
import './ConfigCode.css'

export default function ConfigCode() {
  const [hotels, setHotels] = useState<Array<Record<string, any>>>([])
  const [selectedHotelId, setSelectedHotelId] = useState('')
  const [config, setConfig] = useState<Record<string, any>>({
    uploadClearAddress: 1500,
    downloadClearAddress: 1500,
    uploadGuestPass: 1500,
    downloadGuestPass: 1500,
    maxPassDuration: 180,
    maxCountPass: 600,
    outageModeEnabled: false
  })

  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    mboalinkService.listHotels()
      .then(async (hotelList) => {
        setHotels(hotelList)
        const hotelId = hotelList[0]?.id || ''
        setSelectedHotelId(hotelId)
        if (!hotelId) return
        const guestConfig = await mboalinkService.getGuestConfig(hotelId)
        setConfig({
          uploadClearAddress: guestConfig.uploadClearAddressKbps,
          downloadClearAddress: guestConfig.downloadClearAddressKbps,
          uploadGuestPass: guestConfig.uploadGuestPassKbps,
          downloadGuestPass: guestConfig.downloadGuestPassKbps,
          maxPassDuration: guestConfig.maxPassDurationDays,
          maxCountPass: guestConfig.maxCountPass,
          outageModeEnabled: guestConfig.outageModeEnabled,
        })
      })
      .catch((error) => alert((error as Error).message || 'Impossible de charger la configuration'))
  }, [])

  const handleChange = (field: string, value: string | number | boolean) => {
    setConfig(prev => ({ ...prev, [field]: value }))
    setHasChanges(true)
  }

  const handleModify = async () => {
    if (!selectedHotelId) {
      alert('Sélectionnez un hôtel')
      return
    }

    try {
      await mboalinkService.upsertGuestConfig({
        hotelId: selectedHotelId,
        uploadClearAddressKbps: Number(config.uploadClearAddress),
        downloadClearAddressKbps: Number(config.downloadClearAddress),
        uploadGuestPassKbps: Number(config.uploadGuestPass),
        downloadGuestPassKbps: Number(config.downloadGuestPass),
        maxPassDurationDays: Number(config.maxPassDuration),
        maxCountPass: Number(config.maxCountPass),
        outageModeEnabled: !!config.outageModeEnabled,
      })
      alert('Configuration updated successfully!')
      setHasChanges(false)
    } catch (error) {
      alert((error as Error).message || 'Failed to update configuration')
    }
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
    <Layout activePage="LOGINS" activeSubPage="Config Code">
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
            <h3 className="sectionTitle">Hotel Selection</h3>
            <div className="configField">
              <label htmlFor="hotelId">Hotel</label>
              <select
                id="hotelId"
                value={selectedHotelId}
                onChange={async (e) => {
                  const hotelId = e.target.value
                  setSelectedHotelId(hotelId)
                  if (!hotelId) return
                  try {
                    const guestConfig = await mboalinkService.getGuestConfig(hotelId)
                    setConfig({
                      uploadClearAddress: guestConfig.uploadClearAddressKbps,
                      downloadClearAddress: guestConfig.downloadClearAddressKbps,
                      uploadGuestPass: guestConfig.uploadGuestPassKbps,
                      downloadGuestPass: guestConfig.downloadGuestPassKbps,
                      maxPassDuration: guestConfig.maxPassDurationDays,
                      maxCountPass: guestConfig.maxCountPass,
                      outageModeEnabled: guestConfig.outageModeEnabled,
                    })
                    setHasChanges(false)
                  } catch (error) {
                    alert((error as Error).message || 'Impossible de charger la configuration')
                  }
                }}
              >
                <option value="">Select hotel</option>
                {hotels.map((hotel) => (
                  <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
                ))}
              </select>
            </div>
          </div>

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
