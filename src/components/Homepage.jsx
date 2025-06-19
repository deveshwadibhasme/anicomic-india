import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faClapperboard } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <motion.div
      className="flex max-w-screen-xl 2xl:max-w-screen-2xl w-full min-h-[500px] px-2 items-center justify-center mx-auto z-30 relative mb-8"
    >
      <div className="relative -z-10 max-w-screen w-full min-h-[250px] md:min-h-[520px] mx-auto flex pt-5 items-center justify-center flex-col bg-image overflow-y-hidden backdrop-blur-sm bg-gradient-to-b from-transparent to-black/20 rounded-2xl shadow-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-4xl 2xl:text-7xl md:text-6xl font-extrabold text-sky-50 text-center max-w-6xl mx-auto font-monteseret-regular tracking-wider"
        >
          <span className="text-white block text-3xl md:text-2xl text-center font-monteseret-regular mb-3 md:mb-5 uppercase tracking-[0.2em] text-glow">
            Welcome to{" "}
          </span>
          ANICOMIC STUDIO
          <br />
          <span className="text-orange-500 mt-6 text-xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text">
             CONTENT CREATION & ADVERTISING COMPANY
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-6 text-gray-200 max-w-screen-md text-center text-[14px] md:text-xl leading-relaxed px-4"
        >
          Anicomic is a dynamic creative agency specializing in advertising solutions
          and original series production. We offer comprehensive services including
          digital marketing, content creation, audio series production, and entertainment
          series.
        </motion.p>
        <div className="relative flex max-w-sm w-full justify-center gap-8 mt-8 z-30">
          <motion.span
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Link
              to={"/project"}
              href={"/project"}
              className={`text-white px-6 md:px-8 flex items-center gap-3 py-2 md:py-3 text-sm md:text-xl 2xl:text-2xl border-2 border-slate-400/50 rounded-xl hover:border-white hover:ring-2 ring-amber-400 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-amber-500/20`}
            >
              <FontAwesomeIcon icon={faClapperboard} className="text-amber-400" /> Project
            </Link>
          </motion.span>
          <motion.span
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Link
              to={"/career"}
              href={"/career"}
              className={`text-white px-6 md:px-8 flex items-center gap-3 py-2 md:py-3 text-sm md:text-xl 2xl:text-2xl border-2 border-slate-400/50 rounded-xl hover:border-white hover:ring-2 ring-amber-400 backdrop-blur-md hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-amber-500/20`}
            >
              <FontAwesomeIcon icon={faGraduationCap} className="text-amber-400" /> Careers
            </Link>
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
