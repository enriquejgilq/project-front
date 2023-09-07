import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { quote } from "../assets/images/imageImports";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loading";
import PetitionNotFound from "../pages/PetitionNotFound";
import GalleryModal from "../components/GalleryModal";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
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
  const { nickname } = useParams();
  const [openImg, setopenImg] = useState(false);
  const [img, setImg] = useState(null);
  const { getJobsFunction, loading, jobs } = useAuth();
  useEffect(() => {
    if (nickname === undefined || nickname === null) return;
    if (nickname) {
      getJobsFunction(nickname);
    }
  }, []);
  if (loading) {
    return <Loading />;
  }

  if (jobs.length === 0) {
    return (
      <PetitionNotFound
        title="Sin trabajos cargados."
        subTitle="El usuario aún no ha cargado ningún trabajo."
        toNavigate={"/"}
      />
    );
  }

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
  const viewImg = (img) => {
    setImg(img);
    setopenImg(true);
  };
  const handleClose = () => {
    setopenImg(false);
  };

  return (
    <div
      id="projects"
      className="p-10 sm:p-10 md:p-10 w-full bg-gradient-to-bl from-green-900 via-green-800 to-black animate-fade-in "
    >
      <Slider {...settings}>
        {jobs.map((item) => (
          <div className="w-full h-screen overflow-y-auto ">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center">
                {item.images.length === 0 ? (
                  <HomeRepairServiceIcon />
                ) : (
                  <img
                    className="h-72 md:h-32 lg:h-72 rounded-lg object-cover"
                    src={item.images[0].image}
                    alt="testimonialOne"
                  />
                )}

                <div className="w-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  {item.technologies?.map((tech) => (
                    <p className="text-base tracking-wide text-gray-500">
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
                <img
                  className="w-20 lg:w-32 scale-x-[-1]"
                  src={quote}
                  alt="quote"
                />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lg:p-8 flex flex-col justify-center gap-4 lg:gap-8">
                  <div className="flex flex-col justify-between lg:items-center py-6 border-b-2 border-b-gray-900 ">
                    <div className="flex gap-1 rounded-xl">
                      {item.images.map((item) => (
                        <img
                          style={{ borderRadius: "10px" }}
                          onClick={() => viewImg(item.image)}
                          className=" object-scale-down h-28 w-96 cursor-pointer"
                          src={item.image}
                          alt={item.image}
                        />
                      ))}
                    </div>
                    {item.link !== "" && (
                      <div className="flex flex-col lg:flex-row justify-center items-center p-3">
                        <FaGithub
                          onClick={() => handleTo(item.link)}
                          size={20}
                          className="cursor-pointer"
                        />
                      </div>
                    )}
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    {item.description} "
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <GalleryModal open={openImg} handleclose={handleClose} img={img} />
    </div>
  );
};

export default Projects;
