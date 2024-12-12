"use client";
import React, { useState } from "react";
import "./style.scss";
import SortupIcon from "../Components/Icon/SortupIcon";
import HeartIcon from "../Components/Icon/HeartIcon";
import PlayActiveIcon from "../Components/Icon/PlayActiveIcon";
import Image from "next/image";
import PickleballImg from "../../Img/pickleball-img.png";
import MicroIcon from "../Components/Icon/MicroIcon";
import Dots from "../Components/Icon/Dots";
import ViewIcon from "../Components/Icon/ViewIcon";
import LibraryIcon from "../Components/Icon/LibraryIcon";
import CommentIcon from "../Components/Icon/CommentIcon";
import LikeIcon from "../Components/Icon/LikeIcon";
import RankIcon from "../Components/Icon/RankIcon";
import { useSelector } from "react-redux";
import { RootState } from "../reudx/store";
import { useMusicPlayer } from "../../context/MusicPlayerContext";
import PauseIcon from "../Components/Icon/PauseIcon";
import { clearScreenDown } from "readline";

const Trending: React.FC = () => {
  const { currentSong, isPlaying, setIsPlaying, setCurrentSong } =
    useMusicPlayer();
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  );
  const dataSong = useSelector((state: RootState) => state.dataSongSlice);
  console.log("data trending", dataSong);

  // const handleSongClick = (song: (typeof dataSong)[0]) => {
  //   setCurrentSong(song);
  //   setIsPlaying(true);
  //   setIsPlaying(!isPlaying);
  // };
  const handleSongClick = (song: (typeof dataSong)[0]) => {
    if (currentSong?.id === song.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };
  return (
    <div className="px-5" style={{ paddingBottom: "90px" }}>
      <div className="flex items-center">
        <div className="flex items-end">
          <h2
            style={{ fontSize: "28px", fontWeight: 700 }}
            className="text-white"
          >
            BXH ÂM NHẠC
          </h2>
        </div>
        <div className="pl-3 flex items-center pb-1">
          <RankIcon width="42px" height="42px" fill="white" />
        </div>
      </div>
      <div className="py-2 mt-3">
        {/* test loop music */}
        <div className="">
          {dataSong.map((item, index) => {
            return (
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
                    </span>
                  </div>
                  <div className="on_top px-1">
                    <div className="flex justify-center items-center">
                      <SortupIcon width="15px" height="15px " fill="#50e3c2" />
                    </div>
                    <div className="flex justify-center items-center">
                      <span className="text-white" style={{ fontWeight: 600 }}>
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
                            // width={100}
                            // height={52}
                            // src={PickleballImg}
                            alt=""
                          />
                          <div className="div_opacity">
                            <button
                              className="btn_active_song"
                              onClick={() => handleSongClick(item)}
                            >
                              {/* {isPlaying ? (
                              <PauseIcon
                                width="25px"
                                height="25px"
                                fill="white"
                                classname=""
                              />
                            ) : (
                              <PlayActiveIcon
                                width="25px"
                                height="25px"
                                fill="white"
                              />
                            )} */}
                              {currentSong?.id === item.id && isPlaying ? (
                                <PauseIcon
                                  width="25px"
                                  height="25px"
                                  fill="white"
                                  classname=""
                                />
                              ) : (
                                <PlayActiveIcon
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
                              <span className="text-white">{item.view}</span>
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
                              <span className="text-white">{item.like}</span>
                            </div>
                          </div>
                          {/* <div className="">
                    <div className="">
                      <CommentIcon width="20px" height="20px" fill="white" />
                    </div>
                    <div className="">
                      <span></span>
                    </div>
                  </div> */}
                        </div>
                      </div>
                      <div className="heart flex items-center">
                        <div className="">
                          <button className="flex items-center">
                            <HeartIcon
                              width="20px"
                              height="20px"
                              fill="white"
                              classname="btn_icon"
                            />
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
