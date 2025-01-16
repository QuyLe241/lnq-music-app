"use client";
import React, { useEffect } from "react";
import "./style.scss";
import { getKey } from "../../localStorage/auth";

const PageNamePage: React.FC = () => {
  useEffect(() => {
    const key = getKey("key");
    if (key === null || key === "") {
      window.location.href = "/admin-login";
    }
  }, []);
  console.log("");
  return (
    <div className="">
      <h3 className="text-white text-center">XIN CHÀO ADMIN</h3>
    </div>
  );
};

export default PageNamePage;
