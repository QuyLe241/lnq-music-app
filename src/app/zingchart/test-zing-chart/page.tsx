"use client";
import Link from "next/link";
import React from "react";
// import Audio1 from "../../../Audio/testaudio.m4a";

const TestPage: React.FC = () => {
  return (
    <div className="text-white">
      <div className="">
        <h3></h3>
      </div>
      <div className="bg-white text-black opacity-80">
        <h3 className="text-center">Coming soon</h3>
        <div className="">
          {/* <audio controls autoPlay>
            <source src={"/audio/testaudio.m4a"} type="audio/mp4" />
          </audio> */}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
