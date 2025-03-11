import Contruction from "../assets/under-construction.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faUserTie,
  faVideo,
  faPenNib,
  faGamepad,
  faPaintBrush,
  faMusic,
  faTasks,
  faDraftingCompass,
  faCut,
  faCode,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

const Career = () => {
  const roles = [
    {
      text: "Animator",
      icon: faFilm,
      description:
        "Bring characters to life with your creativity and animation skills. Join our team and work on exciting projects that captivate audiences.",
    },
    {
      text: "Brand Model",
      icon: faUserTie,
      description:
        "Create memorable and engaging brand experiences for your clients. Join our team and work on exciting projects that captivate audiences.",
    },
    {
      text: "Cinematographer ( Camera Man )",
      icon: faVideo,
      description:
        "Help create stunning and engaging visuals for your clients. Join our team and work on exciting projects that captivate audiences.",
    },
    {
      text: "Content Creator",
      icon: faPenNib,
      description:
        "Develop engaging and compelling content for various platforms. Join our team and help shape the voice of our brand. Collaborate with creative professionals to produce high-quality content.",
    },
    {
      text: "Game Developer",
      icon: faGamepad,
      description:
        "Design engaging and immersive games for your clients. Join our team and help shape the voice of our brand. Collaborate with creative professionals to produce high-quality games.",
    },
    {
      text: "Graphic Designer",
      icon: faPaintBrush,
      description:
        "Create visually stunning graphics and designs for various media. Join our team and collaborate with creative professionals to produce high-quality visual content that captivates audiences.",
    },
    {
      text: "Music Editor",
      icon: faMusic,
      description:
        "Edit and produce music for your clients. Join our team and help shape the voice of our brand. Collaborate with creative professionals to produce high-quality music.",
    },
    {
      text: "Project Manager",
      icon: faTasks,
      description:
        "Lead and manage projects, including team management, budgeting, and communication. Join our team and help shape the voice of our brand.",
    },
    {
      text: "UI/UX Designer",
      icon: faDraftingCompass,
      description:
        "Design and create user interfaces and user experiences for various platforms. Join our team and collaborate with creative professionals to produce high-quality visual content that captivates audiences.",
    },
    {
      text: "Video Editor",
      icon: faCut,
      description:
        "Edit and produce videos for your clients. Join our team and help shape the voice of our brand. Collaborate with creative professionals to produce high-quality videos.",
    },
    {
      text: "Web Developer",
      icon: faCode,
      description:
        "Develop and maintain websites , server-side logic, databases, and APIs. Create and optimize user interfaces for web applications. Join our team and work on exciting projects that enhance user experience and engagement.",
    },
    {
      text: "Game Programmer",
      icon: faTerminal,
      description:
        "Design engaging and immersive games for your clients. Join our team and help shape the voice of our brand. Collaborate with creative professionals to produce high-quality games.",
    },
  ];

  return (
    <div className="mt-20 flex flex-col items-center r min-h-[500px] text-amber-50 bg-black mb-8">
      {/* <div className='bg-white w-80 md:w-xl h-64 md:h-96 animate-pulse'>
      <img src={Contruction} className='mix-blend-difference h-full w-full' alt="under-construction" />
      </div> */}
      <motion.h1
        initial={{ opacity: 0.4, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" text-4xl md:text-7xl text-center text-white py-40 md:p-40 w-full mt-6 md:mt-0 uppercase bg-gradient-to-r from-red-500 to-orange-600 border-2 border-white"
      >
        Careers
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0.4, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative custom-border custom-border-2 w-[350px] md:w-[800px] h-23 md:h-22 text-lg md:text-3xl font-Caprasimo-regular text-white text-center mt-15"
      >
        Want to make a carrer with us !!
        <br />
        <span className="text-orange-400"> Join Our Team</span>– Unlock Your
        Potential with Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.4, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.2, once:true }}
        className="text-lg md:text-xl text-white text-center max-w-screen-lg m-4"
      >
        At Anicomic, We believe that the heart of our success lies in the talent
        and passion of our people. We are committed to fostering a diverse,
        friendly and inclusive environment where every team member can thrive,
        grow, and make an impact. Whether you're just starting your career or
        you're an experienced professional, we offer a range of opportunities to
        help you reach your full potential. Explore our open positions and take
        the next step in your journey with us!
      </motion.p>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] max-w-screen gap-x-20 items-center gap-y-5 mx-auto">
        {roles.map((item, index) => (
          <motion.div
            initial={{ opacity: 0.4, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg min-h-70 border-[1px] border-slate-200 p-4 rounded-3xl mx-3 md:mx-0"
          >
            <div className="flex justify-between">
              <div>
                <FontAwesomeIcon
                  className="text-7xl text-orange-400"
                  icon={item.icon}
                />
                <h3 className="text-2xl my-5">{item.text}</h3>
              </div>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc3Kq9k_PQzLcRvc28jmIpZ9M8yZ2M5zwN7y1TXkJZlEDBeSQ/viewform"
                className="text-orange-500 p-2 border-b-2 h-full cursor-pointer hover:border-b-white hover:text-white"
              >
                Apply Now
              </a>
            </div>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Career;
