"use client";
import Link from "next/link";
import React from "react";
// import Audio1 from "../../../Audio/testaudio.m4a";

const TestPage: React.FC = () => {
  return (
    <div className="text-white">
      <div className="">
        <h3>Đang ở page test zing chart 1</h3>
      </div>
      <div className="bg-white text-black">
        <h3>text audio</h3>
        <div className="">
          <audio controls autoPlay>
            <source src={"/audio/testaudio.m4a"} type="audio/mp4" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
