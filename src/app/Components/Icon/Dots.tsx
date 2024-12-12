import React from "react";

interface DotsProps {
  width: string;
  height: string;
  fill: string;
  classname: string;
}
const Dots: React.FC<DotsProps> = ({ width, height, fill, classname }) => {
  return (
    <div className={classname}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={fill}
        viewBox="0 0 448 512"
      >
        <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
      </svg>
    </div>
  );
};

export default Dots;
