import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const PetitionNotFound = ({ title, subTitle, toNavigate }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600">{subTitle}</p>
      <Button variant="contained" onClick={() => navigate(toNavigate)}>
        Volver al inicio
      </Button>
    </div>
  );
};

export default PetitionNotFound;
