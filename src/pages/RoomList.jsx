import { useState } from 'react'
import Layout from '../components/Layout'
import AddRoomModal from '../components/AddRoomModal'
import RoomDetailsModal from '../components/RoomDetailsModal'
import './RoomList.css'

export default function RoomList({ onNavigate }) {
  // Liste des hôtels disponibles (normalement vient de l'API)
  const [hotels] = useState([
    { id: 1, name: 'Hôtel La Résidence - Douala' },
    { id: 2, name: 'Hôtel La Résidence - Yaoundé' },
    { id: 3, name: 'Hilton Yaoundé' },
    { id: 4, name: 'Merina Hotel' }
  ])

  const [rooms, setRooms] = useState([
    {
      id: 1,
      type: 'Suite Présidentielle',
      hotelId: 1,
      hotelName: 'Hôtel La Résidence - Douala',
      capacity: 4,
      floor: 5,
      surface: 65,
      description: 'Suite luxueuse avec vue panoramique sur l\'océan, salon séparé et jacuzzi privé.',
      equipments: ['Smart TV 55"', 'Mini-bar', 'Bureau', 'Coffre-fort', 'Jacuzzi'],
      photos: [
        { url: '/api/placeholder/400/300', isMain: true, name: 'suite-main.jpg' },
        { url: '/api/placeholder/400/300', isMain: false, name: 'suite-bedroom.jpg' },
        { url: '/api/placeholder/400/300', isMain: false, name: 'suite-bathroom.jpg' }
      ],
      createdAt: '2024-01-15',
      updatedAt: '2025-01-02'
    },
    {
      id: 2,
      type: 'Chambre Standard',
      hotelId: 1,
      hotelName: 'Hôtel La Résidence - Douala',
      capacity: 2,
      floor: 2,
      surface: 25,
      description: 'Chambre confortable avec lit double et salle de bain moderne.',
      equipments: ['TV connectée', 'Bureau', 'Coffre-fort'],
      photos: [
        { url: '/api/placeholder/400/300', isMain: true, name: 'standard.jpg' }
      ],
      createdAt: '2024-01-15',
      updatedAt: '2024-12-20'
    },
    {
      id: 3,
      type: 'Suite Deluxe',
      hotelId: 3,
      hotelName: 'Hilton Yaoundé',
      capacity: 3,
      floor: 10,
      surface: 45,
      description: 'Suite élégante avec balcon, coin salon et vue sur la ville.',
      equipments: ['Smart TV 50"', 'Mini-bar', 'Bureau', 'Machine à café', 'Coffre-fort'],
      photos: [
        { url: '/api/placeholder/400/300', isMain: true, name: 'deluxe.jpg' }
      ],
      createdAt: '2023-11-10',
      updatedAt: '2024-12-15'
    },
    {
      id: 4,
      type: 'Chambre Standard',
      hotelId: 2,
      hotelName: 'Hôtel La Résidence - Yaoundé',
      capacity: 2,
      floor: 3,
      surface: 28,
      description: 'Chambre moderne avec lit queen size.',
      equipments: ['TV connectée', 'Bureau'],
      photos: [
        { url: '/api/placeholder/400/300', isMain: true, name: 'standard-yaounde.jpg' }
      ],
      createdAt: '2024-02-20',
      updatedAt: '2024-11-30'
    }
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [filterHotel, setFilterHotel] = useState('all')
  const [filterType, setFilterType] = useState('all')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [editingRoom, setEditingRoom] = useState(null)
  const [viewingRoom, setViewingRoom] = useState(null)

  // Filtrage
  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         room.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         room.hotelName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesHotel = filterHotel === 'all' || room.hotelId === parseInt(filterHotel)
    const matchesType = filterType === 'all' || room.type.includes(filterType)
    
    return matchesSearch && matchesHotel && matchesType
  })

  // Statistiques
  const totalRooms = rooms.length
  const totalCapacity = rooms.reduce((sum, room) => sum + room.capacity, 0)
  const hotelsWithRooms = [...new Set(rooms.map(r => r.hotelId))].length
  
  const roomTypes = {}
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

  const handleEditRoom = (room) => {
    setEditingRoom(room)
    setIsAddModalOpen(true)
  }

  const handleViewDetails = (room) => {
    setViewingRoom(room)
    setIsDetailsModalOpen(true)
  }

  const handleDuplicateRoom = (room) => {
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

  const handleDeleteRoom = (roomId) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette chambre ?')) {
      setRooms(prev => prev.filter(r => r.id !== roomId))
    }
  }

  const handleSaveRoom = (roomData) => {
    if (editingRoom && editingRoom.id) {
      // Modifier
      setRooms(prev => prev.map(r => r.id === editingRoom.id ? { ...roomData, id: r.id } : r))
    } else {
      // Ajouter
      const newRoom = { 
        ...roomData, 
        id: Date.now(),
        hotelName: hotels.find(h => h.id === roomData.hotelId)?.name || '',
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0]
      }
      setRooms(prev => [...prev, newRoom])
    }
    setIsAddModalOpen(false)
    setEditingRoom(null)
  }

  const getMainPhoto = (room) => {
    const mainPhoto = room.photos?.find(p => p.isMain)
    return mainPhoto?.url || room.photos?.[0]?.url || '/api/placeholder/400/300'
  }

  return (
    <Layout activePage="HOTEL MANAGER" activeSubPage="Rooms" onNavigate={onNavigate}>
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