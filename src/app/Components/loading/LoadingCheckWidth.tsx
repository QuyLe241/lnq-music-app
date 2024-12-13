"use client";
import React from "react";
import "./style.scss";

const LoadingCheckWidth: React.FC = () => {
  return (
    <div
      className="bg_loading"
      style={{ backgroundImage: 'url("/img/background-mobie-ui.png")' }}
    >
      <div className="container_loading flex justify-center items-center ">
        <div className="w-3/5">
          <div className="flex justify-center items-center">
            <p style={{ fontSize: "20px", fontWeight: 600, color: "#fff" }}>
              Đang kiểm tra thiết bị
            </p>
          </div>
          <div className="w-full">
            <div className="box_loading w-full">
              <div className="chid_loading"></div>
            </div>
          </div>
          <div
            className="flex justify-center items-center"
            style={{ fontWeight: 600 }}
          >
            <p style={{ color: "#86e3ae", opacity: "0.9" }}>By Lê Nhất Quý</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCheckWidth;
