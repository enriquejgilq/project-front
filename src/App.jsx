import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

// Componentes generales
import Navbar from "./components/Navbar";
import Transition from "./components/Transition";

// Páginas de autenticación
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./pages/ProtectedRoute";

// Páginas de trabajos
import Jobs from "./pages/Jobs";
import AllJobs from "./pages/AllJobs";
import JobDetails from "./pages/JobDetails";

// Componentes del sitio
import NewHome from "./components/NewHome";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

// Rutas personalizadas
import RouteWithUser from "./pages/RouteWithUser";

import UserNotFoundScreen from "./pages/UserNotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="newhome" />} />
          <Route path="/newhome" element={<NewHome />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/all-jobs" element={<AllJobs />} />
            <Route path="/detail-jobs/:id" element={<JobDetails />} />
          </Route>

          {/* RouteWithUser */}
          <Route element={<RouteWithUser />}>
            {/* Include the Navbar here */}

            <Route path="/profile/:nickname" element={<Home />} />
            <Route path="/projects/:nickname" element={<Projects />} />
            <Route path="/aboutme/:nickname" element={<AboutMe />} />
            <Route path="/contact/:nickname" element={<Contact />} />
            {/* Add routes for aboutme, contact, etc. */}
          </Route>

          {/* Handle non-existing paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
