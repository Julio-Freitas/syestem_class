export const TOKEN_KEY = '@token-app';

export const isAuthenticade = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const loginAuth = (token) => localStorage.setItem(TOKEN_KEY, token);
export const logout = () => localStorage.removeItem(TOKEN_KEY);
