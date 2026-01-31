import React, { createContext, useEffect, useMemo, useState } from "react";
import * as authService from "../services/authService";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {id,name,email,role}
  const [loading, setLoading] = useState(true);

  const isLoggedIn = !!user;

  useEffect(() => {
    const bootstrap = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const me = await authService.me();
        setUser(me.data);
      } catch (e) {
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    bootstrap();
  }, []);

  const login = async (email, password) => {
    const res = await authService.login({ email, password });
    localStorage.setItem("token", res.data.token);
    const me = await authService.me();
    setUser(me.data);
    return me.data;
  };

  const register = async (payload) => {
    const res = await authService.register(payload);
    localStorage.setItem("token", res.data.token);
    const me = await authService.me();
    setUser(me.data);
    return me.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/login";
  };

  const value = useMemo(
    () => ({ user, isLoggedIn, loading, login, register, logout }),
    [user, isLoggedIn, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
