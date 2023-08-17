import React from "react";

const UserNotFoundScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Usuario no encontrado</h1>
      <p className="text-gray-600">
        El usuario que estás buscando no ha sido encontrado.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Volver al inicio
      </button>
    </div>
  );
};

export default UserNotFoundScreen;
