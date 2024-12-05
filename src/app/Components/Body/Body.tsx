"use client";
import React from "react";
import "./style.scss";
import CarouselHome from "./CarouselHome";
import Image from "next/image";
import TrendImg1 from "../../../Img/trend-img1.png";
import TrendImg2 from "../../../Img/trend-img2.png";
import TrendImg3 from "../../../Img/trend-img3.png";
import TrendImg4 from "../../../Img/trend-img4.png";
import TrendImg5 from "../../../Img/trend-img5.png";
import TrendImg6 from "../../../Img/trend-img6.png";
import BalladImg1 from "../../../Img/ballad-img1.png";
import TetImg1 from "../../../Img/tet-img1.png";
import PlayIcon from "../Icon/PlayIcon";
import Dots from "../Icon/Dots";
import HeartIcon from "../Icon/HeartIcon";
import PickleballImg from "../../../Img/pickleball-img.png";
import Link from "next/link";
import PlayActiveIcon from "../Icon/PlayActiveIcon";
// import TrendImg6 from "../../../Img/trend-img6.png";

const Body: React.FC = () => {
  const dataStyle = {
    white: "white",
    fontsize1: "16px",
    fontsize2: "18px",
    fontsize3: "20px",
    fontsize4: "25px",
    fontsize5: "30px",
    fontWeigth1: 600,
    fontWeight2: 700,
    borderRadius1: "8px",
    borderRadius2: "10px",
    borderRadius3: "15px",
    radius50pt: "50%",
  };

  return (
    <div className="container px-5" style={{}}>
      <div className="">
        <CarouselHome />
      </div>
      <div className="trend_music mt-5 py-3">
        <h3
          style={{
            color: dataStyle.white,
            fontSize: dataStyle.fontsize3,
            fontWeight: dataStyle.fontWeight2,
          }}
        >
          Nhạc Hot Thịnh Hành
        </h3>
        <div className="grid mt-3 gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
          <div className="">
            <Link href={""}>
              <div className="item_music_trend">
                <div
                  className="img_musix_trend"
                  style={{ borderRadius: dataStyle.borderRadius1 }}
                >
                  <Image
                    className="img_music"
                    src={TrendImg1}
                    style={{ borderRadius: dataStyle.borderRadius1 }}
                    alt=""
                  />
                  <div className="env_effect">
                    <div className="style_opacity"></div>
                    <div className="btn_set_vid flex justify-around items-center">
                      <HeartIcon
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_heart"
                      />
                      <PlayIcon width="30px" height="30px" fill="white" />
                      <Dots
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_dots"
                      />
                    </div>
                  </div>
                </div>
                <div className="content py-2">
                  <p style={{ color: dataStyle.white, opacity: "0.8" }}>
                    Những ca khúc EDM cực hay mà bạn không thể bỏ lỡ
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link href={""}>
              <div className="item_music_trend">
                <div
                  className="img_musix_trend"
                  style={{ borderRadius: dataStyle.borderRadius1 }}
                >
                  <Image
                    className="img_music"
                    src={TrendImg2}
                    style={{ borderRadius: dataStyle.borderRadius1 }}
                    alt=""
                  />
                  <div className="env_effect">
                    <div className="style_opacity"></div>
                    <div className="btn_set_vid flex justify-around items-center">
                      <HeartIcon
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_heart"
                      />
                      <PlayIcon width="30px" height="30px" fill="white" />
                      <Dots
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_dots"
                      />
                    </div>
                  </div>
                </div>
                <div className="content py-2">
                  <p style={{ color: dataStyle.white, opacity: "0.8" }}>
                    Những ca khúc hot hits cực hay mà bạn không thể bỏ lỡ
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link href={""}>
              <div className="item_music_trend">
                <div
                  className="img_musix_trend"
                  style={{ borderRadius: dataStyle.borderRadius1 }}
                >
                  <Image
                    className="img_music"
                    src={TrendImg3}
                    style={{ borderRadius: dataStyle.borderRadius1 }}
                    alt=""
                  />
                  <div className="env_effect">
                    <div className="style_opacity"></div>
                    <div className="btn_set_vid flex justify-around items-center">
                      <HeartIcon
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_heart"
                      />
                      <PlayIcon width="30px" height="30px" fill="white" />
                      <Dots
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_dots"
                      />
                    </div>
                  </div>
                </div>
                <div className="content py-2">
                  <p style={{ color: dataStyle.white, opacity: "0.8" }}>
                    Những ca khúc chọn lọc cực hay mà bạn không thể bỏ lỡ
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link href={""}>
              <div className="item_music_trend">
                <div
                  className="img_musix_trend"
                  style={{ borderRadius: dataStyle.borderRadius1 }}
                >
                  <Image
                    className="img_music"
                    src={TrendImg4}
                    style={{ borderRadius: dataStyle.borderRadius1 }}
                    alt=""
                  />
                  <div className="env_effect">
                    <div className="style_opacity"></div>
                    <div className="btn_set_vid flex justify-around items-center">
                      <HeartIcon
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_heart"
                      />
                      <PlayIcon width="30px" height="30px" fill="white" />
                      <Dots
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_dots"
                      />
                    </div>
                  </div>
                </div>
                <div className="content py-2">
                  <p style={{ color: dataStyle.white, opacity: "0.8" }}>
                    Những ca khúc acoustic cực hay mà bạn không thể bỏ lỡ
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link href={""}>
              <div className="item_music_trend">
                <div
                  className="img_musix_trend"
                  style={{ borderRadius: dataStyle.borderRadius1 }}
                >
                  <Image
                    className="img_music"
                    src={TrendImg5}
                    style={{ borderRadius: dataStyle.borderRadius1 }}
                    alt=""
                  />
                  <div className="env_effect">
                    <div className="style_opacity"></div>
                    <div className="btn_set_vid flex justify-around items-center">
                      <HeartIcon
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_heart"
                      />
                      <PlayIcon width="30px" height="30px" fill="white" />
                      <Dots
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_dots"
                      />
                    </div>
                  </div>
                </div>
                <div className="content py-2">
                  <p style={{ color: dataStyle.white, opacity: "0.8" }}>
                    Những ca khúc chill cực hay mà bạn không thể bỏ lỡ
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link href={""}>
              <div className="item_music_trend">
                <div
                  className="img_musix_trend"
                  style={{ borderRadius: dataStyle.borderRadius1 }}
                >
                  <Image
                    className="img_music"
                    src={TrendImg6}
                    style={{ borderRadius: dataStyle.borderRadius1 }}
                    alt=""
                  />
                  <div className="env_effect">
                    <div className="style_opacity"></div>
                    <div className="btn_set_vid flex justify-around items-center">
                      <HeartIcon
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_heart"
                      />
                      <PlayIcon width="30px" height="30px" fill="white" />
                      <Dots
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_dots"
                      />
                    </div>
                  </div>
                </div>
                <div className="content py-2">
                  <p style={{ color: dataStyle.white, opacity: "0.8" }}>
                    Những ca khúc giáng sinh cực hay mà bạn không thể bỏ lỡ
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link href={""}>
              <div className="item_music_trend">
                <div
                  className="img_musix_trend"
                  style={{ borderRadius: dataStyle.borderRadius1 }}
                >
                  <Image
                    className="img_music"
                    src={TetImg1}
                    style={{ borderRadius: dataStyle.borderRadius1 }}
                    alt=""
                  />
                  <div className="env_effect">
                    <div className="style_opacity"></div>
                    <div className="btn_set_vid flex justify-around items-center">
                      <HeartIcon
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_heart"
                      />
                      <PlayIcon width="30px" height="30px" fill="white" />
                      <Dots
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_dots"
                      />
                    </div>
                  </div>
                </div>
                <div className="content py-2">
                  <p style={{ color: dataStyle.white, opacity: "0.8" }}>
                    Những ca khúc tết cực hay mà bạn không thể bỏ lỡ
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <Link href={""}>
              <div className="item_music_trend">
                <div
                  className="img_musix_trend"
                  style={{ borderRadius: dataStyle.borderRadius1 }}
                >
                  <Image
                    className="img_music"
                    src={BalladImg1}
                    style={{ borderRadius: dataStyle.borderRadius1 }}
                    alt=""
                  />
                  <div className="env_effect">
                    <div className="style_opacity"></div>
                    <div className="btn_set_vid flex justify-around items-center">
                      <HeartIcon
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_heart"
                      />
                      <PlayIcon width="30px" height="30px" fill="white" />
                      <Dots
                        width="20px"
                        height="20px"
                        fill="white"
                        classname="btn_dots"
                      />
                    </div>
                  </div>
                </div>
                <div className="content py-2">
                  <p style={{ color: dataStyle.white, opacity: "0.8" }}>
                    Những ca khúc ballad cực hay mà bạn không thể bỏ lỡ
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-2 mt-2">
        <div className="">
          <h3
            style={{
              color: dataStyle.white,
              fontWeight: dataStyle.fontWeight2,
              fontSize: dataStyle.fontsize4,
            }}
          >
            Gợi Ý Dành Riêng Cho Bạn
          </h3>
        </div>
        <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-1 mt-3">
          <div className="flex item_song">
            <div className="w-1/5 ml-1 rounded-md content_song_left">
              <Image
                className="rounded-md "
                style={{}}
                src={PickleballImg}
                alt=""
              />
              <div className="div_opacity">
                <button className="btn_active_song">
                  <PlayActiveIcon width="18px" height="18px" fill="white" />
                </button>
              </div>
            </div>
            <div className="w-4/5 pl-2">
              <div className="">
                <div className="name_song">
                  <span>PICKLEBALL</span>
                </div>
                <div className="name_singer">
                  <p>Đỗ Phú Quí</p>
                </div>
              </div>
            </div>
            <div className="heart flex items-center">
              <HeartIcon
                width="20px"
                height="20px"
                fill="white"
                classname="heart_icon"
              />
            </div>
          </div>
          <div className="flex item_song">
            <div className="w-1/5 ml-1 rounded-md content_song_left">
              <Image
                className="rounded-md "
                style={{}}
                src={PickleballImg}
                alt=""
              />
              <div className="div_opacity">
                <button className="btn_active_song">
                  <PlayActiveIcon width="18px" height="18px" fill="white" />
                </button>
              </div>
            </div>
            <div className="w-4/5 pl-2">
              <div className="">
                <div className="name_song">
                  <span>PICKLEBALL</span>
                </div>
                <div className="name_singer">
                  <p>Đỗ Phú Quí</p>
                </div>
              </div>
            </div>
            <div className="heart flex items-center">
              <HeartIcon
                width="20px"
                height="20px"
                fill="white"
                classname="heart_icon"
              />
            </div>
          </div>
          <div className="flex item_song">
            <div className="w-1/5 ml-1 rounded-md content_song_left">
              <Image
                className="rounded-md "
                style={{}}
                src={PickleballImg}
                alt=""
              />
              <div className="div_opacity">
                <button className="btn_active_song">
                  <PlayActiveIcon width="18px" height="18px" fill="white" />
                </button>
              </div>
            </div>
            <div className="w-4/5 pl-2">
              <div className="">
                <div className="name_song">
                  <span>PICKLEBALL</span>
                </div>
                <div className="name_singer">
                  <p>Đỗ Phú Quí</p>
                </div>
              </div>
            </div>
            <div className="heart flex items-center">
              <HeartIcon
                width="20px"
                height="20px"
                fill="white"
                classname="heart_icon"
              />
            </div>
          </div>
          <div className="flex item_song">
            <div className="w-1/5 ml-1 rounded-md content_song_left">
              <Image
                className="rounded-md "
                style={{}}
                src={PickleballImg}
                alt=""
              />
              <div className="div_opacity">
                <button className="btn_active_song">
                  <PlayActiveIcon width="18px" height="18px" fill="white" />
                </button>
              </div>
            </div>
            <div className="w-4/5 pl-2">
              <div className="">
                <div className="name_song">
                  <span>PICKLEBALL</span>
                </div>
                <div className="name_singer">
                  <p>Đỗ Phú Quí</p>
                </div>
              </div>
            </div>
            <div className="heart flex items-center">
              <HeartIcon
                width="20px"
                height="20px"
                fill="white"
                classname="heart_icon"
              />
            </div>
          </div>
          <div className="flex item_song">
            <div className="w-1/5 ml-1 rounded-md content_song_left">
              <Image
                className="rounded-md "
                style={{}}
                src={PickleballImg}
                alt=""
              />
              <div className="div_opacity">
                <button className="btn_active_song">
                  <PlayActiveIcon width="18px" height="18px" fill="white" />
                </button>
              </div>
            </div>
            <div className="w-4/5 pl-2">
              <div className="">
                <div className="name_song">
                  <span>PICKLEBALL</span>
                </div>
                <div className="name_singer">
                  <p>Đỗ Phú Quí</p>
                </div>
              </div>
            </div>
            <div className="heart flex items-center">
              <HeartIcon
                width="20px"
                height="20px"
                fill="white"
                classname="heart_icon"
              />
            </div>
          </div>
          <div className="flex item_song">
            <div className="w-1/5 ml-1 rounded-md content_song_left">
              <Image
                className="rounded-md "
                style={{}}
                src={PickleballImg}
                alt=""
              />
              <div className="div_opacity">
                <button className="btn_active_song">
                  <PlayActiveIcon width="18px" height="18px" fill="white" />
                </button>
              </div>
            </div>
            <div className="w-4/5 pl-2">
              <div className="">
                <div className="name_song">
                  <span>PICKLEBALL</span>
                </div>
                <div className="name_singer">
                  <p>Đỗ Phú Quí</p>
                </div>
              </div>
            </div>
            <div className="heart flex items-center">
              <HeartIcon
                width="20px"
                height="20px"
                fill="white"
                classname="heart_icon"
              />
            </div>
          </div>
          <div className="flex item_song">
            <div className="w-1/5 ml-1 rounded-md content_song_left">
              <Image
                className="rounded-md "
                style={{}}
                src={PickleballImg}
                alt=""
              />
              <div className="div_opacity">
                <button className="btn_active_song">
                  <PlayActiveIcon width="18px" height="18px" fill="white" />
                </button>
              </div>
            </div>
            <div className="w-4/5 pl-2">
              <div className="">
                <div className="name_song">
                  <span>PICKLEBALL</span>
                </div>
                <div className="name_singer">
                  <p>Đỗ Phú Quí</p>
                </div>
              </div>
            </div>
            <div className="heart flex items-center">
              <HeartIcon
                width="20px"
                height="20px"
                fill="white"
                classname="heart_icon"
              />
            </div>
          </div>
          <div className="flex item_song">
            <div className="w-1/5 ml-1 rounded-md content_song_left">
              <Image
                className="rounded-md "
                style={{}}
                src={PickleballImg}
                alt=""
              />
              <div className="div_opacity">
                <button className="btn_active_song">
                  <PlayActiveIcon width="18px" height="18px" fill="white" />
                </button>
              </div>
            </div>
            <div className="w-4/5 pl-2">
              <div className="">
                <div className="name_song">
                  <span>PICKLEBALL</span>
                </div>
                <div className="name_singer">
                  <p>Đỗ Phú Quí</p>
                </div>
              </div>
            </div>
            <div className="heart flex items-center">
              <HeartIcon
                width="20px"
                height="20px"
                fill="white"
                classname="heart_icon"
              />
            </div>
          </div>
          <div className="flex item_song">
            <div className="w-1/5 ml-1 rounded-md content_song_left">
              <Image
                className="rounded-md "
                style={{}}
                src={PickleballImg}
                alt=""
              />
              <div className="div_opacity">
                <button className="btn_active_song">
                  <PlayActiveIcon width="18px" height="18px" fill="white" />
                </button>
              </div>
            </div>
            <div className="w-4/5 pl-2">
              <div className="">
                <div className="name_song">
                  <span>PICKLEBALL</span>
                </div>
                <div className="name_singer">
                  <p>Đỗ Phú Quí</p>
                </div>
              </div>
            </div>
            <div className="heart flex items-center">
              <HeartIcon
                width="20px"
                height="20px"
                fill="white"
                classname="heart_icon"
              />
            </div>
          </div>
          <div className="flex item_song">
            <div className="w-1/5 ml-1 rounded-md content_song_left">
              <Image
                className="rounded-md "
                style={{}}
                src={PickleballImg}
                alt=""
              />
              <div className="div_opacity">
                <button className="btn_active_song">
                  <PlayActiveIcon width="18px" height="18px" fill="white" />
                </button>
              </div>
            </div>
            <div className="w-4/5 pl-2">
              <div className="">
                <div className="name_song">
                  <span>PICKLEBALL</span>
                </div>
                <div className="name_singer">
                  <p>Đỗ Phú Quí</p>
                </div>
              </div>
            </div>
            <div className="heart flex items-center">
              <HeartIcon
                width="20px"
                height="20px"
                fill="white"
                classname="heart_icon"
              />
            </div>
          </div>
          <div className="flex item_song">
            <div className="w-1/5 ml-1 rounded-md content_song_left">
              <Image
                className="rounded-md "
                style={{}}
                src={PickleballImg}
                alt=""
              />
              <div className="div_opacity">
                <button className="btn_active_song">
                  <PlayActiveIcon width="18px" height="18px" fill="white" />
                </button>
              </div>
            </div>
            <div className="w-4/5 pl-2">
              <div className="">
                <div className="name_song">
                  <span>PICKLEBALL</span>
                </div>
                <div className="name_singer">
                  <p>Đỗ Phú Quí</p>
                </div>
              </div>
            </div>
            <div className="heart flex items-center">
              <HeartIcon
                width="20px"
                height="20px"
                fill="white"
                classname="heart_icon"
              />
            </div>
          </div>
          <div className="flex item_song">
            <div className="w-1/5 ml-1 rounded-md content_song_left">
              <Image
                className="rounded-md "
                style={{}}
                src={PickleballImg}
                alt=""
              />
              <div className="div_opacity">
                <button className="btn_active_song">
                  <PlayActiveIcon width="18px" height="18px" fill="white" />
                </button>
              </div>
            </div>
            <div className="w-4/5 pl-2">
              <div className="">
                <div className="name_song">
                  <span>PICKLEBALL</span>
                </div>
                <div className="name_singer">
                  <p>Đỗ Phú Quí</p>
                </div>
              </div>
            </div>
            <div className="heart flex items-center">
              <HeartIcon
                width="20px"
                height="20px"
                fill="white"
                classname="heart_icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
