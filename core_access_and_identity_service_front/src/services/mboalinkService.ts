import { ApiError, apiRequest } from "@/services/http/client";
import {
  clearSession,
  getAccessToken,
  getRefreshToken,
  getStoredUser,
  saveSession,
} from "@/services/auth/session";

export interface HotelEntity {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  contactEmail?: string;
  phone?: string;
  website?: string;
  description?: string;
  floors?: number;
  latitude?: number | null;
  longitude?: number | null;
  amenities: string[];
  photos: Array<{ url: string; isMain?: boolean; name?: string }>;
  status: "ACTIVE" | "INACTIVE" | "MAINTENANCE";
  createdAt: string;
  updatedAt: string;
  _count?: {
    rooms?: number;
    devices?: number;
  };
}

export interface RoomEntity {
  id: string;
  hotelId: string;
  type: string;
  name?: string;
  capacity: number;
  floor?: number;
  surface?: number;
  description?: string;
  equipments: string[];
  photos: Array<{ url: string; isMain?: boolean; name?: string }>;
  createdAt: string;
  updatedAt: string;
  hotel?: {
    id: string;
    name: string;
  };
}

export interface WifiConfigEntity {
  id: string;
  hotelId: string;
  ssid: string;
  authMethod:
    | "CAPTIVE_PORTAL"
    | "GUEST_PASS"
    | "ROOM_NUMBER"
    | "VOUCHER"
    | "SMS_CODE"
    | "EMAIL";
  sessionDuration: number;
  sessionUnit: "hours" | "days";
  maxDevices: number;
  uploadSpeedKbps: number;
  downloadSpeedKbps: number;
  zones: string[];
  captivePortal: {
    logo?: string;
    welcomeMessage?: string;
    termsUrl?: string;
  };
  status: "ACTIVE" | "INACTIVE";
  updatedAt: string;
  lastModifiedBy?: string;
  hotel?: {
    id: string;
    name: string;
  };
}

export interface GuestPassEntity {
  id: string;
  hotelId: string;
  roomId?: string | null;
  code: string;
  label?: string;
  clientName?: string | null;
  maxUses: number;
  uses: number;
  usedCount: number;
  durationValue?: number;
  durationUnit?: "Hours" | "Days";
  expiryAt?: string | null;
  uploadCapKbps: number;
  downloadCapKbps: number;
  zones: string[];
  isRevoked: boolean;
  createdAt: string;
  room?: {
    id: string;
    name?: string | null;
    type: string;
  };
}

export interface LoginSessionEntity {
  id: string;
  hotelId: string;
  roomId: string;
  guestPassId?: string | null;
  clientName?: string | null;
  ipAddress?: string | null;
  macAddress?: string | null;
  status: "ONLINE" | "OFFLINE" | "AWAY";
  type: string;
  startedAt: string;
  endedAt?: string | null;
  uploadCapKbps?: number | null;
  downloadCapKbps?: number | null;
  usedDownMb?: number | null;
  usedUpMb?: number | null;
  createdAt: string;
  room?: {
    id: string;
    type: string;
    name?: string;
  };
  guestPass?: {
    id: string;
    code: string;
    label?: string;
  };
}

export interface ClearedAddressEntity {
  id: string;
  hotelId: string;
  address: string;
  networkInterface?: string | null;
  expiresAt: string;
  uploadCapKbps: number;
  downloadCapKbps: number;
  connectionType?: string | null;
  notes?: string | null;
  issuedBy?: string | null;
  createdAt: string;
}

export interface GuestConfigEntity {
  id: string;
  hotelId: string;
  uploadClearAddressKbps: number;
  downloadClearAddressKbps: number;
  uploadGuestPassKbps: number;
  downloadGuestPassKbps: number;
  maxPassDurationDays: number;
  maxCountPass: number;
  outageModeEnabled: boolean;
}

export interface DeviceEntity {
  id: string;
  hotelId: string;
  macAddress: string;
  serialNumber?: string | null;
  model?: string | null;
  firmwareVersion?: string | null;
  localIp?: string | null;
  zone?: string | null;
  floor?: number | null;
  status: "ONLINE" | "OFFLINE" | "UNSTABLE";
  clientsConnected: number;
  lastHeartbeatAt?: string | null;
  installedAt?: string | null;
  createdAt: string;
  updatedAt: string;
  hotel?: {
    id: string;
    name: string;
  };
}

export interface DeviceMetricEntity {
  id: string;
  deviceId: string;
  cpuPercent?: number | null;
  memoryPercent?: number | null;
  temperatureC?: number | null;
  latencyMs?: number | null;
  errorRate?: number | null;
  throughputInKbps?: number | null;
  throughputOutKbps?: number | null;
  capturedAt: string;
}

export interface DashboardOverview {
  hotels: number;
  rooms: number;
  wifiConfigs: number;
  guestPasses: number;
  activeSessions: number;
  devicesByStatus: Array<{
    status: "ONLINE" | "OFFLINE" | "UNSTABLE";
    _count: { _all: number };
  }>;
  recentAlerts: Array<Record<string, unknown>>;
}

async function tryRefreshAccessToken(): Promise<string | null> {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return null;

  try {
    const response = await apiRequest<{ accessToken: string }>(
      "/auth/refresh",
      {
        method: "POST",
        body: { refreshToken },
      },
    );

    const user = getStoredUser();
    if (!user) return null;

    saveSession({
      accessToken: response.accessToken,
      refreshToken,
      user,
    });

    return response.accessToken;
  } catch (_error) {
    clearSession();
    return null;
  }
}

async function authedRequest<T>(
  path: string,
  options?: {
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: unknown;
    query?: Record<string, string | number | boolean | undefined>;
  },
) {
  const token = getAccessToken();
  if (!token) {
    throw new Error("Session expirée. Veuillez vous reconnecter.");
  }

  try {
    return await apiRequest<T>(path, {
      method: options?.method,
      body: options?.body,
      query: options?.query,
      authToken: token,
    });
  } catch (error) {
    if (!(error instanceof ApiError) || error.status !== 401) {
      throw error;
    }

    const refreshedToken = await tryRefreshAccessToken();
    if (!refreshedToken) {
      throw new Error("Session expirée. Veuillez vous reconnecter.");
    }

    return apiRequest<T>(path, {
      method: options?.method,
      body: options?.body,
      query: options?.query,
      authToken: refreshedToken,
    });
  }
}

export const mboalinkService = {
  listHotels(query?: { search?: string }) {
    return authedRequest<HotelEntity[]>("/hotels", { query });
  },
  createHotel(payload: Partial<HotelEntity>) {
    return authedRequest<HotelEntity>("/hotels", {
      method: "POST",
      body: payload,
    });
  },
  updateHotel(hotelId: string, payload: Partial<HotelEntity>) {
    return authedRequest<HotelEntity>(`/hotels/${hotelId}`, {
      method: "PATCH",
      body: payload,
    });
  },
  deleteHotel(hotelId: string) {
    return authedRequest<{ deleted: boolean }>(`/hotels/${hotelId}`, {
      method: "DELETE",
    });
  },

  listRooms(query?: { search?: string; hotelId?: string; type?: string }) {
    return authedRequest<RoomEntity[]>("/rooms", { query });
  },
  createRoom(hotelId: string, payload: Partial<RoomEntity>) {
    return authedRequest<RoomEntity>(`/hotels/${hotelId}/rooms`, {
      method: "POST",
      body: payload,
    });
  },
  updateRoom(roomId: string, payload: Partial<RoomEntity>) {
    return authedRequest<RoomEntity>(`/rooms/${roomId}`, {
      method: "PATCH",
      body: payload,
    });
  },
  deleteRoom(roomId: string) {
    return authedRequest<{ deleted: boolean }>(`/rooms/${roomId}`, {
      method: "DELETE",
    });
  },

  listWifiConfigs(query?: {
    search?: string;
    hotelId?: string;
    status?: "ACTIVE" | "INACTIVE";
  }) {
    return authedRequest<WifiConfigEntity[]>("/wifi-configs", { query });
  },
  upsertWifiConfig(hotelId: string, payload: Partial<WifiConfigEntity>) {
    return authedRequest<WifiConfigEntity>(`/hotels/${hotelId}/wifi-config`, {
      method: "PUT",
      body: payload,
    });
  },

  listGuestPasses(query?: {
    search?: string;
    hotelId?: string;
    isRevoked?: boolean;
  }) {
    return authedRequest<GuestPassEntity[]>("/guest-passes", { query });
  },
  createGuestPass(payload: Record<string, unknown>) {
    return authedRequest<GuestPassEntity>("/guest-passes", {
      method: "POST",
      body: payload,
    });
  },
  createGuestPassesBulk(payload: Record<string, unknown>) {
    return authedRequest<GuestPassEntity[]>("/guest-passes/bulk", {
      method: "POST",
      body: payload,
    });
  },
  revokeGuestPass(passId: string) {
    return authedRequest<GuestPassEntity>(`/guest-passes/${passId}/revoke`, {
      method: "PATCH",
    });
  },
  deleteGuestPass(passId: string) {
    return authedRequest<{ deleted: boolean }>(`/guest-passes/${passId}`, {
      method: "DELETE",
    });
  },

  listLoginSessions(query?: {
    search?: string;
    hotelId?: string;
    status?: string;
  }) {
    return authedRequest<LoginSessionEntity[]>("/login-sessions", { query });
  },
  createManualLogin(payload: Record<string, unknown>) {
    return authedRequest<LoginSessionEntity>("/login-sessions/manual", {
      method: "POST",
      body: payload,
    });
  },
  updateLoginSession(id: string, payload: Record<string, unknown>) {
    return authedRequest<LoginSessionEntity>(`/login-sessions/${id}`, {
      method: "PATCH",
      body: payload,
    });
  },

  listClearedAddresses(query?: { search?: string; hotelId?: string }) {
    return authedRequest<ClearedAddressEntity[]>("/cleared-addresses", {
      query,
    });
  },
  createClearedAddress(payload: Record<string, unknown>) {
    return authedRequest<ClearedAddressEntity>("/cleared-addresses", {
      method: "POST",
      body: payload,
    });
  },
  deleteClearedAddresses(ids: string[]) {
    return authedRequest<{ count: number }>("/cleared-addresses", {
      method: "DELETE",
      body: { ids },
    });
  },

  getGuestConfig(hotelId: string) {
    return authedRequest<GuestConfigEntity>(`/hotels/${hotelId}/guest-config`);
  },
  upsertGuestConfig(payload: Record<string, unknown>) {
    return authedRequest<GuestConfigEntity>("/guest-config", {
      method: "PUT",
      body: payload,
    });
  },

  listDevices(query?: {
    search?: string;
    hotelId?: string;
    status?: "ONLINE" | "OFFLINE" | "UNSTABLE";
  }) {
    return authedRequest<DeviceEntity[]>("/devices", { query });
  },
  createDevice(payload: Record<string, unknown>) {
    return authedRequest<DeviceEntity>("/devices", {
      method: "POST",
      body: payload,
    });
  },
  updateDevice(deviceId: string, payload: Record<string, unknown>) {
    return authedRequest<DeviceEntity>(`/devices/${deviceId}`, {
      method: "PATCH",
      body: payload,
    });
  },
  restartDevice(deviceId: string) {
    return authedRequest<{ accepted: boolean }>(
      `/devices/${deviceId}/restart`,
      { method: "POST" },
    );
  },
  listDeviceMetrics(deviceId: string, query?: { limit?: number }) {
    return authedRequest<DeviceMetricEntity[]>(`/devices/${deviceId}/metrics`, {
      query,
    });
  },

  getDashboardOverview(query?: { hotelId?: string }) {
    return authedRequest<DashboardOverview>("/dashboard/overview", { query });
  },
};
