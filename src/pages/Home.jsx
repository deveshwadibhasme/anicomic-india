// import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import Homepage from "../components/Homepage";
import Services from "./Services";
import Contact from "./Contact";
import Testimonials from "../components/Testimonials";
import Counter from "../components/Counter";

const Home = () => {


  return (
    <div
      className={`max-w-screen w-full min-h-screen mx-auto mt-30 xl:mt-18 relative flex flex-col `}
    >
      <>
        <ImageSlider count={1} moveLeft={true} />
        <Homepage />
        <ImageSlider count={20} moveLeft={false} />
        <Counter />
        <Testimonials />
        <Services />
        <Contact />
      </>
    </div>
  );
};

export default Home;
