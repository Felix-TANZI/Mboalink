import { useEffect, useState } from 'react'
import AddRoomModal from '@/components/mboalink/AddRoomModal'
import RoomDetailsModal from '@/components/mboalink/RoomDetailsModal'
import Layout from '@/components/mboalink/Layout'
import { mboalinkService } from '@/services'
import './RoomList.css'

export default function RoomList() {
  const [hotels, setHotels] = useState<Array<Record<string, any>>>([])
  const [rooms, setRooms] = useState<Array<Record<string, any>>>([])
  const [isLoading, setIsLoading] = useState(true)

  const [searchQuery, setSearchQuery] = useState('')
  const [filterHotel, setFilterHotel] = useState('all')
  const [filterType, setFilterType] = useState('all')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [editingRoom, setEditingRoom] = useState<Record<string, any> | null>(null)
  const [viewingRoom, setViewingRoom] = useState<Record<string, any> | null>(null)

  const loadData = async () => {
    try {
      const [hotelList, roomList] = await Promise.all([
        mboalinkService.listHotels(),
        mboalinkService.listRooms(),
      ])

      setHotels(hotelList.map((hotel) => ({ id: hotel.id, name: hotel.name })))
      setRooms(roomList.map((room) => ({
        ...room,
        hotelName: room.hotel?.name || '',
      })))
    } catch (error) {
      alert((error as Error).message || 'Impossible de charger les chambres')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  // Filtrage
  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         room.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         room.hotelName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesHotel = filterHotel === 'all' || room.hotelId === filterHotel
    const matchesType = filterType === 'all' || room.type.includes(filterType)
    
    return matchesSearch && matchesHotel && matchesType
  })

  // Statistiques
  const totalRooms = rooms.length
  const totalCapacity = rooms.reduce((sum, room) => sum + room.capacity, 0)
  const hotelsWithRooms = [...new Set(rooms.map(r => r.hotelId))].length
  
  const roomTypes: Record<string, number> = {}
  rooms.forEach(room => {
    const type = room.type.includes('Standard') ? 'Standard' : 
                 room.type.includes('Suite') ? 'Suite' : 
                 room.type.includes('Deluxe') ? 'Deluxe' : 'Autre'
    roomTypes[type] = (roomTypes[type] || 0) + 1
  })

  const handleAddRoom = () => {
    setEditingRoom(null)
    setIsAddModalOpen(true)
  }

  const handleEditRoom = (room: Record<string, any>) => {
    setEditingRoom(room)
    setIsAddModalOpen(true)
  }

  const handleViewDetails = (room: Record<string, any>) => {
    setViewingRoom(room)
    setIsDetailsModalOpen(true)
  }

  const handleDuplicateRoom = (room: Record<string, any>) => {
    const duplicated = {
      ...room,
      id: null,
      type: `${room.type} (Copie)`,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    }
    setEditingRoom(duplicated)
    setIsAddModalOpen(true)
  }

  const handleDeleteRoom = async (roomId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette chambre ?')) {
      try {
        await mboalinkService.deleteRoom(roomId)
        setRooms(prev => prev.filter(r => r.id !== roomId))
      } catch (error) {
        alert((error as Error).message || 'Suppression impossible')
      }
    }
  }

  const handleSaveRoom = async (roomData: Record<string, any>) => {
    const payload = {
      type: roomData.type,
      name: roomData.name || '',
      capacity: roomData.capacity,
      floor: roomData.floor,
      surface: roomData.surface,
      description: roomData.description,
      equipments: roomData.equipments || [],
      photos: (roomData.photos || []).map((photo: Record<string, any>) => ({
        url: photo.url || photo.preview || '',
        isMain: !!photo.isMain,
        name: photo.name || '',
      })),
    }

    if (editingRoom && editingRoom.id) {
      try {
        await mboalinkService.updateRoom(editingRoom.id, payload)
      } catch (error) {
        alert((error as Error).message || 'Modification impossible')
        return
      }
    } else {
      try {
        await mboalinkService.createRoom(roomData.hotelId, payload)
      } catch (error) {
        alert((error as Error).message || 'Création impossible')
        return
      }
    }
    await loadData()
    setIsAddModalOpen(false)
    setEditingRoom(null)
  }

  const getMainPhoto = (room: Record<string, any>) => {
    const mainPhoto = room.photos?.find(p => p.isMain)
    return mainPhoto?.url || room.photos?.[0]?.url || '/api/placeholder/400/300'
  }

  return (
    <Layout activePage="HOTEL MANAGER" activeSubPage="Rooms">
      <div className="roomListPage">
        <div className="pageHeader">
          <div>
            <h1 className="pageTitle">Gestion des Chambres</h1>
            <p className="pageSubtitle">
              Catalogue des types de chambres par hôtel client
            </p>
          </div>
          <button className="btn btnPrimary" onClick={handleAddRoom}>
            + Ajouter Chambre
          </button>
        </div>

        <div className="statsBar">
          <div className="statCard">
            <div className="statValue">{totalRooms}</div>
            <div className="statLabel">Total Chambres</div>
          </div>
          <div className="statCard">
            <div className="statValue">{hotelsWithRooms}</div>
            <div className="statLabel">Hôtels Configurés</div>
          </div>
          <div className="statCard">
            <div className="statValue">{totalCapacity}</div>
            <div className="statLabel">Capacité Totale</div>
          </div>
          <div className="statCard">
            <div className="statValue">
              {Object.entries(roomTypes).map(([type, count]) => (
                <span key={type} className="typeBreakdown">
                  {count} {type}
                </span>
              ))}
            </div>
            <div className="statLabel">Par Type</div>
          </div>
        </div>

        <div className="filtersBar">
          <input
            type="text"
            className="searchInput"
            placeholder="Rechercher une chambre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <select 
            className="filterSelect"
            value={filterHotel}
            onChange={(e) => setFilterHotel(e.target.value)}
          >
            <option value="all">Tous les hôtels</option>
            {hotels.map(hotel => (
              <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
            ))}
          </select>

          <select 
            className="filterSelect"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">Tous les types</option>
            <option value="Standard">Standard</option>
            <option value="Suite">Suite</option>
            <option value="Deluxe">Deluxe</option>
          </select>
        </div>

        <div className="roomListContainer">
          {isLoading && <p>Chargement des chambres...</p>}
          <table className="roomTable">
            <thead>
              <tr>
                <th style={{ width: '120px' }}>Photo</th>
                <th>Type & Description</th>
                <th>Hôtel</th>
                <th>Détails</th>
                <th>Équipements</th>
                <th style={{ width: '200px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRooms.map((room) => (
                <tr key={room.id} className="roomRow">
                  <td>
                    <div 
                      className="roomThumbnail"
                      onClick={() => handleViewDetails(room)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src={getMainPhoto(room)} alt={room.type} />
                    </div>
                  </td>
                  <td>
                    <div className="roomTypeCell">
                      <h3 className="roomType">{room.type}</h3>
                      <p className="roomDescription">{room.description}</p>
                    </div>
                  </td>
                  <td>
                    <div className="hotelNameCell">
                      🏨 {room.hotelName}
                    </div>
                  </td>
                  <td>
                    <div className="detailsCell">
                      <span className="detailItem">👥 {room.capacity} pers.</span>
                      <span className="detailItem">🏢 Étage {room.floor}</span>
                      <span className="detailItem">📐 {room.surface} m²</span>
                    </div>
                  </td>
                  <td>
                    <div className="equipmentsCell">
                      {room.equipments.slice(0, 3).map((eq, idx) => (
                        <span key={idx} className="equipmentBadge">{eq}</span>
                      ))}
                      {room.equipments.length > 3 && (
                        <span className="equipmentBadge">+{room.equipments.length - 3}</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="actionsCell">
                      <button
                        className="actionBtn viewBtn"
                        onClick={() => handleViewDetails(room)}
                        title="Voir détails"
                      >
                        👁️
                      </button>
                      <button
                        className="actionBtn editBtn"
                        onClick={() => handleEditRoom(room)}
                        title="Modifier"
                      >
                        ✏️
                      </button>
                      <button
                        className="actionBtn duplicateBtn"
                        onClick={() => handleDuplicateRoom(room)}
                        title="Dupliquer"
                      >
                        📋
                      </button>
                      <button
                        className="actionBtn deleteBtn"
                        onClick={() => handleDeleteRoom(room.id)}
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

          {filteredRooms.length === 0 && (
            <div className="emptyState">
              <p>Aucune chambre trouvée.</p>
              <button className="btn btnPrimary" onClick={handleAddRoom}>
                Ajouter la première chambre
              </button>
            </div>
          )}
        </div>
      </div>

      <AddRoomModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false)
          setEditingRoom(null)
        }}
        onSave={handleSaveRoom}
        room={editingRoom}
        hotels={hotels}
      />

      <RoomDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => {
          setIsDetailsModalOpen(false)
          setViewingRoom(null)
        }}
        room={viewingRoom}
      />
    </Layout>
  )
}
