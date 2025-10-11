import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faContactCard,
  faGraduationCap,
  faHome,
  faInfo,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {

  const navContent = [
    { title: "Home", link: "/", icon: faHome },
    { title: "Services", link: "/services", icon: faBolt },
    { title: "Careers", link: "/career", icon: faGraduationCap },
    // { title: "Studio", link: "/studio", icon: faClapperboard },
    { title: "About", link: "/about", icon: faInfo },
    { title: "Contact", link: "/contact", icon: faContactCard },
  ];

  const {pathname} = useLocation()

  return (
    <nav
      className={`fixed xl:relative max-w-screen-xl overflow-x-auto xl:overflow-auto top-13 lg:top-16 xl:top-0 left-1/2 -translate-x-1/2 xl:-translate-0 2xl:h-full xl:left-0 justify-between gap-2 w-full h-full flex items-center pl-3 xl:pl-0 xl:justify-center mt-2`}
    >
      {navContent.map((navItem, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: `0.${i+2}` }}
          whileHover={{ scale: 1.04, transition: 0.1, delay: 0 }}
          className="bg-black"
        >
          <Link
            to={navItem.link} 
            key={i}
            href={navItem.link}
            className={`text-white select-none px-4 flex items-center gap-2 py-1 text-sm md:text-[16px] 2xl:text-xl border-[1px] border-slate-400 rounded-md  hover:border-white hover:ring-1 bg-black ring-amber-400 ${navItem.link===pathname ? 'ring-1 ring-green-400' : ''}`}
          >
            <FontAwesomeIcon icon={navItem.icon} /> {navItem.title}
          </Link>
        </motion.span>
      ))}
    </nav>
  );
};

export default NavBar;
