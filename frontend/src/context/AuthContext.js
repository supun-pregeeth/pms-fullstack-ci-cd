import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getToken, getUser, removeToken, removeUser, setToken, setUser } from "../utils/storage";
import authService from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [token, setTokenState] = useState(getToken());
  const [user, setUserState] = useState(getUser());

  const isAuthenticated = !!token;

  useEffect(() => {
    // If token exists but user missing, try fetch /me
    async function hydrate() {
      try {
        if (token && !user) {
          const me = await authService.me();
          setUserState(me);
          setUser(me);
        }
      } catch (e) {
        // invalid token
        logout();
      } finally {
        setLoading(false);
      }
    }
    hydrate();
    // eslint-disable-next-line
  }, []);

  function login({ token: jwt, user: u }) {
    setTokenState(jwt);
    setUserState(u);
    setToken(jwt);
    setUser(u);
  }

  function logout() {
    setTokenState(null);
    setUserState(null);
    removeToken();
    removeUser();
  }

  const value = useMemo(
    () => ({ loading, user, token, isAuthenticated, login, logout }),
    [loading, user, token, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
