"use client";
import React from "react";
import "./style.scss";
import { url } from "inspector";
import User from "../Header/User";
import PhoneIcon from "../Icon/PhoneIcon";
import Link from "next/link";

const MobieIU: React.FC = () => {
  return (
    <div
      className="background_iu"
      style={{ backgroundImage: 'url("/img/background-mobie-ui.png")' }}
    >
      {/* <div className="video_container">
        <video loop autoPlay={true}>
          <source src="https://youtu.be/1tskGp0nzkU" type="video/mp4" />
          <source src="/video/video-intro-mobie.mp4" type="video/mp4" />
        </video>
      </div> */}
      <div className="container_position">
        <nav>
          <div className="header flex justify-around items-center px-1 py-5">
            <div className="logo_icon opacity-80">
              <div className="home_icom mt-2 flex justify-center">
                <Link href={"/"} className="flex items-center space-x-2">
                  <PhoneIcon width={"40px"} height={"40px"} fill={"#fff"} />
                  <div className="flex items-center content_home">
                    <span className="text-white" style={{ fontWeight: 700 }}>
                      MP3
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="infor">
              <User />
            </div>
          </div>
        </nav>
        <div className="pt-3">
          <div className="title_welcome">
            <span style={{}}>Quý Xin Chào</span>
          </div>
          <div className="content pt-2">
            <p>
              Bạn Đang Sử Dụng Thiết Bị Có Chiều Rộng Màn Hình Nhỏ Như: Điện
              Thoại Di Động, Ipad Mini.
            </p>
            <p>
              Hãy Sử Dụng Các Thiết Bị Có Chiều Rộng Màn Hình Lớn Hơn{" "}
              <span className="style_width">1100px</span> Để Trải Nghiệm Tốt
              Nhất.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobieIU;
