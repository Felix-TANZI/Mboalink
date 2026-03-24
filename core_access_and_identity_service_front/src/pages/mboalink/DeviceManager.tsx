import { useEffect, useMemo, useState } from 'react'
import Layout from '@/components/mboalink/Layout'
import AddDeviceModal from '@/components/mboalink/AddDeviceModal'
import { mboalinkService } from '@/services'
import './DeviceManager.css'

export default function DeviceManager() {
  const [devices, setDevices] = useState<Array<Record<string, any>>>([])
  const [hotels, setHotels] = useState<Array<Record<string, any>>>([])
  const [selectedHotelId, setSelectedHotelId] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(true)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const loadDevices = async (hotelId?: string) => {
    try {
      const list = await mboalinkService.listDevices({
        hotelId: hotelId || undefined,
        status: statusFilter === 'all' ? undefined : (statusFilter as any),
        search: searchQuery || undefined,
      })
      setDevices(list)
    } catch (error) {
      alert((error as Error).message || 'Impossible de charger les devices')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    mboalinkService.listHotels()
      .then((hotelList) => {
        setHotels(hotelList)
        const defaultHotelId = hotelList[0]?.id || ''
        setSelectedHotelId(defaultHotelId)
        return loadDevices(defaultHotelId)
      })
      .catch((error) => alert((error as Error).message || 'Impossible de charger les hôtels'))
  }, [])

  useEffect(() => {
    if (!selectedHotelId) return
    loadDevices(selectedHotelId)
  }, [selectedHotelId, statusFilter])

  const filteredDevices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return devices
    return devices.filter((device) =>
      `${device.macAddress} ${device.model || ''} ${device.serialNumber || ''}`
        .toLowerCase()
        .includes(q),
    )
  }, [devices, searchQuery])

  return (
    <Layout activePage="DEVICE MANAGER" activeSubPage="">
      <div className="deviceManagerPage">
        <div className="pageHeader">
          <div>
            <h1 className="pageTitle">Device Manager</h1>
            <p className="pageSubtitle">Supervision des équipements WiFi et de leur état.</p>
          </div>
          <button className="btn btnPrimary" onClick={() => setIsAddModalOpen(true)}>
            + Ajouter un device
          </button>
        </div>

        <div className="filtersBar">
          <select
            className="filterSelect"
            value={selectedHotelId}
            onChange={(e) => setSelectedHotelId(e.target.value)}
          >
            <option value="">Sélectionner un hôtel</option>
            {hotels.map((hotel) => (
              <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
            ))}
          </select>
          <input
            type="text"
            className="searchInput"
            placeholder="Rechercher par MAC, modèle, serial..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="filterSelect"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Tous les statuts</option>
            <option value="ONLINE">Online</option>
            <option value="OFFLINE">Offline</option>
            <option value="UNSTABLE">Instable</option>
          </select>
        </div>

        {isLoading && <p>Chargement des équipements...</p>}

        <div className="deviceTableWrapper">
          <table className="deviceTable">
            <thead>
              <tr>
                <th>MAC</th>
                <th>Modèle</th>
                <th>Firmware</th>
                <th>Statut</th>
                <th>Clients</th>
                <th>Zone</th>
                <th>Dernier heartbeat</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDevices.map((device) => (
                <tr key={device.id}>
                  <td>{device.macAddress}</td>
                  <td>{device.model || '-'}</td>
                  <td>{device.firmwareVersion || '-'}</td>
                  <td>
                    <span className={`statusBadge ${String(device.status).toLowerCase()}`}>
                      {device.status}
                    </span>
                  </td>
                  <td>{device.clientsConnected ?? 0}</td>
                  <td>{device.zone || '-'}</td>
                  <td>{device.lastHeartbeatAt ? new Date(device.lastHeartbeatAt).toLocaleString('fr-FR') : '-'}</td>
                  <td>
                    <button
                      className="actionBtn"
                      onClick={() => mboalinkService.restartDevice(device.id).then(() => loadDevices(selectedHotelId))}
                    >
                      Redémarrer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddDeviceModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        hotels={hotels}
        defaultHotelId={selectedHotelId}
        onSave={async (payload) => {
          try {
            await mboalinkService.createDevice(payload)
            await loadDevices(selectedHotelId)
            setIsAddModalOpen(false)
          } catch (error) {
            alert((error as Error).message || 'Impossible de créer le device')
          }
        }}
      />
    </Layout>
  )
}
