import React, { createContext, useContext, useState } from "react";

const ToastCtx = createContext(null);

export default function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  function showToast(type, message) {
    setToast({ type, message });
    setTimeout(() => setToast(null), 2500);
  }

  return (
    <ToastCtx.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className={`toast toast--${toast.type}`}>
          {toast.message}
        </div>
      )}
    </ToastCtx.Provider>
  );
}

export function useToast() {
  return useContext(ToastCtx);
}
