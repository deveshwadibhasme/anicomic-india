import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faContactCard,
  faGraduationCap,
  faHome,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["transparent", "#000"]
  );

  const navContent = [
    { title: "Home", link: "/", icon: faHome },
    { title: "Services", link: "/services", icon: faBolt },
    { title: "About", link: "/about", icon: faInfo },
    { title: "Careers", link: "/career", icon: faGraduationCap },
    { title: "Contact", link: "/contact", icon: faContactCard },
  ];

  const {pathname} = useLocation()

  return (
    <nav
      className={`fixed md:relative max-w-screen-lg overflow-x-auto md:overflow-hidden top-15 md:top-0 left-0 justify-between gap-5 w-full h-14 md:h-10 flex items-center pl-3 md:pl-0 md:justify-center`}
    >
      {navContent.map((navItem, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, delay: `0.${i}` }}
          whileHover={{ scale: 1.04, transition: 0.1, delay: 0 }}
        >
          <Link
            style={{ backgroundColor }}
            to={navItem.link}
            key={i}
            href={navItem.link}
            className={`text-white px-4 flex items-center gap-2 py-1 text-sm md:text-lg 2xl:text-xl border-[1px] border-slate-400 rounded-lg hover:border-white hover:ring-1 ring-amber-400 ${navItem.link===pathname ? 'ring-1 ring-red-400' : ''}`}
          >
            <FontAwesomeIcon icon={navItem.icon} /> {navItem.title}
          </Link>
        </motion.span>
      ))}
    </nav>
  );
};

export default NavBar;
