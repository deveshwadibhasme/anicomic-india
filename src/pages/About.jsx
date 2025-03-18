import { motion } from "framer-motion";
import tree from "../assets/growing-tree.png";

const About = () => {
  return (
    <div className="max-w-screen w-full min-h-screen flex flex-col items-center mt-20 justify-center ">
      <motion.h1
        initial={{ opacity: 0.4, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" text-4xl md:text-7xl text-center text-white py-40 md:p-40 w-full mt-6 md:mt-0 uppercase bg-gradient-to-r from-red-500 to-orange-600 border-2 border-white"
      >
        About Us
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0.4, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative custom-border custom-border-2 w-96 h-15 text-xl md:text-5xl text-center text-white my-5"
      >
        Introduction
      </motion.h2>
      <div className="flex flex-col-reverse md:flex-row-reverse items-center max-w-screen-xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-sm md:text-xl text-center text-white max-w-screen-md"
        >
          Anicomic Services, a branch of Anicomic India, was founded in 2024
          with the vision to provide comprehensive creative solutions for
          businesses and individuals looking to enhance their visual and digital
          presence. Based in Nagpur, India, the company emerged from a deep
          passion for storytelling, design, and multimedia production. <br />{" "}
          <br /> The idea behind founding Anicomic Services was simple yet
          powerful—combining artistic creativity with cutting-edge technology to
          help clients communicate their message effectively. Anicomic Services
          started as a small venture with a focus on graphic design and video
          production but has since grown into a full-fledged creative agency
          offering a range of services, including music production, audio
          editing, brand strategy, and more.
        </motion.p>
        <motion.img 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="h-[400px]" src={tree} alt="" />
      </div>
      <motion.h2 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="relative custom-border custom-border-2 w-80 h-15 text-xl md:text-5xl text-center text-white my-5">
        Vision
      </motion.h2>
      <motion.p 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9 }}
      className="text-sm md:text-xl text-center text-white max-w-screen-md mb-10">
        At Anicomic Services, we believe that every brand has a unique story,
        and our mission is to help bring that story to life through compelling
        visuals, engaging videos, and immersive soundscapes. We aim to be a
        one-stop creative hub for all your design and multimedia needs, focusing
        on quality, innovation, and customer satisfaction. Our vision is to
        empower businesses and creators by delivering professional, affordable,
        and personalised creative solution that is resonate with their audience
      </motion.p>
    </div>
  );
};

export default About;
