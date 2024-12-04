"use client";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import SettingIcon from "../Icon/SettingIcon";
import "./style.scss";
import PlayIcon from "../Icon/PlayIcon";
import ThemeIcon from "../Icon/ThemeIcon";
import InforIcon from "../Icon/InforIcon";
import ArrowRightIcon from "../Icon/ArrowRightIcon";
import SetTheme from "./SetTheme";

const Setting: React.FC = () => {
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex hover:opacity-90 hover:text-white item_dropdown">
          <div className="flex items-center">
            <PlayIcon width="20px" height="20px" fill="#fff" />
          </div>
          <div className="pl-2">
            <span className="text-white" style={{ fontSize: "18px" }}>
              Trình phát nhạc
            </span>
          </div>
          <div className="flex items-center ml-8 pl-5">
            <ArrowRightIcon width="18px" height="18px" fill="#fff" />
          </div>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="">
          <SetTheme />
          {/* <div className="flex justify-between hover:opacity-90 item_dropdown">
          <div className="flex">
            <div className="flex items-center">
              <ThemeIcon width="20px" height="20px" fill="#fff" />
            </div>
            <div className="pl-2">
              <span className="text-white" style={{ fontSize: "18px" }}>
                Giao diện
              </span>
            </div>
          </div>
          <div className="flex items-center ml-8 pl-5">
            <ArrowRightIcon width="18px" height="18px" fill="#fff" />
          </div>
        </div> */}
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="flex hover:opacity-90 item_dropdown justify-between">
          <div className="flex">
            <div className="flex items-center">
              <InforIcon width="20px" height="20px" fill="#fff" />
            </div>
            <div className="pl-2">
              <span className="text-white" style={{ fontSize: "18px" }}>
                Giới thiệu
              </span>
            </div>
          </div>
          <div className="flex items-center ml-8 pl-5">
            <ArrowRightIcon width="18px" height="18px" fill="#fff" />
          </div>
        </div>
      ),
      key: "2",
    },
  ];
  return (
    <div
      className="p-2 flex items-center justify-center"
      style={{
        borderRadius: "50%",
        backgroundColor: " hsl(0deg 0% 100% / 10%)",
      }}
    >
      <Dropdown className="style_dropdown" menu={{ items }} trigger={["click"]}>
        <a
          className="flex justify-center items-center"
          onClick={(e) => e.preventDefault()}
        >
          <Space>
            <div className="hover:cursor-pointer hover:opacity-80">
              <SettingIcon width="25px" fill="#f1f0f0" height="25px" />
            </div>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default Setting;
