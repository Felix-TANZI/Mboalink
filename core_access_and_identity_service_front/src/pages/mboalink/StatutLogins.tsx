import { useEffect, useMemo, useState } from 'react'
import Layout from '@/components/mboalink/Layout'
import { mboalinkService } from '@/services'
import { authService } from '@/services/auth/authService'
import { ALL_HOTELS, canSelectHotelScope, getInitialHotelScope, hotelScopeToQuery } from '@/utils/hotelScope'
import './StatutLogins.css'

export default function StatutLogins() {
  const currentUser = authService.getStoredUser()
  const canChooseHotel = canSelectHotelScope(currentUser)
  const [searchQuery, setSearchQuery] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const [hotels, setHotels] = useState<Array<Record<string, any>>>([])
  const [hotelId, setHotelId] = useState('')
  const [logins, setLogins] = useState<Array<Record<string, any>>>([])

  const mapSessions = (sessions: Array<Record<string, any>>) =>
    sessions.map((session) => ({
        ...session,
        room: session.room?.name || session.room?.type || 'N/A',
        name: session.clientName || 'None Specified',
        status: session.status === 'ONLINE' ? 'Online' : session.status === 'AWAY' ? 'Away' : 'Offline',
        ipmac: `${session.ipAddress || '-'} [${session.macAddress || '-'}]`,
        duration: '-',
        start: session.startedAt ? new Date(session.startedAt).toLocaleString('fr-FR') : '-',
        end: session.endedAt ? new Date(session.endedAt).toLocaleString('fr-FR') : '-',
        capDown: session.downloadCapKbps || session.capDownKbps || 0,
        capUp: session.uploadCapKbps || session.capUpKbps || 0,
        currentDown: 0,
        currentUp: 0,
        usageDown: session.usedDownMb || session.usageDownMb || 0,
        usageUp: session.usedUpMb || session.usageUpMb || 0,
        type: session.guestPass?.code ? `Guest Pass (${session.guestPass.code})` : session.type,
      }))

  const loadSessions = async (scope: string) => {
    const scopedHotelId = hotelScopeToQuery(scope)
    const sessions = await mboalinkService.listLoginSessions(scopedHotelId ? { hotelId: scopedHotelId } : undefined)
    setLogins(mapSessions(sessions))
  }

  useEffect(() => {
    mboalinkService.listHotels()
      .then(async (hotelList) => {
        setHotels(hotelList)
        const defaultId = getInitialHotelScope(currentUser, hotelList)
        setHotelId(defaultId)
        await loadSessions(defaultId)
      })
      .catch((error) => alert((error as Error).message || 'Impossible de charger les sessions'))
  }, [])

  useEffect(() => {
    if (!hotelId) return
    loadSessions(hotelId).catch((error) => alert((error as Error).message || 'Impossible de charger les sessions'))
    setSelected([])
  }, [hotelId])

  const stats = useMemo(() => {
    const total = logins.length
    const online = logins.filter(l => l.status === 'Online').length
    const offline = logins.filter(l => l.status === 'Offline').length
    const away = logins.filter(l => l.status === 'Away').length
    return { total, online, offline, away }
  }, [logins])

  const filteredLogins = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return logins
    return logins.filter(login =>
      Object.values(login).some(val =>
        String(val).toLowerCase().includes(query)
      )
    )
  }, [logins, searchQuery])

  const toggleSelect = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const toggleSelectAll = () => {
    setSelected(prev =>
      prev.length === filteredLogins.length ? [] : filteredLogins.map(l => l.id)
    )
  }

  const handleRemoveSelected = () => {
    if (selected.length === 0) {
      alert('Please select at least one login to remove')
      return
    }
    if (confirm(`Remove ${selected.length} selected login(s)?`)) {
      mboalinkService.deleteLoginSessions(selected)
        .then(async () => {
          await loadSessions(hotelId)
          setSelected([])
        })
        .catch((error) => alert((error as Error).message || 'Suppression impossible'))
    }
  }

  return (
    <Layout activePage="LOGINS" activeSubPage="Statut Logins">
      <div className="statutLoginsPage">
        <div className="pageHeader">
          <h1 className="pageTitle">Guest Logins</h1>
          <p className="pageSubtitle">All currently logged in users are listed.</p>
        </div>

        <div className="displayInfo">
          Displaying {filteredLogins.length} logins.
        </div>

        <div className="statsBar">
          <div className="statItem">
            <span className="statLabel">TotalGuest:</span>
            <span className="statValue">{stats.total}</span>
          </div>
          <div className="statItem">
            <span className="statLabel">TotalOnline:</span>
            <span className="statValue online">{stats.online}</span>
          </div>
          <div className="statItem">
            <span className="statLabel">Total Offline:</span>
            <span className="statValue offline">{stats.offline}</span>
          </div>
          <div className="statItem">
            <span className="statLabel">Total Away:</span>
            <span className="statValue away">{stats.away}</span>
          </div>
        </div>

        <div className="actionsBar">
          {canChooseHotel && (
            <select
              className="filterSelect"
              value={hotelId}
              onChange={(e) => setHotelId(e.target.value)}
            >
              <option value={ALL_HOTELS}>Tous les hôtels</option>
              {hotels.map((hotel) => (
                <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
              ))}
            </select>
          )}
          <input
            type="text"
            className="searchInput"
            placeholder="Search by room, name, IP/MAC, type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn btnDanger"
            onClick={handleRemoveSelected}
            disabled={selected.length === 0}
          >
            Remove Selected
          </button>
        </div>

        <div className="tableWrapper">
          <table className="loginsTable">
            <thead>
              <tr>
                <th style={{ width: '40px' }}>
                  <input
                    type="checkbox"
                    checked={selected.length === filteredLogins.length && filteredLogins.length > 0}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th>Room</th>
                <th>Name</th>
                <th>Status</th>
                <th>Type</th>
                <th>IP/MAC</th>
                <th>Duration</th>
                <th>Start/End</th>
                <th>Utilization(Down/Up)</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogins.map((login) => (
                <tr key={login.id} className={selected.includes(login.id) ? 'selected' : ''}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selected.includes(login.id)}
                      onChange={() => toggleSelect(login.id)}
                    />
                  </td>
                  <td className="roomCell">{login.room}</td>
                  <td>{login.name}</td>
                  <td>
                    <span className={`statusBadge ${login.status.toLowerCase()}`}>
                      {login.status}
                    </span>
                  </td>
                  <td className="typeCell">{login.type}</td>
                  <td className="macCell">{login.ipmac}</td>
                  <td>{login.duration}</td>
                  <td className="dateCell">
                    <div>Start: {login.start}</div>
                    <div>End: {login.end}</div>
                  </td>
                  <td className="utilizationCell">
                    <div>Cap: {login.capDown} / {login.capUp} Kb/s</div>
                    <div>Current: {login.currentDown} / {login.currentUp} Kb/s</div>
                    <div>Usage: {login.usageDown} / {login.usageUp} MB</div>
                  </td>
                  <td className="optionsCell">
                    <a href="#" className="optionLink">Remove</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
