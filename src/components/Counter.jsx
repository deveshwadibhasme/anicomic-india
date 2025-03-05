import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const data = [
    {
      digit: 7,
      text: "Years of Experience",
    },
    {
      digit: 100,
      text: "Clients Served",
    },
    {
      digit: 200,
      text: "Creative Brains",
    },
  ];

  const { ref, inView } = useInView({  threshold: 0.8 });

  useEffect(() => {
    const counters = document.querySelectorAll("#counter");
    const speed = 1000;
    if (inView) {
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-value");
          const count = +counter.innerText;
          const inc = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target + "+";
          }
        };
        updateCount();
      });
    }
  },[inView]);

  return (
    <div
      ref={ref}
      className="flex justify-between items-center flex-col gap-5 md:flex-row max-w-screen-lg 2xl:max-w-screen-xl mx-auto min-h-64 w-full p-10"
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center h-40 gap-5 justify-center rounded-2xl p-3 w-full md:w-54"
        >
          <span
            id="counter"
            className="text-7xl h-15 text-center font-bold text-orange-700"
            data-value={item.digit}
          ></span>
          <span className="text-xl font-medium text-gray-500">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Counter;
