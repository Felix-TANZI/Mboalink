// @ts-nocheck
import { useEffect, useMemo, useState } from 'react'
import Layout from '@/components/mboalink/Layout'
import { mboalinkService } from '@/services'
import './ManualLogin.css'

//  Helpers
function toDatetimeLocal(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

function formatDate(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleString('fr-FR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

function calcDuration(start, end) {
  if (!start || !end) return '—'
  const diff = new Date(end).getTime() - new Date(start).getTime()
  if (diff <= 0) return '—'
  const days  = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  if (days === 0) return `${hours}h`
  return hours > 0 ? `${days}j ${hours}h` : `${days} jour${days > 1 ? 's' : ''}`
}

function calcAccessStatus(startedAt, endedAt) {
  if (!startedAt || !endedAt) return { label: '—', css: '' }
  const now   = Date.now()
  const start = new Date(startedAt).getTime()
  const end   = new Date(endedAt).getTime()
  if (now < start) return { label: 'À venir',    css: 'PENDING' }
  if (now > end)   return { label: 'Expiré',      css: 'EXPIRED' }
  return               { label: 'Accès actif', css: 'ACTIVE'  }
}

//  Aujourd'hui à la minute (pour le min des inputs date) 
function nowDatetimeLocal() {
  return new Date().toISOString().slice(0, 16)
}

//  Modal d'édition
function EditModal({ session, rooms, onClose, onSave }) {
  const [clientName, setClientName] = useState(session.clientName || '')
  const [roomId,     setRoomId]     = useState(session.room?.id || '')
  const [startedAt,  setStartedAt]  = useState(toDatetimeLocal(session.startedAt))
  const [endedAt,    setEndedAt]    = useState(toDatetimeLocal(session.endedAt))
  const [saving,     setSaving]     = useState(false)
  const [error,      setError]      = useState('')

  const hotelRooms = rooms.filter((r) => r.hotelId === session.hotelId)

  const durationPreview = calcDuration(startedAt, endedAt)

  const handleSave = async () => {
    if (!clientName.trim()) { setError('Le nom est requis'); return }
    if (!startedAt)          { setError("Date d'entrée requise"); return }
    if (!endedAt)            { setError('Date de sortie requise'); return }
    if (new Date(endedAt) <= new Date(startedAt)) {
      setError("La date de sortie doit être après la date d'entrée")
      return
    }
    setSaving(true)
    setError('')
    try {
      await onSave(session.id, {
        clientName: clientName.trim(),
        roomId:    roomId || undefined,
        startedAt: new Date(startedAt).toISOString(),
        endedAt:   new Date(endedAt).toISOString(),
      })
      onClose()
    } catch (err) {
      setError(err.message || 'Erreur lors de la modification')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="mlOverlay" onClick={onClose}>
      <div className="mlModal" onClick={(e) => e.stopPropagation()}>
        <div className="mlModalHeader">
          <h3 className="mlModalTitle">Modifier le check-in</h3>
          <button className="mlModalClose" onClick={onClose}>✕</button>
        </div>

        <div className="mlModalBody">
          {error && <div className="mlErrorBox">{error}</div>}

          <div className="mlModalField">
            <label>Nom du client <span className="required">*</span></label>
            <input
              type="text"
              className="mlInput"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              disabled={saving}
            />
          </div>

          <div className="mlModalField">
            <label>Numéro de chambre</label>
            <select
              className="mlSelectModal"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              disabled={saving}
            >
              <option value="">— Sélectionner —</option>
              {hotelRooms.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name || r.type}{r.floor != null ? ` (Étage ${r.floor})` : ''}
                </option>
              ))}
            </select>
          </div>

          <div className="mlModalGrid">
            <div className="mlModalField">
              <label>Date d'entrée <span className="required">*</span></label>
              <input
                type="datetime-local"
                className="mlInput"
                value={startedAt}
                onChange={(e) => setStartedAt(e.target.value)}
                disabled={saving}
              />
            </div>
            <div className="mlModalField">
              <label>Date de sortie <span className="required">*</span></label>
              <input
                type="datetime-local"
                className="mlInput"
                value={endedAt}
                min={startedAt || undefined}
                onChange={(e) => setEndedAt(e.target.value)}
                disabled={saving}
              />
            </div>
          </div>

          {durationPreview !== '—' && (
            <div className="mlDurationBadge">Durée du séjour : {durationPreview}</div>
          )}
        </div>

        <div className="mlModalFooter">
          <button className="mlBtn mlBtnSecondary" onClick={onClose} disabled={saving}>
            Annuler
          </button>
          <button className="mlBtn mlBtnPrimary" onClick={handleSave} disabled={saving}>
            {saving ? 'Enregistrement…' : 'Sauvegarder'}
          </button>
        </div>
      </div>
    </div>
  )
}

//  Page principale
export default function ManualLogin() {
  const [hotels,    setHotels]    = useState([])
  const [rooms,     setRooms]     = useState([])
  const [sessions,  setSessions]  = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hotelId,   setHotelId]   = useState('')

  // Formulaire
  const [clientName,   setClientName]   = useState('')
  const [roomText,     setRoomText]     = useState('')
  const [selectedRoom, setSelectedRoom] = useState('')
  const [checkInDate,  setCheckInDate]  = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')

  // Tableau
  const [searchQuery, setSearchQuery] = useState('')
  const [editSession, setEditSession] = useState(null)

  // Chargement initial
  useEffect(() => {
    Promise.all([
      mboalinkService.listHotels(),
      mboalinkService.listRooms(),
      mboalinkService.listLoginSessions(),
    ])
      .then(([hotelList, roomList, sessionList]) => {
        setHotels(hotelList)
        setRooms(roomList)
        setSessions(sessionList)
        if (hotelList[0]) setHotelId(hotelList[0].id)
      })
      .catch((err) => alert(err.message || 'Chargement impossible'))
  }, [])

  const hotelRooms = useMemo(
    () => rooms.filter((r) => r.hotelId === hotelId),
    [rooms, hotelId]
  )

  // Saisie libre chambre
  const handleRoomTextChange = (value) => {
    setRoomText(value)
    const found = hotelRooms.find(
      (r) => (r.name || r.type || '').toLowerCase() === value.trim().toLowerCase()
    )
    setSelectedRoom(found ? found.id : '')
  }

  const handleDropdownChange = (id) => {
    setSelectedRoom(id)
    const room = hotelRooms.find((r) => r.id === id)
    if (room) setRoomText(room.name || room.type || '')
  }

  const roomIsValid = !!selectedRoom

  const durationLabel = useMemo(
    () => calcDuration(checkInDate, checkOutDate),
    [checkInDate, checkOutDate]
  )

  // Soumission
  const handleProceed = async () => {
    if (!clientName.trim())   { alert('Le nom du client est requis'); return }
    if (!roomIsValid)          { alert('Sélectionnez une chambre valide'); return }
    if (!checkInDate)          { alert("La date d'entrée est requise"); return }
    if (!checkOutDate)         { alert('La date de sortie est requise'); return }
    if (new Date(checkOutDate) <= new Date(checkInDate)) {
      alert("La date de sortie doit être après la date d'entrée"); return
    }

    setIsLoading(true)
    try {
      await mboalinkService.createManualLogin({
        hotelId,
        roomId:     selectedRoom,
        clientName: clientName.trim(),
        startedAt:  new Date(checkInDate).toISOString(),
        endedAt:    new Date(checkOutDate).toISOString(),
      })
      const updated = await mboalinkService.listLoginSessions()
      setSessions(updated)
      setClientName('')
      setRoomText('')
      setSelectedRoom('')
      setCheckInDate('')
      setCheckOutDate('')
    } catch (err) {
      alert(err.message || 'Échec du check-in')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setClientName('')
    setRoomText('')
    setSelectedRoom('')
    setCheckInDate('')
    setCheckOutDate('')
  }

  // Modification
  const handleSave = async (id, payload) => {
    await mboalinkService.updateLoginSession(id, payload)
    const updated = await mboalinkService.listLoginSessions()
    setSessions(updated)
  }

  // Suppression
  const handleDelete = async (id) => {
    if (!confirm('Supprimer ce check-in ?')) return
    try {
      await mboalinkService.deleteLoginSessions([id])
      setSessions((prev) => prev.filter((s) => s.id !== id))
    } catch (err) {
      alert(err.message || 'Suppression impossible')
    }
  }

  const filteredSessions = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    const manual = sessions.filter((s) => s.type === 'Manual Login')
    if (!q) return manual
    return manual.filter((s) =>
      [s.clientName, s.room?.name, s.room?.type, s.ipAddress, s.macAddress]
        .some((v) => String(v || '').toLowerCase().includes(q))
    )
  }, [sessions, searchQuery])

  return (
    <Layout activePage="LOGINS" activeSubPage="Manual Login">
      <div className="mlPage">

        {/* En-tête */}
        <div className="mlHeader">
          <h1 className="mlTitle">Manual Login</h1>
          <p className="mlSubtitle">
            Enregistrez un client en précisant son nom, son numéro de chambre et ses dates de séjour.
            L'accès internet sera actif uniquement pendant la période définie.
          </p>
        </div>

        {/* Formulaire */}
        <div className="mlCard">
          <div className="mlCardHeader">
            <h2 className="mlSectionTitle">Nouveau check-in client</h2>
          </div>

          <div className="mlCardBody">
            <div className="mlFormGrid">

              {/* Nom */}
              <div className="mlField">
                <label htmlFor="clientName">
                  Nom du client <span className="required">*</span>
                </label>
                <p className="mlFieldHelp">Prénom et nom tel qu'indiqué sur la réservation.</p>
                <input
                  id="clientName"
                  type="text"
                  className="mlInput"
                  placeholder="Ex : Felix TANZI"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              {/* Chambre */}
              <div className="mlField">
                <label htmlFor="roomText">
                  Numéro de chambre <span className="required">*</span>
                </label>
                <p className="mlFieldHelp">
                  Tapez le numéro directement, ou sélectionnez dans la liste.
                </p>
                <div className="mlRoomInputWrapper">
                  <input
                    id="roomText"
                    type="text"
                    list="roomSuggestions"
                    className={`mlInput ${roomText && !roomIsValid ? 'mlInputError' : ''} ${roomIsValid ? 'mlInputValid' : ''}`}
                    placeholder="Ex : 101"
                    value={roomText}
                    onChange={(e) => handleRoomTextChange(e.target.value)}
                    disabled={isLoading}
                    autoComplete="off"
                  />
                  {roomText && !roomIsValid && (
                    <span className="mlInputHint mlInputHintError">Chambre introuvable</span>
                  )}
                  {roomIsValid && (
                    <span className="mlInputHint mlInputHintOk">✓ Chambre trouvée</span>
                  )}
                  <datalist id="roomSuggestions">
                    {hotelRooms.map((r) => (
                      <option key={r.id} value={r.name || r.type} />
                    ))}
                  </datalist>
                </div>
                <select
                  className="mlSelect"
                  value={selectedRoom}
                  onChange={(e) => handleDropdownChange(e.target.value)}
                  disabled={isLoading}
                >
                  <option value="">— Parcourir les chambres —</option>
                  {hotelRooms.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name || r.type}
                      {r.type && r.name ? ` — ${r.type}` : ''}
                      {r.floor != null ? ` (Étage ${r.floor})` : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date entrée */}
              <div className="mlField">
                <label htmlFor="checkIn">
                  Date & heure d'entrée <span className="required">*</span>
                </label>
                <p className="mlFieldHelp">Début d'accès à internet pour ce client.</p>
                <input
                  id="checkIn"
                  type="datetime-local"
                  className="mlInput"
                  value={checkInDate}
                  min={nowDatetimeLocal()}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              {/* Date sortie */}
              <div className="mlField">
                <label htmlFor="checkOut">
                  Date & heure de sortie <span className="required">*</span>
                </label>
                <p className="mlFieldHelp">Fin d'accès à internet pour ce client.</p>
                <input
                  id="checkOut"
                  type="datetime-local"
                  className="mlInput"
                  value={checkOutDate}
                  min={checkInDate || nowDatetimeLocal()}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  disabled={isLoading}
                />
                {durationLabel !== '—' && (
                  <span className="mlDurationBadge">Durée du séjour : {durationLabel}</span>
                )}
              </div>

            </div>

            <div className="mlActions">
              <button
                className="mlBtn mlBtnSecondary"
                onClick={handleCancel}
                disabled={isLoading}
              >
                Annuler
              </button>
              <button
                className="mlBtn mlBtnPrimary"
                onClick={handleProceed}
                disabled={
                  isLoading ||
                  !clientName.trim() ||
                  !roomIsValid ||
                  !checkInDate ||
                  !checkOutDate
                }
              >
                {isLoading ? 'Enregistrement…' : 'Valider le check-in'}
              </button>
            </div>
          </div>
        </div>

        {/* Tableau */}
        <div className="mlTableCard">
          <div className="mlTableHeader">
            <div>
              <h2 className="mlSectionTitle">Check-ins enregistrés</h2>
              <p className="mlTableCount">
                {filteredSessions.length} client{filteredSessions.length !== 1 ? 's' : ''} affiché{filteredSessions.length !== 1 ? 's' : ''}
              </p>
            </div>
            <input
              type="text"
              className="mlSearch"
              placeholder="Rechercher un client, une chambre, une IP…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="mlTableWrapper">
            <table className="mlTable">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>N° Chambre</th>
                  <th>Type</th>
                  <th>Accès</th>
                  <th>Entrée</th>
                  <th>Sortie</th>
                  <th>Durée</th>
                  <th>IP / MAC</th>
                  <th>Créé le</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSessions.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="mlEmptyRow">
                      Aucun check-in enregistré pour le moment.
                    </td>
                  </tr>
                ) : (
                  filteredSessions.map((session) => {
                    const access = calcAccessStatus(session.startedAt, session.endedAt)
                    return (
                      <tr key={session.id}>
                        <td className="mlCellBold">{session.clientName || '—'}</td>
                        <td>{session.room?.name || '—'}</td>
                        <td>{session.room?.type || '—'}</td>
                        <td>
                          {access.css
                            ? <span className={`mlBadge mlBadge${access.css}`}>{access.label}</span>
                            : '—'
                          }
                        </td>
                        <td className="mlCellDate">{formatDate(session.startedAt)}</td>
                        <td className="mlCellDate">{formatDate(session.endedAt)}</td>
                        <td className="mlCellDuration">
                          {calcDuration(session.startedAt, session.endedAt)}
                        </td>
                        <td className="mlCellMono">
                          {session.ipAddress && (
                            <span className="mlIpLine">{session.ipAddress}</span>
                          )}
                          {session.macAddress && (
                            <span className="mlMacLine">{session.macAddress}</span>
                          )}
                          {!session.ipAddress && !session.macAddress && '—'}
                        </td>
                        <td className="mlCellDate">{formatDate(session.createdAt)}</td>
                        <td>
                          <div className="mlActionBtns">
                            <button
                              className="mlActionBtn mlActionBtnEdit"
                              title="Modifier"
                              onClick={() => setEditSession(session)}
                            >
                              ✏️
                            </button>
                            <button
                              className="mlActionBtn mlActionBtnDelete"
                              title="Supprimer"
                              onClick={() => handleDelete(session.id)}
                            >
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Modal édition */}
      {editSession && (
        <EditModal
          session={editSession}
          rooms={rooms}
          onClose={() => setEditSession(null)}
          onSave={handleSave}
        />
      )}
    </Layout>
  )
}