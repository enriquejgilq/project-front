import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/Loading";

function ProtectedRoute() {
  const { loading, isAuth } = useAuth();
  if (loading) {
    return <Loading />;
  }
  if (!loading && !isAuth) return <Navigate to="/" replace />;
  return <Outlet />;
}

export default ProtectedRoute;
