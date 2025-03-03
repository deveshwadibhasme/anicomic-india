import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faShareAlt,
  faPenNib,
  faCode,
  faPaintBrush,
  faVideo,
  faCube,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Digital Advertisement",
    description:
      "Strategic online advertising to maximize reach and engagement across digital platforms.",
    icon: faBullhorn,
  },
  {
    title: "Social Media Marketing",
    description:
      "Enhancing brand presence through targeted social media campaigns and audience engagement.",
    icon: faShareAlt,
  },
  {
    title: "Content Creation",
    description:
      "Crafting compelling and engaging content for various digital platforms to captivate audiences.",
    icon: faPenNib,
  },
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance websites tailored to user experience and business needs.",
    icon: faCode,
  },
  {
    title: "Graphic Design",
    description:
      "Creating visually appealing designs that effectively communicate brand identity and messaging.",
    icon: faPaintBrush,
  },
  {
    title: "Video Editing",
    description:
      "Professional editing services to enhance video content with smooth transitions and effects.",
    icon: faVideo,
  },
  {
    title: "3D Animation",
    description:
      "Producing stunning 3D animations for storytelling, product visualization, and branding.",
    icon: faCube,
  },
  {
    title: "Cinematography",
    description:
      "Capturing high-quality visuals and storytelling through expert cinematography techniques.",
    icon: faFilm,
  },
];

const Services = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-orange-600 mt-30 md:mt-20">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 min-h-[200px] md:min-h-[400px] xl:min-h-[500px]">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0.4, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5}}
            key={index}
            className={`relative p-6 z-20 after:[animation:floating-water_4s_alternate-reverse_infinite] floating-water bg-slate-300 text-black rounded-2xl shadow-lg flex flex-col items-center text-center`}
          >
            <FontAwesomeIcon
              icon={service.icon}
              className="text-4xl mb-4 text-orange-600"
            />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-slate-800 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Services;
