import { useState, useMemo } from 'react'
import Layout from '../components/Layout'
import './StatutLogins.css'

export default function StatutLogins({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selected, setSelected] = useState([])

  const [logins] = useState([
    {
      id: 1,
      room: 'Guest_WiFi',
      name: 'None Specified',
      status: 'Offline',
      type: 'Guest Pass (POMEGIMUS)',
      ipmac: '172.20.5.250 [8A:B0:22:E1:2E:3A]',
      duration: '180 days',
      start: '5/Jun/25 4:08PM WAT',
      end: '2/Dec/25 4:08PM WAT',
      capDown: 2400,
      capUp: 2400,
      currentDown: 0.0,
      currentUp: 0.0,
      usageDown: 1.8,
      usageUp: 0.2
    },
    {
      id: 2,
      room: 'Guest_WiFi',
      name: 'None Specified',
      status: 'Offline',
      type: 'Guest Pass (HL)',
      ipmac: '172.20.7.76 [96:C6:C5:6C:C4:9A]',
      duration: '180 days',
      start: '13/Jun/25 10:14AM WAT',
      end: '10/Dec/25 10:14AM WAT',
      capDown: 6400,
      capUp: 6400,
      currentDown: 0.0,
      currentUp: 0.0,
      usageDown: 290.6,
      usageUp: 3.9
    },
    {
      id: 3,
      room: 'Guest_WiFi',
      name: 'None Specified',
      status: 'Offline',
      type: 'Guest Pass (ADONGS#)',
      ipmac: '172.20.11.200 [6E:20:4D:BE:A5:73]',
      duration: '180 days',
      start: '8/Jun/25 8:21AM WAT',
      end: '5/Dec/25 8:21AM WAT',
      capDown: 1024,
      capUp: 1024,
      currentDown: 0.0,
      currentUp: 0.0,
      usageDown: 6.7,
      usageUp: 1.7
    },
    {
      id: 4,
      room: 'Public_WiFi',
      name: 'None Specified',
      status: 'Online',
      type: 'Guest Pass (CHRISTIANECA)',
      ipmac: '192.168.2.254 [192.168.2.254]',
      duration: '180 days',
      start: '26/Jun/25 10:43AM WAT',
      end: '23/Dec/25 10:43AM WAT',
      capDown: 3000,
      capUp: 3000,
      currentDown: 0.0,
      currentUp: 0.0,
      usageDown: 23.0,
      usageUp: 3.0
    },
    {
      id: 5,
      room: 'Guest_WiFi',
      name: 'None Specified',
      status: 'Offline',
      type: 'Guest Pass (BOURCER)',
      ipmac: '172.20.4.3 [00:0E:22:C2:22:72]',
      duration: '180 days',
      start: '27/Jun/25 10:40PM WAT',
      end: '24/Dec/25 10:40PM WAT',
      capDown: 5000,
      capUp: 5000,
      currentDown: 0.0,
      currentUp: 0.0,
      usageDown: 64.2,
      usageUp: 3.7
    }
  ])

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

  const toggleSelect = (id) => {
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
      console.log('Removing logins:', selected)
      // TODO: API call
      setSelected([])
    }
  }

  return (
    <Layout activePage="LOGINS" activeSubPage="Statut Logins" onNavigate={onNavigate}>
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