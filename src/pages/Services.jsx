import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { images } from "../components/SliderImages";
import { getServices } from "../utils/Services.js";
import useToaster from "../hooks/toaster.jsx";

const services = [
  {
    title: "Digital Advertisement",
    description:
      "Strategic online advertising to maximize reach and engagement across digital platforms.",
    icon: images.digital,
  },
  {
    title: "Social Media Management",
    description:
      "Enhancing brand presence through targeted social media campaigns and audience engagement.",
    icon: images.social,
  },
  {
    title: "Content Creation",
    description:
      "Crafting compelling and engaging content for various digital platforms to captivate audiences.",
    icon: images.content,
  },
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance websites tailored to user experience and business needs.",
    icon: images.webDevs,
  },
  {
    title: "Graphic Design",
    description:
      "Creating visually appealing designs that effectively communicate brand identity and messaging.",
    icon: images.design,
  },
  {
    title: "Video Editing",
    description:
      "Professional editing services to enhance video content with smooth transitions and effects.",
    icon: images.video,
  },
  {
    title: "3D Animation",
    description:
      "Producing stunning 3D animations for storytelling, product visualization, and branding.",
    icon: images.threeD,
  },
  {
    title: "Cinematography",
    description:
      "Capturing high-quality visuals and storytelling through expert cinematography techniques.",
    icon: images.cinematography,
  },
];

const Services = () => {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();
  const [service, setServices] = useState([]);

  const handleLoad = () => {
    setLoading(false);
  };

  const { addToast, ToastContainer } = useToaster();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (location.pathname === "/services") {
      if (state) {
        setServices(getServices(state?.service));
        console.log(service);
        addToast(`Site is in development state !! `);
      }
    }
    return () => {};
  }, [service]);

  let w;
  const handleHover = (e) => {
    e.target.parentNode.childNodes[2].style.opacity = "1";
    e.target.parentNode.childNodes[2].style.transform = `translateY(${
      w < 300 ? "-100%" : `${w > 770 ? "-150%" : "-150%"}`
    })`;
    setTimeout(() => {
      e.target.parentNode.childNodes[2].style.opacity = "0";
      e.target.parentNode.childNodes[2].style.transform = "translateY(100%)";
    }, 4000);
  };

  function handleMore(){
    setServices(getServices(state?.service));
    console.log(service);

  }

  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-center text-orange-600 mt-30 md:mt-20 font-Caprasimo-regular">
        Our Services
      </h1>
      <ToastContainer />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 2xl:gap-y-10 p-6 min-h-[300px] md:min-h-[400px] 2xl:min-h-[500px] mt-10 ">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0.4, x: 50 }}
            whileInView={{ opacity: 1, x: 1 }}
            threshold={0.8}
            transition={{ duration: 0.5 }}
            id="div-to-hover"
            key={index}
            className={`relative p-6 z-20 bg-white text-black rounded-2xl shadow-lg flex flex-col items-center text-center h-40 xl:h-80 2xl:h-[500px] 2xl:max-w-screen-sm justify-center mx-auto w-full overflow-y-hidden cursor-pointer group overflow-x-hidden`}
          >
            <img
              onClick={(e) => handleHover(e)}
              onLoad={handleLoad}
              className={`mix-blend-multiply group 
              xl:h-64 xl:w-64 md:h-23 md:w-23 2xl:w-90 2xl:h-80
              h-18 w-18 mb-4 xl:mb-1 object-cover ${
                loading
                  ? `bg-slate-200/50 animate-pulse border-red-500`
                  : "bg-transparent animate-none border-white"
              } `}
              src={service.icon}
              alt=""
            />
            <h3 className="text-sm md:text-sm xl:text-2xl 2xl:text-4xl font-semibold">
              {service.title}
            </h3>
            <div
              className={`bg-orange-400/80 flex flex-col items-center justify-center translate-y-20 group-hover:-translate-y-full group-focus-within:-translate-y-full  w-full h-full transition-transform duration-500 z-10 gap-3 lg:gap-8 2xl:gap-18 absolute top-full`}
            >
              <p className="text-slate-800 w-[80%] text-[10px] lg:text-[18px] 2xl:text-3xl">
                {service.description}
              </p>
              <div className="flex z-30 flex-col gap-2 2xl:gap-8 w-full items-center justify-center">
                <Link
                  className="w-[60%] z-20 h-5 sm:h-8 md:h-8 2xl:h-15 text-[10px] sm:text-sm 2xl:text-2xl bg-orange-600 flex items-center justify-center rounded-2xl 2xl:rounded-full hover:bg-orange-500 text-white"
                  to={"/contact"}
                  state={{ service: service.title }}
                >
                  Go with Service
                </Link>
                <Link
                  className="w-[40%] h-5 sm:h-8 md:h-8 2xl:h-15 text-[10px] sm:text-sm 2xl:text-2xl bg-green-600 flex items-center justify-center rounded-2xl 2xl:rounded-full hover:bg-green-500 text-white"
                  to={`${location.pathname !== "/services" ? "/services" : ``}`}
                  state={{ service: service.title }}
                  onClick={() => {
                    addToast("Site is in developent state !!") 
                    handleMore()
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="max-w-screen-lg mx-auto mt-10 min-h-96">{}</div>
    </>
  );
};

export default Services;
