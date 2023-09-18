import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loading";
import PetitionNotFound from "../pages/PetitionNotFound";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "atropos/css";
import Atropos from "atropos/react";
import styles from "./styles.module.css";

const Aboutme = () => {
  const { nickname } = useParams();
  const { loading, getAboutMePublic, isError, aboutMe } = useAuth();

  useEffect(() => {
    if (nickname === undefined || nickname === null) return;
    if (nickname) {
      getAboutMePublic(nickname);
    }
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (isError && !aboutMe) {
    return (
      <PetitionNotFound
        title="Información no encontrada."
        subTitle="Algo ha salido mal,puede verificar el nombre del usuario."
        toNavigate={"/"}
      />
    );
  }
  return (
    <div id="aboutme" className="animate-fade-in">
      <div className="w-full h-screen bg-gradient-to-bl from-green-900 via-gren-800 to-black  " />
      <div className="w-full h-screen absolute top-0 left-0 m-auto  flex flex-col !justify-center lg:items-start lg:justify-start !items-center">
        <Atropos
          className={styles.styleAtropos}
          activeOffset={40}
          shadowScale={1.05}
          shadow={true}
        >
          <div className="max-w-[700px] m-auto h-full w-full flex flex-col !justify-center lg:items-start lg:justify-start !items-center">
            <h1 className="sm:text-5xl text-4xl font-bold text-black-800 text-center sm:text-center md:w-[300px] md:text-3xl text-white">
              Sobre mí
            </h1>

            {aboutMe?.images?.length > 0 ? (
              <img
                src={aboutMe?.images[0].image}
                alt="aboutMe"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
            ) : (
              <AccountCircleIcon />
            )}

            <h2 className="flex text-black-800 text-center text-white p-7">
              {aboutMe.description}
            </h2>
            <div className="flex justify-center space-x-5 pt-6 max-w-[200px] w-full">
              {aboutMe?.other !== null ||
                (aboutMe?.other !== undefined && <p>{aboutMe?.other} </p>)}
            </div>
          </div>
        </Atropos>
      </div>
    </div>
  );
};

export default Aboutme;
