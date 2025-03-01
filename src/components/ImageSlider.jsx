import sliderImages from "./SliderImages";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageSlider({ count, moveLeft }) {
  return (
    <>
      <div className="flex gap-5 max-w-screen 2xl:max-w-screen-2xl w-full px-5 mx-auto m-4 animate-move">
        {sliderImages.slice(0, 10).map((_, i) => {
          return (
            <div
              key={i}
              className={`max-w-40 md:max-w-52 min-h-40 md:min-h-52 w-full shrink-0 overflow-hidden rounded-2xl border-2 border-white object-center ${
                moveLeft ? "animate-move-l" : "animate-move-r"
              }`}
            >
              <img
                src={`${location.href}src/assets/slider-images/${
                  i + count
                }.png`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
