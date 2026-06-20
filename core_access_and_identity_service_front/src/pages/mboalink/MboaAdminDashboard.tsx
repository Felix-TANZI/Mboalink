import { useEffect, useMemo, useState } from 'react'
import {
  Bell,
  Building2,
  Database,
  FileClock,
  Hotel,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Network,
  Pencil,
  Plug,
  Save,
  Search,
  Settings,
  ShieldCheck,
  Trash2,
  UserRound,
  Users,
  Wifi,
} from 'lucide-react'
import { authService } from '@/services/auth/authService'
import { routes } from '@/router/routes'
import { useNavigate } from 'react-router-dom'
import {
  mboalinkService,
  type DeviceEntity,
  type HotelEntity,
  type UserEntity,
  type UserRole,
} from '@/services/mboalinkService'
import mboalinkLogo from '@/assets/images/mboalink-logo-navbar.png'
import './MboaAdminDashboard.css'

const roleLabels: Record<UserRole, string> = {
  ADMIN: 'Administrateur',
  SUPPORT: 'Support',
  HOTEL_IT: 'IT hôtel',
  RECEPTIONIST: 'Réceptionniste',
  CLIENT: 'Client',
}

const hotelScopedRoles: UserRole[] = ['HOTEL_IT', 'RECEPTIONIST']

const defaultUserForm = {
  fullName: '',
  email: '',
  password: '',
  role: 'RECEPTIONIST' as UserRole,
  hotelId: '',
}

const defaultHotelForm = {
  name: '',
  city: '',
  country: 'Cameroun',
  address: '',
  description: '',
}

const defaultDeviceForm = {
  hotelId: '',
  macAddress: '',
  model: '',
  serialNumber: '',
  localIp: '',
  zone: '',
  floor: '',
}

type ActiveForm = 'user' | 'hotel' | 'device' | null

function formatDate(value?: string | null) {
  if (!value) return 'Jamais'
  return new Date(value).toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function initials(value: string) {
  return value
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('') || 'ML'
}

export default function MboaAdminDashboard() {
  const navigate = useNavigate()
  const currentUser = authService.getStoredUser()
  const [users, setUsers] = useState<UserEntity[]>([])
  const [hotels, setHotels] = useState<HotelEntity[]>([])
  const [devices, setDevices] = useState<DeviceEntity[]>([])
  const [query, setQuery] = useState('')
  const [hotelFilter, setHotelFilter] = useState('all')
  const [deviceStatusFilter, setDeviceStatusFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [userForm, setUserForm] = useState(defaultUserForm)
  const [hotelForm, setHotelForm] = useState(defaultHotelForm)
  const [deviceForm, setDeviceForm] = useState(defaultDeviceForm)
  const [editingUserId, setEditingUserId] = useState<string | null>(null)
  const [editingHotelId, setEditingHotelId] = useState<string | null>(null)
  const [editingDeviceId, setEditingDeviceId] = useState<string | null>(null)
  const [activeForm, setActiveForm] = useState<ActiveForm>(null)

  const loadData = async () => {
    try {
      const [userList, hotelList, deviceList] = await Promise.all([
        mboalinkService.listUsers(),
        mboalinkService.listHotels(),
        mboalinkService.listDevices(),
      ])
      setUsers(userList)
      setHotels(hotelList)
      setDevices(deviceList)
    } catch (error) {
      alert((error as Error).message || 'Chargement impossible')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const filteredUsers = useMemo(() => {
    const q = query.trim().toLowerCase()
    return users.filter((user) =>
      `${user.fullName} ${user.email} ${roleLabels[user.role]} ${user.hotel?.name || ''}`
        .toLowerCase()
        .includes(q),
    )
  }, [users, query])

  const filteredHotels = useMemo(() => {
    const q = query.trim().toLowerCase()
    return hotels.filter((hotel) =>
      `${hotel.name} ${hotel.city} ${hotel.address}`
        .toLowerCase()
        .includes(q),
    )
  }, [hotels, query])

  const filteredDevices = useMemo(() => {
    const q = query.trim().toLowerCase()
    return devices.filter((device) => {
      const matchesSearch = `${device.model || ''} ${device.macAddress} ${device.localIp || ''} ${device.hotel?.name || ''}`
        .toLowerCase()
        .includes(q)
      const matchesHotel = hotelFilter === 'all' || device.hotelId === hotelFilter
      const matchesStatus = deviceStatusFilter === 'all' || device.status === deviceStatusFilter
      return matchesSearch && matchesHotel && matchesStatus
    })
  }, [devices, query, hotelFilter, deviceStatusFilter])

  const stats = useMemo(() => {
    const onlineDevices = devices.filter((device) => device.status === 'ONLINE').length
    return {
      users: users.length,
      hotels: hotels.length,
      devices: devices.length,
      onlineDevices,
    }
  }, [users, hotels, devices])

  const handleLogout = async () => {
    await authService.logout()
    navigate(routes.public.login)
  }

  const handleUserRoleChange = (role: UserRole) => {
    setUserForm((prev) => ({
      ...prev,
      role,
      hotelId: hotelScopedRoles.includes(role) ? prev.hotelId : '',
    }))
  }

  const resetUserForm = () => {
    setEditingUserId(null)
    setUserForm(defaultUserForm)
    setActiveForm('user')
  }

  const resetHotelForm = () => {
    setEditingHotelId(null)
    setHotelForm(defaultHotelForm)
    setActiveForm('hotel')
  }

  const resetDeviceForm = () => {
    setEditingDeviceId(null)
    setDeviceForm(defaultDeviceForm)
    setActiveForm('device')
  }

  const closeForm = () => {
    setActiveForm(null)
    setEditingUserId(null)
    setEditingHotelId(null)
    setEditingDeviceId(null)
    setUserForm(defaultUserForm)
    setHotelForm(defaultHotelForm)
    setDeviceForm(defaultDeviceForm)
  }

  const submitUser = async (event: React.FormEvent) => {
    event.preventDefault()
    if (hotelScopedRoles.includes(userForm.role) && !userForm.hotelId) {
      alert('Sélectionnez un hôtel pour ce rôle.')
      return
    }
    if (!editingUserId && userForm.password.length < 8) {
      alert('Le mot de passe doit contenir au moins 8 caractères.')
      return
    }

    try {
      setIsSaving(true)
      const payload = {
        fullName: userForm.fullName,
        email: userForm.email,
        role: userForm.role,
        hotelId: hotelScopedRoles.includes(userForm.role) ? userForm.hotelId : '',
        isActive: true,
        ...(userForm.password ? { password: userForm.password } : {}),
      }
      if (editingUserId) {
        await mboalinkService.updateUser(editingUserId, payload)
      } else {
        await mboalinkService.createUser(payload)
      }
      closeForm()
      await loadData()
    } catch (error) {
      alert((error as Error).message || 'Enregistrement utilisateur impossible')
    } finally {
      setIsSaving(false)
    }
  }

  const submitHotel = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      setIsSaving(true)
      const payload = {
        ...hotelForm,
        amenities: [],
        photos: [],
        status: 'ACTIVE',
      }
      if (editingHotelId) {
        await mboalinkService.updateHotel(editingHotelId, payload)
      } else {
        await mboalinkService.createHotel(payload)
      }
      closeForm()
      await loadData()
    } catch (error) {
      alert((error as Error).message || 'Enregistrement hôtel impossible')
    } finally {
      setIsSaving(false)
    }
  }

  const submitDevice = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!deviceForm.hotelId) {
      alert('Sélectionnez un hôtel.')
      return
    }
    try {
      setIsSaving(true)
      const payload = {
        hotelId: deviceForm.hotelId,
        macAddress: deviceForm.macAddress,
        model: deviceForm.model || undefined,
        serialNumber: deviceForm.serialNumber || undefined,
        localIp: deviceForm.localIp || undefined,
        zone: deviceForm.zone || undefined,
        floor: deviceForm.floor ? Number(deviceForm.floor) : undefined,
      }
      if (editingDeviceId) {
        await mboalinkService.updateDevice(editingDeviceId, payload)
      } else {
        await mboalinkService.createDevice(payload)
      }
      closeForm()
      await loadData()
    } catch (error) {
      alert((error as Error).message || 'Enregistrement équipement impossible')
    } finally {
      setIsSaving(false)
    }
  }

  const editUser = (user: UserEntity) => {
    setActiveForm('user')
    setEditingUserId(user.id)
    setUserForm({
      fullName: user.fullName,
      email: user.email,
      password: '',
      role: user.role,
      hotelId: user.hotelId || '',
    })
  }

  const editHotel = (hotel: HotelEntity) => {
    setActiveForm('hotel')
    setEditingHotelId(hotel.id)
    setHotelForm({
      name: hotel.name,
      city: hotel.city,
      country: hotel.country,
      address: hotel.address,
      description: hotel.description || '',
    })
  }

  const editDevice = (device: DeviceEntity) => {
    setActiveForm('device')
    setEditingDeviceId(device.id)
    setDeviceForm({
      hotelId: device.hotelId,
      macAddress: device.macAddress,
      model: device.model || '',
      serialNumber: device.serialNumber || '',
      localIp: device.localIp || '',
      zone: device.zone || '',
      floor: device.floor != null ? String(device.floor) : '',
    })
  }

  const deactivateUser = async (user: UserEntity) => {
    if (!confirm(`Désactiver ${user.email} ?`)) return
    try {
      await mboalinkService.deactivateUser(user.id)
      await loadData()
    } catch (error) {
      alert((error as Error).message || 'Désactivation impossible')
    }
  }

  const deleteHotel = async (hotel: HotelEntity) => {
    if (!confirm(`Supprimer ${hotel.name} ?`)) return
    try {
      await mboalinkService.deleteHotel(hotel.id)
      await loadData()
    } catch (error) {
      alert((error as Error).message || 'Suppression impossible')
    }
  }

  return (
    <div className="mboaAdminShell">
      <aside className="mboaAdminSidebar">
        <div className="mboaAdminBrand">
          <img src={mboalinkLogo} alt="MboaLink" />
        </div>

        <nav className="mboaAdminNav" aria-label="Administration MboaLink">
          <span>Menu principal</span>
          <a href="#overview" className="active"><LayoutDashboard size={18} />Tableau de bord</a>
          <a href="#users"><Users size={18} />Utilisateurs</a>
          <a href="#hotels"><Hotel size={18} />Hôtels</a>
          <a href="#devices"><Network size={18} />Équipements réseau</a>
          <a href="#codes"><Wifi size={18} />Codes WiFi</a>
          <a href="#connections"><Plug size={18} />Connexions</a>
          <a href="#admin-notifications"><Bell size={18} />Notifications</a>
          <a href="#reports"><FileClock size={18} />Rapports</a>
          <a href="#settings"><Settings size={18} />Paramètres</a>
          <span>Système</span>
          <a href="#roles"><LockKeyhole size={18} />Rôles & Permissions</a>
          <a href="/api-docs" target="_blank" rel="noreferrer"><Database size={18} />API Swagger</a>
          <a href="#integrations"><ShieldCheck size={18} />Intégrations</a>
        </nav>

        <div className="mboaAdminFooter">MboaLink © 2025</div>
      </aside>

      <main className="mboaAdminMain">
        <header className="mboaAdminTopbar">
          <div>
            <h1>Bonjour, Administrateur</h1>
            <p>Voici l'aperçu de votre plateforme MboaLink</p>
          </div>
          <div className="mboaAdminTopActions">
            <div className="mboaAdminSearch">
              <Search size={16} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Rechercher..." />
            </div>
            <button className="mboaAdminIconButton" type="button">
              <Bell size={18} />
              <span>{stats.users}</span>
            </button>
            <div className="mboaAdminProfile">
              <div className="mboaAdminAvatar">{initials(currentUser?.fullName || currentUser?.email || 'Admin')}</div>
              <div>
                <strong>{currentUser?.fullName || 'Administrateur'}</strong>
                <small>Super Admin</small>
              </div>
              <button type="button" onClick={handleLogout} title="Déconnexion">
                <LogOut size={16} />
              </button>
            </div>
          </div>
        </header>

        <section id="overview" className="mboaAdminStats">
          <article><Users size={20} /><strong>{stats.users}</strong><span>Utilisateurs</span></article>
          <article><Building2 size={20} /><strong>{stats.hotels}</strong><span>Hôtels</span></article>
          <article><Network size={20} /><strong>{stats.devices}</strong><span>Équipements réseau</span></article>
          <article><Wifi size={20} /><strong>{stats.onlineDevices}</strong><span>Équipements en ligne</span></article>
        </section>

        <section id="users" className={`mboaAdminSection ${activeForm === 'user' ? 'hasForm' : ''}`}>
          <div className="mboaAdminDataPanel">
            <PanelHeader
              title="Gestion des utilisateurs"
              subtitle="Liste de tous les utilisateurs du système"
              actionLabel="Nouvel utilisateur"
              onAction={resetUserForm}
            />
            <table className="mboaAdminTable">
              <thead>
                <tr>
                  <th>Nom complet</th>
                  <th>Email</th>
                  <th>Rôle</th>
                  <th>Statut</th>
                  <th>Hôtel</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td><UserCell name={user.fullName} /></td>
                    <td>{user.email}</td>
                    <td><span className={`mboaRoleBadge role-${user.role.toLowerCase()}`}>{roleLabels[user.role]}</span></td>
                    <td><span className={`mboaStatusBadge ${user.isActive ? 'active' : 'inactive'}`}>{user.isActive ? 'Actif' : 'Inactif'}</span></td>
                    <td>{user.hotel?.name || 'Plateforme'}</td>
                    <td><RowActions onEdit={() => editUser(user)} onDelete={() => deactivateUser(user)} deleteTitle="Désactiver" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <PanelFooter count={filteredUsers.length} label="utilisateur" />
          </div>

          {activeForm === 'user' && (
          <form className="mboaAdminFormPanel" onSubmit={submitUser}>
            <div className="mboaFormHeader">
              <h2>{editingUserId ? 'Modifier utilisateur' : 'Nouvel utilisateur'}</h2>
              <button type="button" onClick={closeForm}>Fermer</button>
            </div>
            <label>Nom complet<input value={userForm.fullName} onChange={(event) => setUserForm((prev) => ({ ...prev, fullName: event.target.value }))} required /></label>
            <label>Email<input type="email" value={userForm.email} onChange={(event) => setUserForm((prev) => ({ ...prev, email: event.target.value }))} required /></label>
            <label>Rôle<select value={userForm.role} onChange={(event) => handleUserRoleChange(event.target.value as UserRole)}>
              {Object.entries(roleLabels).map(([role, label]) => <option key={role} value={role}>{label}</option>)}
            </select></label>
            {hotelScopedRoles.includes(userForm.role) && (
              <label>Hôtel<select value={userForm.hotelId} onChange={(event) => setUserForm((prev) => ({ ...prev, hotelId: event.target.value }))} required>
                <option value="">Sélectionner un hôtel</option>
                {hotels.map((hotel) => <option key={hotel.id} value={hotel.id}>{hotel.name}</option>)}
              </select></label>
            )}
            <label>Mot de passe<input type="password" value={userForm.password} onChange={(event) => setUserForm((prev) => ({ ...prev, password: event.target.value }))} required={!editingUserId} /></label>
            <button className="mboaPrimaryButton" disabled={isSaving}><Save size={16} />{editingUserId ? "Enregistrer l'utilisateur" : "Créer l'utilisateur"}</button>
          </form>
          )}
        </section>

        <section id="hotels" className={`mboaAdminSection ${activeForm === 'hotel' ? 'hasForm' : ''}`}>
          <div className="mboaAdminDataPanel">
            <PanelHeader title="Gestion des hôtels" subtitle="Liste de tous les hôtels enregistrés" actionLabel="Nouvel hôtel" onAction={resetHotelForm} />
            <table className="mboaAdminTable">
              <thead><tr><th>Nom de l'hôtel</th><th>Ville</th><th>Adresse</th><th>Statut</th><th>Date création</th><th>Actions</th></tr></thead>
              <tbody>
                {filteredHotels.map((hotel) => (
                  <tr key={hotel.id}>
                    <td><strong>{hotel.name}</strong></td>
                    <td>{hotel.city}</td>
                    <td>{hotel.address}</td>
                    <td><span className="mboaStatusBadge active">{hotel.status === 'ACTIVE' ? 'Actif' : hotel.status}</span></td>
                    <td>{formatDate(hotel.createdAt)}</td>
                    <td><RowActions onEdit={() => editHotel(hotel)} onDelete={() => deleteHotel(hotel)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <PanelFooter count={filteredHotels.length} label="hôtel" />
          </div>

          {activeForm === 'hotel' && (
          <form className="mboaAdminFormPanel" onSubmit={submitHotel}>
            <div className="mboaFormHeader">
              <h2>{editingHotelId ? 'Modifier hôtel' : 'Nouvel hôtel'}</h2>
              <button type="button" onClick={closeForm}>Fermer</button>
            </div>
            <label>Nom de l'hôtel<input value={hotelForm.name} onChange={(event) => setHotelForm((prev) => ({ ...prev, name: event.target.value }))} required /></label>
            <div className="mboaFormGrid">
              <label>Ville<input value={hotelForm.city} onChange={(event) => setHotelForm((prev) => ({ ...prev, city: event.target.value }))} required /></label>
              <label>Pays<input value={hotelForm.country} onChange={(event) => setHotelForm((prev) => ({ ...prev, country: event.target.value }))} required /></label>
            </div>
            <label>Adresse<input value={hotelForm.address} onChange={(event) => setHotelForm((prev) => ({ ...prev, address: event.target.value }))} required /></label>
            <label>Description<textarea value={hotelForm.description} onChange={(event) => setHotelForm((prev) => ({ ...prev, description: event.target.value }))} /></label>
            <button className="mboaPrimaryButton" disabled={isSaving}><Save size={16} />{editingHotelId ? "Enregistrer l'hôtel" : "Créer l'hôtel"}</button>
          </form>
          )}
        </section>

        <section id="devices" className={`mboaAdminSection ${activeForm === 'device' ? 'hasForm' : ''}`}>
          <div className="mboaAdminDataPanel">
            <div className="mboaPanelHeader">
              <div><h2>Gestion des équipements réseau</h2><p>Routeurs, switchs, points d'accès et contrôleurs par hôtel</p></div>
              <div className="mboaPanelFilters">
                <select value={hotelFilter} onChange={(event) => setHotelFilter(event.target.value)}>
                  <option value="all">Tous les hôtels</option>
                  {hotels.map((hotel) => <option key={hotel.id} value={hotel.id}>{hotel.name}</option>)}
                </select>
                <select value={deviceStatusFilter} onChange={(event) => setDeviceStatusFilter(event.target.value)}>
                  <option value="all">Tous les statuts</option>
                  <option value="ONLINE">En ligne</option>
                  <option value="OFFLINE">Hors ligne</option>
                  <option value="UNSTABLE">Instable</option>
                </select>
                <button type="button" onClick={resetDeviceForm}>Nouvel équipement</button>
              </div>
            </div>
            <table className="mboaAdminTable">
              <thead><tr><th>Nom de l'équipement</th><th>Type</th><th>Hôtel</th><th>Adresse IP</th><th>Statut</th><th>Dernier heartbeat</th><th>Actions</th></tr></thead>
              <tbody>
                {filteredDevices.map((device) => (
                  <tr key={device.id}>
                    <td><strong>{device.model || device.serialNumber || device.macAddress}</strong></td>
                    <td>{device.model?.toLowerCase().includes('switch') ? 'Switch' : device.model?.toLowerCase().includes('router') ? 'Routeur' : "Point d'accès"}</td>
                    <td>{device.hotel?.name || '-'}</td>
                    <td>{device.localIp || '-'}</td>
                    <td><span className={`mboaStatusBadge ${device.status.toLowerCase()}`}>{device.status === 'ONLINE' ? 'En ligne' : device.status === 'UNSTABLE' ? 'Instable' : 'Hors ligne'}</span></td>
                    <td>{formatDate(device.lastHeartbeatAt)}</td>
                    <td><RowActions onEdit={() => editDevice(device)} onDelete={() => alert('Suppression équipement à valider côté backend.')} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <PanelFooter count={filteredDevices.length} label="équipement" />
          </div>

          {activeForm === 'device' && (
          <form className="mboaAdminFormPanel" onSubmit={submitDevice}>
            <div className="mboaFormHeader">
              <h2>{editingDeviceId ? 'Modifier équipement réseau' : 'Nouvel équipement réseau'}</h2>
              <button type="button" onClick={closeForm}>Fermer</button>
            </div>
            <label>Hôtel<select value={deviceForm.hotelId} onChange={(event) => setDeviceForm((prev) => ({ ...prev, hotelId: event.target.value }))} required>
              <option value="">Sélectionner un hôtel</option>
              {hotels.map((hotel) => <option key={hotel.id} value={hotel.id}>{hotel.name}</option>)}
            </select></label>
            <label>Nom / modèle<input value={deviceForm.model} onChange={(event) => setDeviceForm((prev) => ({ ...prev, model: event.target.value }))} placeholder="AP-RECEPTION-01" /></label>
            <label>Adresse MAC<input value={deviceForm.macAddress} onChange={(event) => setDeviceForm((prev) => ({ ...prev, macAddress: event.target.value }))} disabled={!!editingDeviceId} required /></label>
            <label>Adresse IP<input value={deviceForm.localIp} onChange={(event) => setDeviceForm((prev) => ({ ...prev, localIp: event.target.value }))} placeholder="192.168.1.100" /></label>
            <div className="mboaFormGrid">
              <label>Zone<input value={deviceForm.zone} onChange={(event) => setDeviceForm((prev) => ({ ...prev, zone: event.target.value }))} /></label>
              <label>Étage<input type="number" value={deviceForm.floor} onChange={(event) => setDeviceForm((prev) => ({ ...prev, floor: event.target.value }))} /></label>
            </div>
            <button className="mboaPrimaryButton" disabled={isSaving}><Save size={16} />{editingDeviceId ? "Enregistrer l'équipement" : "Créer l'équipement"}</button>
          </form>
          )}
        </section>

        <section id="codes" className="mboaAdminUtilitySection">
          <PanelHeader title="Codes WiFi" subtitle="Pilotage global des accès clients par hôtel" actionLabel="Voir les codes" onAction={() => setHotelFilter('all')} />
          <div className="mboaUtilityGrid">
            <UtilityCard icon={<KeyRound size={18} />} title="Codes actifs" value={`${stats.users}`} detail="Les codes restent administrés depuis les hôtels concernés." />
            <UtilityCard icon={<Hotel size={18} />} title="Filtrage hôtel" value={hotels.length ? 'Disponible' : 'À configurer'} detail="Le super admin conserve la vue globale et peut filtrer par hôtel." />
            <UtilityCard icon={<ShieldCheck size={18} />} title="Contrôle" value="Admin" detail="Création, révocation et suivi seront consolidés ici." />
          </div>
        </section>

        <section id="connections" className="mboaAdminUtilitySection">
          <PanelHeader title="Connexions" subtitle="Suivi administrateur des clients connectés, hors ligne ou expirés" actionLabel="Actualiser" onAction={loadData} />
          <div className="mboaUtilityGrid">
            <UtilityCard icon={<Plug size={18} />} title="Équipements en ligne" value={String(stats.onlineDevices)} detail="Indicateur réseau disponible depuis les équipements remontés." />
            <UtilityCard icon={<Wifi size={18} />} title="Hôtels couverts" value={String(stats.hotels)} detail="Les connexions seront filtrables par hôtel dans cette section." />
            <UtilityCard icon={<FileClock size={18} />} title="Historique" value="Prévu" detail="Journal des sessions et expirations à consolider côté API." />
          </div>
        </section>

        <section id="admin-notifications" className="mboaAdminUtilitySection">
          <PanelHeader title="Notifications" subtitle="Messages système envoyés aux acteurs MboaLink" actionLabel="Nouveau message" onAction={() => alert('Le formulaire de notification admin sera branché ici.')} />
          <div className="mboaUtilityGrid">
            <UtilityCard icon={<Bell size={18} />} title="Canaux" value="Plateforme" detail="Admin vers support, IT hôtel et réception selon les règles définies." />
            <UtilityCard icon={<UserRound size={18} />} title="Destinataires" value={String(users.length)} detail="Tous les acteurs actifs peuvent être ciblés selon leur rôle." />
            <UtilityCard icon={<Hotel size={18} />} title="Ciblage hôtel" value="Oui" detail="Les annonces peuvent être préparées pour un hôtel précis." />
          </div>
        </section>

        <section id="reports" className="mboaAdminUtilitySection">
          <PanelHeader title="Rapports" subtitle="Vue de synthèse pour suivre l'exploitation MboaLink" actionLabel="Exporter" onAction={() => alert('Export des rapports à brancher côté backend.')} />
          <div className="mboaUtilityGrid">
            <UtilityCard icon={<Users size={18} />} title="Utilisateurs" value={String(stats.users)} detail="Volume total d'acteurs enregistrés." />
            <UtilityCard icon={<Building2 size={18} />} title="Hôtels" value={String(stats.hotels)} detail="Hôtels actifs dans la plateforme." />
            <UtilityCard icon={<Network size={18} />} title="Réseau" value={String(stats.devices)} detail="Équipements déclarés dans MboaLink." />
          </div>
        </section>

        <section id="settings" className="mboaAdminUtilitySection">
          <PanelHeader title="Paramètres" subtitle="Configuration globale de la plateforme" actionLabel="Enregistrer" onAction={() => alert('Paramètres globaux à connecter à une API dédiée.')} />
          <div className="mboaUtilityGrid">
            <UtilityCard icon={<Settings size={18} />} title="Environnement" value="Production" detail="Paramètres applicatifs et valeurs de déploiement." />
            <UtilityCard icon={<Database size={18} />} title="Base de données" value="PostgreSQL" detail="Postgres stabilisé avec initialisation durable du mot de passe." />
            <UtilityCard icon={<ShieldCheck size={18} />} title="Sécurité" value="Rôles" detail="Accès séparés entre admin, support, IT hôtel et réception." />
          </div>
        </section>

        <section id="roles" className="mboaAdminUtilitySection">
          <PanelHeader title="Rôles & Permissions" subtitle="Résumé des droits principaux" actionLabel="Synchroniser" onAction={loadData} />
          <div className="mboaPermissionList">
            <PermissionRow role="ADMIN" description="Super admin MboaLink, gestion complète depuis cette interface." />
            <PermissionRow role="SUPPORT" description="Vue opérationnelle sans Hotel Manager ni Device Manager." />
            <PermissionRow role="HOTEL_IT" description="Gestion technique limitée à son hôtel." />
            <PermissionRow role="RECEPTIONIST" description="Accès limité à Manual Login pour son hôtel." />
          </div>
        </section>

        <section id="integrations" className="mboaAdminUtilitySection">
          <PanelHeader title="Intégrations" subtitle="Services connectés à MboaLink" actionLabel="Tester" onAction={() => alert('Tests d’intégration à connecter aux endpoints de santé.')} />
          <div className="mboaUtilityGrid">
            <UtilityCard icon={<Database size={18} />} title="Swagger API" value="Disponible" detail="Documentation backend accessible via /api-docs." />
            <UtilityCard icon={<Wifi size={18} />} title="FreeRADIUS" value="En cours" detail="Intégration réseau à stabiliser avec l'équipe radius." />
            <UtilityCard icon={<Plug size={18} />} title="Portail captif" value="Actif" detail="Authentification client par UUID, code WiFi, nom et chambre." />
          </div>
        </section>

        {isLoading && <div className="mboaLoading">Chargement de l'administration...</div>}
      </main>
    </div>
  )
}

function PanelHeader({ title, subtitle, actionLabel, onAction }: { title: string; subtitle: string; actionLabel: string; onAction: () => void }) {
  return (
    <div className="mboaPanelHeader">
      <div><h2>{title}</h2><p>{subtitle}</p></div>
      <button type="button" onClick={onAction}>{actionLabel}</button>
    </div>
  )
}

function PanelFooter({ count, label }: { count: number; label: string }) {
  return <div className="mboaPanelFooter">Affichage de 1 à {count} sur {count} {label}{count > 1 ? 's' : ''}</div>
}

function UserCell({ name }: { name: string }) {
  return (
    <div className="mboaUserCell">
      <span>{initials(name)}</span>
      <strong>{name}</strong>
    </div>
  )
}

function RowActions({ onEdit, onDelete, deleteTitle = 'Supprimer' }: { onEdit: () => void; onDelete: () => void; deleteTitle?: string }) {
  return (
    <div className="mboaRowActions">
      <button type="button" onClick={onEdit} title="Modifier"><Pencil size={15} /></button>
      <button type="button" onClick={onDelete} title={deleteTitle} className="danger"><Trash2 size={15} /></button>
    </div>
  )
}

function UtilityCard({ icon, title, value, detail }: { icon: React.ReactNode; title: string; value: string; detail: string }) {
  return (
    <article className="mboaUtilityCard">
      <span>{icon}</span>
      <strong>{value}</strong>
      <h3>{title}</h3>
      <p>{detail}</p>
    </article>
  )
}

function PermissionRow({ role, description }: { role: string; description: string }) {
  return (
    <div className="mboaPermissionRow">
      <strong>{role}</strong>
      <span>{description}</span>
    </div>
  )
}
