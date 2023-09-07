import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

// Componentes generales

// Páginas de autenticación
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./pages/ProtectedRoute";

// Páginas de trabajos
import Jobs from "./pages/Jobs";
import AllJobs from "./pages/AllJobs";
import JobDetails from "./pages/JobDetails";

// Componentes del sitio
import NewHome from "./pages/NewHome";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/Aboutme";
import Contact from "./pages/Contact";
import AboutMeRegister from "./pages/AboutMeRegister";

// Rutas personalizadas
import RouteWithUser from "./pages/RouteWithUser";
import LoginAndregister from "./pages/LoginAndregister";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="newhome" />} />
          <Route path="/newhome" element={<NewHome />} />

          <Route path="/login" element={<LoginAndregister />} />
          <Route path="/register" element={<LoginAndregister />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/all-jobs" element={<AllJobs />} />
            <Route path="/detail-jobs/:id" element={<JobDetails />} />
            <Route path="/about-me" element={<AboutMeRegister />} />
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
