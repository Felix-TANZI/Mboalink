// @ts-nocheck
import { useEffect, useMemo, useRef, useState } from 'react'
import AddGuestPassModal from '@/components/mboalink/AddGuestPassModal'
import AddMassGuestPassModal from '@/components/mboalink/AddMassGuestPassModal'
import Layout from '@/components/mboalink/Layout'
import { mboalinkService } from '@/services'
import './WifiCode.css'

// ── Icônes SVG ────────────────────────────────────────────
const IconEdit = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)

const IconRevoke = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
  </svg>
)

const IconDelete = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
    <path d="M10 11v6"/><path d="M14 11v6"/>
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  </svg>
)

// ── Helpers ───────────────────────────────────────────────
function formatDate(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleString('fr-FR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

function isExpired(expiryAt) {
  if (!expiryAt) return false
  return new Date(expiryAt) < new Date()
}

export default function WifiCode() {
  const [codes,       setCodes]       = useState([])
  const [hotelId,     setHotelId]     = useState('')
  const [isLoading,   setIsLoading]   = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selected,    setSelected]    = useState([])
  const [isSingleModalOpen, setIsSingleModalOpen] = useState(false)
  const [isMassModalOpen,   setIsMassModalOpen]   = useState(false)

  const selectAllRef = useRef(null)

  const loadCodes = async (hId) => {
    if (!hId) return
    try {
      const passList = await mboalinkService.listGuestPasses({ hotelId: hId })
      setCodes(passList)
    } catch (err) {
      alert(err.message || 'Impossible de charger les codes')
    }
  }

  useEffect(() => {
    mboalinkService.listHotels()
      .then((hotelList) => {
        const defaultId = hotelList[0]?.id || ''
        setHotelId(defaultId)
        return loadCodes(defaultId)
      })
      .catch((err) => alert(err.message || 'Chargement impossible'))
      .finally(() => setIsLoading(false))
  }, [])

  // Mise à jour état indéterminé
  useEffect(() => {
    if (!selectAllRef.current) return
    const total = filteredCodes.length
    if (selected.length === 0) {
      selectAllRef.current.checked       = false
      selectAllRef.current.indeterminate = false
    } else if (selected.length === total && total > 0) {
      selectAllRef.current.checked       = true
      selectAllRef.current.indeterminate = false
    } else {
      selectAllRef.current.checked       = false
      selectAllRef.current.indeterminate = true
    }
  })

  const filteredCodes = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return codes
    return codes.filter((c) =>
      `${c.code} ${c.label || ''}`.toLowerCase().includes(q)
    )
  }, [codes, searchQuery])

  // ── Sélection ────────────────────────────────────────────
  const toggleOne = (id) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id])

  const toggleAll = () =>
    setSelected(selected.length === filteredCodes.length ? [] : filteredCodes.map((c) => c.id))

  // ── Actions ───────────────────────────────────────────────
  const handleRemoveSelected = async () => {
    if (selected.length === 0) { alert('Sélectionnez au moins un code'); return }
    if (!confirm(`Supprimer ${selected.length} code(s) sélectionné(s) ?`)) return
    try {
      await Promise.all(selected.map((id) => mboalinkService.deleteGuestPass(id)))
      await loadCodes(hotelId)
      setSelected([])
    } catch (err) {
      alert(err.message || 'Suppression impossible')
    }
  }

  const handleRevoke = async (id) => {
    if (!confirm('Révoquer ce code ? Il ne pourra plus être utilisé.')) return
    try {
      await mboalinkService.revokeGuestPass(id)
      await loadCodes(hotelId)
    } catch (err) {
      if (err.message?.includes('expirée') || err.status === 401) {
        alert('Votre session a expiré. Veuillez vous reconnecter.')
        window.location.href = '/login'
        return
      }
      alert(err.message || 'Révocation impossible')
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Supprimer définitivement ce code ?')) return
    try {
      await mboalinkService.deleteGuestPass(id)
      await loadCodes(hotelId)
      setSelected((prev) => prev.filter((i) => i !== id))
    } catch (err) {
      alert(err.message || 'Suppression impossible')
    }
  }

  // ── Création ──────────────────────────────────────────────
  const handleAddGuestPass = async (newPass) => {
    if (!hotelId) { alert('Aucun hôtel disponible'); return }
    try {
      const durationValue = newPass.duration === '' || newPass.duration === undefined
        ? undefined : Number(newPass.duration)
      await mboalinkService.createGuestPass({
        hotelId,
        code:            newPass.passCode,
        label:           newPass.label,
        durationValue,
        durationUnit:    newPass.durationType,
        maxUses:         Number(newPass.maxUses || 0),
        expiryDate:      newPass.expiryDate || undefined,
        expiryTime:      newPass.expiryTime || undefined,
        uploadCapKbps:   Number(newPass.uploadCap || 1500),
        downloadCapKbps: Number(newPass.downloadCap || 1500),
        zones: Object.entries(newPass.zones || {}).filter(([, v]) => v).map(([z]) => z),
      })
      await loadCodes(hotelId)
    } catch (err) {
      alert(err.message || 'Création impossible')
    }
  }

  const handleAddMassGuestPass = async (massData) => {
    if (!hotelId) { alert('Aucun hôtel disponible'); return }
    try {
      const durationValue = massData.duration === '' || massData.duration === undefined
        ? undefined : Number(massData.duration)
      await mboalinkService.createGuestPassesBulk({
        hotelId,
        quantity:        Number(massData.quantity || 1),
        codePrefix:      massData.label || undefined,
        label:           massData.label || undefined,
        durationValue,
        durationUnit:    massData.durationType,
        maxUses:         Number(massData.maxUses || 0),
        expiryDate:      massData.expiryDate || undefined,
        expiryTime:      massData.expiryTime || undefined,
        uploadCapKbps:   Number(massData.uploadCap || 1500),
        downloadCapKbps: Number(massData.downloadCap || 1500),
        zones: Object.entries(massData.zones || {}).filter(([, v]) => v).map(([z]) => z),
      })
      await loadCodes(hotelId)
    } catch (err) {
      alert(err.message || 'Création en masse impossible')
    }
  }

  return (
    <Layout activePage="LOGINS" activeSubPage="WiFi Code">
      <div className="wifiCodePage">

        {/* ── En-tête ──────────────────────────────────────── */}
        <div className="pageHeader">
          <h1 className="pageTitle">Guest WiFi Codes</h1>
          <p className="pageDescription">
            Les WiFi Codes permettent à vos invités d'accéder à Internet via MboaLink.
            Vous pouvez créer de nouveaux codes, ajuster la durée, le débit et le nombre d'utilisations,
            ou supprimer les codes existants à partir de cette liste.
          </p>
        </div>

        {/* ── Compteur ─────────────────────────────────────── */}
        <div className="displayInfo">
          Affichage de {filteredCodes.length} code{filteredCodes.length !== 1 ? 's' : ''}.
        </div>

        {/* ── Bannière avertissement ───────────────────────── */}
        <div className="warningBanner">
          Toute date d'expiration marquée d'un (*) correspond à un code déjà expiré et sera automatiquement
          retiré de la liste 30 jours après expiration.
        </div>

        {/* ── Barre d'actions ──────────────────────────────── */}
        <div className="actionsBar">
          <input
            type="text"
            placeholder="Rechercher un code, un label..."
            className="searchInput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="actionButtons">
            <button
              className="btn btnSecondary"
              onClick={handleRemoveSelected}
              disabled={selected.length === 0}
            >
              Supprimer ({selected.length})
            </button>
            <button className="btn btnSecondary" onClick={() => window.print()}>
              Print List
            </button>
            <button
              className="btn btnPrimary"
              disabled={!hotelId}
              onClick={() => setIsMassModalOpen(true)}
            >
              Add Mass Guest Pass
            </button>
            <button
              className="btn btnPrimary"
              disabled={!hotelId}
              onClick={() => setIsSingleModalOpen(true)}
            >
              Add Guest Pass
            </button>
          </div>
        </div>

        {!hotelId && !isLoading && (
          <div className="warningBanner">
            Créez d'abord un hôtel dans Hotel Manager avant de générer des codes WiFi.
          </div>
        )}

        {!hotelId && !isLoading && (
          <div className="warningBanner">
            Créez d'abord un hôtel dans Hotel Manager avant de générer des codes WiFi.
          </div>
        )}

        {/* ── Tableau ──────────────────────────────────────── */}
        <div className="tableWrapper">
          {isLoading && <p style={{ padding: '16px', color: '#64748b' }}>Chargement des codes…</p>}
          <table className="wifiTable">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    ref={selectAllRef}
                    onChange={toggleAll}
                    title={selected.length > 0 ? 'Tout désélectionner' : 'Tout sélectionner'}
                  />
                </th>
                <th>Pass</th>
                <th>Label</th>
                <th>Room / Client</th>
                <th>Max Uses</th>
                <th>Duration</th>
                <th>Cap (Down / Up)</th>
                <th>Créé le</th>
                <th>Créé par</th>
                <th>Expires</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {false && filteredCodes.map((code) => (
                <tr key={code.id}>
                  <td><input type="checkbox" /></td>
                  <td className="codeCell">{code.code}</td>
                  <td>{code.label || '-'}</td>
                  <td>
                    {code.room?.name || code.room?.type || '-'}
                    {code.clientName ? <><br /><small>{code.clientName}</small></> : null}
                  </td>
                  <td>{code.usedCount ?? code.uses ?? 0}</td>
                  <td>{code.maxUses}</td>
                  <td>{code.durationValue ? `${code.durationValue} ${code.durationUnit || ''}` : '-'}</td>
                  <td className="bandwidthCell">{code.downloadCapKbps} / {code.uploadCapKbps} kb/s</td>
                  <td>{new Date(code.createdAt).toLocaleString('fr-FR')}</td>
                  <td>{code.expiryAt ? new Date(code.expiryAt).toLocaleString('fr-FR') : '-'}</td>
                  <td className="optionsCell">
                    <button className="optionBtn" onClick={() => mboalinkService.revokeGuestPass(code.id).then(() => loadData())}>🔄</button>
                    <button className="optionBtn">📥</button>
                    <button className="optionBtn" onClick={() => mboalinkService.deleteGuestPass(code.id).then(() => loadData())}>✏️</button>
                  </td>
                </tr>
              ))}
              {filteredCodes.length === 0 && !isLoading ? (
                <tr>
                  <td colSpan={11} style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
                    Aucun code WiFi trouvé.
                  </td>
                </tr>
              ) : (
                filteredCodes.map((code) => {
                  const expired = isExpired(code.expiryAt)
                  const creatorName = code.createdBy?.fullName || code.createdBy?.email || '—'
                  return (
                    <tr key={code.id} className={expired ? 'rowExpired' : ''}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selected.includes(code.id)}
                          onChange={() => toggleOne(code.id)}
                        />
                      </td>
                      <td className="codeCell">{code.code}</td>
                      <td>{code.label || '—'}</td>
                      <td>{code.maxUses === 0 ? '∞' : code.maxUses}</td>
                      <td>
                        {code.durationValue ? `${code.durationValue} ${code.durationUnit || ''}` : '—'}
                      </td>
                      <td className="bandwidthCell">
                        {code.downloadCapKbps} / {code.uploadCapKbps} kb/s
                      </td>
                      <td className="dateCell">{formatDate(code.createdAt)}</td>
                      <td className="createdByCell">{creatorName}</td>
                      <td className={`dateCell ${expired ? 'expiredDate' : ''}`}>
                        {code.expiryAt
                          ? `${formatDate(code.expiryAt)}${expired ? ' *' : ''}`
                          : '—'}
                      </td>
                      <td>
                        <div className="optionsCell">
                          <button
                            className="actionIconBtn actionIconBtnRevoke"
                            title="Révoquer"
                            onClick={() => handleRevoke(code.id)}
                            disabled={code.isRevoked}
                          >
                            <IconRevoke />
                          </button>
                          <button
                            className="actionIconBtn actionIconBtnEdit"
                            title="Modifier (bientôt disponible)"
                            onClick={() => alert('Fonctionnalité de modification à venir.')}
                          >
                            <IconEdit />
                          </button>
                          <button
                            className="actionIconBtn actionIconBtnDelete"
                            title="Supprimer"
                            onClick={() => handleDelete(code.id)}
                          >
                            <IconDelete />
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

      <AddGuestPassModal
        isOpen={isSingleModalOpen}
        onClose={() => setIsSingleModalOpen(false)}
        onSubmit={handleAddGuestPass}
      />

      <AddMassGuestPassModal
        isOpen={isMassModalOpen}
        onClose={() => setIsMassModalOpen(false)}
        onSubmit={handleAddMassGuestPass}
      />
    </Layout>
  )
}
