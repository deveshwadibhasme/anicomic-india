import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
// import sliderImages from "./components/SliderImages";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  // const [image,setImage]= useState([])

  if (location.pathname === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleLoad = () => {
      console.log('Page fully loaded');
      setTimeout(()=>{
        setLoading(false)
      },800)
    };

    // Check if the window is already loaded before attaching the listener
    if (document.readyState === 'complete' && document.readyState !== 'interactive') {
      handleLoad(); // If the page is already loaded
    } else {
      window.addEventListener('load', handleLoad); // Otherwise, wait for load
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [location.pathname]);

  return (
    <>
      <div
        className={`relative max-w-screen w-full mx-auto bg-black min-h-screen overflow-x-hidden flex flex-col justify-between
      `}
      >
        <Header />
        {loading ? (
          <div className="fixed z-50 bg-fixed top-0 left-0 max-w-screen w-full flex justify-center items-center h-screen bg-black">
            <Loading />
          </div>
        ) : null}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
