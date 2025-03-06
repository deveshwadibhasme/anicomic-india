import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative max-w-screen w-full mx-auto bg-black min-h-screen overflow-x-hidden flex flex-col justify-between">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
