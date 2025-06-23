import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { images } from "../utils/studio-data";

const Courosel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const preloadImages = () => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  };
  preloadImages();

  useEffect(() => {
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
  }, [currentImage, images.length]);
  return (
    <motion.div
      className="w-full relative flex flex-col items-center justify-center mb-8 h-150"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full h-full mx-auto overflow-hidden rounded-lg shadow-lg bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage].src}
            alt={images[currentImage].name}
            className="w-full h-full object-contain"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.7 }}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Courosel;
