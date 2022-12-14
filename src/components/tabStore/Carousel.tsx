import React, { useEffect, useState } from "react";

import "./Carousel.css";

export const CarouselItem = ({ children, width }: any) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!paused) {
  //       updateIndex(activeIndex + 1);
  //     }
  //   }, 5000);

  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // });

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>

      <div className="indicators">
        <div
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="indicators-prev"
        ></div>

        <div
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="indicators-next"
        ></div>
      </div>
    </div>
  );
};

export default Carousel;
