import { useEffect, useMemo, useState } from 'react'
import Layout from '@/components/mboalink/Layout'
import { mboalinkService } from '@/services'
import './Dashboard.css'

export default function Dashboard() {
  const [overview, setOverview] = useState<Record<string, any> | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    mboalinkService.getDashboardOverview()
      .then(setOverview)
      .catch((error) => alert((error as Error).message || 'Impossible de charger le dashboard'))
      .finally(() => setIsLoading(false))
  }, [])

  const devicesByStatus = useMemo(() => {
    if (!overview?.devicesByStatus) return { ONLINE: 0, OFFLINE: 0, UNSTABLE: 0 }
    return overview.devicesByStatus.reduce((acc: Record<string, number>, item: any) => {
      acc[item.status] = item._count?._all || 0
      return acc
    }, { ONLINE: 0, OFFLINE: 0, UNSTABLE: 0 })
  }, [overview])

  return (
    <Layout activePage="DASHBOARD" activeSubPage="">
      <div className="dashboardPage">
        <div className="pageHeader">
          <h1 className="pageTitle">Dashboard Mboalink</h1>
          <p className="pageSubtitle">Vue globale des activités et de la santé du réseau.</p>
        </div>

        {isLoading && <p>Chargement du dashboard...</p>}

        {overview && (
          <div className="dashboardGrid">
            <div className="statCard">
              <div className="statValue">{overview.hotels}</div>
              <div className="statLabel">Hôtels</div>
            </div>
            <div className="statCard">
              <div className="statValue">{overview.rooms}</div>
              <div className="statLabel">Chambres</div>
            </div>
            <div className="statCard">
              <div className="statValue">{overview.wifiConfigs}</div>
              <div className="statLabel">Configs WiFi</div>
            </div>
            <div className="statCard">
              <div className="statValue">{overview.guestPasses}</div>
              <div className="statLabel">Guest Pass</div>
            </div>
            <div className="statCard">
              <div className="statValue">{overview.activeSessions}</div>
              <div className="statLabel">Sessions Actives</div>
            </div>
            <div className="statCard">
              <div className="statValue">{devicesByStatus.ONLINE}</div>
              <div className="statLabel">Devices Online</div>
            </div>
            <div className="statCard">
              <div className="statValue">{devicesByStatus.OFFLINE}</div>
              <div className="statLabel">Devices Offline</div>
            </div>
            <div className="statCard">
              <div className="statValue">{devicesByStatus.UNSTABLE}</div>
              <div className="statLabel">Devices Instables</div>
            </div>
          </div>
        )}

        <div className="alertsSection">
          <h2 className="sectionTitle">Dernières alertes</h2>
          {overview?.recentAlerts?.length ? (
            <ul className="alertsList">
              {overview.recentAlerts.map((alert: any) => (
                <li key={alert.id} className={`alertItem ${String(alert.severity || 'MEDIUM').toLowerCase()}`}>
                  <div className="alertTitle">{alert.title}</div>
                  <div className="alertMessage">{alert.message}</div>
                  <div className="alertMeta">{new Date(alert.createdAt).toLocaleString('fr-FR')}</div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucune alerte récente.</p>
          )}
        </div>
      </div>
    </Layout>
  )
}
