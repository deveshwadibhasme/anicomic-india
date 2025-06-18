import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"; // Add this import
import NightMare from "../assets/nightmare.jpg";
import Inside from "../assets/inside.png";
import { useEffect } from "react";

const Projects = () => {
  if (location.pathname === "/project") {
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

  // useEffect(()=>{
  //   if (location.pathname === "/project") {
  //     const root = document.body
  //       .querySelector("#root")
  //       .querySelector("#fullPage");
  //     root.classList.add("bg-gradient-to-r");
  //     root.classList.add("from-gray-200");
  //     root.classList.add("via-black");
  //     root.classList.add("to-slate-600");
  //     const header = document.body
  //       .querySelector("#root")
  //       .querySelector("#header");
  //     header.classList.add("bg-gradient-to-r");
  //     header.classList.add("from-gray-200");
  //     header.classList.add("via-black");
  //     header.classList.add("to-slate-600");
  //     const innerHeader = document.body
  //       .querySelector("#root")
  //       .querySelector("#header")
  //       .querySelector("header");
  //     innerHeader.classList.add("bg-gradient-to-r");
  //     innerHeader.classList.add("from-gray-200");
  //     innerHeader.classList.add("via-black");
  //     innerHeader.classList.add("to-slate-600");
  //   }
  // },[location.pathname])


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
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-5 my-10 max-w-screen-2xl min-h-screen flex flex-col items-center"
    >
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl xl:text-6xl relative custom-border custom-border-2 max-w-sm xl:max-w-lg h-13 xl:h-20 w-full text-amber-50 text-center mt-2 mb-12 font-Caprasimo-regular"
      >
        Our Projects
      </motion.h1>
      <motion.div 
        variants={containerVariants}
        className="mx-auto flex flex-col lg:flex-row flex-wrap gap-10 w-full justify-center"
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
    </motion.div>
  );
};

export default Projects;
