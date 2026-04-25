import { useEffect, useMemo, useState } from 'react'
import AddGuestPassModal from '@/components/mboalink/AddGuestPassModal'
import AddMassGuestPassModal from '@/components/mboalink/AddMassGuestPassModal'
import Layout from '@/components/mboalink/Layout'
import { mboalinkService } from '@/services'
import './WifiCode.css'

export default function WifiCode() {
  const [codes, setCodes] = useState<Array<Record<string, any>>>([])
  const [hotels, setHotels] = useState<Array<Record<string, any>>>([])
  const [selectedHotelId, setSelectedHotelId] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const [searchQuery, setSearchQuery] = useState('')
  const [isSingleModalOpen, setIsSingleModalOpen] = useState(false)
  const [isMassModalOpen, setIsMassModalOpen] = useState(false)

  const loadData = async () => {
    try {
      const hotelList = await mboalinkService.listHotels()
      setHotels(hotelList)

      const defaultHotelId = selectedHotelId || hotelList[0]?.id || ''
      if (defaultHotelId && !selectedHotelId) {
        setSelectedHotelId(defaultHotelId)
      }

      const passList = await mboalinkService.listGuestPasses(defaultHotelId ? { hotelId: defaultHotelId } : undefined)
      setCodes(passList)
    } catch (error) {
      alert((error as Error).message || 'Impossible de charger les guest passes')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    if (!selectedHotelId) return
    mboalinkService.listGuestPasses({ hotelId: selectedHotelId })
      .then(setCodes)
      .catch((error) => alert((error as Error).message || 'Impossible de charger les guest passes'))
  }, [selectedHotelId])

  const filteredCodes = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return codes
    return codes.filter((code) =>
      `${code.code} ${code.label || ''}`.toLowerCase().includes(q),
    )
  }, [codes, searchQuery])

  const handleAddGuestPass = async (newPass: Record<string, unknown>) => {
    if (!selectedHotelId) {
      alert('Sélectionnez un hôtel')
      return
    }

    try {
      const durationValue = newPass.duration === '' || newPass.duration === undefined
        ? undefined
        : Number(newPass.duration)
      await mboalinkService.createGuestPass({
        hotelId: selectedHotelId,
        code: newPass.passCode,
        label: newPass.label,
        durationValue,
        durationUnit: newPass.durationType,
        maxUses: Number(newPass.maxUses || 0),
        expiryDate: newPass.expiryDate || undefined,
        expiryTime: newPass.expiryTime || undefined,
        uploadCapKbps: Number(newPass.uploadCap || 1500),
        downloadCapKbps: Number(newPass.downloadCap || 1500),
        zones: Object.entries((newPass.zones || {}) as Record<string, boolean>)
          .filter(([, checked]) => checked)
          .map(([zone]) => zone),
      })
      const passList = await mboalinkService.listGuestPasses({ hotelId: selectedHotelId })
      setCodes(passList)
    } catch (error) {
      alert((error as Error).message || 'Création impossible')
    }
  }

  const handleAddMassGuestPass = async (massData: Record<string, unknown>) => {
    if (!selectedHotelId) {
      alert('Sélectionnez un hôtel')
      return
    }

    try {
      const durationValue = massData.duration === '' || massData.duration === undefined
        ? undefined
        : Number(massData.duration)
      await mboalinkService.createGuestPassesBulk({
        hotelId: selectedHotelId,
        quantity: Number(massData.quantity || 1),
        codePrefix: massData.label || undefined,
        label: massData.label || undefined,
        durationValue,
        durationUnit: massData.durationType,
        maxUses: Number(massData.maxUses || 0),
        expiryDate: massData.expiryDate || undefined,
        expiryTime: massData.expiryTime || undefined,
        uploadCapKbps: Number(massData.uploadCap || 1500),
        downloadCapKbps: Number(massData.downloadCap || 1500),
        zones: Object.entries((massData.zones || {}) as Record<string, boolean>)
          .filter(([, checked]) => checked)
          .map(([zone]) => zone),
      })
      const passList = await mboalinkService.listGuestPasses({ hotelId: selectedHotelId })
      setCodes(passList)
    } catch (error) {
      alert((error as Error).message || 'Création en masse impossible')
    }
  }

  return (
    <Layout activePage="LOGINS" activeSubPage="WiFi Code">
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
          Affichage de {filteredCodes.length} logins.
        </div>

        <div className="warningBanner">
          Toute date d'expiration marquée d'un (*) correspond à un code déjà expiré et sera automatiquement 
          retiré de la liste 30 jours après expiration.
        </div>

        <div className="actionsBar">
          <select
            className="searchInput"
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
          {isLoading && <p>Chargement des codes...</p>}
          <table className="wifiTable">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Pass</th>
                <th>Label</th>
                <th>Room / Client</th>
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
              {filteredCodes.map((code) => (
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
