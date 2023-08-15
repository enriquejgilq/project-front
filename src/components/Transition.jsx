import React, { useState, useEffect } from "react";

const Transition = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(true);
    } else {
      const timeout = setTimeout(() => setRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  return shouldRender ? children : null;
};

export default Transition;
