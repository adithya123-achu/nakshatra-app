const TOKEN_KEY = 'nakshatra_token';

export const getStoredToken = () => localStorage.getItem(TOKEN_KEY);

export const setStoredToken = (token) => localStorage.setItem(TOKEN_KEY, token);

export const clearStoredToken = () => localStorage.removeItem(TOKEN_KEY);
