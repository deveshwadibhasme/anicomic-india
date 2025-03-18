import Loading from "./Loading";
import sliderImages from "./SliderImages";
import loadingSVG from "/ani-logo.svg";
import { useState } from "react";

export default function ImageSlider({ count, moveLeft }) {
  const images = sliderImages.slice(count, count + 20);

  const duplicateImages = [...images, ...images];

  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setTimeout(()=>{
      setLoading(false);
    },1000)
  };

  return (
    <>
      <div
        className={`flex gap-2 px-5 mx-auto m-4 relative w-full  space-x-4  
      ${moveLeft ? "animate-move-l" : "animate-move-r"} 
        `}
      >
        {duplicateImages.map((item, i) => {
          {
            return( 
              <div
                key={i}
                className={`max-w-30 md:max-w-52 relative border-white h-full md:min-h-52 z-10 bg-cover w-full flex items-center justify-center shrink-0 overflow-hidden rounded-2xl border-2 object-center`}
              >
                {
                  loading ? <Loading/> : null
                }
                <img
                  src={item}
                  loading="lazy"
                  onLoad={handleLoad}
                  className={`${loading ? 'absolute' : 'relative'} bottom-full w-full h-full`}
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
  