import { motion } from "framer-motion";
import tree from "../assets/illustration/growing-tree.png";

const About = () => {
  if (location.pathname === "/about") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="max-w-screen w-full min-h-screen bg-gradient-to-b">
      <motion.h1
        initial={{ opacity: 0.4, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-7xl text-center text-white py-20 md:py-32 w-full uppercase bg-gradient-to-r from-red-600 via-orange-500 to-red-600 border-y-2 border-white/20 backdrop-blur-sm shadow-2xl mt-8 xl:mt-"
      >
        About Us
      </motion.h1>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0.4, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative custom-border custom-border-2 w-fit mx-auto px-10 py-2 h-20 text-2xl md:text-5xl text-center text-white hover:scale-105 transition-transform"
        >
          Introduction
        </motion.h2>

        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-12 mb-20">
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="text-base md:text-xl text-gray-200 leading-relaxed max-w-2xl"
          >
            Anicomic Studios, a branch of Anicomic India, was founded in 2024
            with the vision to provide comprehensive creative solutions for
            businesses and individuals looking to enhance their visual and digital
            presence. Based in Nagpur, India, the company emerged from a deep
            passion for storytelling, design, and multimedia production. <br /><br />
            The idea behind founding Anicomic Services was simple yet
            powerful—combining artistic creativity with cutting-edge technology to
            help clients communicate their message effectively. Anicomic Services
            started as a small venture with a focus on graphic design and video
            production but has since grown into a full-fledged creative agency
            offering a range of services, including music production, audio
            editing, brand strategy, and more.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <img 
              className="h-[400px] object-contain transition-transform duration-300 group-hover:scale-105" 
              src={tree} 
              alt="Growing Tree" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative custom-border custom-border-2 w-fit mx-auto px-10 py-2 h-20 text-2xl md:text-5xl text-center text-white mb-12 hover:scale-105 transition-transform"
        >
          Vision
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9 }}
          className="text-base md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-center mb-16"
        >
          At Anicomic Services, we believe that every brand has a unique story,
          and our mission is to help bring that story to life through compelling
          visuals, engaging videos, and immersive soundscapes. We aim to be a
          one-stop creative hub for all your design and multimedia needs, focusing
          on quality, innovation, and customer satisfaction. Our vision is to
          empower businesses and creators by delivering professional, affordable,
          and personalised creative solution that is resonate with their audience
        </motion.p>
      </div>
    </div>
  );
};

export default About;
