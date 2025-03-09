import axios from "axios";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import useToaster from "../hooks/toaster";
import contactPoster from "../assets/contact-us.png";

const Contact = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const [formDataValues, setFormDataValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: location.state?.service || "",
    company: "",
    message: "",
  });

  if (location.pathname === "/contact") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const { addToast, ToastContainer } = useToaster();

  if (location.state?.service) {
    window.scrollTo(0, 0);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataValues({ ...formDataValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `https://anicomic-india-production.up.railway.app/send-email`,
        formDataValues
      );
      addToast("Thanks For Contacting !");
      setTimeout(() => {
        e.target.reset();
      }, 500);
    } catch (error) {
      addToast("Error While Sending! Try again later");
      console.log(error);
    }
  };

  return (
    <>
      <div
        style={{ display: `${location.pathname === "/" ? "none" : "block"}` }}
        className={`h-[200px] sm:h-[400px] 2xl:h-[700px] 2xl:min-h-[500px] mt-20 max-w-screen-xl xl:max-w-screen-2xl 2xl:max-w-screen object-cover flex justify-between items-center border-2 border-amber-50 ${
          loading ? "bg-slate-400 animate-pulse" : "bg-transparent"
        }`}
      >
        <motion.img
          onLoad={handleLoad}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="h-full w-full object-cover"
          src={contactPoster}
          alt=""
        />
      </div>
      <div className="relative overflow-hidden max-w-screen-lg md:max-w-screen-2xl w-full min-h-screen flex flex-col justify-center items-center mt-3 md:mt-5 mx-auto text-center mb-5">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white font-monteseret-regular max-w-screen-sm text-xl md:text-3xl 2xl:text-4xl items-center mx-auto mb-4"
        >
          <b className="text-orange-600">Get in touch</b> with us for our
          Digital Media Services.
        </motion.h1>
        <div className="relative max-w-screen-xl 2xl:scale-110 flex flex-col xl:flex-row w-full  h-full rounded-2xl mt-2 items-center justify-center">
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="flex flex-col p-8 m-2 h-full ml-auto rounded-2xl max-w-[600px] w-full"
            action=""
          >
            <input
              required
              autoComplete="off"
              type="text"
              name="name"
              value={formDataValues.name}
              onChange={(e) => handleChange(e)}
              placeholder="Name"
              className="outline-0 w-full px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
            />
            <input
              required
              autoComplete="off"
              type="email"
              name="email"
              value={formDataValues.email}
              onChange={(e) => handleChange(e)}
              placeholder="Email"
              className="outline-0 w-full mt-4 px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
            />
            <input
              required
              autoComplete="off"
              type="text"
              name="phone"
              value={formDataValues.phone}
              onChange={(e) => handleChange(e)}
              placeholder="Phone"
              className="outline-0 w-full mt-4 px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
            />
            <input
              autoComplete="off"
              type="text"
              name="company"
              value={formDataValues.company}
              onChange={(e) => handleChange(e)}
              placeholder="Company"
              className="outline-0 w-full mt-4 px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
            />
            <select
              onChange={(e) => handleChange(e)}
              name="service"
              value={formDataValues.service}
              id=""
              className="outline-0 w-full mt-4 px-3 py-2 bg-slate-500 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
            >
              <option value="">Select Service</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Social Media Management">
                Social Media Management
              </option>
              <option value="Digital Advertisement">
                Digital Advertisement
              </option>
              <option value="Content Creation">Content Creation</option>
              <option value="Cinematography">Cinematography</option>
              <option value="Video Editing">Video Editing</option>
              <option value="3D Animation">3D Animation</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              rows="4"
              name="message"
              onChange={(e) => handleChange(e)}
              placeholder="Message"
              className="outline-0 w-full mt-4 px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
            ></textarea>
            <button
              type="submit"
              className="cursor-pointer outline-0 w-full mt-4 px-3 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 focus:outline-none"
            >
              Submit
            </button>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            className="max-w-96 flex items-center justify-center flex-col w-full h-full md:h-[450px] bg-slate-100 rounded-xl text-black shrink-0 gap-3 p-3 py-5 mx-auto"
          >
            <FontAwesomeIcon
              icon={faPhone}
              className="text-4xl md:text-7xl text-orange-600"
            />
            <p className="text-center mt-2 text-lg md:text-2xl">86056 88071</p>
            <div className="mt-20 font-bold">Nagpur | Mumbai | Chindwaara</div>
            <h1>Email : info@anicomic.in</h1>
          </motion.div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Contact;
