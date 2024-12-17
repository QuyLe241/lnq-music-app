"use client";
import React from "react";

interface CaretDownProps {
  width: string;
  height: string;
  fill: string;
  classname: string;
}
const CaretDown: React.FC<CaretDownProps> = ({
  width,
  height,
  fill,
  classname,
}) => {
  return (
    <div className={classname}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={fill}
        viewBox="0 0 320 512"
      >
        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
      </svg>
    </div>
  );
};

export default CaretDown;
