import AnicomicPoster from "../assets/anicomic.png";
import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider";

const Home = () => {
  const HomePoster = [`${AnicomicPoster}`];

  return (
    <div className="max-w-screen w-full mx-auto">
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="flex max-w-screen-xl 2xl:max-w-screen-2xl w-full min-h-[200px] md:min-h-[650px] border-white gap-2 px-1 items-center justify-center mt-25 md:mt-5 mx-auto"
      >
        {HomePoster.map((poster, index) => (
          <div key={index} className="w-full h-full object-center">
            <img
              src={poster}
              alt="Ani Comic"
              className="w-full h-full object-center"
            />
          </div>
        ))}
      </motion.div>
      <div className="max-w-screen min-h-screen">
        <ImageSlider count={1} moveLeft={true} />
        <h1 className="text-white text-5xl my-7 text-center">
          Welcome to   <span className="text-orange-500 font-bold">Anicomic Service</span>
        </h1>
        <ImageSlider count={20} moveLeft={false} />
        <p className="text-white text-md md:text-2xl max-w-5xl px-4 md:px-0 mx-auto my-7 text-center">
          We believe that every brand has a unique story, and our mission is to
          help bring that story to life through compelling visuals, engaging
          videos, and immersive soundscapes. We aim to be a one-stop creative
          hub for all your design and multimedia needs, focusing on quality,
          innovation, and customer satisfaction. Our vision is to empower
          businesses and creators by delivering professional, affordable, and
          personalised creative solution that is resonate with their audience
        </p>
      </div>
    </div>
  );
};

export default Home;
