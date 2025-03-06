import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { images } from "../components/SliderImages";

const services = [
  {
    title: "Digital Advertisement",
    description:
      "Strategic online advertising to maximize reach and engagement across digital platforms.",
    icon: images.digital,
  },
  {
    title: "Social Media Marketing",
    description:
      "Enhancing brand presence through targeted social media campaigns and audience engagement.",
    icon: images.social,
  },
  {
    title: "Content Creation",
    description:
      "Crafting compelling and engaging content for various digital platforms to captivate audiences.",
    icon: images.digital,
  },
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance websites tailored to user experience and business needs.",
    icon: images.digital,
  },
  {
    title: "Graphic Design",
    description:
      "Creating visually appealing designs that effectively communicate brand identity and messaging.",
    icon: images.digital,
  },
  {
    title: "Video Editing",
    description:
      "Professional editing services to enhance video content with smooth transitions and effects.",
    icon: images.digital,
  },
  {
    title: "3D Animation",
    description:
      "Producing stunning 3D animations for storytelling, product visualization, and branding.",
    icon: images.digital,
  },
  {
    title: "Cinematography",
    description:
      "Capturing high-quality visuals and storytelling through expert cinematography techniques.",
    icon: images.digital,
  },
];

const Services = () => {
  const [hover, setHover] = useState(false);

  const handleHover = (i) => {
    setHover(!hover);
  };

  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-orange-600 mt-30 md:mt-20">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 min-h-[200px] md:min-h-[400px] xl:min-h-[500px]">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0.4, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onHoverStart={()=>handleHover(index)}
            key={index}
            className={`relative p-6 z-20 bg-slate-300 text-black rounded-2xl shadow-lg flex flex-col items-center text-center h-full md:h-85 overflow-y-hidden cursor-pointer`}
          >
            <img
              className="mix-blend-multiply peer"
              src={service.icon}
              alt=""
            />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: -280 }}
              transition={{ duration: 0.8 }}
              className={`bg-orange-400/80 hidden peer-hover:block w-68 min-h-85 transition-transform duration-300 h-full z-10`}
            >
              <p className="text-slate-800 mt-2 peer h-full">
                {service.description}
              </p>
              <Link>Go with Service</Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Services;
