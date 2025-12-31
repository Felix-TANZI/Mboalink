import { useState } from 'react'
import Layout from '../components/Layout'
import AddGuestPassModal from '../components/AddGuestPassModal'
import AddMassGuestPassModal from '../components/AddMassGuestPassModal'
import './WifiCode.css'

export default function WifiCode({ onNavigate }) {
  const [codes, setCodes] = useState([
    {
      id: 1,
      code: 'FP598L',
      label: 'Réception',
      uses: 1,
      maxUses: 1,
      duration: '7 days, 12 hours',
      bandwidth: '1500 / 1500 kb/s',
      created: 'Fri, 17 Jan 2025 12:30 PM WAT',
      expires: 'Wed, 31 Dec 2025 12:00 PM WAT'
    }
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [isSingleModalOpen, setIsSingleModalOpen] = useState(false)
  const [isMassModalOpen, setIsMassModalOpen] = useState(false)

  const handleAddGuestPass = (newPass) => {
    console.log('New guest pass created:', newPass)
    // TODO: Ajouter le nouveau pass à la liste
  }

  const handleAddMassGuestPass = (massData) => {
    console.log('Mass guest passes created:', massData)
    // TODO: Ajouter les nouveaux passes à la liste
  }

  return (
    <Layout activePage="LOGINS" activeSubPage="WiFi Code" onNavigate={onNavigate}>
      <div className="wifiCodePage">
        <div className="pageHeader">
          <h1 className="pageTitle">Guest WiFi Codes</h1>
          <p className="pageDescription">
            Les WiFi Codes permettent à vos invités d'accéder à Internet via MboaLink. 
            Vous pouvez créer de nouveaux codes, ajuster la durée, le débit et le nombre d'utilisations, 
            ou supprimer les codes existants à partir de cette liste.
          </p>
        </div>

        <div className="displayInfo">
          Affichage de {codes.length} logins.
        </div>

        <div className="warningBanner">
          Toute date d'expiration marquée d'un (*) correspond à un code déjà expiré et sera automatiquement 
          retiré de la liste 30 jours après expiration.
        </div>

        <div className="actionsBar">
          <input
            type="text"
            placeholder="Rechercher un code, un label..."
            className="searchInput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="actionButtons">
            <button className="btn btnSecondary">Remove Selected</button>
            <button className="btn btnSecondary">Print List</button>
            <button className="btn btnPrimary" onClick={() => setIsMassModalOpen(true)}>
              Add Mass Guest Pass
            </button>
            <button className="btn btnPrimary" onClick={() => setIsSingleModalOpen(true)}>
              Add Guest Pass
            </button>
          </div>
        </div>

        <div className="tableWrapper">
          <table className="wifiTable">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Pass</th>
                <th>Label</th>
                <th># Uses</th>
                <th>Max Uses</th>
                <th>Duration</th>
                <th>Cap (Down / Up)</th>
                <th>Created</th>
                <th>Expires</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {codes.map((code) => (
                <tr key={code.id}>
                  <td><input type="checkbox" /></td>
                  <td className="codeCell">{code.code}</td>
                  <td>{code.label}</td>
                  <td>{code.uses}</td>
                  <td>{code.maxUses}</td>
                  <td>{code.duration}</td>
                  <td className="bandwidthCell">{code.bandwidth}</td>
                  <td>{code.created}</td>
                  <td>{code.expires}</td>
                  <td className="optionsCell">
                    <button className="optionBtn">🔄</button>
                    <button className="optionBtn">📥</button>
                    <button className="optionBtn">✏️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal pour un seul pass */}
      <AddGuestPassModal
        isOpen={isSingleModalOpen}
        onClose={() => setIsSingleModalOpen(false)}
        onSubmit={handleAddGuestPass}
      />

      {/* Modal pour plusieurs passes */}
      <AddMassGuestPassModal
        isOpen={isMassModalOpen}
        onClose={() => setIsMassModalOpen(false)}
        onSubmit={handleAddMassGuestPass}
      />
    </Layout>
  )
}