import sliderImages from "./SliderImages";
import { motion, AnimatePresence } from "framer-motion";
import {useState} from "react";

export default function ImageSlider({ count, moveLeft }) {
  const [images, setImages] = useState(sliderImages.slice(count, count + 25));

  return (
    <>
      <div
        className={`flex gap-2 px-5 mx-auto m-4 relative w-full  space-x-4
      ${moveLeft ? "animate-move-l" : "animate-move-r"} 
        `}
      >
        {
        images?.map((_, i) => {
          {
            return (
            images.length === 0 ? <div className="rounded-2xl max-w-40 md:max-w-52 min-h-40 md:min-h-52 w-full shrink-0 bg-slate-300"></div> : (
                <div
                  key={i}
                  className={`max-w-40 md:max-w-52 min-h-40 md:min-h-52 w-full shrink-0 overflow-hidden rounded-2xl border-2 border-white object-center`}
                >
                  <img
                    src={images[i]}
                    alt=""
                  />
                </div>
              )
            );
          }
        })}
        {
        images?.map((_, i) => {
          {
            return (
            images.length === 0 ? <div className="rounded-2xl max-w-40 md:max-w-52 min-h-40 md:min-h-52 w-full shrink-0 bg-slate-300"></div> : (
                <div
                  key={i}
                  className={`max-w-40 md:max-w-52 min-h-40 md:min-h-52 w-full shrink-0 overflow-hidden rounded-2xl border-2 border-white object-center`}
                >
                  <img
                    src={images[i]}
                    alt=""
                  />
                </div>
              )
            );
          }
        })}
      </div>
    </>
  );
}
