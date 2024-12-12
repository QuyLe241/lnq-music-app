"use client";
import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import ArrowRightIcon from "../Icon/ArrowRightIcon";
import ThemeIcon from "../Icon/ThemeIcon";
import "./style.scss";
import SetThemeModal from "./SetThemeModal";

const SetTheme: React.FC = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="pb-3 pt-1 px-6"
          style={{ backgroundColor: "#662ac0", borderRadius: "10px" }}
        >
          <div className="">
            <span style={{ fontSize: "20px", color: "#fff" }}>
              Bạn muốn đổi chủ đề
            </span>
          </div>
          <div className="mt-1">
            <SetThemeModal />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Dropdown className="style_dropdown_theme" menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <div className="">
              <div className="flex w-full justify-between hover:opacity-90 item_dropdown">
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
              </div>
            </div>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default SetTheme;
