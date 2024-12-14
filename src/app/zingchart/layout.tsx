"use client";
import Link from "next/link";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="text-white" style={{ paddingBottom: "90px" }}>
      <div className="text-white">
        <h3>Header</h3>
        <Link href={"/zingchart/test-zing-chart"}>
          ---chuyển hướng đến layout kế tiếp ===
        </Link>
      </div>
      <div className="">{children}</div>
      <div className="">Footer</div>
    </div>
  );
};

export default layout;
