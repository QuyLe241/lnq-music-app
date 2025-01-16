"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Link from "next/link";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AppProps } from "next/app";
import { saveKey, getKey } from "../../localStorage/auth";
import { string } from "yup";
import ViewIcon from "../Components/Icon/ViewIcon";
import ViewSlashIcon from "../Components/Icon/ViewSlashIcon";

const PageNamePage: React.FC = () => {
  const [key, setKey] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveKey("key", key);
    console.log(key);
    if (key === "q") {
      toast.success("Đăng nhập thành công", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setTimeout(() => {
        window.location.href = "/admin";
      }, 500);
    } else {
      toast.error("Key không chính xác", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    // Add your form submission logic here
  };
  console.log(key);

  useEffect(() => {
    const checkKey = getKey("key");
    if (checkKey) {
      if (checkKey === "q") {
        window.location.href = "/admin";
      }
    }
  }, []);

  // handle button show password
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="pb-[92px]">
      <div className="">
        <div className="flex justify-center">
          <h3
            className="opacity-80"
            style={{ color: "white", fontWeight: 600, fontSize: "20px" }}
          >
            Chức Năng Dành Cho ADMIN
          </h3>
        </div>
        <div className="flex justify-center">
          {/* <p style={{ color: "white" }}>Nhập Key</p> */}
        </div>
        <div className="mt-2 pt-3">
          <form className="" onSubmit={handleFormSubmit}>
            <div className="flex justify-center w-full input_key ">
              <input
                type={showPassword ? "text" : "password"}
                className="w-5/6 rounded-xl focus:outline-none p-2"
                placeholder="Nhập Key"
                value={key}
                onChange={handleInputChange}
              />
              <div className="icon_show">
                <button
                  className="opacity-80 hover:opacity-100"
                  type="button"
                  onClick={() => {
                    handlePassword();
                  }}
                >
                  {showPassword ? (
                    <ViewSlashIcon width="20px" height="20px" fill="" />
                  ) : (
                    <ViewIcon width="20px" height="20px" fill="" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <button
                type="submit"
                className="btn_login py-2 px-6 rounded-xl text-white duration-300"
              >
                Xác Thực
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PageNamePage;
