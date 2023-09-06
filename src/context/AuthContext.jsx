import React, { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { registerRequest, loginRequest, verifyRequest } from "../api/auth";
import {
  registerJobRequest,
  getProfile,
  getPublicJobs,
  getPublicAboutme,
} from "../api/crud";
import Cookies from "js-cookie";
import CustomModal from "../components/CustomModal";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UseAuth must be used within an Authprovider");
  }
  return context;
};
export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [profilePublic, setProfilePublic] = useState(null);
  const [jobs, setjobs] = useState([]);
  const [aboutMe, setaboutMe] = useState({});
  console.log(user);
  ///registro de usuario
  const singUp = async (values) => {
    try {
      const registerResponse = await registerRequest(values);
      if (registerResponse?.data?.success) {
        setuser(registerResponse?.data);
        document.cookie = "token" + "=" + createJob?.data?.token;
        setIsAuth(true);
        // La solicitud fue exitosa, muestra una notificación de éxito
      } else {
        // La solicitud falló, muestra una notificación de error
      }
    } catch (error) {
      console.error("Error en la solicitud de registro:", error);
      // Muestra una notificación de error en caso de excepción
    }
  };
  //login
  const singIn = async (values) => {
    try {
      const loginResponse = await loginRequest(values);
      if (loginResponse?.data?.success) {
        setuser(loginResponse?.data);
        // document.cookie = "token" + "=" + loginResponse?.data?.token;
        setIsAuth(true);
        // La solicitud fue exitosa, muestra una notificación de éxito
        setLoading(false);
      } else {
        // La solicitud falló, muestra una notificación de
        setLoading(false);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error?.response?.data);
      // Muestra una notificación de error en caso de excepción

      setLoading(false);
    }
  };
  //crear trabajos
  const createJobs = async (values) => {
    try {
      const createJob = await registerJobRequest(values);
      if (createJob?.data?.success) {
        // La solicitud fue exitosa, muestra una notificación de éxito
      } else {
        // La solicitud falló, muestra una notificación de
      }
    } catch (error) {
      console.error("Error al crear :", error);
      // Muestra una notificación de error en caso de excepción
    }
  };

  //obtener informacion del usuario
  async function getProfileFunction(nickname) {
    try {
      const res = await getProfile(nickname);
      if (!res.data) {
        setIsError(true);
      } else {
        setProfilePublic(res.data);
      }

      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
    }
  }

  //obtener perfil publico
  async function getJobsFunction(nickname) {
    try {
      const res = await getPublicJobs(nickname);
      if (!res.data) {
        setIsError(true);
        setjobs([]);
      } else {
        setjobs(res.data);
      }

      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
      setjobs([]);
    }
  }

  async function getAboutMePublic(nickname) {
    try {
      const res = await getPublicAboutme(nickname);
      if (!res.data) {
        setIsError(true);
        setaboutMe({});
      } else {
        setaboutMe(res.data);
      }

      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
      setaboutMe({});
    }
  }

  //check token
  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (Object.keys(cookies).length === 0) {
        setIsAuth(false);
        setLoading(false);
        return setuser(null);
      }
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
      value={{
        singUp,
        user,
        isAuth,
        singIn,
        loading,
        createJobs,
        getProfileFunction,
        isError,
        profilePublic,
        getJobsFunction,
        jobs,
        getAboutMePublic,
        aboutMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
