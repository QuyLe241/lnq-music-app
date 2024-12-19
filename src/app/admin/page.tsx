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
  return <div className="">page</div>;
};

export default PageNamePage;
