import { useState ,useEffect } from "react";
import load from "../assets/loadingLOGO.png";
import { AnimatePresence, motion } from "framer-motion";

const Loading = () => {

  return (
    <AnimatePresence sync="wait">
        <motion.div
          initial={{ opacity: 0.2, y: "-100%" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.2, ease: "linear" }}
          className="absolute z-50 top-0 left-0 w-full min-h-full bg-black flex justify-center"
        >
          <img
            src={load}
            className="animate-pulse w-60 opacity-30 h-full mt-40"
            alt="loading..."
          />
        </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
