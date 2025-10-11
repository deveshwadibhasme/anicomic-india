import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading.jsx";
import Studio from "./pages/Studio.jsx";
import ClapperLoading from "./components/ClapperLoading.jsx";
import ProjectInfo from "./pages/ProjectInfo.jsx";
import RegistrationForm from "./pages/AddmissionForm.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Career = lazy(() => import("./pages/Career.jsx"));
const CertificateVerified = lazy(() => import("./components/Verification.jsx"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          // <Suspense fallback={<Loading fullScreen={true} />}>
            <Home />
          // // </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={<Loading fullScreen={true} />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading fullScreen={true} />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loading fullScreen={true} />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/career",
        element: (
          <Suspense fallback={<Loading fullScreen={true} />}>
            <Career />
          </Suspense>
        ),
      },
      // {
      //   path: "/studio",
      //   element: (
      //     <Suspense fallback={<ClapperLoading />}>
      //       <Studio />
      //    </Suspense>
      //   ),
      // },
      {
        path: "/verification",
        element: (
          <Suspense fallback={<Loading fullScreen={true}/>}>
            <CertificateVerified />
         </Suspense>
        ),
      },
      {
        path: "/registration",
        element: (
          <Suspense fallback={<Loading fullScreen={true}/>}>
            <RegistrationForm />
         </Suspense>
        ),
      },
      // {
      //   path: "/studio/:project",
      //   element: (
      //     <Suspense fallback={<ClapperLoading />}>
      //       <ProjectInfo />
      //    </Suspense>
      //   ),
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
