import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <div className="relative -z-10 max-w-screen w-full min-h-[200px] md:min-h-[440px] mx-auto flex pt-3 items-center justify-center flex-col bg-image overflow-y-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-3xl 2xl:text-6xl md:text-5xl font-extrabold text-sky-50 text-center max-w-5xl mx-auto font-monteseret-regular "
      >
        <h6 className="text-white text-xl md:text-3xl text-center font-monteseret-regular mb-2 md:mb-4 uppercase">
          Welcome to{" "}
        </h6>
        ANICOMIC SERVICES
        <br />
        <span className="text-orange-500 mt-4 text-lg md:text-2xl">
          DIGITAL ADVERTISMENT COMPANY
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-4 text-gray-300 max-w-screen-sm text-center text-[12px] md:text-lg"
      >
        Anicomic is a creative marketing agency offering digital marketing,
        social media, design, video editing, web development, music production,
        podcasts, branding, content creation, and advertising to help brands
        grow.
      </motion.p>
      <div className="relative flex max-w-sm w-full justify-center gap-6 mt-5 z-30">
        <motion.span
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, delay: `0.2` }}
          whileHover={{ scale: 1.04, transition: 0.1, delay: 0 }}
        >
          <Link
            to={"/services"}
            href={"/services"}
            className={`text-white px-5 md:px-3 flex items-center gap-2 py-1 mb:py-2 text-sm md:text-xl 2xl:text-xl border-[1px] border-slate-400 rounded-lg hover:border-white hover:ring-1 ring-amber-400`}
          >
            <FontAwesomeIcon icon={faBolt} /> Services
          </Link>
        </motion.span>
        <motion.span
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, delay: `0.2` }}
          whileHover={{ scale: 1.04, transition: 0.1, delay: 0 }}
        >
          <Link
            to={"/career"}
            href={"/career"}
            className={`text-white px-5 md:px-3 flex items-center gap-2 py-1 mb:py-2 text-sm md:text-xl 2xl:text-xl border-[1px] border-slate-400 rounded-lg hover:border-white hover:ring-1 ring-amber-400`}
          >
            <FontAwesomeIcon icon={faGraduationCap} /> Careers
          </Link>
        </motion.span>
      </div>
    </div>
  );
};

export default Homepage;
