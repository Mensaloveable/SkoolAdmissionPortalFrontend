const baseUrl = import.meta.env.VITE_BASE_URL;

// Auth endpoints
export const login = `${baseUrl}auth/login`;
export const signup = `${baseUrl}auth/signup`;
