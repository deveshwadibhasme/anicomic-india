import { motion } from "framer-motion";
import Loading from "./Loading";
import sliderImages from "./SliderImages";
import { useState } from "react";

export default function ImageSlider({count,direction}) {
  const images = sliderImages.slice(count ,count + 20);
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const start = direction ? '-110%' : '50%';
  const end = direction ? '0%' : '-100%';


  return (
    <motion.div className="overflow-hidden">
      <motion.div
        className="flex gap-4 px-8 mx-auto my-6"
        initial={{ x: start }}
        animate={{ x: end }}
        transition={{
          duration: 50,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {/* First set of images */}
        {images.map((item, i) => (
          <motion.div
            key={`first-${i}`}
            className="max-w-30 md:max-w-52 relative border-2 border-white/60
              min-h-30 h-full md:min-h-52 z-10 bg-cover w-full 
              flex items-center justify-center shrink-0 overflow-hidden rounded-2xl
              shadow-lg hover:scale-105 hover:border-white hover:shadow-xl hover:z-20"
            whileHover={{ scale: 1.05 }}
          >
            {loading && <Loading />}
            <img
              src={item}
              loading="lazy"
              onLoad={handleLoad}
              className={`${loading ? 'absolute' : 'relative'} 
                bottom-full w-full h-full object-cover
                transition-opacity duration-300 hover:opacity-95`}
              alt=""
            />
          </motion.div>
        ))}

        {images.map((item, i) => (
          <motion.div
            key={`second-${i}`}
            className="max-w-30 md:max-w-52 relative border-2 border-white/60
              min-h-30 h-full md:min-h-52 z-10 bg-cover w-full 
              flex items-center justify-center shrink-0 overflow-hidden rounded-2xl
              shadow-lg hover:scale-105 hover:border-white hover:shadow-xl hover:z-20"
            whileHover={{ scale: 1.05 }}
          >
            {loading && <Loading />}
            <img
              src={item}
              loading="lazy"
              onLoad={handleLoad}
              className={`${loading ? 'absolute' : 'relative'} 
                bottom-full w-full h-full object-cover
                transition-opacity duration-300 hover:opacity-95`}
              alt=""
            />
          </motion.div>
        ))}
        {images.map((item, i) => (
          <motion.div
            key={`second-${i}`}
            className="max-w-30 md:max-w-52 relative border-2 border-white/60
              min-h-30 h-full md:min-h-52 z-10 bg-cover w-full 
              flex items-center justify-center shrink-0 overflow-hidden rounded-2xl
              shadow-lg hover:scale-105 hover:border-white hover:shadow-xl hover:z-20"
            whileHover={{ scale: 1.05 }}
          >
            {loading && <Loading />}
            <img
              src={item}
              loading="lazy"
              onLoad={handleLoad}
              className={`${loading ? 'absolute' : 'relative'} 
                bottom-full w-full h-full object-cover
                transition-opacity duration-300 hover:opacity-95`}
              alt=""
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}