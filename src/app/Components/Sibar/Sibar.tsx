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

const Sibar = () => {
  return (
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
      <div className="list_menu mt-3" style={{ overflow: "scroll" }}>
        <div className="item_menu">
          <Link
            href={""}
            className="item_sibar flex pl-3 items-center active_sibar"
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
          <Link href={""} className="item_sibar flex pl-3 items-center">
            <div className="icon">
              <AventureIcon width={"20px"} height={"20px"} fill={"#d8d8d8"} />
            </div>
            <div className="content">
              <span>Nhạc USUK</span>
            </div>
          </Link>
        </div>
        <div className="item_menu">
          <Link href={""} className="item_sibar flex pl-3 items-center">
            <div className="icon">
              <ZingChartIcon width={"20px"} height={"20px"} fill={"#d8d8d8"} />
            </div>
            <div className="content">
              <span>Zingchart</span>
            </div>
          </Link>
        </div>
        <div className="item_menu">
          <Link href={""} className="item_sibar flex pl-3 items-center">
            <div className="icon">
              <RadioIcon width={"20px"} height={"20px"} fill={"#d8d8d8"} />
            </div>
            <div className="content">
              <span>Nhạc Tết</span>
            </div>
          </Link>
        </div>
        <div className="item_menu">
          <Link href={""} className="item_sibar flex pl-3 items-center">
            <div className="icon">
              <RankIcon width={"20px"} height={"20px"} fill={"#d8d8d8"} />
            </div>
            <div className="content">
              <span>Xếp Hạng</span>
            </div>
          </Link>
        </div>
        <div className="item_menu">
          <Link href={""} className="item_sibar flex pl-3 items-center">
            <div className="icon">
              <RankIcon width={"20px"} height={"20px"} fill={"#d8d8d8"} />
            </div>
            <div className="content">
              <span>Comming</span>
            </div>
          </Link>
        </div>
        <div className="item_menu">
          <Link href={""} className="item_sibar flex pl-3 items-center">
            <div className="icon">
              <RankIcon width={"20px"} height={"20px"} fill={"#d8d8d8"} />
            </div>
            <div className="content">
              <span>Comming</span>
            </div>
          </Link>
        </div>
        <div className="item_menu">
          <Link href={""} className="item_sibar flex pl-3 items-center">
            <div className="icon">
              <RankIcon width={"20px"} height={"20px"} fill={"#d8d8d8"} />
            </div>
            <div className="content">
              <span>Comming</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sibar;
