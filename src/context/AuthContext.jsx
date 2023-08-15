import React, { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { registerRequest, loginRequest, verifyRequest } from "../api/auth";
import { registerJobRequest } from "../api/crud";
import { useToasts } from "react-toast-notifications";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UseAuth must be used within an Authprovider");
  }
  return context;
};
export const AuthProvider = ({ children }) => {
  const { addToast } = useToasts();
  const [user, setuser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const singUp = async (values) => {
    try {
      const registerResponse = await registerRequest(values);
      if (registerResponse?.data?.success) {
        setuser(registerResponse?.data);
        setIsAuth(true);
        // La solicitud fue exitosa, muestra una notificación de éxito
        addToast("Registro exitoso", { appearance: "success" });
      } else {
        // La solicitud falló, muestra una notificación de error
        addToast("Error en el registro", { appearance: "error" });
      }
    } catch (error) {
      console.log(error);
      console.error(
        "Error en la solicitud de registro:",
        error?.response?.data
      );
      // Muestra una notificación de error en caso de excepción
      addToast(error?.response?.data || error?.message, {
        appearance: "error",
      });
    }
  };

  const singIn = async (values) => {
    try {
      const loginResponse = await loginRequest(values);
      if (loginResponse?.data?.success) {
        setuser(loginResponse?.data);
        setIsAuth(true);
        // La solicitud fue exitosa, muestra una notificación de éxito
        addToast("inicio de sesión exitoso", { appearance: "success" });
      } else {
        // La solicitud falló, muestra una notificación de error8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        addToast("Error al iniciar sesión", { appearance: "error" });
      }
    } catch (error) {
      console.log(error);
      console.error("Error al iniciar sesión:", error?.response?.data);
      // Muestra una notificación de error en caso de excepción
      addToast(error?.response?.data || error?.message, {
        appearance: "error",
      });
    }
  };

  const createJobs = async (values) => {
    try {
      const createJob = await registerJobRequest(values);
      if (createJob?.data?.success) {
        // La solicitud fue exitosa, muestra una notificación de éxito
        addToast("Success", { appearance: "success" });
      } else {
        // La solicitud falló, muestra una notificación de
        addToast("Error", { appearance: "error" });
      }
    } catch (error) {
      console.log(error);
      console.error("Error al iniciar sesión:", error?.response?.data);
      // Muestra una notificación de error en caso de excepción
      addToast(error?.response?.data || error?.message, {
        appearance: "error",
      });
    }
  };
  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuth(false);
        return setuser(null);
      }
      try {
        const res = await verifyRequest(cookies.token);
        if (!res.data) {
          setIsAuth(false);
          setLoading(false);
          return;
        }

        setIsAuth(true);
        setuser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuth(false);
        setuser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ singUp, user, isAuth, singIn, loading, createJobs }}
    >
      {children}
    </AuthContext.Provider>
  );
};
