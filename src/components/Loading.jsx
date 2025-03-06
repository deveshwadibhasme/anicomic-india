import { useState } from "react";
import load from "../assets/loadingLOGO.png";
import { AnimatePresence , motion } from "framer-motion";

const Loading = () => {

  const [loading,setLoading] = useState(true)
  window.addEventListener('load',()=>{  
    setLoading(!loading)
  })
   
  return (
    <AnimatePresence sync="wait">
     {loading && <motion.div 
      initial={{opacity:0.2,y:'0'}}
      animate={{opacity:0.4,y:0}}
      exit={{y:'100%'}}
      transition={{ duration:0.2, ease: "linear" }}
      className="absolute z-50 top-0 left-0 w-full min-h-full bg-black flex items-center justify-center">
        <img src={load} className="animate-pulse w-60 opacity-30 h-full" alt="loading..." />
      </motion.div>}
    </AnimatePresence>
  );
};

export default Loading;
