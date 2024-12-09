"use client";
import React from "react";
import TestPage from "./test-zing-chart/page";
import Link from "next/link";
import ComponentDefault from "./componentDefault/ComponentDefault";

interface ZingChartPageProps {
  children: React.ReactNode;
}
const ZingChartPage: React.FC<ZingChartPageProps> = () => {
  return (
    <div className="">
      <div className="">
        <h3>Content mặc định</h3>
      </div>
    </div>
  );
};

export default ZingChartPage;
