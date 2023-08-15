import React, { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { CgWorkAlt } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const onNavigate = (path) => {
    navigate(path);
    setNav(false);
  };

  const handleCloseMenu = () => {
    setNav(false);
  };
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-8 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={(onNavigate, handleCloseMenu)}
            href="#home"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Inicio</span>
          </a>
          <a
            href="#projects"
            onClick={handleCloseMenu}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <CgWorkAlt size={20} />
            <span className="pl-4">Mi proyectos personales</span>
          </a>
          <a
            href="#aboutme"
            onClick={handleCloseMenu}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BiUser size={20} />
            <span className="pl-4">Sobre mí</span>
          </a>
          <a
            href="#contact"
            onClick={handleCloseMenu}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contacto</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[35%] z-10">
        <div className="flex flex-col">
          <a
            onClick={scrollToTop}
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            onClick={() => onNavigate("/projects")}
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <CgWorkAlt size={20} />
          </a>
          <a
            onClick={() => onNavigate("/aboutme")}
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BiUser size={20} />
          </a>
          <a
            onClick={() => onNavigate("/contact")}
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
      <div>
        {showButton && (
          <button
            style={{ zIndex: "9999" }}
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 p-3 bg-green-500 text-white rounded-full shadow-md transition-opacity hover:opacity-75 opacity-0"
            }`}
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
