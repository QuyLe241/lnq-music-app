"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./style.scss";
import ImgUser from "../../../Img/img-user.png";
import Image from "next/image";
import { string } from "yup";
import FacebookIcon from "../Icon/FacebookIcon";
import TiktokIcon from "../Icon/TiktokIcon";
import Insta from "../Icon/Insta";

const User: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex">
      {/* <Button className="py-2" onClick={showModal} style={{ borderRadius: "" }}>
        <div className="">
          <Image
            src={ImgUser}
            style={{ borderRadius: "50%" }}
            alt="imguser"
            width={30}
            height={30}
          />
        </div>
      </Button> */}
      <div className="">
        <button
          onClick={showModal}
          className="opacity-90 hover:opacity-100 duration-300"
        >
          <div className="">
            <Image
              src={ImgUser}
              style={{ borderRadius: "50%" }}
              alt="imguser"
              width={35}
              height={35}
            />
          </div>
        </button>
      </div>
      <Modal
        className="style_modal"
        title="LÊ NHẤT QUÝ"
        open={isModalOpen}
        onOk={handleOk}
      >
        <div className="">
          <div className="social space-y-3">
            <a
              href=""
              className="link_social"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className="social_item  flex  items-center space-x-2">
                <FacebookIcon width="20px" height="20px" fill="#060a7a" />
                <div className="">
                  <p>FaceBook</p>
                </div>
              </div>
            </a>
            <a
              href=""
              className="link_social"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className="social_item flex items-center space-x-2">
                <TiktokIcon width="20px" height="20px" fill="#060a7a" />
                <div className="">
                  <p>TikTok</p>
                </div>
              </div>
            </a>
            <a
              href=""
              className="link_social"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className="social_item flex items-center  space-x-2">
                <Insta width="20px" height="20px" fill="#060a7a" />
                <div className="">
                  <p>Instagram</p>
                </div>
              </div>
            </a>
          </div>
          <div className="">
            <p
              className="text-center"
              style={{ fontSize: "16px", fontWeight: 600, color: "#ece7e7" }}
            >
              Clone By Lê Nhất Quý 2024.
            </p>
            <p></p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default User;
