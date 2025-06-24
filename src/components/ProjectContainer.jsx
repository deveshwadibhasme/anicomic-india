import { motion } from "framer-motion";
import { FaSpotify } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ProjectContainer = ({ project }) => {
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
    <div className="flex px-2 relative max-w-fit mx-auto bg-white pl-25 md:pl-0 gap-10 overflow-x-auto md:overflow-visible z-20 md:justify-center items-center">
      {project.map((project) => (
        <motion.a
          key={project.id}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.spotifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 flex flex-col shrink-0 gap-2 h-80 lg:h-auto max-w-50 lg:min-h-70 lg:max-w-60 w-full font-montserrat font-medium justify-between bg-white z-10 shadow-2xl shadow-black border-b-2 hover:border-orange-500"
        >
          <Link to={`/studio/${project.title.toLowerCase().replace(/\s+/g,'-')}`} className="relative w-full h-80 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute top-2 right-2 ${
                project.released ? "bg-green-600" : "bg-red-400"
              } rounded-full p-2 text-3xl text-lime-300`}
            >
              <FaSpotify />
            </div>
          </Link>
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
    </div>
  );
};

export default ProjectContainer;
