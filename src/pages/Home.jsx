// import Loading from "../components/Loading";
import { useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import Homepage from "../components/Homepage";
import Services from "./Services";
import Contact from "./Contact";
import Testimonials from "../components/Testimonials";
import Counter from "../components/Counter";
import Projects from "./Studio";

const Home = () => {

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <div
      className={`max-w-screen w-full min-h-screen mx-auto mt-5 xl:mt-1 relative flex flex-col`}
    >
      <>
        <ImageSlider count={1} direction={true} />
        <Homepage />
        <ImageSlider count={20} direction={false} />
        {/* <Projects /> */}
        <Counter />
        {/* <Testimonials /> */}
        <Services />
        <Contact />
      </>
    </div>
  );
};

export default Home;
