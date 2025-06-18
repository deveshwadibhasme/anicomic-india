import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { images } from "../components/SliderImages";
import { getServices } from "../utils/Services.js";
import useToaster from "../hooks/toaster.jsx";
import servicePoster from "../assets/our-service.png";
import Loading from "../components/Loading.jsx";

// Services array remains the same

const Services = () => {
  const { state } = useLocation();
  const [service, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToast, ToastContainer } = useToaster();

  const handleLoad = () => setLoading(false);

  useEffect(() => {
    if (location.pathname === "/services") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (state) {
        setServices(getServices(state?.service));
        addToast(`Site is in development state !!`);
      }
    }
  }, [service]);

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


  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto px-4 py-8"
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative rounded-2xl overflow-hidden shadow-2xl mb-12 ${
            location.pathname === "/" ? "hidden" : "block"
          }`}
        >
          {loading ? (
            <Loading />
          ) : (
            <img
              onLoad={handleLoad}
              loading="lazy"
              className="xl:w-full h-[300px] lg:h-[400px] 2xl:h-[500px] object-cover"
              src={servicePoster}
              alt="Services Banner"
            />
          )}
        </motion.div>

        {/* Title */}
        <h1
          className={`text-3xl xl:text-6xl relative custom-border custom-border-2 max-w-sm xl:max-w-lg h-13 xl:h-20 w-full text-amber-50 text-center mt-12 mb-12 mx-auto font-Caprasimo-regular ${
            location.pathname !== "/" ? "hidden" : "block"
          }`}
        >
          Our Services
        </h1>

        <ToastContainer />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 h-full flex flex-col">
                <img
                  className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 object-contain transition-transform duration-300 hover:scale-110"
                  src={service.icon}
                  alt={service.title}
                  onLoad={handleLoad}
                />
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow text-sm md:text-base">
                  {service.description}
                </p>
                <div className="flex flex-col gap-3 mt-auto">
                  <Link
                    to="/contact"
                    state={{ service: service.title }}
                    className="w-full px-4 py-2 text-center bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    Get Started
                  </Link>
                  <Link
                    to={location.pathname !== "/services" ? "/services" : ""}
                    state={{ service: service.title }}
                    onClick={() => {
                      addToast("Site is in development state !!");
                      handleMore();
                    }}
                    className="w-full px-4 py-2 text-center border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
