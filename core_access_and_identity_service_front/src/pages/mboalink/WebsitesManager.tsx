import { useEffect, useMemo, useState } from 'react'
import Layout from '@/components/mboalink/Layout'
import { mboalinkService, type ClearedAddressEntity, type HotelEntity } from '@/services/mboalinkService'
import './WebsitesManager.css'

const defaultForm = {
  hotelId: '',
  address: '',
  networkInterface: 'Hotspot',
  expiresAt: '',
  uploadCapKbps: 1500,
  downloadCapKbps: 1500,
  connectionType: 'Walled Garden',
  notes: '',
}

export default function WebsitesManager() {
  const [hotels, setHotels] = useState<HotelEntity[]>([])
  const [items, setItems] = useState<ClearedAddressEntity[]>([])
  const [selectedHotelId, setSelectedHotelId] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [form, setForm] = useState(defaultForm)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  const loadItems = async (hotelId = selectedHotelId) => {
    const query = {
      hotelId: hotelId || undefined,
      search: searchQuery || undefined,
    }
    const data = await mboalinkService.listClearedAddresses(query)
    setItems(data)
  }

  useEffect(() => {
    Promise.all([
      mboalinkService.listHotels(),
      mboalinkService.listClearedAddresses(),
    ])
      .then(([hotelList, addressList]) => {
        setHotels(hotelList)
        setItems(addressList)
        const firstHotelId = hotelList[0]?.id || ''
        setSelectedHotelId(firstHotelId)
        setForm((prev) => ({ ...prev, hotelId: firstHotelId }))
      })
      .catch((error) => alert((error as Error).message || 'Chargement impossible'))
      .finally(() => setIsLoading(false))
  }, [])

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return items
    return items.filter((item) =>
      `${item.address} ${item.networkInterface || ''} ${item.connectionType || ''} ${item.notes || ''} ${item.issuedBy || ''}`
        .toLowerCase()
        .includes(q),
    )
  }, [items, searchQuery])

  const handleHotelChange = async (hotelId: string) => {
    setSelectedHotelId(hotelId)
    setForm((prev) => ({ ...prev, hotelId }))
    try {
      await loadItems(hotelId)
    } catch (error) {
      alert((error as Error).message || 'Chargement impossible')
    }
  }

  const handleCreate = async () => {
    if (!form.hotelId || !form.address.trim() || !form.expiresAt) {
      alert('Sélectionnez un établissement, une adresse et une date d’expiration.')
      return
    }

    try {
      setIsSaving(true)
      await mboalinkService.createClearedAddress({
        ...form,
        address: form.address.trim(),
        expiresAt: new Date(form.expiresAt).toISOString(),
        uploadCapKbps: Number(form.uploadCapKbps),
        downloadCapKbps: Number(form.downloadCapKbps),
      })
      setForm((prev) => ({ ...defaultForm, hotelId: prev.hotelId }))
      await loadItems(form.hotelId)
    } catch (error) {
      alert((error as Error).message || 'Création impossible')
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = async (item: ClearedAddressEntity) => {
    if (!confirm(`Supprimer l'accès libre ${item.address} ?`)) return
    try {
      await mboalinkService.deleteClearedAddresses([item.id])
      await loadItems(selectedHotelId)
    } catch (error) {
      alert((error as Error).message || 'Suppression impossible')
    }
  }

  return (
    <Layout activePage="LOGINS" activeSubPage="Web Site Manager">
      <div className="websitesManagerPage">
        <div className="pageHeader">
          <h1 className="pageTitle">Gestion des accès libres</h1>
          <p className="pageSubtitle">
            Domaines, IP ou MAC autorisés à passer le portail captif pour un établissement.
          </p>
        </div>

        <section className="websiteSection">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Nouvel accès libre</h2>
            <button className="btn btnPrimary" onClick={handleCreate} disabled={isSaving}>
              Ajouter
            </button>
          </div>

          <div className="websiteFormGrid">
            <label>
              Établissement
              <select value={form.hotelId} onChange={(event) => setForm((prev) => ({ ...prev, hotelId: event.target.value }))}>
                <option value="">Sélectionner</option>
                {hotels.map((hotel) => (
                  <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
                ))}
              </select>
            </label>
            <label>
              Domaine, IP ou MAC
              <input value={form.address} onChange={(event) => setForm((prev) => ({ ...prev, address: event.target.value }))} placeholder="mboalink.com, 8.8.8.8, AA:BB:CC:DD:EE:FF" />
            </label>
            <label>
              Interface
              <input value={form.networkInterface} onChange={(event) => setForm((prev) => ({ ...prev, networkInterface: event.target.value }))} />
            </label>
            <label>
              Expiration
              <input type="datetime-local" value={form.expiresAt} onChange={(event) => setForm((prev) => ({ ...prev, expiresAt: event.target.value }))} />
            </label>
            <label>
              Download Kbps
              <input type="number" min="0" value={form.downloadCapKbps} onChange={(event) => setForm((prev) => ({ ...prev, downloadCapKbps: Number(event.target.value) }))} />
            </label>
            <label>
              Upload Kbps
              <input type="number" min="0" value={form.uploadCapKbps} onChange={(event) => setForm((prev) => ({ ...prev, uploadCapKbps: Number(event.target.value) }))} />
            </label>
            <label>
              Type
              <input value={form.connectionType} onChange={(event) => setForm((prev) => ({ ...prev, connectionType: event.target.value }))} />
            </label>
            <label>
              Notes
              <input value={form.notes} onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))} />
            </label>
          </div>
        </section>

        <section className="websiteSection">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Accès libres enregistrés</h2>
            <div className="websiteFilters">
              <select value={selectedHotelId} onChange={(event) => handleHotelChange(event.target.value)}>
                <option value="">Tous les établissements</option>
                {hotels.map((hotel) => (
                  <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
                ))}
              </select>
              <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Rechercher..." />
              <button className="btn" onClick={() => loadItems(selectedHotelId)}>Actualiser</button>
            </div>
          </div>

          <div className="tableWrapper">
            <table className="websiteTable">
              <thead>
                <tr>
                  <th>Adresse</th>
                  <th>Établissement</th>
                  <th>Interface</th>
                  <th>Expiration</th>
                  <th>Débit</th>
                  <th>Créé par</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr><td colSpan={7} className="emptyState">Chargement...</td></tr>
                ) : filteredItems.length === 0 ? (
                  <tr><td colSpan={7} className="emptyState">Aucun accès libre enregistré.</td></tr>
                ) : (
                  filteredItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.address}</td>
                      <td>{hotels.find((hotel) => hotel.id === item.hotelId)?.name || item.hotelId}</td>
                      <td>{item.networkInterface || '-'}</td>
                      <td>{new Date(item.expiresAt).toLocaleString('fr-FR')}</td>
                      <td>{item.downloadCapKbps} / {item.uploadCapKbps} Kbps</td>
                      <td>{item.issuedBy || '-'}</td>
                      <td className="optionsCell">
                        <button className="optionBtn danger" onClick={() => handleDelete(item)}>Supprimer</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  )
}
