import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion"; // Add this import
import NightMare from "../assets/nightmare.jpg";
import Inside from "../assets/inside.png";
import InsidePoster from "../assets/inside-poster.jpg";
import NightMarePoster from "../assets/nightmare-poster.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    { src: NightMarePoster, name: "The NightMare" },
    { src: InsidePoster, name: "Inside my Heart" },
    { src: NightMare, name: "The NightMare" },
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (location.pathname === "/studio") {
      const root = document.body
        .querySelector("#root")
        .querySelector("#fullPage")
        .querySelector(".container");
      root.classList.remove("relative");
      const header = document.body
        .querySelector("#root")
        .querySelector("#header");
      header.classList.remove("bg-black");
      header.querySelector("header").classList.remove("bg-black");
    }
    return () => {
      if (location.pathname !== "/studio") {
        const header = document.body
          .querySelector("#root")
          .querySelector("#header");
        header.classList.add("bg-black");
        header.querySelector("header").classList.add("bg-black");
      }
    };
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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="container relative mx-auto px-4 py-5 my-5 xl:my-1 max-w-screen-2xl min-h-screen h-full flex flex-col items-center w-full overflow-y-hidden"
    >
      {location.pathname !== "/studio" ? (
        <>
          <div className="absolute [clip-path:polygon(100%_0,99%_83%,0_100%,0_18%)] top-0 left-0 w-full h-full bg-white  z-0"></div>
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl xl:text-4xl relative custom-border custom-border-2 after:top-0 after:left-0 before:bottom-0 before:right-0 after:bg-white before:bg-white max-w-sm xl:max-w-lg h-11 xl:h-20 w-full text-center mb-12 font-Caprasimo-regular text-white bg-gradient-to-r from-orange-500 to-slate-500 rounded-lg flex items-center justify-center shadow-lg tracking-wide hover:shadow-amber-500/20 hover:bg-white/90 transition-all duration-300 text-shadow-lg font-montserrat"
          >
            Our Upcoming Project
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
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
              <h2 className="text-white text-2xl font-bold">
                {images[currentImage].name}
              </h2>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        className="mx-auto relative flex flex-col xl:flex-row flex-wrap gap-10 w-full z-20 justify-center items-center mt-10 "
      >
        {location.pathname === "/studio" && (
          <>
            <div className="absolute top-10 left-0 w-full h-full bg-white rounded-2xl"></div>
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
            className="group p-2 overflow-hidden flex flex-col gap-2 min-h-70 max-w-60 w-full font-montserrat font-medium justify-between bg-white z-10 shadow-2xl shadow-black border-b-2 hover:border-orange-500"
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
          className="mt-8 px-6 py-3 bg-orange-400 text-white rounded-lg shadow-lg font-semibold hover:scale-105 transition-transform duration-200 z-10"
        >
          Go to Studio
        </Link>
      )}
    </motion.div>
  );
};

export default Projects;
