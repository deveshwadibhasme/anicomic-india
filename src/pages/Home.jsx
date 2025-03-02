import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import Homepage from "../components/Homepage";
import Services from "./Services";
import Contact from "./Contact";

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
    <div className="max-w-screen w-full mx-auto mt-30 md:mt-15 flex flex-col">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ImageSlider count={1} moveLeft={true} />
          <Homepage />
          <ImageSlider count={20} moveLeft={false} />
          <Services />
          <Contact/>
        </>
      )}
    </div>
  );
};

export default Home;
