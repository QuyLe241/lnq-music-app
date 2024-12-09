"use client";
import Link from "next/link";
import React, { Children } from "react";
// import Audio1 from "../../../Audio/testaudio.m4a";

interface TestPageProps {
  children: React.ReactNode;
}
const TestPage: React.FC<TestPageProps> = ({ children }) => {
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
