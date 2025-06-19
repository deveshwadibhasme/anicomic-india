import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"; // Add this import
import NightMare from "../assets/nightmare.jpg";
import Inside from "../assets/inside.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  if (location.pathname === "/studio") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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

  useEffect(()=>{
    if (location.pathname === "/studio") {
      const root = document.body
        .querySelector("#root")
        .querySelector("#fullPage")
        .querySelector(".container")
      root.classList.remove("relative");
       const header = document.body
          .querySelector("#root")
          .querySelector("#header")
        header.classList.remove("bg-black");
        header.querySelector('header').classList.remove("bg-black")
    }
  },[location.pathname])


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className="container relative mx-auto px-4 py-5 my-10 xl:my-1 max-w-screen-2xl min-h-130 h-full flex flex-col items-center w-full"
    >
      <div className="absolute [clip-path:polygon(100%_0,99%_83%,0_100%,0_18%)] top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 to-lime-500 opacity-70 z-0"></div>
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl xl:text-4xl relative custom-border custom-border-2 after:top-0 after:left-0 before:bottom-0 before:right-0 after:bg-white before:bg-white max-w-sm xl:max-w-lg h-11 xl:h-20 w-full text-center mb-12 font-Caprasimo-regular text-white bg-gradient-to-r from-orange-500 to-lime-500 rounded-lg flex items-center justify-center shadow-lg  tracking-wide hover:shadow-amber-500/20 hover:bg-white/90 transition-all duration-300 text-shadow-lg font-montserrat"
      >
        Our Upcoming Project
      </motion.h1>
      <motion.div 
        variants={containerVariants}
        className="mx-auto flex flex-col xl:flex-row gap-10 max-w-lg w-full z-10 justify-center items-center"
      >
        {projects.map((project) => (
          <motion.a
            key={project.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.spotifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-100 max-w-70 w-full ring-offset-orange-600 hover:ring-2 ring-offset-2 hover:ring-offset-lime-500 hover:bg-white/90 hover:shadow-amber-500/20 text-gray-800 font-montserrat font-medium justify-between"
          >
            <div className="relative w-full h-80">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-top"
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
            <div className="p-2 h-20 mb-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex items-center text-green-500">
                {project.released ? (
                  <span className="mr-2">Listen now</span>
                ) : (
                  <span className="text-sm font-medium">Coming Soon</span>
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
      {location.pathname !== "/studio" && (
        <Link
          to = "/studio"
          className="mt-8 px-6 py-3 bg-orange-400 text-white rounded-lg shadow-lg font-semibold hover:scale-105 transition-transform duration-200"
        >
          Go to Studio
        </Link>
      )}
    </motion.div>
  );
};

export default Projects;
