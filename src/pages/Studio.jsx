import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion"; 
import NightMare from "../assets/nightmare.jpg";
import Inside from "../assets/inside.png";
import InsidePoster from "../assets/inside-poster.jpg";
import NightMarePoster from "../assets/nightmare-poster.jpg";
import clapperboard from "../assets/clapperboard.gif";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClapperLoading from "../components/ClapperLoading";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "The NightMare",
      description: "The Thrilling Audio Story",
      image: NightMare,
      spotifyLink:
        "https://open.spotify.com/episode/34u9Qml8vGae4yA3r92LDk?si=2be08c0d78084630",
      released: true,
    },
    {
      id: 2,
      title: "Inside my Heart",
      description: "A Lovely Story of Girl",
      image: Inside,
      spotifyLink: "https://open.spotify.com/playlist/",
      released: false,
    },
  ];

  const images = [
    { src: InsidePoster, name: "Inside my Heart" },
    { src: NightMare, name: "The NightMare" },
    { src: NightMarePoster, name: "The NightMare" },
    { src: Inside, name: "Inside my Heart" },
  ];

  const preloadImages = () => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  };
  preloadImages();

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
  }, [currentImage, images.length]);

  useEffect(() => {
    if (location.pathname === "/studio") {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && location.pathname === "/studio" ? (
        <motion.div
          key="clapper-loading"
          className="flex items-center flex-col absolute w-full top-0 z-50 justify-center min-h-screen bg-black"
          initial={{ y: -100 }}
          animate={{ y : 0}}
          exit={{ y: -50, opacity: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="animate-pulse drop-shadow-[0_0_80px_orange] transition-all duration-700"
            src={clapperboard}
            alt=""
            style={{
              filter: "drop-shadow(0 0 150px orange) brightness(1.5)",
            }}
          />
          <h1 className="text-3xl font-bold text-white mr-2">Anicomic Studio Presents</h1>
        </motion.div>
      ) : (
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="container relative mx-auto px-4 py-5 xl:my-4 max-w-screen min-h-[500px] h-full flex flex-col items-center w-full overflow-y-hidden mb-5"
          >
            {location.pathname !== "/studio" ? (
              <>
                <div className="absolute [clip-path:polygon(0%_20%,100%_0%,100%_95%,0%_100%)] bottom-10 left-0 w-full h-80 bg-white z-0"></div>
                <motion.h1
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl xl:text-4xl relative custom-border custom-border-2 after:top-0 after:left-0 before:bottom-0 before:right-0 after:bg-white before:bg-white max-w-sm xl:max-w-lg h-15 xl:h-20 w-full text-center mb-3 font-Caprasimo-regular text-white bg-gradient-to-r from-orange-500 via-orange-400 to-orange-700 rounded-lg flex items-center justify-center shadow-lg tracking-wide hover:shadow-amber-500/20 hover:bg-white/90 transition-all duration-300 text-shadow-lg font-montserrat mt-10"
                >
                  Our Creations
                </motion.h1>
              </>
            ) : (
              <motion.div
                className="w-full relative flex flex-col items-center justify-center mb-8 h-150"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative w-full h-full mx-auto overflow-hidden rounded-lg shadow-lg bg-black">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={images[currentImage].src}
                      alt={images[currentImage].name}
                      className="w-full h-full object-contain"
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ duration: 0.7 }}
                    />
                  </AnimatePresence>
                  {/* <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h2 className="text-white text-2xl font-bold text-center">
                      {images[currentImage].name}
                    </h2>
                  </div> */}
                </div>
              </motion.div>
            )}

            <motion.div
              variants={containerVariants}
              className="mx-auto relative flex flex-col xl:flex-row max-w-screen gap-10 w-full z-20 lg:justify-center items-center mt-10 pb-10"
            >
              {location.pathname === "/studio" && (
                <>
                  <div className="absolute top-10 left-0 w-full h-full bg-white"></div>
                </>
              )}
              {projects.map((project) => (
                <motion.a
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.spotifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 overflow-hidden flex flex-col shrink-0 gap-2 min-h-70 max-w-60 w-full font-montserrat font-medium justify-between bg-white z-10 shadow-2xl shadow-black border-b-2 hover:border-orange-500"
                >
                  <div className="relative w-full h-80 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-4 right-4 ${
                        project.released ? "bg-green-500" : "bg-red-400"
                      } rounded-full p-2`}
                    >
                      <FontAwesomeIcon
                        icon={faPodcast}
                        className="text-white text-xl"
                      />
                    </div>
                  </div>
                  <div className="h-10 mb-4 z-10">
                    <h3 className="text-xl">{project.title}</h3>
                    <div className="flex items-center">
                      {project.released ? (
                        <span className="mr-2">June 2025</span>
                      ) : (
                        <span className="mr-2">Coming Soon</span>
                      )}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
            {location.pathname !== "/studio" && (
              <Link
                to="/studio"
                className="px-1 lg:px-8 py-4 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-700 text-white rounded-full shadow-2xl shadow-black font-extrabold text-2xl uppercase tracking-widest flex items-center justify-center gap-4 hover:scale-105 hover:bg-orange-600 transition-all duration-300 border-4 border-white/30 ring-4 ring-orange-400/30 ring-offset-2 z-10"
                style={{
                  letterSpacing: "0.2em",
                  boxShadow: "0 8px 32px 0 rgba(255,140,0,0.25)",
                }}
              >
                <span className="drop-shadow-lg">🚀</span>
                <span className="drop-shadow-lg">Go to Studio</span>
                <span className="drop-shadow-lg">🎬</span>
              </Link>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Projects;
