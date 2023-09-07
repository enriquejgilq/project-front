import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function RouteWithUser() {
  const { nickname, loading } = useParams();
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {nickname !== undefined || nickname !== null} {<Navbar />}
      <Outlet />
    </>
  );
}

export default RouteWithUser;
