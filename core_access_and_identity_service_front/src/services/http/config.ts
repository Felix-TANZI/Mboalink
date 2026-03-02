// Configuration HTTP client (axios ou fetch)
export const httpConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

// Intercepteurs pour ajouter des tokens, gérer les erreurs, etc.
export const setupInterceptors = () => {
  // Configuration des intercepteurs
  console.log('HTTP interceptors configured');
};
