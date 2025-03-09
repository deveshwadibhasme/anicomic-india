import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft ,faAnglesRight, faUser} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    quote:
      "This program transformed my approach to leadership. I'm now more confident and effective in my role.",
    author: "Sarah Johnson",
    title: "Marketing Director",
    image: faUser,
  },
  {
    quote:
      "The skills I learned here have been invaluable in building and managing high-performing teams.",
    author: "Michael Chen",
    title: "Tech Lead",
    image: faUser,
  },
  {
    quote:
      "A game-changer for my career. The program provided practical tools I use every day.",
    author: "Emily Rodriguez",
    title: "HR Manager",
    image: faUser,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState(-50);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 4000);
  
    return () => clearInterval(interval); // Cleanup function to prevent multiple intervals
  }, [currentIndex]); // Depend on `currentIndex` to reset properly
  
  const nextTestimonial = () => {
    setValue(50);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setValue(-50);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section className="container max-w-screen min-h-52 mx-auto flex flex-col gap-5 px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl uppercase lg:text-6xl 2xl:text-7xl text-center text-orange-600 font-Caprasimo-regular mb-4"
      >
        Our Valuable Client
      </motion.h1>
      <div className="relative max-w-5xl w-full min-h-52 mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: - value }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x : value  }}
            transition={{ duration: 0.5 }}
            className="bg-white min-h-96 justify-center p-8 rounded-lg shadow-lg border-2 flex flex-col gap-3 text-center items-center border-orange-500 md:border-0"
          >
            <p className="text-xl mb-4 text-gray-600 italic min-h-25">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex items-center gap-3">
              <span className="border-2 rounded-full p-2">{<FontAwesomeIcon icon ={testimonials[currentIndex].image}/>}</span>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-gray-800">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-gray-900">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevTestimonial}
          className="absolute cursor-pointer md:-left-2 left-8 top-1/2 transform -translate-y-1/2 -translate-x-full bg-orange-500 p-2 rounded-full shadow-md focus:outline-none"
          aria-label="Previous testimonial"
        >
          <FontAwesomeIcon
            icon={faAnglesLeft}
            className="w-6 h-6 text-7xl text-black"
          />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute cursor-pointer md:-right-2 right-8 top-1/2 transform -translate-y-1/2 translate-x-full bg-orange-500 p-2 rounded-full shadow-md focus:outline-none"
          aria-label="Next testimonial"
        >
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="w-6 h-6 text-black text-7xl"
          />
        </button>
      </div>
    </section>
  );
}
