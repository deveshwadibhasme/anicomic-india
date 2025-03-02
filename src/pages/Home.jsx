import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider";
import Homepage from "../components/Homepage";
import Services from "./Services";

const Home = () => {
  // const HomePoster = [`${AnicomicPoster}`];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for all images & content to fully load
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      // If already loaded, remove loader
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="max-w-screen w-full mx-auto mt-30 md:mt-12">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ImageSlider count={1} moveLeft={true} />
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="flex max-w-screen-xl 2xl:max-w-screen-2xl w-full min-h-[200px] border-white gap-2 px-1 items-center justify-center mx-auto z-30 relative mb-5"
          >
            <Homepage />
          </motion.div>
          <ImageSlider count={20} moveLeft={false} />
          <Services/>
        </>
      )}
    </div>
  );
};

export default Home;
