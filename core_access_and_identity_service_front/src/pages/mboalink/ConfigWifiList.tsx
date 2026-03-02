import { useEffect, useState } from 'react'
import ConfigWifiHistoryModal from '@/components/mboalink/ConfigWifiHistoryModal'
import ConfigWifiModal from '@/components/mboalink/ConfigWifiModal'
import Layout from '@/components/mboalink/Layout'
import { mboalinkService } from '@/services'
import './ConfigWifiList.css'

const authMethodFromApi: Record<string, string> = {
  CAPTIVE_PORTAL: 'Portail Captif',
  GUEST_PASS: 'Guest Pass',
  ROOM_NUMBER: 'Numéro de Chambre',
  VOUCHER: 'Voucher',
  SMS_CODE: 'SMS',
  EMAIL: 'Email',
}

const authMethodToApi: Record<string, string> = {
  'Portail Captif': 'CAPTIVE_PORTAL',
  'Guest Pass': 'GUEST_PASS',
  'Numéro de Chambre': 'ROOM_NUMBER',
  Voucher: 'VOUCHER',
  SMS: 'SMS_CODE',
  Email: 'EMAIL',
}

export default function ConfigWifiList() {
  const [wifiConfigs, setWifiConfigs] = useState<Array<Record<string, any>>>([])
  const [isLoading, setIsLoading] = useState(true)

  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false)
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false)
  const [selectedConfig, setSelectedConfig] = useState<Record<string, any> | null>(null)

  const loadConfigs = async () => {
    try {
      const data = await mboalinkService.listWifiConfigs()
      setWifiConfigs(data.map((config) => ({
        ...config,
        hotelName: config.hotel?.name || '',
        authMethod: authMethodFromApi[config.authMethod] || config.authMethod,
        status: config.status === 'ACTIVE' ? 'Actif' : 'Inactif',
        uploadSpeed: config.uploadSpeedKbps,
        downloadSpeed: config.downloadSpeedKbps,
        lastModified: config.updatedAt,
        modifiedBy: config.lastModifiedBy || 'N/A',
      })))
    } catch (error) {
      alert((error as Error).message || 'Impossible de charger les configurations WiFi')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadConfigs()
  }, [])

  const filteredConfigs = wifiConfigs.filter(config => {
    const matchesSearch = config.hotelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         config.ssid.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'all' || config.status === filterStatus
    
    return matchesSearch && matchesStatus
  })

  // Statistiques
  const totalConfigs = wifiConfigs.length
  const activeConfigs = wifiConfigs.filter(c => c.status === 'Actif').length
  const totalSSIDs = new Set(wifiConfigs.map(c => c.ssid)).size
  const avgDevices = wifiConfigs.length > 0
    ? Math.round(wifiConfigs.reduce((sum, c) => sum + c.maxDevices, 0) / wifiConfigs.length)
    : 0

  const handleConfigureWifi = (config: Record<string, any>) => {
    setSelectedConfig(config)
    setIsConfigModalOpen(true)
  }

  const handleViewHistory = (config: Record<string, any>) => {
    setSelectedConfig(config)
    setIsHistoryModalOpen(true)
  }

  const handleSaveConfig = (configData: Record<string, any>) => {
    if (!selectedConfig) return

    const payload = {
      ssid: configData.ssid,
      password: configData.password || '',
      authMethod: authMethodToApi[configData.authMethod] || configData.authMethod,
      sessionDuration: Number(configData.sessionDuration),
      sessionUnit: configData.sessionUnit,
      maxDevices: Number(configData.maxDevices),
      uploadSpeedKbps: Number(configData.uploadSpeed),
      downloadSpeedKbps: Number(configData.downloadSpeed),
      zones: configData.zones || [],
      captivePortal: configData.captivePortal || {},
      status: configData.status === 'Actif' ? 'ACTIVE' : 'INACTIVE',
    }

    mboalinkService.upsertWifiConfig(selectedConfig.hotelId, payload)
      .then(() => loadConfigs())
      .catch((error) => alert((error as Error).message || 'Mise à jour impossible'))
      .finally(() => {
        setIsConfigModalOpen(false)
        setSelectedConfig(null)
      })
  }

  const formatDuration = (duration: number, unit: string) => {
    return `${duration} ${unit === 'hours' ? 'heure' : 'jour'}${duration > 1 ? 's' : ''}`
  }

  const formatLastModified = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffHours = Math.floor((now - date) / (1000 * 60 * 60))
    
    if (diffHours < 1) return 'Il y a moins d\'une heure'
    if (diffHours < 24) return `Il y a ${diffHours} heure${diffHours > 1 ? 's' : ''}`
    
    const diffDays = Math.floor(diffHours / 24)
    if (diffDays < 7) return `Il y a ${diffDays} jour${diffDays > 1 ? 's' : ''}`
    
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' })
  }

  return (
    <Layout activePage="HOTEL MANAGER" activeSubPage="Config WiFi">
      <div className="configWifiPage">
        <div className="pageHeader">
          <div>
            <h1 className="pageTitle">Configuration WiFi</h1>
            <p className="pageSubtitle">
              Paramètres réseau et accès WiFi par hôtel client
            </p>
          </div>
        </div>

        <div className="statsBar">
          <div className="statCard">
            <div className="statValue">{totalConfigs}</div>
            <div className="statLabel">Hôtels Configurés</div>
          </div>
          <div className="statCard">
            <div className="statValue">{activeConfigs}</div>
            <div className="statLabel">Configurations Actives</div>
          </div>
          <div className="statCard">
            <div className="statValue">{totalSSIDs}</div>
            <div className="statLabel">SSID Uniques</div>
          </div>
          <div className="statCard">
            <div className="statValue">{avgDevices}</div>
            <div className="statLabel">Devices Moy. / User</div>
          </div>
        </div>

        <div className="filtersBar">
          <input
            type="text"
            className="searchInput"
            placeholder="Rechercher un hôtel ou SSID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <select 
            className="filterSelect"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">Tous les statuts</option>
            <option value="Actif">Actif</option>
            <option value="Inactif">Inactif</option>
          </select>
        </div>

        <div className="configWifiContainer">
          {isLoading && <p>Chargement des configurations...</p>}
          <table className="configWifiTable">
            <thead>
              <tr>
                <th>Hôtel</th>
                <th>SSID</th>
                <th>Authentification</th>
                <th>Durée Session</th>
                <th>Devices Max</th>
                <th>Bande Passante</th>
                <th>Zones</th>
                <th>Statut</th>
                <th>Dernière Modif.</th>
                <th style={{ width: '140px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredConfigs.map((config) => (
                <tr key={config.id} className="configRow">
                  <td>
                    <div className="hotelCell">
                      <strong>{config.hotelName}</strong>
                    </div>
                  </td>
                  <td>
                    <div className="ssidCell">
                      📶 <strong>{config.ssid}</strong>
                    </div>
                  </td>
                  <td>
                    <span className="authBadge">{config.authMethod}</span>
                  </td>
                  <td>{formatDuration(config.sessionDuration, config.sessionUnit)}</td>
                  <td>
                    <span className="devicesCell">
                      {config.maxDevices} 📱
                    </span>
                  </td>
                  <td>
                    <div className="bandwidthCell">
                      <span>⬆️ {config.uploadSpeed}</span>
                      <span>⬇️ {config.downloadSpeed}</span>
                    </div>
                  </td>
                  <td>
                    <div className="zonesCell">
                      {config.zones.slice(0, 2).map((zone, idx) => (
                        <span key={idx} className="zoneBadge">{zone}</span>
                      ))}
                      {config.zones.length > 2 && (
                        <span className="zoneBadge">+{config.zones.length - 2}</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <span className={`statusBadge ${config.status.toLowerCase()}`}>
                      {config.status}
                    </span>
                  </td>
                  <td>
                    <div className="modifiedCell">
                      <span className="modifiedTime">{formatLastModified(config.lastModified)}</span>
                      <span className="modifiedBy">{config.modifiedBy}</span>
                    </div>
                  </td>
                  <td>
                    <div className="actionsCell">
                      <button
                        className="actionBtn configBtn"
                        onClick={() => handleConfigureWifi(config)}
                        title="Configurer WiFi"
                      >
                        ⚙️
                      </button>
                      <button
                        className="actionBtn historyBtn"
                        onClick={() => handleViewHistory(config)}
                        title="Historique"
                      >
                        📋
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredConfigs.length === 0 && (
            <div className="emptyState">
              <p>Aucune configuration trouvée.</p>
            </div>
          )}
        </div>
      </div>

      <ConfigWifiModal
        isOpen={isConfigModalOpen}
        onClose={() => {
          setIsConfigModalOpen(false)
          setSelectedConfig(null)
        }}
        onSave={handleSaveConfig}
        config={selectedConfig}
      />

      <ConfigWifiHistoryModal
        isOpen={isHistoryModalOpen}
        onClose={() => {
          setIsHistoryModalOpen(false)
          setSelectedConfig(null)
        }}
        config={selectedConfig}
      />
    </Layout>
  )
}
