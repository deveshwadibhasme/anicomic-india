import sliderImages from "./SliderImages";
import loadingSVG from "/ani-logo.svg";
import { useState } from "react";

export default function ImageSlider({ count, moveLeft }) {
  const images = sliderImages.slice(count, count + 20);

  const duplicateImages = [...images, ...images, ...images];

  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      <div
        className={`flex gap-2 px-5 mx-auto m-4 relative w-full  space-x-4  
      ${moveLeft ? "animate-move-l" : "animate-move-r"} 
        `}
      >
        {duplicateImages.map((_, i) => {
          {
            return images.length === count + 20 ? (
              <div className="rounded-2xl max-w-40 md:max-w-52 min-h-40 md:min-h-52 w-full shrink-0 bg-slate-300"></div>
            ) : (
              <div
                key={i}
                className={`max-w-30 md:max-w-52 ${
                  loading
                    ? `bg-slate-700 animate-pulse border-green-500`
                    : "bg-transparent animate-none border-white"
                } h-full md:min-h-52 bg-cover w-full shrink-0 overflow-hidden rounded-2xl border-2  object-center`}
              >
                <img
                  src={duplicateImages[i]}
                  loading="lazy"
                  onLoad={handleLoad}
                  placeholder="loading..."
                  alt=""
                />
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
