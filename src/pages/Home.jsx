import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import PetitionNotFound from "../pages/PetitionNotFound";

const handleTo = (link) => {
  window.open(link, "_blank");
};

const Home = () => {
  const { nickname } = useParams();
  const { profilePublic, getProfileFunction, loading } = useAuth();

  useEffect(() => {
    if (nickname === undefined || nickname === null) return;
    getProfileFunction(nickname);
  }, []);

  const { userName, socialMedia, works } = profilePublic || {};

  if (loading) {
    return <Loading />;
  }
  if (profilePublic === null) {
    return (
      <PetitionNotFound
        title="Usuario no encontrado"
        subTitle="El usuario que estás buscando no ha sido encontrado."
        toNavigate={"/"}
      />
    );
  }

  const sequence = works?.flatMap((work, index) => [work, 2000]);

  const socialLinks = [
    {
      icon: FaTwitter,
      red: "twitter",
      name: "Twitter",
    },
    {
      icon: FaInstagram,
      red: "instagram",
      name: "Instagram",
    },
    {
      icon: FaFacebook,
      red: "facebook",
      name: "Facebook",
    },
    {
      icon: FaLinkedinIn,
      red: "linkedin",
      name: "LinkedIn",
    },
    {
      icon: FaGithub,
      red: "github",
      name: "GitHub",
    },
  ];

  const mergedLinks = socialLinks.reduce((acc, social) => {
    const link = socialMedia.find((link) => link[social.red]);
    if (link && link[social.red]) {
      acc.push({
        icon: social.icon,
        link: link[social.red],
        name: social.name,
      });
    }
    return acc;
  }, []);

  return (
    <div id="home" className="animate-fade-in">
      <div className="w-full h-screen bg-gradient-to-bl from-green-900 via-gren-800 to-black   " />
      <div className="w-full h-screen absolute top-0 left-0 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col !justify-center lg:items-start lg:justify-start !items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-black-800 text-center sm:text-center md:w-[300px] md:text-3xl">
            Hola, soy {userName}
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-black-800">
            Yo soy
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-center space-x-5 pt-6 max-w-[200px] w-full">
            {mergedLinks.map((social, index) => (
              <div key={index}>
                <social.icon
                  onClick={() => handleTo(social.link)}
                  size={20}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
