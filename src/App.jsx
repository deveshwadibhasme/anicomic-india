import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useState } from "react";

function App() {
  // const [timer, setTimer] = useState(4);

  // setTimeout(() => {
  //   setTimer(0);
  // }, 3000);

  return (
    <div className="max-w-screen w-full mx-auto bg-black min-h-screen overflow-x-hidden">
          <Header />
            <Outlet />
          <Footer />
    </div>
  );
}

export default App;
