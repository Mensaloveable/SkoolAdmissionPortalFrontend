const baseUrl = import.meta.env.VITE_BASE_URL;

// Auth endpoints
export const login = `${baseUrl}auth/login`;
export const signup = `${baseUrl}auth/signup`;
export const createPassword = `${baseUrl}auth/create-password`;
export const passwordReset = `${baseUrl}auth/forgot-password`;
