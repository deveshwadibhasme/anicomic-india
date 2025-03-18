import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import useToaster from "../hooks/toaster";

const CareerForm = ({ position , formDiv }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    position: "",
    message: "",
    cv: null,
  });

  useEffect(() => {
    if (position) {
      setFormData({ ...formData, position: position });
    }
  }, [position]);


  const {addToast,ToastContainer} = useToaster()
  

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://anicomic-india-production.up.railway.app/add-applicants`, formData);
      addToast("Application Submitted !");
      setTimeout(() => {
        handleReset();
      }, 500);
    } catch (error) {
      addToast("Error While Sending! Try again later");
      console.log(error);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      position: "",
      message: "",
      cv: "",
    });
  };

  return (
    <div ref={formDiv} className="flex items-center max-w-screen-lg p-2 mb-10 w-full justify-center min-h-screen">
      <div className="relative p-8 rounded-lg shadow-lg max-w-screen-md w-full">
        <h2 className="text-center text-2xl font-bold mb-10 text-white">
          Job Application Form Widget
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 w-full">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white w-full p-2 input "
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white w-full p-2 input "
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white w-full p-2 input  mt-4"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white w-full p-2 input  mt-4"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Select country"
            className="px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white w-full p-2 input  mt-4"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white w-full p-2 input  mt-4"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white w-full p-2 input  mt-4"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Choose desired position"
            className="px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white w-full p-2 input  mt-4"
            value={formData.position}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Additional info"
            className="px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white w-full p-2 input  mt-4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div className="mt-4 bg-slate-200 p-1 rounded-2xl">
            <label className="bg-orange-500 text-white py-2 px-4 rounded-xl cursor-pointer inline-block">
              Choose File | Resume{" "}
              <i className="text-sm text-slate-800">{`${
                formData.cv?.name === undefined ? "" : formData.cv.name
              }`}</i>
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc"
                className="hidden"
                onChange={handleChange}
                // required
              />
            </label>
          </div>
          <div className="relative flex justify-between mt-6">
            <ToastContainer/> 
            <button
              type="reset"
              className="btn cursor-pointer bg-gray-500 p-2 px-10 rounded-2xl"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              type="submit"
              className="btn cursor-pointer bg-orange-500 p-2 px-10 rounded-2xl"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
