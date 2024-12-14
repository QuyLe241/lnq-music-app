// "use client";
// import React from "react";
// import "./style.scss";
// import SortupIcon from "../Components/Icon/SortupIcon";
// import HeartIcon from "../Components/Icon/HeartIcon";
// import PlayActiveIcon from "../Components/Icon/PlayActiveIcon";
// import Image from "next/image";
// import MicroIcon from "../Components/Icon/MicroIcon";
// import Dots from "../Components/Icon/Dots";
// import ViewIcon from "../Components/Icon/ViewIcon";
// import LikeIcon from "../Components/Icon/LikeIcon";
// import RankIcon from "../Components/Icon/RankIcon";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../reudx/store";
// import { playSong, pauseSong } from "../reudx/dataSongSlice";
// import PauseIcon from "../Components/Icon/PauseIcon";

// const Trending: React.FC = () => {
//   const dispatch = useDispatch();
//   const { currentSong, isPlaying, songs } = useSelector(
//     (state: RootState) => state.dataSongSlice
//   );

//   const handleSongClick = (song: Song) => {
//     if (currentSong?.id === song.id) {
//       dispatch(pauseSong());
//     } else {
//       dispatch(playSong(song));
//     }
//   };

//   return (
//     <div className="px-5" style={{ paddingBottom: "90px" }}>
//       <div className="flex items-center">
//         <div className="flex items-end">
//           <h2
//             style={{ fontSize: "28px", fontWeight: 700 }}
//             className="text-white"
//           >
//             BXH ÂM NHẠC
//           </h2>
//         </div>
//         <div className="pl-3 flex items-center pb-1">
//           <RankIcon width="42px" height="42px" fill="white" />
//         </div>
//       </div>
//       <div className="py-2 mt-3">
//         <div className="">
//           {Array.isArray(songs) &&
//             songs.map((item, index) => (
//               <div className="" key={index}>
//                 <div className="flex items-center item_music_bxh">
//                   <div className="top_number">
//                     <span
//                       className="px-2"
//                       style={{
//                         color:
//                           item.id === 1
//                             ? "#50e3c2"
//                             : item.id == 2
//                             ? "#4a90e2"
//                             : item.id == 3
//                             ? "#2e77cc"
//                             : "#e1dede",
//                         fontSize:
//                           item.id === 1
//                             ? "39px"
//                             : item.id === 2
//                             ? "36px"
//                             : item.id === 3
//                             ? "35px"
//                             : "32px",
//                         fontWeight: 700,
//                       }}
//                     >
//                       {item.id}
//                     </span>
//                   </div>
//                   <div className="on_top px-1">
//                     <div className="flex justify-center items-center">
//                       <SortupIcon width="15px" height="15px " fill="#50e3c2" />
//                     </div>
//                     <div className="flex justify-center items-center">
//                       <span className="text-white" style={{ fontWeight: 600 }}>
//                         {item.up}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="w-full pl-1">
//                     <div className="flex item_song_trend">
//                       <div
//                         className="flex w-2/5"
//                         style={{ overflow: "hidden" }}
//                       >
//                         <div className=" ml-1 rounded-md content_song_left contentSong_left">
//                           <Image
//                             className="rounded-md img_song"
//                             style={{}}
//                             src={item.img}
//                             layout="fill"
//                             objectFit="cover"
//                             alt=""
//                           />
//                           <div className="div_opacity">
//                             <button
//                               className="btn_active_song"
//                               onClick={() => handleSongClick(item)}
//                             >
//                               {currentSong?.id === item.id && isPlaying ? (
//                                 <PauseIcon
//                                   width="25px"
//                                   height="25px"
//                                   fill="white"
//                                   classname=""
//                                 />
//                               ) : (
//                                 <PlayActiveIcon
//                                   width="25px"
//                                   height="25px"
//                                   fill="white"
//                                 />
//                               )}
//                             </button>
//                           </div>
//                         </div>
//                         <div className=" pl-2 flex items-center">
//                           <div className="">
//                             <div className="name_song">
//                               <span>{item.name}</span>
//                             </div>
//                             <div className="name_singer">
//                               <p>{item.singer}</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="infor_music flex items-center px-3">
//                         <div className="space-y-1">
//                           <div className="flex space-x-2">
//                             <div className="">
//                               <ViewIcon
//                                 width="20px"
//                                 height="20px"
//                                 fill="white"
//                               />
//                             </div>
//                             <div className="">
//                               <span className="text-white opacity-90">
//                                 {item.view}
//                               </span>
//                             </div>
//                           </div>
//                           <div className="flex space-x-2">
//                             <div className="">
//                               <LikeIcon
//                                 width="20px"
//                                 height="20px"
//                                 fill="white"
//                               />
//                             </div>
//                             <div className="">
//                               <span className="text-white opacity-90">
//                                 {item.like}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="heart flex items-center">
//                         <div className="">
//                           <button className="flex items-center">
//                             <HeartIcon
//                               width="20px"
//                               height="20px"
//                               fill="white"
//                               classname="btn_icon"
//                             />
//                           </button>
//                         </div>
//                         <div className="">
//                           <button className="flex items-center">
//                             <MicroIcon
//                               width="20px"
//                               height="20px"
//                               fill="white"
//                               classname="btn_icon"
//                             />
//                           </button>
//                         </div>
//                         <div className="">
//                           <button className="flex items-center">
//                             <Dots
//                               width="20px"
//                               height="20px"
//                               fill="white"
//                               classname="btn_icon"
//                             />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trending;

"use client";
import React from "react";
import "./style.scss";
import SortupIcon from "../Components/Icon/SortupIcon";
import HeartIcon from "../Components/Icon/HeartIcon";
import PlayActiveIcon from "../Components/Icon/PlayActiveIcon";
import Image from "next/image";
import MicroIcon from "../Components/Icon/MicroIcon";
import Dots from "../Components/Icon/Dots";
import ViewIcon from "../Components/Icon/ViewIcon";
import LikeIcon from "../Components/Icon/LikeIcon";
import RankIcon from "../Components/Icon/RankIcon";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reudx/store";
import { playSong, pauseSong } from "../reudx/dataSongSlice";
import PauseIcon from "../Components/Icon/PauseIcon";

export interface Song {
  id: number;
  name: string;
  singer: string;
  view: string;
  like: string;
  img: string;
  src: string;
  up: number;
  goiy: boolean;
}
const Trending: React.FC = () => {
  const dispatch = useDispatch();
  const { currentSong, isPlaying, songs } = useSelector(
    (state: RootState) => state.dataSongSlice
  );

  const handleSongClick = (song: Song) => {
    if (currentSong?.id === song.id) {
      dispatch(pauseSong());
    } else {
      dispatch(playSong(song));
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
        <div className="">
          {Array.isArray(songs) &&
            songs.map((item, index) => (
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
