import { useState } from 'react'
import './ConfigWifiHistoryModal.css'

export default function ConfigWifiHistoryModal({ isOpen, onClose, config }) {
  // Historique fictif (normalement vient de l'API)
  const [history] = useState([
    {
      id: 1,
      date: '2025-01-02T14:30:00',
      modifiedBy: 'Admin MboaLink',
      action: 'Modification',
      changes: [
        { field: 'Bande Passante Upload', oldValue: '1000 Kb/s', newValue: '1500 Kb/s' },
        { field: 'Bande Passante Download', oldValue: '1000 Kb/s', newValue: '1500 Kb/s' },
        { field: 'Zones', oldValue: 'PUBLIC, GUEST-ROOM', newValue: 'PUBLIC, GUEST-ROOM, CONFERENCE' }
      ]
    },
    {
      id: 2,
      date: '2024-12-15T10:20:00',
      modifiedBy: 'Tech Support',
      action: 'Modification',
      changes: [
        { field: 'SSID', oldValue: 'Hotel-Guest', newValue: 'LaResidence-Guest' },
        { field: 'Message Bienvenue', oldValue: 'Bienvenue', newValue: 'Bienvenue à La Résidence Douala' }
      ]
    },
    {
      id: 3,
      date: '2024-11-20T16:45:00',
      modifiedBy: 'Admin MboaLink',
      action: 'Modification',
      changes: [
        { field: 'Durée Session', oldValue: '12 heures', newValue: '24 heures' },
        { field: 'Nombre Max Appareils', oldValue: '1', newValue: '2' }
      ]
    },
    {
      id: 4,
      date: '2024-10-05T09:15:00',
      modifiedBy: 'Admin MboaLink',
      action: 'Activation',
      changes: [
        { field: 'Statut', oldValue: 'Inactif', newValue: 'Actif' }
      ]
    },
    {
      id: 5,
      date: '2024-09-28T14:00:00',
      modifiedBy: 'Admin MboaLink',
      action: 'Création',
      changes: [
        { field: 'Configuration initiale', oldValue: '-', newValue: 'Créée' }
      ]
    }
  ])

  if (!isOpen || !config) return null

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getActionBadgeClass = (action) => {
    switch (action) {
      case 'Création':
        return 'actionCreate'
      case 'Modification':
        return 'actionModify'
      case 'Activation':
        return 'actionActivate'
      case 'Désactivation':
        return 'actionDeactivate'
      default:
        return 'actionDefault'
    }
  }

  const getActionIcon = (action) => {
    switch (action) {
      case 'Création':
        return '✨'
      case 'Modification':
        return '✏️'
      case 'Activation':
        return '✅'
      case 'Désactivation':
        return '❌'
      default:
        return '📝'
    }
  }

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent historyModal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <button className="backBtn" onClick={onClose}>
            ← FERMER
          </button>
          <div className="modalTitle">
            <h2>Historique des Modifications</h2>
            <p>{config.hotelName} - {config.ssid}</p>
          </div>
        </div>

        <div className="modalBody historyBody">
          <div className="historySummary">
            <div className="summaryCard">
              <div className="summaryIcon">📊</div>
              <div className="summaryContent">
                <div className="summaryValue">{history.length}</div>
                <div className="summaryLabel">Total Modifications</div>
              </div>
            </div>
            <div className="summaryCard">
              <div className="summaryIcon">👤</div>
              <div className="summaryContent">
                <div className="summaryValue">{config.modifiedBy}</div>
                <div className="summaryLabel">Dernier Modificateur</div>
              </div>
            </div>
            <div className="summaryCard">
              <div className="summaryIcon">🕐</div>
              <div className="summaryContent">
                <div className="summaryValue">
                  {new Date(config.lastModified).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                </div>
                <div className="summaryLabel">Dernière Modification</div>
              </div>
            </div>
          </div>

          <div className="historyTimeline">
            {history.map((entry, index) => (
              <div key={entry.id} className="timelineEntry">
                <div className="timelineMarker">
                  <div className="markerDot"></div>
                  {index < history.length - 1 && <div className="markerLine"></div>}
                </div>

                <div className="timelineContent">
                  <div className="entryHeader">
                    <div className="entryInfo">
                      <span className={`actionBadge ${getActionBadgeClass(entry.action)}`}>
                        {getActionIcon(entry.action)} {entry.action}
                      </span>
                      <span className="entryDate">{formatDate(entry.date)}</span>
                    </div>
                    <div className="entryAuthor">
                      Par <strong>{entry.modifiedBy}</strong>
                    </div>
                  </div>

                  <div className="changesTable">
                    <table>
                      <thead>
                        <tr>
                          <th>Champ Modifié</th>
                          <th>Ancienne Valeur</th>
                          <th></th>
                          <th>Nouvelle Valeur</th>
                        </tr>
                      </thead>
                      <tbody>
                        {entry.changes.map((change, idx) => (
                          <tr key={idx}>
                            <td className="fieldName">{change.field}</td>
                            <td className="oldValue">{change.oldValue}</td>
                            <td className="arrow">→</td>
                            <td className="newValue">{change.newValue}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {history.length === 0 && (
            <div className="emptyHistory">
              <p>Aucun historique disponible pour cette configuration.</p>
            </div>
          )}
        </div>

        <div className="modalFooter">
          <button className="btn btnSecondary" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  )
}