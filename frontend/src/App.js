import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import { AuthProvider } from "./context/AuthContext";
import ToastProvider from "./components/common/Toast/ToastProvider";

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <div className="appShell">
          <Navbar />
          <main className="appMain">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </AuthProvider>
  );
}
