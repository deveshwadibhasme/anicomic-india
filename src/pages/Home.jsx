import AnicomicPoster from "../assets/anicomic.png";
import { motion } from "framer-motion";
import ImageSlider from '../components/ImageSlider'


const Home = () => {
  const HomePoster = [`${AnicomicPoster}`]; 

  return (
    <div className="max-w-screen w-full mx-auto">
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="flex max-w-screen-xl 2xl:max-w-screen-2xl w-full min-h-[200px] md:min-h-[650px] border-white gap-2 px-4 items-center justify-center mt-25 md:mt-5 mx-auto"
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
      <h1 className="text-white mx-auto text-center text-3xl md:text-5xl tracking-wide font-medium mb-10 font-Caprasimo-regular">
       <span  className="">Our</span>  <span className="text-orange-500">Services</span>
      </h1>
        <ImageSlider count={20} moveLeft={true}/>
        <ImageSlider count={30}  moveLeft={false}/>
      </div>
    </div>
  );
};

export default Home;
