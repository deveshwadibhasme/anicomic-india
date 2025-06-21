import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Loading from "./components/Loading";

function App() {
  return (
    <Suspense fallback={<Loading fullScreen={true}/>}>
      <Header />
      <div id="fullPage" className={`relative max-w-screen w-full mx-auto bg-black min-h-screen overflow-x-hidden flex flex-col justify-between pt-24 xl:pb-0`}>
        <Outlet />
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
