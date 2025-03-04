import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import useToaster from "../hooks/toaster";

const Contact = () => {
  const [formDataValues, setFormDataValues] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    company: "",
    message: "",
  });

  const { addToast, ToastContainer } = useToaster();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataValues({ ...formDataValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://anicomic-india-production.up.railway.app/send-email',formDataValues).catch((err)=>{
      console.log(err);
    })
   
    setTimeout(()=>{
      e.target.reset();
    }, 100);
    addToast("Email sent successfully!");
  };

  return (
    <div className="relative md:max-w-screen max-w-screen-sm w-full min-h-screen flex flex-col justify-center items-center mt-30 md:mt-20 mx-auto text-center mb-5">
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-white font-monteseret-regular max-w-screen-sm text-xl md:text-3xl items-center mx-auto"
      >
        <b className="text-orange-600">Get in touch</b> with us for our Digital
        Media Services.
      </motion.h1>
      <div className="relative flex flex-col xl:flex-row justify-center md:justify-around max-w-screen-lg w-full mx-auto h-full rounded-2xl mt-5 items-center">
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="flex flex-col p-8 m-2 h-full rounded-2xl max-w-[500px] w-full mx-auto"
          action=""
        >
          <input
            required
            autoComplete="off"
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            placeholder="Name"
            className="outline-0 w-full px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
          />
          <input
            required
            autoComplete="off"
            type="email"
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="Email"
            className="outline-0 w-full mt-4 px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
          />
          <input
            required
            autoComplete="off"
            type="text"
            name="phone"
            onChange={(e) => handleChange(e)}
            placeholder="Phone"
            className="outline-0 w-full mt-4 px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
          />
          <input
            autoComplete="off"
            type="text"
            name="company"
            onChange={(e) => handleChange(e)}
            placeholder="Company"
            className="outline-0 w-full mt-4 px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
          />
          <select
            onChange={(e) => handleChange(e)}
            name="service"
            id=""
            className="outline-0 w-full mt-4 px-3 py-2 bg-slate-500 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
          >
            <option value="">Select Service</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Social Media Marketing">
              Social Media Marketing
            </option>
            <option value="Digital Advertisement">Digital Advertisement</option>
            <option value="Content Creation">Content Creation</option>
            <option value="Cinematography">Cinematography</option>
            <option value="video-editing">Video Editing</option>
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
  );
};

export default Contact;
