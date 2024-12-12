"use client";
import React, { useState } from "react";
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
import TrendImg7 from "../../../Img/trend-img7.png";
import TrendImg8 from "../../../Img/trend-img8.png";
import TrendImg9 from "../../../Img/trend-img9.png";
import TrendImg10 from "../../../Img/trend-img10.png";
import TetImg2 from "../../../Img/tet-img2.png";
import Top100Img1 from "../../../Img/top100-img1.png";
import Top100Img2 from "../../../Img/top100-img2.png";
import Top100Img3 from "../../../Img/top100-img3.png";
import Top100Img5 from "../../../Img/top100-img5.png";
import PickleballImg from "../../../Img/pickleball-img.png";
import RadioImg1 from "../../../Img/radio-img1.png";
import RadioImg2 from "../../../Img/radio-img2.png";
import RadioImg3 from "../../../Img/radio-img3.png";
import AnhtraisayhiImg from "../../../Img/anhtraisayhi-img1.png";
import Link from "next/link";
import PlayActiveIcon from "../Icon/PlayActiveIcon";
import PlayerMusic from "./PlayerMusic";
import { useRouter } from "next/router";
import Head from "next/head";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { useSelector } from "react-redux";
import { RootState } from "../../reudx/store";
// import TrendImg6 from "../../../Img/trend-img6.png";

const Body: React.FC = () => {
  // const dataSong = [
  //   {
  //     id: 1,
  //     name: "PICKLEBALL",
  //     singer: "Đỗ Phú Quí",
  //     view: "100Tr lượt xem",
  //     like: "2Tr lượt thích",
  //     img: PickleballImg,
  //     up: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "PICKLEBALL",
  //     singer: "Đỗ Phú Quí",
  //     view: "100Tr lượt xem",
  //     like: "2Tr lượt thích",
  //     img: PickleballImg,
  //     up: 5,
  //   },
  //   {
  //     id: 3,
  //     name: "PICKLEBALL",
  //     singer: "Đỗ Phú Quí",
  //     view: "100Tr lượt xem",
  //     like: "2Tr lượt thích",
  //     img: PickleballImg,
  //     up: 6,
  //   },
  //   {
  //     id: 4,
  //     name: "PICKLEBALL",
  //     singer: "Đỗ Phú Quí",
  //     view: "100Tr lượt xem",
  //     like: "2Tr lượt thích",
  //     img: PickleballImg,
  //     up: 6,
  //   },
  //   {
  //     id: 5,
  //     name: "PICKLEBALL",
  //     singer: "Đỗ Phú Quí",
  //     view: "100Tr lượt xem",
  //     like: "2Tr lượt thích",
  //     img: PickleballImg,
  //     up: 6,
  //   },
  //   {
  //     id: 6,
  //     name: "PICKLEBALL",
  //     singer: "Đỗ Phú Quí",
  //     view: "100Tr lượt xem",
  //     like: "2Tr lượt thích",
  //     img: PickleballImg,
  //     up: 6,
  //   },
  //   {
  //     id: 7,
  //     name: "PICKLEBALL",
  //     singer: "Đỗ Phú Quí",
  //     view: "100Tr lượt xem",
  //     like: "2Tr lượt thích",
  //     img: PickleballImg,
  //     up: 6,
  //   },
  //   {
  //     id: 8,
  //     name: "PICKLEBALL",
  //     singer: "Đỗ Phú Quí",
  //     view: "100Tr lượt xem",
  //     like: "2Tr lượt thích",
  //     img: PickleballImg,
  //     up: 6,
  //   },
  //   {
  //     id: 9,
  //     name: "PICKLEBALL",
  //     singer: "Đỗ Phú Quí",
  //     view: "100Tr lượt xem",
  //     like: "2Tr lượt thích",
  //     img: PickleballImg,
  //     up: 6,
  //   },
  //   {
  //     id: 10,
  //     name: "PICKLEBALL",
  //     singer: "Đỗ Phú Quí",
  //     view: "100Tr lượt xem",
  //     like: "2Tr lượt thích",
  //     img: PickleballImg,
  //     up: 6,
  //   },
  //   {
  //     id: 11,
  //     name: "PICKLEBALL",
  //     singer: "Đỗ Phú Quí",
  //     view: "100Tr lượt xem",
  //     like: "2Tr lượt thích",
  //     img: PickleballImg,
  //     up: 6,
  //   },
  //   {
  //     id: 12,
  //     name: "PICKLEBALL",
  //     singer: "Đỗ Phú Quí",
  //     view: "100Tr lượt xem",
  //     like: "2Tr lượt thích",
  //     img: PickleballImg,
  //     up: 6,
  //   },
  // ];

  //  style css
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

  // const router = useRouter();
  const handleNavigate = () => {
    // navigate.push("/trending");
    window.location.href = "/trending";
  };

  const { currentSong, isPlaying, setIsPlaying, setCurrentSong } =
    useMusicPlayer();
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  );
  const dataSong = useSelector((state: RootState) => state.dataSongSlice);
  const dataSongGoiY = dataSong.filter((song) => song.goiy == true);
  const dataSongGoiYSlice = useSelector(
    (state: RootState) => state.dataSongGoiYSlice
  );
  console.log("data trending", dataSong);

  const handleSongClick = (song: (typeof dataSong)[0]) => {
    if (currentSong?.id === song.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div className="container px-5" style={{ paddingBottom: "90px" }}>
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
                    src={AnhtraisayhiImg}
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
                    Những ca khúc tại chương trình Anh Trai Say Hi cực hay
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
                    src={TrendImg7}
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
          <div className="">
            <Link href={""}>
              <div className="item_music_trend">
                <div
                  className="img_musix_trend"
                  style={{ borderRadius: dataStyle.borderRadius1 }}
                >
                  <Image
                    className="img_music"
                    src={TrendImg8}
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
                    Những ca khúc hot trend cực hay mà bạn không thể bỏ lỡ
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
                    src={TrendImg9}
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
                    Những ca khúc hot trend cực hay mà bạn không thể bỏ lỡ
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
                    src={TrendImg10}
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
                    Những ca khúc hot trend cực hay mà bạn không thể bỏ lỡ
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
                    src={TetImg2}
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
                    Những ca khúc hot trend cực hay mà bạn không thể bỏ lỡ
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
        <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 py-1 mt-3">
          {dataSongGoiY.map((item, index) => {
            return (
              <div className="flex item_song justify-center" key={index}>
                <div className=" ml-1 flex justify-center rounded-md content_song_left">
                  <Image
                    className="rounded-md "
                    style={{}}
                    src={item.img}
                    alt=""
                    width={100}
                    height={100}
                  />
                  <div className="div_opacity">
                    <button
                      className="btn_active_song"
                      onClick={() => handleNavigate()}
                    >
                      <PlayActiveIcon width="18px" height="18px" fill="white" />
                    </button>
                  </div>
                </div>
                <div className="w-4/5 pl-2">
                  <div className="">
                    <div className="name_song">
                      <span>{item.name}</span>
                    </div>
                    <div className="name_singer">
                      <p>{item.singer}</p>
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
            );
          })}
          {/* test */}
          {/* {dataSong.map(
              (item, index) =>
                item.goiy && (
                  <div
                    className="flex item_song"
                    key={index}
                    // onClick={() => {
                    //   handleNavigate();
                    // }}
                  >
                    <div className="w-1/5 ml-1 rounded-md content_song_left">
                      <Image
                        className="rounded-md "
                        style={{}}
                        src={item.img}
                        width={100}
                        height={100}
                        alt=""
                      />
                      <div className="div_opacity">
                        <button
                          className="btn_active_song"
                          onClick={() => handleSongClick(item)}
                        >
                          <PlayActiveIcon
                            width="18px"
                            height="18px"
                            fill="white"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="w-4/5 pl-2">
                      <div className="">
                        <div className="name_song">
                          <span>{item.name}</span>
                        </div>
                        <div className="name_singer">
                          <p>{item.singer}</p>
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
                )
            )} */}
        </div>
      </div>
      <div className="py-2 mt-2">
        <div className="">
          <h3
            style={{
              color: dataStyle.white,
              fontSize: dataStyle.fontsize4,
              fontWeight: dataStyle.fontWeight2,
            }}
          >
            Chill
          </h3>
        </div>
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
                    src={TrendImg8}
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
                    src={TrendImg9}
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
        </div>
      </div>
      <div className="py-2 mt-2">
        <div className="">
          <h3
            style={{
              color: dataStyle.white,
              fontSize: dataStyle.fontsize4,
              fontWeight: dataStyle.fontWeight2,
            }}
          >
            Top 100
          </h3>
        </div>
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
                    src={Top100Img1}
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
                    Những ca khúc nhạc trẻ cực hay mà bạn không thể bỏ lỡ
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
                    src={Top100Img2}
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
                    Những ca khúc Âu Mỹ cực hay mà bạn không thể bỏ lỡ
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
                    src={Top100Img3}
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
                    Những 100 ca khúc cực hay mà bạn không thể bỏ lỡ
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
                    src={Top100Img5}
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
        </div>
      </div>
      <div className="py-2 mt-2">
        <div className="py-2">
          <h3
            style={{
              color: dataStyle.white,
              fontSize: dataStyle.fontsize4,
              fontWeight: dataStyle.fontWeight2,
            }}
          >
            Radio Nổi Bật
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          <div className="">
            <div className="item_radio w-full" style={{}}>
              <Link href={""}>
                <div className="img_radio flex justify-center items-center">
                  <Image src={RadioImg1} style={{ width: "100%" }} alt="" />
                </div>
                <div className="opacity_radio">
                  <div
                    className="flex justify-center items-center"
                    style={{ height: "100%" }}
                  >
                    <PlayActiveIcon width="35px" height="35px" fill="white" />
                  </div>
                </div>
                <div className="live_toast">
                  <span style={{ color: dataStyle.white }}>LIVE</span>
                </div>
              </Link>
            </div>
            <div className="py-2 mt-1">
              <div className="title_radio flex justify-center">
                <span>K-POP</span>
              </div>
              <div className="view_radio flex justify-center">
                <p>1.23Tr đang nghe</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="item_radio w-full" style={{}}>
              <Link href={""}>
                <div className="img_radio flex justify-center items-center">
                  <Image src={RadioImg2} style={{ width: "100%" }} alt="" />
                </div>
                <div className="opacity_radio">
                  <div
                    className="flex justify-center items-center"
                    style={{ height: "100%" }}
                  >
                    <PlayActiveIcon width="35px" height="35px" fill="white" />
                  </div>
                </div>
                <div className="live_toast">
                  <span style={{ color: dataStyle.white }}>LIVE</span>
                </div>
              </Link>
            </div>
            <div className="py-2 mt-1">
              <div className="title_radio flex justify-center">
                <span>RAP VIỆT</span>
              </div>
              <div className="view_radio flex justify-center">
                <p>13.6Tr đang nghe</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="item_radio w-full" style={{}}>
              <Link href={""}>
                <div className="img_radio flex justify-center items-center">
                  <Image src={RadioImg3} style={{ width: "100%" }} alt="" />
                </div>
                <div className="opacity_radio">
                  <div
                    className="flex justify-center items-center"
                    style={{ height: "100%" }}
                  >
                    <PlayActiveIcon width="35px" height="35px" fill="white" />
                  </div>
                </div>
                <div className="live_toast">
                  <span style={{ color: dataStyle.white }}>LIVE</span>
                </div>
              </Link>
            </div>
            <div className="py-2 mt-1">
              <div className="title_radio flex justify-center">
                <span>K-POP</span>
              </div>
              <div className="view_radio flex justify-center">
                <p>24.1Tr đang nghe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
