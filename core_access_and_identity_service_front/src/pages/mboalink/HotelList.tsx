import { useEffect, useState } from 'react'
import AddHotelModal from '@/components/mboalink/AddHotelModal'
import HotelDetailsModal from '@/components/mboalink/HotelDetailsModal'
import Layout from '@/components/mboalink/Layout'
import { mboalinkService } from '@/services'
import './HotelList.css'

const mapStatusFromApi = (status: string) => {
  if (status === 'ACTIVE') return 'Actif'
  if (status === 'MAINTENANCE') return 'Maintenance'
  return 'Inactif'
}

const mapStatusToApi = (status: string) => {
  if (status === 'Actif') return 'ACTIVE'
  if (status === 'Maintenance') return 'MAINTENANCE'
  return 'INACTIVE'
}

const mapHotelFromApi = (hotel: Record<string, any>) => ({
  ...hotel,
  contact: hotel.contactEmail || '',
  rooms: hotel._count?.rooms || 0,
  status: mapStatusFromApi(hotel.status),
})

export default function HotelList() {
  const [hotels, setHotels] = useState<Array<Record<string, any>>>([])
  const [isLoading, setIsLoading] = useState(true)

  const [searchQuery, setSearchQuery] = useState('')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [editingHotel, setEditingHotel] = useState<Record<string, any> | null>(null)
  const [viewingHotel, setViewingHotel] = useState<Record<string, any> | null>(null)

  const loadHotels = async () => {
    try {
      const data = await mboalinkService.listHotels()
      setHotels(data.map(mapHotelFromApi))
    } catch (error) {
      alert((error as Error).message || 'Impossible de charger les hôtels')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadHotels()
  }, [])

  const filteredHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hotel.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hotel.country.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddHotel = () => {
    setEditingHotel(null)
    setIsEditModalOpen(true)
  }

  const handleEditHotel = (hotel: Record<string, any>) => {
    setEditingHotel(hotel)
    setIsEditModalOpen(true)
  }

  const handleViewDetails = (hotel: Record<string, any>) => {
    setViewingHotel(hotel)
    setIsDetailsModalOpen(true)
  }

  const handleDeleteHotel = async (hotelId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet hôtel ?')) {
      try {
        await mboalinkService.deleteHotel(hotelId)
        setHotels(prev => prev.filter(h => h.id !== hotelId))
      } catch (error) {
        alert((error as Error).message || 'Suppression impossible')
      }
    }
  }

  const handleSaveHotel = async (hotelData: Record<string, any>) => {
    const payload = {
      name: hotelData.name,
      city: hotelData.city,
      country: hotelData.country,
      address: hotelData.address,
      contactEmail: hotelData.contact || '',
      phone: hotelData.phone || '',
      website: hotelData.website || '',
      description: hotelData.description || '',
      floors: hotelData.floors,
      latitude: hotelData.latitude ?? undefined,
      longitude: hotelData.longitude ?? undefined,
      amenities: hotelData.amenities || [],
      photos: (hotelData.photos || []).map((photo: Record<string, any>) => ({
        url: photo.url || photo.preview || '',
        isMain: !!photo.isMain,
        name: photo.name || '',
      })),
      status: mapStatusToApi(hotelData.status),
    }

    try {
      if (editingHotel) {
        await mboalinkService.updateHotel(editingHotel.id, payload)
      } else {
        await mboalinkService.createHotel(payload)
      }

      await loadHotels()
      setIsEditModalOpen(false)
      setEditingHotel(null)
    } catch (error) {
      alert((error as Error).message || 'Enregistrement impossible')
    }
  }

  const getMainPhoto = (hotel: Record<string, any>) => {
    const mainPhoto = hotel.photos?.find(p => p.isMain)
    return mainPhoto?.url || hotel.photos?.[0]?.url || '/api/placeholder/400/300'
  }

  return (
    <Layout activePage="HOTEL MANAGER" activeSubPage="Hotels">
      <div className="hotelListPage">
        <div className="pageHeader">
          <div>
            <h1 className="pageTitle">Gestion des Établissements</h1>
            <p className="pageSubtitle">
              Gérez vos hôtels, leurs informations et leur configuration réseau.
            </p>
          </div>
          <button className="btn btnPrimary" onClick={handleAddHotel}>
            + Ajouter Hôtel
          </button>
        </div>

        <div className="statsBar">
          <div className="statCard">
            <div className="statValue">{hotels.length}</div>
            <div className="statLabel">Total Hôtels</div>
          </div>
          <div className="statCard">
            <div className="statValue">{hotels.filter(h => h.status === 'Actif').length}</div>
            <div className="statLabel">Actifs</div>
          </div>
          <div className="statCard">
            <div className="statValue">{hotels.reduce((sum, h) => sum + h.rooms, 0)}</div>
            <div className="statLabel">Total Chambres</div>
          </div>
          <div className="statCard">
            <div className="statValue">{hotels.filter(h => h.status === 'Maintenance').length}</div>
            <div className="statLabel">En Maintenance</div>
          </div>
        </div>

        <div className="actionsBar">
          <input
            type="text"
            className="searchInput"
            placeholder="Rechercher un hôtel, une ville..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="hotelListContainer">
          {isLoading && <p>Chargement des hôtels...</p>}
          <table className="hotelTable">
            <thead>
              <tr>
                <th style={{ width: '120px' }}>Photo</th>
                <th>Hôtel</th>
                <th>Contact</th>
                <th>Statistiques</th>
                <th style={{ width: '120px' }}>Statut</th>
                <th style={{ width: '180px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredHotels.map((hotel) => (
                <tr key={hotel.id} className="hotelRow">
                  <td>
                    <div 
                      className="hotelThumbnail"
                      onClick={() => handleViewDetails(hotel)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src={getMainPhoto(hotel)} alt={hotel.name} />
                    </div>
                  </td>
                  <td>
                    <div className="hotelNameCell">
                      <h3 className="hotelNameList">{hotel.name}</h3>
                      <p className="hotelLocationList">📍 {hotel.city}, {hotel.country}</p>
                    </div>
                  </td>
                  <td>
                    <div className="contactCell">
                      <div>✉️ {hotel.contact}</div>
                      <div>📞 {hotel.phone}</div>
                    </div>
                  </td>
                  <td>
                    <div className="statsCell">
                      <span className="statItem">🛏️ {hotel.rooms} chambres</span>
                      <span className="statItem">🏢 {hotel.floors} étages</span>
                      {hotel.amenities.length > 0 && (
                        <div className="amenitiesMini">
                          {hotel.amenities.slice(0, 2).map((amenity, idx) => (
                            <span key={idx} className="amenityBadge">{amenity}</span>
                          ))}
                          {hotel.amenities.length > 2 && (
                            <span className="amenityBadge">+{hotel.amenities.length - 2}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </td>
                  <td>
                    <span className={`statusBadge ${hotel.status.toLowerCase()}`}>
                      {hotel.status}
                    </span>
                  </td>
                  <td>
                    <div className="actionsCell">
                      <button
                        className="actionBtn viewBtn"
                        onClick={() => handleViewDetails(hotel)}
                        title="Voir détails"
                      >
                        👁️
                      </button>
                      <button
                        className="actionBtn editBtn"
                        onClick={() => handleEditHotel(hotel)}
                        title="Modifier"
                      >
                        ✏️
                      </button>
                      <button
                        className="actionBtn deleteBtn"
                        onClick={() => handleDeleteHotel(hotel.id)}
                        title="Supprimer"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredHotels.length === 0 && (
            <div className="emptyState">
              <p>Aucun hôtel trouvé.</p>
              <button className="btn btnPrimary" onClick={handleAddHotel}>
                Ajouter le premier hôtel
              </button>
            </div>
          )}
        </div>
      </div>

      <AddHotelModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false)
          setEditingHotel(null)
        }}
        onSave={handleSaveHotel}
        hotel={editingHotel}
      />

      <HotelDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => {
          setIsDetailsModalOpen(false)
          setViewingHotel(null)
        }}
        hotel={viewingHotel}
      />
    </Layout>
  )
}
