"use client";
import React, { useEffect, useState } from "react";
import BackMusicIcon from "../Icon/BackMusicIcon";
import "./style.scss";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScrollEvent = () => handleScroll();
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div>
      {/* {isVisible && (
        <button
          className="btn_backToTop"
          onClick={() => {
            scrollToTop();
          }}
          style={{}}
        >
          <BackMusicIcon classname="" width="24px" height="24px" fill="white" />
        </button>
      )} */}
      <button
        className="btn_backToTop"
        onClick={() => {
          scrollToTop();
        }}
        style={{}}
      >
        <BackMusicIcon classname="" width="24px" height="24px" fill="white" />
      </button>
    </div>
  );
};

export default BackToTop;
