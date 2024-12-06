"use client";
import React, { useContext, useMemo } from "react";
import SearchIcon from "../Icon/SearchIcon";
import BtnUpgrade from "./BtnUpgrade";
import Setting from "./Setting";
import "./style.scss";
import User from "./User";

const Header = () => {
  return (
    <div className="header">
      <div className="nav_header">
        <div className="container pt-3 flex justify-between mt-1">
          <div className="w-2/5 ml-3">
            <form
              action=""
              className="w-full flex py-2 px-2 rounded-2xl items-center"
              style={{ backgroundColor: "#34224f" }}
            >
              <div className="flex items-center">
                <button className="hover:opacity-80">
                  <SearchIcon width={"20px"} height={"20px"} fill={"#fff"} />
                </button>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="pl-2 w-full"
                  placeholder="Tìm kiếm bài hát,ca sĩ,..."
                  style={{
                    backgroundColor: "#34224f",
                    outline: "none",
                    color: "#eee",
                  }}
                />
              </div>
            </form>
          </div>
          <div className="flex space-x-1 px-2">
            <div className="">
              <BtnUpgrade />
            </div>
            <div className="setting">
              <Setting />
            </div>
            <div className="user_profile flex ">
              <User />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
