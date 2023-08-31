import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

function RouteWithUser() {
  const { nickname } = useParams();
  return (
    <>
      {nickname !== undefined || nickname !== null} {<Navbar />}
      <Outlet />
    </>
  );
}

export default RouteWithUser;
