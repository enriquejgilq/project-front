import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Transition from "./components/Transition";

import Login from "./pages/Login";
import Register from "./pages/register";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./pages/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Transition show={true}>
                  <Home />
                  <Projects />
                  <Aboutme />
                  <Contact />
                </Transition>
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />

          {/**Rutas privadas edicion de trabajos, eliminar   */}

          <Route element={<ProtectedRoute />}>
            <Route path="/jobs" element={<Jobs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
