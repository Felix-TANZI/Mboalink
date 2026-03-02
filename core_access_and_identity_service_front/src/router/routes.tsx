// Configuration des routes de l'application
export const routes = {
  public: {
    home: '/home',
    dashboard: '/dashboard',
    login: '/login',
    mfa: '/mfa',
    register: '/register',
    forgotPassword: '/forgot-password',
    wifiCode: '/logins/wifi-code',
    loginByAddress: '/logins/login-by-address',
    statusLogins: '/logins/status-logins',
    manualLogin: '/logins/manual-login',
    websitesManager: '/logins/websites-manager',
    configCode: '/logins/config-code',
    hotels: '/hotel-manager/hotels',
    rooms: '/hotel-manager/rooms',
    configWifi: '/hotel-manager/config-wifi',
    devices: '/device-manager/devices',
  },
  protected: {
    dashboard: '/dashboard',
    profile: '/profile',
    settings: '/settings',
  },
  admin: {
    users: '/admin/users',
    settings: '/admin/settings',
  },
} as const;
