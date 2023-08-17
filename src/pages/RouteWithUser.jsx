import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import UserNotFoundScreen from "./UserNotFound";
import { useAuth } from "../context/AuthContext";

function RouteWithUser() {
  const { loading, getProfileFunction, isError } = useAuth();
  const { nickname } = useParams();

  useEffect(() => {
    getProfileFunction(nickname);
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (isError) {
    return <UserNotFoundScreen />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default RouteWithUser;
