import { useEffect, useMemo, useState } from 'react'
import Layout from '@/components/mboalink/Layout'
import { mboalinkService, type HotelEntity, type UserEntity, type UserRole } from '@/services/mboalinkService'
import './UserManager.css'

const roleLabels: Record<UserRole, string> = {
  ADMIN: 'Admin Mboalink',
  SUPPORT: 'Support IT Mboalink',
  HOTEL_IT: 'IT hôtel',
  RECEPTIONIST: 'Réceptionniste',
  CLIENT: 'Client',
}

const hotelScopedRoles: UserRole[] = ['HOTEL_IT', 'RECEPTIONIST']
const mboalinkTeamRoles: UserRole[] = ['ADMIN', 'SUPPORT']

const defaultForm = {
  email: '',
  password: '',
  fullName: '',
  role: 'RECEPTIONIST' as UserRole,
  hotelId: '',
  isActive: true,
}

export default function UserManager() {
  const [users, setUsers] = useState<UserEntity[]>([])
  const [hotels, setHotels] = useState<HotelEntity[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState<UserRole | ''>('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [editingUser, setEditingUser] = useState<UserEntity | null>(null)
  const [formData, setFormData] = useState(defaultForm)

  const loadData = async () => {
    try {
      const [userList, hotelList] = await Promise.all([
        mboalinkService.listUsers(),
        mboalinkService.listHotels(),
      ])
      setUsers(userList)
      setHotels(hotelList)
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
    const q = searchQuery.trim().toLowerCase()
    return users.filter((user) => {
      const matchesRole = roleFilter ? user.role === roleFilter : true
      const searchable = `${user.fullName} ${user.email} ${roleLabels[user.role]} ${user.hotel?.name || ''}`.toLowerCase()
      return matchesRole && (!q || searchable.includes(q))
    })
  }, [users, searchQuery, roleFilter])

  const stats = useMemo(() => ({
    total: users.length,
    active: users.filter((user) => user.isActive).length,
    hotelScoped: users.filter((user) => hotelScopedRoles.includes(user.role)).length,
    mboalinkTeam: users.filter((user) => user.role === 'ADMIN' || user.role === 'SUPPORT').length,
  }), [users])

  const resetForm = () => {
    setEditingUser(null)
    setFormData(defaultForm)
  }

  const handleEdit = (user: UserEntity) => {
    setEditingUser(user)
    setFormData({
      email: user.email,
      password: '',
      fullName: user.fullName,
      role: user.role,
      hotelId: user.hotelId || '',
      isActive: user.isActive,
    })
  }

  const handleRoleChange = (role: UserRole) => {
    setFormData((prev) => ({
      ...prev,
      role,
      hotelId: hotelScopedRoles.includes(role) ? prev.hotelId : '',
    }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (hotelScopedRoles.includes(formData.role) && !formData.hotelId) {
      alert('Veuillez associer cet utilisateur à un hôtel.')
      return
    }

    if (!editingUser && !formData.password) {
      alert('Le mot de passe est requis pour créer un utilisateur.')
      return
    }

    const payload = {
      email: formData.email,
      fullName: formData.fullName,
      role: formData.role,
      hotelId: hotelScopedRoles.includes(formData.role) ? formData.hotelId : '',
      isActive: formData.isActive,
      ...(formData.password ? { password: formData.password } : {}),
    }

    try {
      setIsSaving(true)
      if (editingUser) {
        await mboalinkService.updateUser(editingUser.id, payload)
      } else {
        await mboalinkService.createUser(payload)
      }
      resetForm()
      await loadData()
    } catch (error) {
      alert((error as Error).message || 'Enregistrement impossible')
    } finally {
      setIsSaving(false)
    }
  }

  const handleDeactivate = async (user: UserEntity) => {
    if (!confirm(`Désactiver le compte ${user.email} ?`)) return

    try {
      await mboalinkService.deactivateUser(user.id)
      await loadData()
    } catch (error) {
      alert((error as Error).message || 'Désactivation impossible')
    }
  }

  return (
    <Layout activePage="ADMIN" activeSubPage="Users">
      <div className="userManagerPage">
        <div className="pageHeader">
          <div>
            <h1 className="pageTitle">Gestion des utilisateurs</h1>
            <p className="pageSubtitle">
              Créez les comptes internes Mboalink et les comptes liés aux hôtels.
            </p>
          </div>
          {editingUser && (
            <button className="btn btnSecondary" onClick={resetForm}>
              Nouveau compte
            </button>
          )}
        </div>

        <div className="statsBar">
          <div className="statCard">
            <div className="statValue">{stats.total}</div>
            <div className="statLabel">Utilisateurs</div>
          </div>
          <div className="statCard">
            <div className="statValue">{stats.active}</div>
            <div className="statLabel">Actifs</div>
          </div>
          <div className="statCard">
            <div className="statValue">{stats.hotelScoped}</div>
            <div className="statLabel">Comptes hôtel</div>
          </div>
          <div className="statCard">
            <div className="statValue">{stats.mboalinkTeam}</div>
            <div className="statLabel">Équipe Mboalink</div>
          </div>
        </div>

        <div className="userManagerGrid">
          <form className="userForm" onSubmit={handleSubmit}>
            <h2>{editingUser ? 'Modifier un utilisateur' : 'Créer un utilisateur'}</h2>

            <label>
              Nom complet
              <input
                type="text"
                value={formData.fullName}
                onChange={(event) => setFormData((prev) => ({ ...prev, fullName: event.target.value }))}
                required
              />
            </label>

            <label>
              Adresse email
              <input
                type="email"
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                required
              />
            </label>

            <label>
              Mot de passe {editingUser ? '(laisser vide pour ne pas modifier)' : ''}
              <input
                type="password"
                value={formData.password}
                onChange={(event) => setFormData((prev) => ({ ...prev, password: event.target.value }))}
                required={!editingUser}
                minLength={8}
              />
            </label>

            <label>
              Rôle
              <select
                value={formData.role}
                onChange={(event) => handleRoleChange(event.target.value as UserRole)}
              >
                {Object.entries(roleLabels).map(([role, label]) => (
                  <option key={role} value={role}>{label}</option>
                ))}
              </select>
            </label>

            {hotelScopedRoles.includes(formData.role) && (
              <label>
                Hôtel associé
                <select
                  value={formData.hotelId}
                  onChange={(event) => setFormData((prev) => ({ ...prev, hotelId: event.target.value }))}
                  required
                >
                  <option value="">Sélectionner un hôtel</option>
                  {hotels.map((hotel) => (
                    <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
                  ))}
                </select>
              </label>
            )}

            {mboalinkTeamRoles.includes(formData.role) && (
              <p className="formHint">
                Ce rôle appartient à l'équipe Mboalink et n'a pas besoin d'être lié à un hôtel.
              </p>
            )}

            <label className="userToggle">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(event) => setFormData((prev) => ({ ...prev, isActive: event.target.checked }))}
              />
              Compte actif
            </label>

            <button className="btn btnPrimary" type="submit" disabled={isSaving}>
              {isSaving ? 'Enregistrement...' : editingUser ? 'Modifier' : 'Créer'}
            </button>
          </form>

          <div className="userListPanel">
            <div className="filtersBar">
              <input
                className="searchInput"
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Rechercher un nom, email, hôtel..."
              />
              <select
                className="filterSelect"
                value={roleFilter}
                onChange={(event) => setRoleFilter(event.target.value as UserRole | '')}
              >
                <option value="">Tous les rôles</option>
                {Object.entries(roleLabels).map(([role, label]) => (
                  <option key={role} value={role}>{label}</option>
                ))}
              </select>
            </div>

            <div className="userTableWrapper">
              {isLoading && <p className="loadingText">Chargement des utilisateurs...</p>}
              <table className="userTable">
                <thead>
                  <tr>
                    <th>Utilisateur</th>
                    <th>Rôle</th>
                    <th>Hôtel</th>
                    <th>Statut</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length === 0 && !isLoading ? (
                    <tr>
                      <td colSpan={5} className="emptyCell">Aucun utilisateur trouvé.</td>
                    </tr>
                  ) : filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <strong>{user.fullName}</strong>
                        <span>{user.email}</span>
                      </td>
                      <td><span className="roleBadge">{roleLabels[user.role]}</span></td>
                      <td>
                        {user.hotel?.name || (
                          mboalinkTeamRoles.includes(user.role)
                            ? <span className="platformScope">Équipe Mboalink</span>
                            : '—'
                        )}
                      </td>
                      <td>
                        <span className={`statusBadge ${user.isActive ? 'active' : 'inactive'}`}>
                          {user.isActive ? 'Actif' : 'Inactif'}
                        </span>
                      </td>
                      <td>
                        <div className="actionsCell">
                          <button className="actionBtn editBtn" type="button" onClick={() => handleEdit(user)}>
                            Modifier
                          </button>
                          {user.isActive && (
                            <button className="actionBtn dangerBtn" type="button" onClick={() => handleDeactivate(user)}>
                              Désactiver
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
