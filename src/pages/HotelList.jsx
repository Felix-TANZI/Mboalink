import { useState } from 'react'
import Layout from '../components/Layout'
import AddHotelModal from '../components/AddHotelModal'
import HotelDetailsModal from '../components/HotelDetailsModal'
import './HotelList.css'

export default function HotelList({ onNavigate }) {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: 'Hôtel La Résidence - Douala',
      city: 'Douala',
      country: 'Cameroun',
      address: 'Av. des Cocotiers, Akwa, Douala',
      contact: 'it@laresidence-douala.cm',
      phone: '+237 233 42 56 78',
      website: 'https://laresidence-douala.cm',
      description: 'Hôtel 4 étoiles situé au cœur du quartier des affaires d\'Akwa avec vue sur l\'océan.',
      rooms: 45,
      status: 'Actif',
      floors: 5,
      latitude: 4.0511,
      longitude: 9.7679,
      amenities: ['Piscine', 'Salle de conférence', 'Restaurant'],
      photos: [
        { url: '/api/placeholder/400/300', isMain: true, name: 'facade.jpg' },
        { url: '/api/placeholder/400/300', isMain: false, name: 'lobby.jpg' },
        { url: '/api/placeholder/400/300', isMain: false, name: 'pool.jpg' }
      ],
      createdAt: '2024-01-15',
      updatedAt: '2025-01-02'
    },
    {
      id: 2,
      name: 'Hôtel La Résidence - Yaoundé',
      city: 'Yaoundé',
      country: 'Cameroun',
      address: 'Boulevard du 20 Mai, Centre-ville',
      contact: 'support@laresidence-yaounde.cm',
      phone: '+237 222 23 45 67',
      website: 'https://laresidence-yaounde.cm',
      description: 'Établissement moderne avec salles de conférence et piscine olympique.',
      rooms: 38,
      status: 'Actif',
      floors: 4,
      latitude: 3.8480,
      longitude: 11.5021,
      amenities: ['Piscine', 'Restaurant'],
      photos: [
        { url: '/api/placeholder/400/300', isMain: true, name: 'entrance.jpg' },
        { url: '/api/placeholder/400/300', isMain: false, name: 'room.jpg' }
      ],
      createdAt: '2024-02-20',
      updatedAt: '2025-01-01'
    },
    {
      id: 3,
      name: 'Hilton Yaoundé',
      city: 'Yaoundé',
      country: 'Cameroun',
      address: 'Place de l\'Indépendance',
      contact: 'it@hilton-yaounde.com',
      phone: '+237 222 23 40 64',
      website: 'https://hilton.com/yaounde',
      description: 'Hôtel de luxe international avec services premium et centre d\'affaires.',
      rooms: 180,
      status: 'Actif',
      floors: 12,
      latitude: 3.8667,
      longitude: 11.5167,
      amenities: ['Piscine', 'Salle de conférence', 'Restaurant'],
      photos: [
        { url: '/api/placeholder/400/300', isMain: true, name: 'hilton-main.jpg' }
      ],
      createdAt: '2023-11-10',
      updatedAt: '2024-12-28'
    },
    {
      id: 4,
      name: 'Merina Hotel',
      city: 'Bafoussam',
      country: 'Cameroun',
      address: 'Route de Bamenda, Bafoussam',
      contact: 'contact@merinahotel.cm',
      phone: '+237 233 44 21 09',
      website: 'https://merinahotel.cm',
      description: 'Petit hôtel de charme situé dans les hauts plateaux de l\'Ouest.',
      rooms: 25,
      status: 'Maintenance',
      floors: 3,
      latitude: 5.4781,
      longitude: 10.4178,
      amenities: ['Restaurant'],
      photos: [
        { url: '/api/placeholder/400/300', isMain: true, name: 'merina.jpg' }
      ],
      createdAt: '2024-03-15',
      updatedAt: '2024-12-20'
    }
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
  const [editingHotel, setEditingHotel] = useState(null)
  const [viewingHotel, setViewingHotel] = useState(null)

  const filteredHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hotel.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hotel.country.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddHotel = () => {
    setEditingHotel(null)
    setIsEditModalOpen(true)
  }

  const handleEditHotel = (hotel) => {
    setEditingHotel(hotel)
    setIsEditModalOpen(true)
  }

  const handleViewDetails = (hotel) => {
    setViewingHotel(hotel)
    setIsDetailsModalOpen(true)
  }

  const handleDeleteHotel = (hotelId) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet hôtel ?')) {
      setHotels(prev => prev.filter(h => h.id !== hotelId))
    }
  }

  const handleSaveHotel = (hotelData) => {
    if (editingHotel) {
      setHotels(prev => prev.map(h => h.id === editingHotel.id ? { ...hotelData, id: h.id } : h))
    } else {
      const newHotel = { ...hotelData, id: Date.now(), createdAt: new Date().toISOString().split('T')[0], updatedAt: new Date().toISOString().split('T')[0] }
      setHotels(prev => [...prev, newHotel])
    }
    setIsEditModalOpen(false)
    setEditingHotel(null)
  }

  const getMainPhoto = (hotel) => {
    const mainPhoto = hotel.photos?.find(p => p.isMain)
    return mainPhoto?.url || hotel.photos?.[0]?.url || '/api/placeholder/400/300'
  }

  return (
    <Layout activePage="HOTEL MANAGER" activeSubPage="Hotels" onNavigate={onNavigate}>
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