import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
// import sliderImages from "./components/SliderImages";

function App() {
  return (
    <>
      <Header />
      <div
        id="fullPage"
        className={`relative max-w-screen w-full mx-auto bg-black min-h-screen overflow-x-hidden flex flex-col justify-between pt-24 xl:pb-0
      `}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
