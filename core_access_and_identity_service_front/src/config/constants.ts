// Constantes globales de l'application
export const APP_CONFIG = {
  name: 'MboaLink',
  tagline: 'PROPERTY MANAGEMENT • SMART ACCESS',
  version: '1.0.0',
} as const;

export const FEATURE_FLAGS = {
  enableRegistration: true,
  enablePasswordReset: true,
} as const;

export const ROUTES = {
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  dashboard: '/dashboard',
} as const;
