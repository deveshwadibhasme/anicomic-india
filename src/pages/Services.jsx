import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { images } from "../components/SliderImages";

const services = [
  {
    title: "Digital Advertisement",
    description:
      "Strategic online advertising to maximize reach and engagement across digital platforms.",
    icon: images.digital,
  },
  {
    title: "Social Media Marketing",
    description:
      "Enhancing brand presence through targeted social media campaigns and audience engagement.",
    icon: images.social,
  },
  {
    title: "Content Creation",
    description:
      "Crafting compelling and engaging content for various digital platforms to captivate audiences.",
    icon: images.digital,
  },
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance websites tailored to user experience and business needs.",
    icon: images.digital,
  },
  {
    title: "Graphic Design",
    description:
      "Creating visually appealing designs that effectively communicate brand identity and messaging.",
    icon: images.digital,
  },
  {
    title: "Video Editing",
    description:
      "Professional editing services to enhance video content with smooth transitions and effects.",
    icon: images.digital,
  },
  {
    title: "3D Animation",
    description:
      "Producing stunning 3D animations for storytelling, product visualization, and branding.",
    icon: images.digital,
  },
  {
    title: "Cinematography",
    description:
      "Capturing high-quality visuals and storytelling through expert cinematography techniques.",
    icon: images.digital,
  },
];

const Services = () => {


  const handleHover = (e) => {
    e.target.parentNode.childNodes[2].style.transform = "translateY(-150%)";
    setTimeout(() => {
      e.target.parentNode.childNodes[2].style.transform = "translateY(0)";
    },2000)
  };

  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-center text-orange-600 mt-30 md:mt-20 font-Caprasimo-regular">
        Our Services
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 min-h-[300px] md:min-h-[400px] 2xl:min-h-[500px] mt-10">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0.4, x: 50 }}
            whileInView={{ opacity: 1, x: 1 }}
            threshold={0.8}
            transition={{ duration: 0.5 }}
            id='div-to-hover'
            key={index}
            className={`relative p-6 z-20 bg-slate-300 text-black rounded-2xl shadow-lg flex flex-col items-center text-center h-40 md:h-85 2xl:h-95 overflow-y-hidden cursor-pointer group overflow-x-hidden peer`}
          >
            <img
            onClick={(e) => handleHover(e)}
              className="mix-blend-multiply group peer md:h-64 md:w-64 h-18 w-18 mb-4"
              src={service.icon}
              alt=""
            />
            <h3 className="text-sm md:text-xl 2xl:text-4xl font-semibold">{service.title}</h3>
            <div
              className={`bg-orange-400/80 flex flex-col items-center justify-center translate-y-20 group-hover:-translate-y-full group-focus-within:-translate-y-full  w-full h-full transition-transform duration-500 z-10 gap-8 absolute top-full peer-mobile`}
            >
              <p className="text-slate-800 w-[80%] text-sm lg:text-xl 2xl:text-2xl">{service.description}</p>
              <Link
                className="w-[60%] h-8 2xl:h-15 text-[10px] md:text-lg 2xl:text-2xl bg-orange-600 flex items-center justify-center rounded-2xl 2xl:rounded-full hover:bg-orange-500 text-white"
                to={"/contact"}
                state={{service:service.title}}
              >
                Go with Service
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Services;
