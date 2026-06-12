type ScopedUser = {
  role?: string | null
  hotelId?: string | null
}

export const ALL_HOTELS = 'all'

export function canSelectHotelScope(user?: ScopedUser | null) {
  return user?.role === 'ADMIN' || user?.role === 'SUPPORT'
}

export function getInitialHotelScope(user?: ScopedUser | null, hotels: Array<{ id: string }> = []) {
  if (canSelectHotelScope(user)) return ALL_HOTELS
  return user?.hotelId || hotels[0]?.id || ''
}

export function hotelScopeToQuery(hotelScope?: string | null) {
  if (!hotelScope || hotelScope === ALL_HOTELS) return undefined
  return hotelScope
}

export function hasConcreteHotelScope(hotelScope?: string | null) {
  return !!hotelScope && hotelScope !== ALL_HOTELS
}
