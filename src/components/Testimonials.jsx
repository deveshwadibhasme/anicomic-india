import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    quote:
      "Great experience working with Anicomic! The team is young, energetic, and full of creative ideas. They really helped us improve our Instagram and Facebook ads. Would definitely recommend.",
    author: "Neha Malhotra",
    title: "Manager",
    image: faUser,
  },
  {
    quote:
      "Tried a big agency before but felt like just another client. These guys actually care! They took time to understand my business and gave personalized strategies. Already seeing better engagement!.",
    author: "Rohan Iyer",
    title: "Lead",
    image: faUser,
  },
  {
    quote:
      "Super responsive team! I had a lot of questions since I’m new to digital marketing, but they explained everything clearly. My small business is finally getting noticed online!",
    author: "Pooja Sharma",
    title: "HR Manager",
    image: faUser,
  },
  {
    quote:
      "Really impressed with the fresh ideas from Anicomic. They helped us with social media and SEO, and we’ve already started seeing more inquiries. Excited to see what’s next!",
    author: "Karan Desai",
    title: "Client",
    image: faUser,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState(-50);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);

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
        className="relative custom-border custom-border-2 w-[350px] md:w-[800px] lg:w-[900px] mx-auto h-20 md:h-38 lg:h-25 text-3xl md:text-4xl uppercase lg:text-6xl 2xl:text-7xl text-center text-white font-Caprasimo-regular mb-4"
      >
        Our Valuable Client
      </motion.h1>
      <div className="relative max-w-5xl w-full min-h-52 mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -value }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: value }}
            transition={{ duration: 0.5 }}
            className=" text-white min-h-96 justify-center p-8 rounded-lg shadow-lg flex flex-col gap-3 text-center items-center border-orange-500 md:border-0"
          >
            <div className="flex flex-col text-center items-center justify-between gap-3">
              <span className="border-2 text-xl md:text-2xl rounded-full px-8 py-6">
                {<FontAwesomeIcon icon={testimonials[currentIndex].image} />}
              </span>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-inherit">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-orange-500 text-center w-full">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
            <p className="text-sm md:text-xl w-[70%] mb-4 text-white italic min-h-25">
              "{testimonials[currentIndex].quote}"
            </p>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevTestimonial}
          className="absolute cursor-pointer md:-left-2 left-8 top-1/2 transform -translate-y-1/2 -translate-x-full border-white border p-2 rounded-full shadow-md focus:outline-none"
          aria-label="Previous testimonial"
        >
          <FontAwesomeIcon
            icon={faAnglesLeft}
            className="w-6 h-6 text-7xl text-white"
          />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute cursor-pointer md:-right-2 right-8 top-1/2 transform -translate-y-1/2 translate-x-full border-white border p-2 rounded-full shadow-md focus:outline-none"
          aria-label="Next testimonial"
        >
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="w-6 h-6 text-white text-7xl"
          />
        </button>
      </div>
    </section>
  );
}
