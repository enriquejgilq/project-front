import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 border-opacity-50"></div>
    </div>
  );
};

export default Loading;
