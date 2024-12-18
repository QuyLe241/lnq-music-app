"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import ArrowRightIcon from "../Icon/ArrowRightIcon";
import "./style.scss";

const SetThemeModal: React.FC = () => {
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
    <div>
      {/* <Button onClick={showModal}>Đổi chủ đề</Button> */}
      <button
        onClick={showModal}
        style={{ color: "#fff", fontSize: "18px" }}
        className="btn_modal_theme duration-300 mt-3 flex items-center opacity-80 hover:opacity-100"
      >
        Đổi chủ đề
        <div className="arrow_btn_theme">
          <ArrowRightIcon width="18px" height="18px" fill="#fff" />
        </div>
      </button>
      <Modal
        title="Chức năng đang phát triển"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className=""></div>
      </Modal>
    </div>
  );
};

export default SetThemeModal;
