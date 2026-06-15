import { useEffect, useMemo, useState } from 'react'
import Layout from '@/components/mboalink/Layout'
import {
  mboalinkService,
  type HotelEntity,
  type NotificationEntity,
  type NotificationPriority,
  type NotificationRecipientEntity,
  type UserRole,
} from '@/services/mboalinkService'
import { authService } from '@/services/auth/authService'
import './Notifications.css'

type TargetMode = 'ALL' | 'HOTEL' | 'ROLE' | 'USERS'

const roleLabels: Record<string, string> = {
  ADMIN: 'Admins MboaLink',
  SUPPORT: 'Support IT MboaLink',
  HOTEL_IT: 'IT hôtel',
  RECEPTIONIST: 'Réceptionnistes',
}

const priorityLabels: Record<NotificationPriority, string> = {
  INFO: 'Information',
  WARNING: 'Attention',
  URGENT: 'Urgent',
}

const defaultForm = {
  title: '',
  message: '',
  priority: 'INFO' as NotificationPriority,
  category: '',
  targetMode: 'ALL' as TargetMode,
  hotelId: '',
  role: 'RECEPTIONIST' as UserRole,
  userIds: [] as string[],
}

function formatDate(value: string) {
  return new Date(value).toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function Notifications() {
  const currentUser = authService.getStoredUser()
  const canSend = currentUser?.role === 'ADMIN' || currentUser?.role === 'SUPPORT' || currentUser?.role === 'HOTEL_IT'
  const isHotelIt = currentUser?.role === 'HOTEL_IT'
  const [activeTab, setActiveTab] = useState<'inbox' | 'sent'>('inbox')
  const [inbox, setInbox] = useState<NotificationEntity[]>([])
  const [sent, setSent] = useState<NotificationEntity[]>([])
  const [recipients, setRecipients] = useState<NotificationRecipientEntity[]>([])
  const [hotels, setHotels] = useState<HotelEntity[]>([])
  const [formData, setFormData] = useState(defaultForm)
  const [isLoading, setIsLoading] = useState(true)
  const [isSending, setIsSending] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const loadData = async () => {
    try {
      const requests: Array<Promise<unknown>> = [
        mboalinkService.listNotificationsInbox(),
        mboalinkService.listNotificationRecipients(),
      ]
      if (canSend) requests.push(mboalinkService.listSentNotifications())
      if (!isHotelIt) requests.push(mboalinkService.listHotels())

      const [inboxList, recipientList, sentListOrHotels, maybeHotels] = await Promise.all(requests)
      setInbox(inboxList as NotificationEntity[])
      setRecipients(recipientList as NotificationRecipientEntity[])
      if (canSend) setSent((sentListOrHotels as NotificationEntity[]) || [])
      if (isHotelIt) {
        setHotels([])
        setFormData((prev) => ({ ...prev, targetMode: 'HOTEL' }))
      } else {
        setHotels((canSend ? maybeHotels : sentListOrHotels) as HotelEntity[] || [])
      }
    } catch (error) {
      alert((error as Error).message || 'Chargement des notifications impossible')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const filteredInbox = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return inbox
    return inbox.filter((notification) =>
      `${notification.title} ${notification.message} ${notification.sender?.fullName || ''} ${notification.hotel?.name || ''}`
        .toLowerCase()
        .includes(q),
    )
  }, [inbox, searchQuery])

  const unreadCount = useMemo(
    () => inbox.filter((notification) => !notification.recipients?.[0]?.readAt).length,
    [inbox],
  )

  const handleRecipientToggle = (userId: string) => {
    setFormData((prev) => ({
      ...prev,
      userIds: prev.userIds.includes(userId)
        ? prev.userIds.filter((id) => id !== userId)
        : [...prev.userIds, userId],
    }))
  }

  const handleTargetModeChange = (targetMode: TargetMode) => {
    setFormData((prev) => ({
      ...prev,
      targetMode,
      userIds: [],
    }))
  }

  const handleSend = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!canSend) return
    if (formData.targetMode === 'HOTEL' && !isHotelIt && !formData.hotelId) {
      alert('Sélectionnez un hôtel.')
      return
    }
    if (formData.targetMode === 'USERS' && formData.userIds.length === 0) {
      alert('Sélectionnez au moins un destinataire.')
      return
    }

    try {
      setIsSending(true)
      await mboalinkService.createNotification({
        title: formData.title,
        message: formData.message,
        priority: formData.priority,
        category: formData.category,
        targetMode: formData.targetMode,
        hotelId: formData.hotelId,
        role: formData.role,
        userIds: formData.userIds,
      })
      setFormData(isHotelIt ? { ...defaultForm, targetMode: 'HOTEL' } : defaultForm)
      await loadData()
      setActiveTab('sent')
    } catch (error) {
      alert((error as Error).message || 'Envoi impossible')
    } finally {
      setIsSending(false)
    }
  }

  const markAsRead = async (notification: NotificationEntity) => {
    if (notification.recipients?.[0]?.readAt) return
    try {
      await mboalinkService.markNotificationRead(notification.id)
      await loadData()
    } catch (error) {
      alert((error as Error).message || 'Action impossible')
    }
  }

  const visibleSent = sent

  return (
    <Layout activePage="NOTIFICATIONS" activeSubPage="Messages">
      <div className="notificationsPage">
        <div className="pageHeader">
          <div>
            <h1 className="pageTitle">Notifications internes</h1>
            <p className="pageSubtitle">
              Messages de service, maintenances, consignes et alertes internes MboaLink.
            </p>
          </div>
          <div className="notificationCounter">
            <strong>{unreadCount}</strong>
            <span>non lue{unreadCount !== 1 ? 's' : ''}</span>
          </div>
        </div>

        <div className="notificationsGrid">
          {canSend && (
            <form className="notificationComposer" onSubmit={handleSend}>
              <h2>Nouveau message</h2>

              <label>
                Titre
                <input
                  value={formData.title}
                  onChange={(event) => setFormData((prev) => ({ ...prev, title: event.target.value }))}
                  required
                  maxLength={140}
                  placeholder="Ex : Maintenance programmée"
                />
              </label>

              <label>
                Message
                <textarea
                  value={formData.message}
                  onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                  required
                  maxLength={4000}
                  rows={6}
                  placeholder="Détaillez la consigne ou l'incident..."
                />
              </label>

              <div className="notificationFormRow">
                <label>
                  Priorité
                  <select
                    value={formData.priority}
                    onChange={(event) => setFormData((prev) => ({ ...prev, priority: event.target.value as NotificationPriority }))}
                  >
                    {Object.entries(priorityLabels).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Catégorie
                  <input
                    value={formData.category}
                    onChange={(event) => setFormData((prev) => ({ ...prev, category: event.target.value }))}
                    placeholder="Maintenance, incident..."
                  />
                </label>
              </div>

              <label>
                Destinataires
                <select
                  value={formData.targetMode}
                  onChange={(event) => handleTargetModeChange(event.target.value as TargetMode)}
                  disabled={isHotelIt}
                >
                  {!isHotelIt && <option value="ALL">Tous les acteurs</option>}
                  <option value="HOTEL">{isHotelIt ? 'Réceptionnistes de mon hôtel' : 'Acteurs d’un hôtel'}</option>
                  {!isHotelIt && <option value="ROLE">Un rôle précis</option>}
                  <option value="USERS">Utilisateurs précis</option>
                </select>
              </label>

              {formData.targetMode === 'HOTEL' && !isHotelIt && (
                <label>
                  Hôtel
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

              {formData.targetMode === 'ROLE' && (
                <label>
                  Rôle
                  <select
                    value={formData.role}
                    onChange={(event) => setFormData((prev) => ({ ...prev, role: event.target.value as UserRole }))}
                  >
                    {Object.entries(roleLabels).map(([role, label]) => (
                      <option key={role} value={role}>{label}</option>
                    ))}
                  </select>
                </label>
              )}

              {formData.targetMode === 'USERS' && (
                <div className="recipientPicker">
                  {recipients.map((recipient) => (
                    <label key={recipient.id} className="recipientOption">
                      <input
                        type="checkbox"
                        checked={formData.userIds.includes(recipient.id)}
                        onChange={() => handleRecipientToggle(recipient.id)}
                      />
                      <span>
                        <strong>{recipient.fullName}</strong>
                        <small>{roleLabels[recipient.role] || recipient.role}{recipient.hotel?.name ? ` - ${recipient.hotel.name}` : ''}</small>
                      </span>
                    </label>
                  ))}
                </div>
              )}

              <button className="btn btnPrimary" disabled={isSending}>
                {isSending ? 'Envoi...' : 'Envoyer la notification'}
              </button>
            </form>
          )}

          <section className="notificationPanel">
            <div className="notificationTabs">
              <button
                type="button"
                className={activeTab === 'inbox' ? 'active' : ''}
                onClick={() => setActiveTab('inbox')}
              >
                Réception
              </button>
              {canSend && (
                <button
                  type="button"
                  className={activeTab === 'sent' ? 'active' : ''}
                  onClick={() => setActiveTab('sent')}
                >
                  Envoyés
                </button>
              )}
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Rechercher..."
              />
            </div>

            {isLoading && <p className="notificationEmpty">Chargement...</p>}

            {!isLoading && activeTab === 'inbox' && (
              <div className="notificationList">
                {filteredInbox.length === 0 ? (
                  <p className="notificationEmpty">Aucune notification reçue.</p>
                ) : (
                  filteredInbox.map((notification) => {
                    const isUnread = !notification.recipients?.[0]?.readAt
                    return (
                      <article key={notification.id} className={`notificationItem ${notification.priority.toLowerCase()} ${isUnread ? 'unread' : ''}`}>
                        <div className="notificationItemTop">
                          <span className={`priorityBadge ${notification.priority.toLowerCase()}`}>
                            {priorityLabels[notification.priority]}
                          </span>
                          <small>{formatDate(notification.createdAt)}</small>
                        </div>
                        <h3>{notification.title}</h3>
                        <p>{notification.message}</p>
                        <div className="notificationMeta">
                          <span>De : {notification.sender?.fullName || 'Système'}</span>
                          {notification.hotel?.name && <span>Hôtel : {notification.hotel.name}</span>}
                          {notification.category && <span>{notification.category}</span>}
                        </div>
                        {isUnread && (
                          <button type="button" className="markReadBtn" onClick={() => markAsRead(notification)}>
                            Marquer comme lu
                          </button>
                        )}
                      </article>
                    )
                  })
                )}
              </div>
            )}

            {!isLoading && activeTab === 'sent' && canSend && (
              <div className="notificationList">
                {visibleSent.length === 0 ? (
                  <p className="notificationEmpty">Aucun message envoyé.</p>
                ) : (
                  visibleSent.map((notification) => (
                    <article key={notification.id} className={`notificationItem ${notification.priority.toLowerCase()}`}>
                      <div className="notificationItemTop">
                        <span className={`priorityBadge ${notification.priority.toLowerCase()}`}>
                          {priorityLabels[notification.priority]}
                        </span>
                        <small>{formatDate(notification.createdAt)}</small>
                      </div>
                      <h3>{notification.title}</h3>
                      <p>{notification.message}</p>
                      <div className="notificationMeta">
                        <span>{notification.recipients.length} destinataire{notification.recipients.length !== 1 ? 's' : ''}</span>
                        {notification.hotel?.name && <span>Hôtel : {notification.hotel.name}</span>}
                      </div>
                    </article>
                  ))
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </Layout>
  )
}
