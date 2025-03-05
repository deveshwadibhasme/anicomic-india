import load from "../assets/loadingLogo.png";
import { AnimatePresence , motion } from "framer-motion";

const Loading = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div 
      exit={{scale:1.5}}
      transition={{ duration:0.8, ease: "easeInOut" }}
      className="absolute top-0 left-0 max-w-screen min-h-screen w-full bg-black flex items-center justify-center">
        <img src={load} className="animate-pulse" alt="loading..." />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
