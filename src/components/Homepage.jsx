import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="relative z-20 max-w-screen w-full min-h-screen mx-auto flex pt-3 items-center justify-center flex-col bg-image overflow-y-hidden 2xl:scale-130">
      <motion.h1
        initial={{ opacity:0, y: 30 }}
        animate={{ opacity:1,y: 0 }}
        transition={{ duration: 0.5 , delay:0.5}}
        className="text-4xl 2xl:text-6xl md:text-5xl font-extrabold mt-4 text-sky-50 text-center max-w-5xl mx-auto font-monteseret-regular "
      >
        ANICOMIC SERVICES<br />
        <span className="text-orange-500 mt-4 text-3xl">DIGITAL SERVICES AGENCY</span>
      </motion.h1>
      <motion.p
         initial={{ opacity:0, y: 30 }}
         animate={{ opacity:1,y: 0 }}
         transition={{ duration: 0.5 , delay:1}}
        className="mt-4 text-gray-300 max-w-screen-sm text-center"
      >
        Anicomic is a creative marketing agency offering digital marketing,
        social media, design, video editing, web development, music production,
        podcasts, branding, content creation, and advertising to help brands
        grow.
      </motion.p>
      <motion.div 
       initial={{ opacity:0, scale: 0.2 }}
       animate={{ opacity:1,scale:1 }}
       transition={{ duration: 0.5 , delay:0.5}}
      className=" max-w-screen-lg md:rounded-full min-h-44 w-full grid grid-cols-2 gap-x-2 items-center justify-center mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg bottom-shadow">
        {[
          "Content Marketing",
          "Web Development",
          "Social Media Marketing",
          "Video Editing and Graphic Design",
        ].map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-3 max-w-80 w-full h-14 px-2 xl:px-2 justify-center bg-sky-200 text-black rounded-2xl mx-auto"
          >
            <span className="text-black text-sm xl:text-xl">✔</span>
            <p className="text-black text-sm md:text-xl">{service}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Homepage;
