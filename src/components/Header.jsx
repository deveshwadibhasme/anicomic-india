
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import { useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
 
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1015) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  });

  return (
    <div className="max-w-screen w-full py-2 h-23 md:h-18 fixed left-1/2 -translate-x-1/2 z-50 border-b-2 border-red bg-black">
      <motion.header
        className="max-w-screen w-full mx-auto md:pt-3 px-4 flex bg-black justify-between lg:justify-around min-h-10 items-center"
      >
        <motion.div
          initial={{ x: -40 }}
          animate={{ x: 0 }}
          className="w-52 md:w-88 shrink-0 text-lg md:text-2xl 2xl:text-3xl pt-3 md:pt-1 h-10 font-monteseret-regular"
        >
          <span className="text-amber-600 font-bold">ANICOMIC</span>{" "}
          <span className="text-white font-semibold">SERVICES</span> .
        </motion.div>
       { !scrolled ? <NavBar /> : ''} 
        <motion.a
          initial={{ x: 30 }}
          animate={{ x: 0 }}
          href="https://wa.me/918605688071?text=Hello!%20I'm%20interested%20in%20your%20digital%20marketing%20services.%20Please%20share%20more%20details."
          target="_blank"
          className="w-28 md:w-28 h-8 md:h-10 px-3 rounded-lg font-bold flex items-center gap-2 text-center bg-green-400 text-sm hover:bg-green-500 mt-2 md:mt-0"
        >
          <FontAwesomeIcon icon={faPhone} /> Whatsapp
        </motion.a>
      </motion.header>
      {scrolled ? <NavBar /> : ''}
    </div>
  );
};

export default Header;
