"use client";
import React from "react";
import PhoneIcon from "../Icon/PhoneIcon";
import Link from "next/link";
import "./style.scss";
import LibraryIcon from "../Icon/LibraryIcon";
import AventureIcon from "../Icon/AventureIcon";
import ZingChartIcon from "../Icon/ZingChartIcon";
import RadioIcon from "../Icon/RadioIcon";
import RankIcon from "../Icon/RankIcon";
import { usePathname } from "next/navigation";
import ListIcon from "../Icon/ListIcon";

const Sibar = () => {
  const pathName = usePathname();
  return (
    <div className="" style={{ paddingBottom: "90px" }}>
      <div style={{ height: "", backgroundColor: "" }}>
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
        <div
          className="list_menu mt-3"
          style={{
            overflow: "scroll",
            height: "",
            width: "100%",
          }}
        >
          <div className="item_menu">
            <Link
              href={"/"}
              className={`item_sibar flex pl-3 items-center ${
                pathName === "/" ? " active_sibar" : ""
              }`}
            >
              <div className="icon">
                <LibraryIcon width={"20px"} height={"20px"} fill={"#d8d8d8"} />
              </div>
              <div className="content">
                <span>Thư Viện</span>
              </div>
            </Link>
          </div>
          <div className="item_menu">
            <Link
              href={"/trending"}
              className={`item_sibar flex pl-3 items-center ${
                pathName === "/trending" ? " active_sibar" : ""
              }`}
            >
              <div className="icon">
                <RankIcon width={"20px"} height={"20px"} fill={"#d8d8d8"} />
              </div>
              <div className="content">
                <span>Xếp Hạng</span>
                <span
                  className="ml-1"
                  style={{
                    fontSize: "12px",
                    padding: "5px 8px",
                    fontWeight: 600,
                    backgroundColor: "#F20505",
                    borderRadius: "6px",
                  }}
                >
                  HOT
                </span>
              </div>
            </Link>
          </div>
          <div className="item_menu">
            <Link
              href={"/nhactet"}
              className={`item_sibar flex pl-3 items-center ${
                pathName === "/nhactet" ? " active_sibar" : ""
              }`}
            >
              <div className="icon">
                <RadioIcon width={"20px"} height={"20px"} fill={"#d8d8d8"} />
              </div>
              <div className="content">
                <span>Nhạc Tết</span>
              </div>
            </Link>
          </div>
          <div className="item_menu">
            <Link
              href={"/usuk"}
              className={`item_sibar flex pl-3 items-center ${
                pathName === "/usuk" ? "active_sibar" : ""
              }`}
            >
              <div className="icon">
                <AventureIcon width={"20px"} height={"20px"} fill={"#d8d8d8"} />
              </div>
              <div className="content">
                <span>Nhạc USUK</span>
              </div>
            </Link>
          </div>
          <div className="item_menu">
            <Link
              href={"/zingchart"}
              className={`item_sibar flex pl-3 items-center ${
                pathName === "/zingchart" ? " active_sibar" : ""
              }`}
            >
              <div className="icon">
                <ZingChartIcon
                  width={"20px"}
                  height={"20px"}
                  fill={"#d8d8d8"}
                />
              </div>
              <div className="content">
                <span>Zingchart</span>
              </div>
            </Link>
          </div>

          <div className="item_menu">
            <Link
              href={"/danh-sach-cua-ban"}
              className={`item_sibar flex pl-3 items-center ${
                pathName === "/danh-sach-cua-ban" ? " active_sibar" : ""
              }`}
            >
              <div className="icon">
                <ListIcon width={"20px"} height={"20px"} fill={"#d8d8d8"} />
              </div>
              <div className="content">
                <span>Của Bạn</span>
              </div>
            </Link>
          </div>
          <div className="item_menu">
            <Link
              href={"/comming"}
              className={`item_sibar flex pl-3 items-center ${
                pathName === "/comming" ? " active_sibar" : ""
              }`}
            >
              <div className="icon">
                <RankIcon width={"20px"} height={"20px"} fill={"#d8d8d8"} />
              </div>
              <div className="content">
                <span>Coming</span>
              </div>
            </Link>
          </div>
          <div className="item_menu">
            <Link
              href={"/comming"}
              className={`item_sibar flex pl-3 items-center ${
                pathName === "/comming" ? " active_sibar" : ""
              }`}
            >
              <div className="icon">
                <RankIcon width={"20px"} height={"20px"} fill={"#d8d8d8"} />
              </div>
              <div className="content">
                <span>Coming</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sibar;
