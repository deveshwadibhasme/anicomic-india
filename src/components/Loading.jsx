import { AnimatePresence , motion } from "framer-motion";
import load from "../assets/loadingLogo.png";

const Loading = () => {
  return (
    <AnimatePresence>
      <motion.div 
      initial={{scale:0 }}
      animate={{ scale:1 }}
      exit={{scale:1.5}}
      transition={{ duration: 0.2, ease: "anticipate" }}
      className="max-w-screen min-h-screen w-full bg-slate-800 flex items-center justify-center">
        {/* <img src={load} alt="loading..." /> */}
        <div className="text-white text-3xl">Loading...</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
