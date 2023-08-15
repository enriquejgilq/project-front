import React from "react";
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  imgwork,
  imgwork2,
  imgwork3,
  imgwork4,
  imgwork5,
  imgwork6,
  imgwork7,
  imgwork8,
  imgwork9,
  imgwork10,
  imgwork11,
  imgwork12,
  imgwork13,
  imgwork14,
  // imgwork15,
  imgwork16,
  imgwork17,
  imgwork18,
  imgwork19,
  imgwork20,
  imgwork21,
  imgwork22,
  imgwork23,
  imgwork24,
  imgwork25,
  imgwork26,
  imgwork27,
  imgwork28,
  imgwork29,
  imgwork30,
  imgwork31,
  imgwork32,
  imgwork33,
  imgwork34,
  imgwork35,
  imgwork36,
  imgwork37,
  imgwork38,
  quote,
} from "../assets/images/imageImports";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const handleTo = (link) => {
    window.open(link, "_blank");
  };
  const data = [
    {
      title: "Rick and Morty App",
      description:
        "Mediante el uso de GraphQL que es un lenguaje de consulta y un tiempo de ejecución del servidor para las interfaces de programación de aplicaciones (API); su función es brindar a los clientes exactamente los datos que solicitan y nada más. Gracias a GraphQL, las API son rápidas, flexibles y sencillas para los desarrolladores.",
      images: [imgwork17, imgwork18, imgwork19],
      technologies: ["React", "JavaScript", "GraphQL", "CSS", "Material Mui"],
      link: "https://github.com/enriquejgilq/test-app",
    },
    {
      title: "TODOs App",
      description:
        "TODOs App es un proyecto diseñado como un ejercicio de aprendizaje y práctica para desarrollar habilidades en el uso de la biblioteca de JavaScript React. Esta aplicación simple permite a los usuarios crear, administrar y realizar un seguimiento de sus tareas pendientes de manera efectiva.",
      images: [imgwork20, imgwork21, imgwork22],
      technologies: ["React", "CSS", "JavaScript"],
      link: "https://github.com/enriquejgilq/todoApp",
    },

    {
      title: "PlatziConf App",
      description:
        "PlatziConf App, es un proyecto que demuestra la integración efectiva de la API de PayPal. Esta aplicación está diseñada para simular un flujo de pago en línea, permitiendo a los usuarios confirmar y completar sus transacciones utilizando PayPal como método de pago seguro y confiable.",
      images: [imgwork23, imgwork24, imgwork25, imgwork26, imgwork27],
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      link: "https://github.com/enriquejgilq/conf-platzi",
    },
    {
      title: "Manejo de estado App",
      description:
        "PlatziConf App, es un proyecto que demuestra la integración efectiva de la API de PayPal. Esta aplicación está diseñada para simular un flujo de pago en línea, permitiendo a los usuarios confirmar y completar sus transacciones utilizando PayPal como método de pago seguro y confiable.",
      images: [imgwork29, imgwork28],
      technologies: ["React", "HTML", "JavaScript"],
      link: "https://github.com/enriquejgilq/manejo-estado",
    },
    {
      title: "Hooks Practice App",
      description:
        "PlatziConf App, es un proyecto que demuestra la integración efectiva de la API de PayPal. Esta aplicación está diseñada para simular un flujo de pago en línea, permitiendo a los usuarios confirmar y completar sus transacciones utilizando PayPal como método de pago seguro y confiable.",
      images: [imgwork30, imgwork31, imgwork32, imgwork33],
      technologies: ["React", "Hooks", "HTML", "JavaScript"],
      link: "https://github.com/enriquejgilq/hooks-practice",
    },
    {
      title: "Test App",
      description:
        "PlatziConf App, es un proyecto que demuestra la integración efectiva de la API de PayPal. Esta aplicación está diseñada para simular un flujo de pago en línea, permitiendo a los usuarios confirmar y completar sus transacciones utilizando PayPal como método de pago seguro y confiable.",
      images: [imgwork34, imgwork35, imgwork36, imgwork37],
      technologies: [
        "React",
        "NextJs",
        "GraphQL",
        "Hooks",
        "HTML",
        "JavaScript",
      ],
      link: "https://github.com/enriquejgilq/lqn-test",
    },
    {
      title: "Open campus App",
      description:
        "PlatziConf App, es un proyecto que demuestra la integración efectiva de la API de PayPal. Esta aplicación está diseñada para simular un flujo de pago en línea, permitiendo a los usuarios confirmar y completar sus transacciones utilizando PayPal como método de pago seguro y confiable.",
      images: [imgwork38],
      technologies: [
        "React",
        "NextJs",
        "GraphQL",
        "Hooks",
        "HTML",
        "JavaScript",
      ],
      link: "https://github.com/enriquejgilq/lqn-test",
    },
  ];
  return (
    <div
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black animate-fade-in"
    >
      <Slider {...settings}>
        {data.map((item) => (
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                <img
                  className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                  src={item.images[0]}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  {item.technologies?.map((tech) => (
                    <p className="text-base tracking-wide text-gray-500">
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <img
                  className="w-20 lg:w-32 scale-x-[-1] scale-y-[-1]"
                  src={quote}
                  alt="quote"
                />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-8">
                  <div className="flex flex-col justify-between lg:items-center py-6 border-b-2 border-b-gray-900">
                    <div className=" flex gap-1">
                      {item.images.map((item) => (
                        <img
                          className=" rounded-lg object-scale-down h-28 w-96 "
                          src={item}
                          alt={item}
                        />
                      ))}
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center p-3">
                      <FaGithub
                        onClick={() => handleTo(item.link)}
                        size={20}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    {item.description} "
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ================ Slider Two ================== */}
      </Slider>
    </div>
  );
};

export default Projects;
