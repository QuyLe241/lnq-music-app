"use client";
import React, { useEffect, useState } from "react";
import AnhtraisayhiImg from "../../Img/anhtraisayhi-img1.png";
import Image from "next/image";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reudx/store";
import { clearScreenDown } from "readline";
import Dots from "../Components/Icon/Dots";
import MicroIcon from "../Components/Icon/MicroIcon";
import HeartIcon from "../Components/Icon/HeartIcon";
import LikeIcon from "../Components/Icon/LikeIcon";
import ViewIcon from "../Components/Icon/ViewIcon";
import PlayActiveIcon from "../Components/Icon/PlayActiveIcon";
import PauseIcon from "../Components/Icon/PauseIcon";
import SortupIcon from "../Components/Icon/SortupIcon";
import { pauseSong, playSong } from "../reudx/dataSongSlice";
import { anhTraiSayHi } from "../../utils/dataContentListSongs";
import CaretDown from "../Components/Icon/CaretDown";
import {
  saveLikedSongToLocal,
  getLikedSongsFromLocal,
  removeLikedSongFromLocal,
} from "../../localStorage/dataLocal";
import HeartFullIcon from "../Components/Icon/HeartFullIcon";

export interface Song {
  id: number;
  name: string;
  singer: string;
  view: string;
  like: string;
  img: string;
  src: string;
  up: number;
  arrowup: boolean;
  type: number;
  goiy: boolean;
}
const PageNamePage: React.FC = () => {
  const { currentSong, songs, isPlaying } = useSelector(
    (state: RootState) => state.dataSongSlice
  );
  const listSongs = songs.filter((song) => song.type === 2);

  const dispatch = useDispatch();

  const handleSongClick = (song: Song) => {
    if (currentSong?.id === song.id) {
      dispatch(pauseSong());
    } else {
      dispatch(playSong(song));
    }
  };

  const content = anhTraiSayHi.content;
  const [likedSongs, setLikedSongs] = useState<number[]>([]);
  const handleLikeClick = (songId: number) => {
    if (likedSongs.includes(songId)) {
      removeLikedSongFromLocal(songId);
      setLikedSongs(likedSongs.filter((id) => id !== songId));
    } else {
      saveLikedSongToLocal(songId);
      setLikedSongs([...likedSongs, songId]);
    }
  };

  useEffect(() => {
    const likedSongsFromLocal = getLikedSongsFromLocal();
    setLikedSongs(likedSongsFromLocal);
    // console.log(listSongs);
    // console.log("content từ data", anhTraiSayHi);
    // console.log("content", content);
  }, []);
  return (
    <div className=" px-3 pb-[90px]">
      <div className="flex justify-center">
        <div className="content_img">
          <div className="img_container">
            <Image
              src={AnhtraisayhiImg}
              width={300}
              height={300}
              alt="anhtraisayhi"
            />
          </div>
        </div>
        <div className="content_listSongs text-white px-3">
          <p style={{ fontWeight: 700, fontSize: "18px" }}>
            CÁC BÀI HÁT VIRAL NỔI BẬT
          </p>
          <p style={{ fontWeight: 700, fontSize: "20px" }}>{content.name}</p>
          <p style={{ opacity: "0.8" }}>{`Số lượt xem: ${content.view}`}</p>
          <p style={{ opacity: "0.8" }}>{`Số lượt thích: ${content.like}`}</p>
          <p
            style={{ opacity: "0.6", fontSize: "15px" }}
          >{`Ngày cập nhật: ${content.date} `}</p>
        </div>
      </div>
      <div className="song_container">
        <div className="song_item">
          <div className="py-2 mt-3">
            <div className="">
              {Array.isArray(songs) &&
                listSongs.map((item, index) => (
                  <div className="" key={index}>
                    <div className="flex items-center item_music_bxh">
                      <div className="top_number">
                        <span
                          className="px-2"
                          style={{
                            color:
                              item.id === 1
                                ? "#50e3c2"
                                : item.id == 2
                                ? "#4a90e2"
                                : item.id == 3
                                ? "#2e77cc"
                                : "#e1dede",
                            fontSize:
                              item.id === 1
                                ? "39px"
                                : item.id === 2
                                ? "36px"
                                : item.id === 3
                                ? "35px"
                                : "32px",
                            fontWeight: 700,
                          }}
                        >
                          {item.id}
                        </span>{" "}
                        <p
                          className="text-center"
                          style={{
                            color: "white",
                            marginTop: "-12px",
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          Top
                        </p>
                      </div>
                      <div className="on_top px-1">
                        <div className="flex justify-center items-center">
                          {item.arrowup ? (
                            <SortupIcon
                              width="15px"
                              height="15px "
                              fill="#50e3c2"
                            />
                          ) : (
                            <CaretDown
                              classname=""
                              width="15px"
                              height="15px "
                              fill="#e35050"
                            />
                          )}
                        </div>
                        <div className="flex justify-center items-center">
                          <span
                            className="text-white"
                            style={{ fontWeight: 600 }}
                          >
                            {item.up}
                          </span>
                        </div>
                      </div>
                      <div className="w-full pl-1">
                        <div className="flex item_song_trend">
                          <div
                            className="flex w-2/5"
                            style={{ overflow: "hidden" }}
                          >
                            <div className=" ml-1 rounded-md content_song_left contentSong_left">
                              <Image
                                className="rounded-md img_song"
                                style={{}}
                                src={item.img}
                                layout="fill"
                                objectFit="cover"
                                alt=""
                              />
                              <div className="div_opacity">
                                <button
                                  className="btn_active_song"
                                  onClick={() => handleSongClick(item)}
                                >
                                  {currentSong?.id === item.id && isPlaying ? (
                                    <PauseIcon
                                      classname=""
                                      width="25px"
                                      height="25px"
                                      fill="white"
                                    />
                                  ) : (
                                    <PlayActiveIcon
                                      classname=""
                                      width="25px"
                                      height="25px"
                                      fill="white"
                                    />
                                  )}
                                </button>
                              </div>
                            </div>
                            <div className=" pl-2 flex items-center">
                              <div className="">
                                <div className="name_song">
                                  <span>{item.name}</span>
                                </div>
                                <div className="name_singer">
                                  <p>{item.singer}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="infor_music flex items-center px-3">
                            <div className="space-y-1">
                              <div className="flex space-x-2">
                                <div className="">
                                  <ViewIcon
                                    width="20px"
                                    height="20px"
                                    fill="white"
                                  />
                                </div>
                                <div className="">
                                  <span className="text-white opacity-90">
                                    {item.view}
                                  </span>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <div className="">
                                  <LikeIcon
                                    width="20px"
                                    height="20px"
                                    fill="white"
                                  />
                                </div>
                                <div className="">
                                  <span className="text-white opacity-90">
                                    {item.like}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="heart flex items-center">
                            <div className="">
                              <button
                                className="flex items-center btn_like_song"
                                onClick={() => handleLikeClick(item.id)}
                              >
                                {likedSongs.includes(item.id) ? (
                                  <HeartFullIcon
                                    width="20px"
                                    height="20px"
                                    fill="#9b4de0"
                                    classname="btn_icon"
                                  />
                                ) : (
                                  <HeartIcon
                                    width="20px"
                                    height="20px"
                                    fill="white"
                                    classname="btn_icon"
                                  />
                                )}
                              </button>
                            </div>
                            <div className="">
                              <button className="flex items-center">
                                <MicroIcon
                                  width="20px"
                                  height="20px"
                                  fill="white"
                                  classname="btn_icon"
                                />
                              </button>
                            </div>
                            <div className="">
                              <button className="flex items-center">
                                <Dots
                                  width="20px"
                                  height="20px"
                                  fill="white"
                                  classname="btn_icon"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNamePage;
