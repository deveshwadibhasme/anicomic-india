import { AnimatePresence , motion } from "framer-motion";
import load from "../assets/loadingLogo.png";

const Loading = () => {
  return (
    <AnimatePresence>
      <motion.div 
      initial={{scale:0 }}
      animate={{ scale:1 }}
      exit={{scale:1.5}}
      transition={{ duration:0.5, ease: "easeInOut" }}
      className="max-w-screen min-h-screen w-full bg-black flex items-center justify-center animate-pulse">
        <img src={load} alt="loading..." />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
