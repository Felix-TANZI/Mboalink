import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '@/components/mboalink/Layout'
import { mboalinkService } from '@/services'
import './Dashboard.css'

type DashboardData = {
  overview: Record<string, any>
  devices: Array<Record<string, any>>
  sessions: Array<Record<string, any>>
  hotels: Array<Record<string, any>>
  wifiConfigs: Array<Record<string, any>>
}

function buildSegments(items: Array<{ label: string; value: number; color: string }>) {
  const total = items.reduce((sum, item) => sum + item.value, 0)
  if (total === 0) {
    return {
      background: 'conic-gradient(#dbe7f5 0deg 360deg)',
      total: 0,
    }
  }

  let cursor = 0
  const segments = items.map((item) => {
    const angle = (item.value / total) * 360
    const segment = `${item.color} ${cursor}deg ${cursor + angle}deg`
    cursor += angle
    return segment
  })

  return {
    background: `conic-gradient(${segments.join(', ')})`,
    total,
  }
}

function inferDeviceType(device: Record<string, any>) {
  const source = `${device.model || ''} ${device.serialNumber || ''}`.toLowerCase()
  if (source.includes('switch')) return 'Switch'
  if (source.includes('access') || source.includes('ap-') || source.includes('wifi')) return 'Access Point'
  if (source.includes('router') || source.includes('gateway')) return 'Gateway'
  return 'Autre equipement'
}

function formatRelativeDate(dateString?: string) {
  if (!dateString) return 'N/A'

  const date = new Date(dateString)
  const diffMs = Date.now() - date.getTime()
  const diffMinutes = Math.max(0, Math.floor(diffMs / 60000))

  if (diffMinutes < 1) return 'A l’instant'
  if (diffMinutes < 60) return `Il y a ${diffMinutes} min`

  const diffHours = Math.floor(diffMinutes / 60)
  if (diffHours < 24) return `Il y a ${diffHours} h`

  const diffDays = Math.floor(diffHours / 24)
  return `Il y a ${diffDays} j`
}

function formatPeriodLabel() {
  const end = new Date()
  const start = new Date()
  start.setDate(end.getDate() - 6)

  const format = (value: Date) =>
    value.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })

  return `${format(start)} - ${format(end)}`
}

function DonutCard({
  title,
  items,
}: {
  title: string
  items: Array<{ label: string; value: number; color: string }>
}) {
  const { background, total } = useMemo(() => buildSegments(items), [items])

  return (
    <section className="dashboardPanel chartPanel">
      <div className="panelHeader">
        <h3>{title}</h3>
        <span>{total} total</span>
      </div>

      <div className="chartPanelBody">
        <div className="donutWrap">
          <div className="donutChart" style={{ background }} />
          <div className="donutCenter">
            <strong>{total}</strong>
            <span>Total</span>
          </div>
        </div>

        <ul className="chartLegend">
          {items.map((item) => (
            <li key={item.label}>
              <span className="legendDot" style={{ backgroundColor: item.color }} />
              <span className="legendText">{item.label}</span>
              <strong>{item.value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function Dashboard() {
  const navigate = useNavigate()
  const [data, setData] = useState<DashboardData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    Promise.all([
      mboalinkService.getDashboardOverview(),
      mboalinkService.listDevices(),
      mboalinkService.listLoginSessions(),
      mboalinkService.listHotels(),
      mboalinkService.listWifiConfigs(),
    ])
      .then(([overview, devices, sessions, hotels, wifiConfigs]) => {
        if (!isMounted) return
        setData({ overview, devices, sessions, hotels, wifiConfigs })
      })
      .catch((error) => {
        alert((error as Error).message || 'Impossible de charger le dashboard')
      })
      .finally(() => {
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const computed = useMemo(() => {
    if (!data) return null

    const { overview, devices, sessions, hotels, wifiConfigs } = data
    const statusCounts = devices.reduce(
      (acc, device) => {
        const key = String(device.status || 'OFFLINE')
        acc[key] = (acc[key] || 0) + 1
        return acc
      },
      { ONLINE: 0, OFFLINE: 0, UNSTABLE: 0 } as Record<string, number>,
    )

    const zoneCounts = devices.reduce((acc, device) => {
      const key = device.zone || 'Non assigne'
      acc[key] = (acc[key] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const sessionTypes = sessions.reduce((acc, session) => {
      const key = session.guestPass?.code ? 'Guest Pass' : (session.type || 'Autre')
      acc[key] = (acc[key] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const deviceTypes = devices.reduce((acc, device) => {
      const key = inferDeviceType(device)
      acc[key] = (acc[key] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const activeWifiConfigs = wifiConfigs.filter((config) => config.status === 'ACTIVE').length
    const wifiCoverage = hotels.length > 0 ? Math.round((activeWifiConfigs / hotels.length) * 100) : 0
    const activeSessions = overview.activeSessions || sessions.filter((session) => session.status === 'ONLINE').length
    const rooms = overview.rooms || 0
    const roomUsage = rooms > 0 ? Math.min(100, Math.round((activeSessions / rooms) * 100)) : 0
    const openAlerts = overview.recentAlerts?.length || 0

    const overviewCards = [
      { label: 'Total Rooms', value: overview.rooms || 0, tone: 'blue' },
      { label: 'Devices', value: devices.length, tone: 'violet' },
      { label: 'Switches actifs', value: deviceTypes.Switch || 0, tone: 'green' },
      { label: 'Access Points', value: deviceTypes['Access Point'] || 0, tone: 'gold' },
    ]

    return {
      overview,
      devices,
      sessions,
      hotels,
      wifiConfigs,
      statusCounts,
      zoneCounts,
      sessionTypes,
      activeWifiConfigs,
      wifiCoverage,
      activeSessions,
      roomUsage,
      openAlerts,
      overviewCards,
      activeHotelsLabel: hotels[0]?.name || 'Vue multi-sites',
    }
  }, [data])

  const deviceStatusItems = useMemo(() => {
    if (!computed) return []
    return [
      { label: 'Online', value: computed.statusCounts.ONLINE || 0, color: '#1670E6' },
      { label: 'Offline', value: computed.statusCounts.OFFLINE || 0, color: '#6E42D3' },
      { label: 'Instable', value: computed.statusCounts.UNSTABLE || 0, color: '#F2C300' },
    ]
  }, [computed])

  const zoneItems = useMemo(() => {
    if (!computed) return []

    const palette = ['#1670E6', '#6E42D3', '#24B35A', '#F2C300', '#EF6B6B', '#0EA5A6']
    return Object.entries(computed.zoneCounts)
      .slice(0, 6)
      .map(([label, value], index) => ({ label, value: Number(value), color: palette[index % palette.length] }))
  }, [computed])

  const sessionTypeItems = useMemo(() => {
    if (!computed) return []

    const palette = ['#1670E6', '#6E42D3', '#F2C300', '#24B35A']
    return Object.entries(computed.sessionTypes)
      .slice(0, 4)
      .map(([label, value], index) => ({ label, value: Number(value), color: palette[index % palette.length] }))
  }, [computed])

  return (
    <Layout activePage="DASHBOARD" activeSubPage="">
      <div className="dashboardPage dashboardShell">
        <div className="dashboardTopbar">
          <div className="dashboardBrandBlock">
            <span className="dashboardBrandName">MboaLink</span>
            <div className="dashboardTabs">
              <button type="button" className="dashboardTab active">Dashboard</button>
              <button type="button" className="dashboardTab">Reports</button>
            </div>
          </div>

          <div className="dashboardMeta">
            <span className="dashboardPeriod">{formatPeriodLabel()}</span>
          </div>
        </div>

        <div className="dashboardHero">
          <div>
            <p className="dashboardEyebrow">Vue generale</p>
            <h1 className="dashboardTitle">{computed?.activeHotelsLabel || 'MboaLink Dashboard'}</h1>
            <p className="dashboardSubtitle">
              Supervision reseau et activite client dans une vue simple, detaillee et directement exploitable.
            </p>
          </div>

          <div className="dashboardHeroActions">
            <button type="button" className="heroButton secondary" onClick={() => navigate('/device-manager/devices')}>
              Network Map
            </button>
            <button type="button" className="heroButton success">
              Alertes actives
            </button>
          </div>
        </div>

        <div className="serviceStatusRow">
          <div className="servicePill success">
            <span className="serviceDot" />
            <strong>OVI Server</strong>
            <small>{computed ? 'Disponible' : 'Chargement'}</small>
          </div>
          <div className={`servicePill ${computed && computed.activeWifiConfigs > 0 ? 'warning' : 'neutral'}`}>
            <span className="serviceDot" />
            <strong>Captive Portal</strong>
            <small>{computed ? `${computed.activeWifiConfigs} config(s) active(s)` : 'Chargement'}</small>
          </div>
          <div className={`servicePill ${computed && computed.statusCounts.ONLINE > 0 ? 'info' : 'neutral'}`}>
            <span className="serviceDot" />
            <strong>Internet Uplink</strong>
            <small>{computed ? `${computed.statusCounts.ONLINE} equipements en ligne` : 'Chargement'}</small>
          </div>
        </div>

        {isLoading && <p className="dashboardLoading">Chargement du dashboard...</p>}

        {computed && (
          <div className="dashboardContent">
            <aside className="kpiColumn">
              {computed.overviewCards.map((card) => (
                <article key={card.label} className={`kpiTile ${card.tone}`}>
                  <span>{card.label}</span>
                  <strong>{card.value}</strong>
                </article>
              ))}
            </aside>

            <div className="dashboardMain">
              <div className="dashboardChartsRow">
                <DonutCard title="Devices by Status" items={deviceStatusItems} />
                <DonutCard title="Devices by Zone" items={zoneItems} />
                <DonutCard title="Sessions by Type" items={sessionTypeItems} />

                <section className="dashboardPanel compactStatsPanel">
                  <article className="compactStat blue">
                    <span>Guest Logins</span>
                    <strong>{computed.sessions.length}</strong>
                    <small>sur la periode</small>
                  </article>
                  <article className="compactStat violet">
                    <span>WiFi Coverage</span>
                    <strong>{computed.wifiCoverage}%</strong>
                    <small>{computed.activeWifiConfigs} / {computed.hotels.length || 0} hotels configures</small>
                  </article>
                </section>
              </div>

              <div className="dashboardBottomRow">
                <section className="dashboardPanel metricsPanel">
                  <div className="panelHeader">
                    <h3>Infrastructure Snapshot</h3>
                    <span>Temps reel logique</span>
                  </div>

                  <div className="metricProgressGrid">
                    <div className="metricBlock">
                      <div className="metricHeader">
                        <span>Devices online</span>
                        <strong>{computed.statusCounts.ONLINE}/{computed.devices.length}</strong>
                      </div>
                      <div className="metricBar">
                        <div
                          className="metricFill blue"
                          style={{ width: `${computed.devices.length ? (computed.statusCounts.ONLINE / computed.devices.length) * 100 : 0}%` }}
                        />
                      </div>
                    </div>

                    <div className="metricBlock">
                      <div className="metricHeader">
                        <span>Occupation reseau</span>
                        <strong>{computed.roomUsage}%</strong>
                      </div>
                      <div className="metricBar">
                        <div className="metricFill violet" style={{ width: `${computed.roomUsage}%` }} />
                      </div>
                    </div>

                    <div className="metricBlock">
                      <div className="metricHeader">
                        <span>Configurations WiFi actives</span>
                        <strong>{computed.wifiCoverage}%</strong>
                      </div>
                      <div className="metricBar">
                        <div className="metricFill green" style={{ width: `${computed.wifiCoverage}%` }} />
                      </div>
                    </div>

                    <div className="metricBlock">
                      <div className="metricHeader">
                        <span>Alertes ouvertes</span>
                        <strong>{computed.openAlerts}</strong>
                      </div>
                      <div className="metricBar">
                        <div
                          className="metricFill gold"
                          style={{ width: `${Math.min(100, computed.openAlerts * 10)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="dashboardPanel alertsPanel">
                  <div className="panelHeader">
                    <h3>Recent Alerts</h3>
                    <span>{computed.overview.recentAlerts?.length || 0} evenement(s)</span>
                  </div>

                  {computed.overview.recentAlerts?.length ? (
                    <ul className="alertsList">
                      {computed.overview.recentAlerts.map((alert: Record<string, any>) => (
                        <li key={alert.id} className={`alertItem ${String(alert.severity || 'MEDIUM').toLowerCase()}`}>
                          <div className="alertItemTop">
                            <strong>{alert.title}</strong>
                            <span>{formatRelativeDate(alert.createdAt)}</span>
                          </div>
                          <p>{alert.message}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="emptyStatePanel">
                      <strong>Aucune alerte recente</strong>
                      <p>Le dashboard n’a remonte aucun incident critique pour le moment.</p>
                    </div>
                  )}
                </section>

                <section className="dashboardPanel actionsPanel">
                  <div className="panelHeader">
                    <h3>Actions</h3>
                    <span>Details</span>
                  </div>

                  <button type="button" className="actionButton" onClick={() => navigate('/device-manager/devices')}>
                    Switches
                  </button>
                  <button type="button" className="actionButton" onClick={() => navigate('/device-manager/devices')}>
                    Access Points
                  </button>
                  <button type="button" className="actionButton secondary" onClick={() => navigate('/hotel-manager/config-wifi')}>
                    Config WiFi
                  </button>
                </section>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
