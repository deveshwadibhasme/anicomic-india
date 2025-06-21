import React, { useEffect, useState } from "react";
import clapperboard from "../assets/clapperboard.gif";
import { motion } from "framer-motion";

const ClapperLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.img
        initial={{ scale: 0.2 }}
        exit={{ scale: 1 }}
        className="animate-pulse drop-shadow-[0_0_30px_orange] transition-all duration-700"
        src={clapperboard}
        alt=""
        style={{
          filter: "drop-shadow(0 0 40px orange) brightness(1.2)",
        }}
      ></motion.img>
    </div>
  );
};

export default ClapperLoading;
