import { useState } from 'react'
import Layout from '../components/Layout'
import ConfigWifiModal from '../components/ConfigWifiModal'
import ConfigWifiHistoryModal from '../components/ConfigWifiHistoryModal'
import './ConfigWifiList.css'

export default function ConfigWifiList({ onNavigate }) {
  const [wifiConfigs, setWifiConfigs] = useState([
    {
      id: 1,
      hotelId: 1,
      hotelName: 'Hôtel La Résidence - Douala',
      ssid: 'LaResidence-Guest',
      authMethod: 'Portail Captif',
      sessionDuration: 24,
      sessionUnit: 'hours',
      maxDevices: 2,
      uploadSpeed: 1500,
      downloadSpeed: 1500,
      zones: ['PUBLIC', 'GUEST-ROOM'],
      captivePortal: {
        logo: '/api/placeholder/200/100',
        welcomeMessage: 'Bienvenue à La Résidence Douala',
        termsUrl: 'https://laresidence.cm/terms'
      },
      status: 'Actif',
      lastModified: '2025-01-02T14:30:00',
      modifiedBy: 'Admin MboaLink'
    },
    {
      id: 2,
      hotelId: 2,
      hotelName: 'Hôtel La Résidence - Yaoundé',
      ssid: 'LaResidence-YDE',
      authMethod: 'Guest Pass',
      sessionDuration: 24,
      sessionUnit: 'hours',
      maxDevices: 2,
      uploadSpeed: 1500,
      downloadSpeed: 1500,
      zones: ['PUBLIC', 'GUEST-ROOM', 'CONFERENCE'],
      captivePortal: {
        logo: '/api/placeholder/200/100',
        welcomeMessage: 'Bienvenue à La Résidence Yaoundé',
        termsUrl: 'https://laresidence.cm/terms'
      },
      status: 'Actif',
      lastModified: '2025-01-01T10:15:00',
      modifiedBy: 'Admin MboaLink'
    },
    {
      id: 3,
      hotelId: 3,
      hotelName: 'Hilton Yaoundé',
      ssid: 'Hilton-Free-WiFi',
      authMethod: 'Numéro de Chambre',
      sessionDuration: 12,
      sessionUnit: 'hours',
      maxDevices: 3,
      uploadSpeed: 2000,
      downloadSpeed: 2000,
      zones: ['PUBLIC', 'GUEST-ROOM', 'CONFERENCE', 'IROH'],
      captivePortal: {
        logo: '/api/placeholder/200/100',
        welcomeMessage: 'Welcome to Hilton Yaoundé',
        termsUrl: 'https://hilton.com/terms'
      },
      status: 'Actif',
      lastModified: '2024-12-28T16:45:00',
      modifiedBy: 'Tech Support'
    },
    {
      id: 4,
      hotelId: 4,
      hotelName: 'Merina Hotel',
      ssid: 'Merina-WiFi',
      authMethod: 'Voucher',
      sessionDuration: 48,
      sessionUnit: 'hours',
      maxDevices: 2,
      uploadSpeed: 1000,
      downloadSpeed: 1000,
      zones: ['PUBLIC', 'GUEST-ROOM'],
      captivePortal: {
        logo: '/api/placeholder/200/100',
        welcomeMessage: 'Bienvenue au Merina Hotel',
        termsUrl: ''
      },
      status: 'Inactif',
      lastModified: '2024-12-20T09:20:00',
      modifiedBy: 'Admin MboaLink'
    }
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false)
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false)
  const [selectedConfig, setSelectedConfig] = useState(null)

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
  const avgDevices = Math.round(wifiConfigs.reduce((sum, c) => sum + c.maxDevices, 0) / wifiConfigs.length)

  const handleConfigureWifi = (config) => {
    setSelectedConfig(config)
    setIsConfigModalOpen(true)
  }

  const handleViewHistory = (config) => {
    setSelectedConfig(config)
    setIsHistoryModalOpen(true)
  }

  const handleSaveConfig = (configData) => {
    if (selectedConfig) {
      // Modifier
      setWifiConfigs(prev => prev.map(c => 
        c.id === selectedConfig.id 
          ? { 
              ...configData, 
              id: c.id,
              hotelId: c.hotelId,
              hotelName: c.hotelName,
              lastModified: new Date().toISOString(),
              modifiedBy: 'Admin MboaLink'
            } 
          : c
      ))
    }
    setIsConfigModalOpen(false)
    setSelectedConfig(null)
  }

  const formatDuration = (duration, unit) => {
    return `${duration} ${unit === 'hours' ? 'heure' : 'jour'}${duration > 1 ? 's' : ''}`
  }

  const formatLastModified = (dateString) => {
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
    <Layout activePage="HOTEL MANAGER" activeSubPage="Config WiFi" onNavigate={onNavigate}>
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