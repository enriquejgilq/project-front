import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const handleTo = (link) => {
  window.open(link, "_blank");
};

const Home = () => {
  return (
    <div id="home" className="animate-fade-in">
      <div className="w-full h-screen bg-gradient-to-bl from-green-900 via-gren-800 to-black transform scale-x-[-1]" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col !justify-center lg:items-start lg:justify-start !items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-black-800 text-center sm:text-left md:w-[300px] md:text-3xl">
            Hola, soy Enrique Gil
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-black-800">
            Yo soy
            <TypeAnimation
              sequence={[
                "Desarrollador web",
                2000,
                "Front-End Developer",
                2000,
                "Ingeniero De Sistemas",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter
              onClick={() => handleTo("https://twitter.com/enriquegilq")}
              size={20}
              className="cursor-pointer"
            />
            <FaInstagram
              onClick={() => handleTo("https://www.instagram.com/enriquegilq/")}
              size={20}
              className="cursor-pointer"
            />
            <FaFacebook
              onClick={() => handleTo("https://www.facebook.com/enriquegilq/")}
              size={20}
              className="cursor-pointer"
            />
            <FaLinkedinIn
              onClick={() =>
                handleTo("https://www.linkedin.com/in/enriquegilq/")
              }
              size={20}
              className="cursor-pointer"
            />
            <FaGithub
              onClick={() => handleTo("https://github.com/enriquejgilq")}
              size={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
