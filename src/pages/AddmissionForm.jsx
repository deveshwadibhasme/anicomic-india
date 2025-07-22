import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faGraduationCap,
  faUniversity,
  faCalendarAlt,
  faUpload,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import useToaster from "../hooks/toaster";
import paymentQr from "../assets/illustration/paymentQr.jpg";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    qualification: "",
    institution: "",
    file: null,
  });

  const { addToast, ToastContainer } = useToaster();
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const API_BASE_URL = "https://anicomic-india.onrender.com";
  const API_LOCAL_URL = "http://localhost:4000";

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      const file = files[0];
      setFormData({ ...formData, file });

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    try {
      const response = await fetch(
       API_BASE_URL + '/register',
        {
          method: "POST",
          body: payload,
        }
      );

      if (response.ok) {
        setSuccess(true);
        addToast("Registration submitted successfully!");
      } else {
        addToast("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      addToast("Something went wrong. Check your internet or try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 mt-5">
      <ToastContainer />
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-6xl space-y-6 border-t-4 border-orange-500"
      >
        <h2 className="text-3xl font-bold text-orange-600 text-center">
          Kraftor Graphic Design Internship
        </h2>
        <p className="text-base text-gray-800 text-center">Duration: 8 Weeks</p>

        {/* QR Section */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center w-full"
        >
          <p className="text-sm text-gray-800 font-medium mb-3">
            Pay ₹200 to the QR below and upload the screenshot
          </p>
          <img
            src={paymentQr}
            alt="Payment QR"
            className="mx-auto h-80 w-auto bg-cover border border-orange-400 rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-orange-700">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Full Name*
            </label>
            <input
              type="text"
              name="fullName"
              required
              className="mt-1 w-full p-3 border border-orange-300 rounded focus:ring-orange-500 focus:border-orange-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-700">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Phone Number*
            </label>
            <input
              type="number"
              name="phone"
              required
              className="mt-1 w-full p-3 border border-orange-300 rounded focus:ring-orange-500 focus:border-orange-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-700">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full p-3 border border-orange-300 rounded text-gray-600"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-700">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Date of Birth*
            </label>
            <input
              type="date"
              name="dob"
              required
              className="mt-1 w-full p-3 border border-orange-300 rounded focus:ring-orange-500 focus:border-orange-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-700">
              <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
              Highest Qualification*
            </label>
            <select
              name="qualification"
              required
              className="mt-1 w-full p-3 border border-orange-300 rounded focus:ring-orange-500 focus:border-orange-500"
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>High School</option>
              <option>Diploma</option>
              <option>Bachelor’s Degree</option>
              <option>Master’s Degree</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-orange-700">
              <FontAwesomeIcon icon={faUniversity} className="mr-2" />
              Current Institution (if any)
            </label>
            <input
              type="text"
              name="institution"
              className="mt-1 w-full p-3 border border-orange-300 rounded focus:ring-orange-500 focus:border-orange-500"
              onChange={handleChange}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-orange-700">
              <FontAwesomeIcon icon={faUpload} className="mr-2" />
              Upload ₹200 Payment Screenshot*
            </label>
            <input
              type="file"
              name="file"
              accept="image/*"
              required
              className="mt-1 w-full p-2"
              onChange={handleChange}
            />
            {preview && (
              <img
                src={preview}
                alt="Uploaded Screenshot"
                className="mt-2 h-32 object-contain border border-gray-300 rounded"
              />
            )}
          </div>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-300 flex items-center justify-center gap-2"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          {loading ? "Submitting..." : "Submit Registration"}
        </motion.button>

        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-center mt-4 text-lg font-medium"
          >
            Form submitted successfully!
          </motion.p>
        )}
      </motion.form>
    </div>
  );
}
