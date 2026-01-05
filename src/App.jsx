import { useState } from 'react'
import './styles/theme.css'
import './styles/global.css'
import Login from './pages/Login'
import TwoFactor from './pages/TwoFactor'
import WifiCode from './pages/WifiCode'
import LoginByAddress from './pages/LoginByAddress'
import ManualLogin from './pages/ManualLogin'
import WebsitesManager from './pages/WebsitesManager'
import ConfigCode from './pages/ConfigCode'
import StatutLogins from './pages/StatutLogins'
import HotelList from './pages/HotelList'
import RoomList from './pages/RoomList'
import ConfigWifiList from './pages/ConfigWifiList'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentPage, setCurrentPage] = useState('login')
  const [userEmail, setUserEmail] = useState('')

  const handleLoginSuccess = (email) => {
    setUserEmail(email)
    setCurrentPage('2fa')
  }

  const handleBackToLogin = () => {
    setCurrentPage('login')
  }

  const handle2FASuccess = () => {
    setIsAuthenticated(true)
    setCurrentPage('wifi-code')
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  if (!isAuthenticated) {
    if (currentPage === '2fa') {
      return <TwoFactor userEmail={userEmail} onBack={handleBackToLogin} onSuccess={handle2FASuccess} />
    }
    return <Login onSuccess={handleLoginSuccess} />
  }

  switch (currentPage) {
    // LOGINS
    case 'wifi-code':
      return <WifiCode onNavigate={handleNavigate} />
    case 'login-by-address':
      return <LoginByAddress onNavigate={handleNavigate} />
    case 'status-logins':
      return <StatutLogins onNavigate={handleNavigate} />
    case 'manual-login':
      return <ManualLogin onNavigate={handleNavigate} />
    case 'website-manager':
      return <WebsitesManager onNavigate={handleNavigate} />
    case 'config-code':
      return <ConfigCode onNavigate={handleNavigate} />
    
    // HOTEL MANAGER
    case 'hotels':
      return <HotelList onNavigate={handleNavigate} />
    case 'rooms':
      return <RoomList onNavigate={handleNavigate} />
    case 'config-wifi':
      return <ConfigWifiList onNavigate={handleNavigate} />
    
    default:
      return <WifiCode onNavigate={handleNavigate} />
  }
}