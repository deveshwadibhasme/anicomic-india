import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../utils/studio-data";
import Corousel from "../components/Corousel";
import ProjectContainer from "../components/ProjectContainer";
import clapperboard from "../assets/studio/clapperboard.gif";
import useAudioProvider from "../hooks/useAudioProvider.jsx";

const Projects = () => {
  const preloadImages = () => {
    const loadImg = new Image();
    loadImg.src = clapperboard;
    window.scrollTo({ top: 0, behavior: "smooth" });

  };
  preloadImages();

  if (location.pathname === "/studio") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const clapAudioRef = useRef(null);
    const swingAudioRef = useRef(null);
    useAudioProvider(true, swingAudioRef, clapAudioRef);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && location.pathname === "/studio" ? (
        <motion.div
          key="clapper-loading"
          className="flex items-center flex-col absolute w-full top-0 z-50 justify-center min-h-screen bg-black"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
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
          <h1 className="text-xl lg:text-3xl font-bold text-white mr-2">
            Anicomic Studio Presents
          </h1>
        </motion.div>
      ) : (
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="container relative mx-auto py-5 xl:my-4 max-w-screen min-h-[500px] h-full flex flex-col items-center w-full overflow-y-hidden mb-5"
          >
            {location.pathname === "/studio" && <Corousel />}
            <>
              <motion.h1
                initial={{
                  scale: 0.5,
                  opacity: 0,
                  boxShadow: "0 0 0px orange",
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  boxShadow: [
                    "5px 0 50px -15px orange",
                    "0px 5px 50px -15px orange, -5px 0px 50px -15px orange",
                    "0 -5px 50px -15px orange",
                  ],
                }}
                transition={{
                  duration: 0.5,
                  boxShadow: {
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  },
                }}
                className="text-2xl xl:text-4xl relative custom-border custom-border-2 after:top-0 after:left-0 before:bottom-0 before:right-0 after:bg-white before:bg-white max-w-sm xl:max-w-lg h-15 xl:h-20 w-full text-center mb-3 font-Caprasimo-regular text-white bg-gradient-to-r from-orange-500 via-orange-400 to-orange-700 rounded-lg flex items-center justify-center shadow-lg tracking-wide hover:shadow-amber-500/20 hover:bg-white/90 transition-all duration-300 text-shadow-lg font-montserrat mt-10"
              >
                Our Creations
              </motion.h1>
              <div className="absolute [clip-path:polygon(0%_20%,100%_0%,100%_95%,0%_100%)] bottom-10 left-0 w-full h-80 bg-white z-0"></div>
            </>
            <motion.div
              variants={containerVariants}
              className="relative max-w-screen w-full gap-10 mt-10 pb-10"
            >
              {location.pathname === "/studio" ? (
                <>
                  <div className="absolute top-10 left-0 w-full h-full bg-white"></div>
                  <ProjectContainer project={projects} />
                </>
              ) : (
                <ProjectContainer project={projects.slice(0, 2)} />
              )}
            </motion.div>
            {location.pathname !== "/studio" && (
              <Link
                to="/studio"
                className="px-1 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-700 text-white rounded-full shadow-2xl shadow-black font-extrabold text-lg lg:text-2xl uppercase tracking-widest flex items-center justify-center gap-1 lg:gap-4 hover:scale-105 hover:bg-orange-600 transition-all duration-300 border-4 border-white/30 ring-4 ring-orange-400/30 ring-offset-2 z-10"
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
