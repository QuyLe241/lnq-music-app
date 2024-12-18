// "use client";
// import React, { useEffect, useState } from "react";
// import { Empty } from "antd";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../reudx/store";
// import { getLikedSongsFromLocal } from "../../localStorage/dataLocal";
// import "./style.scss";
// import Image from "next/image";
// import PlayActiveIcon from "../Components/Icon/PlayActiveIcon";
// import PauseIcon from "../Components/Icon/PauseIcon";
// import { playSong, pauseSong, playLikedSongs } from "../reudx/dataSongSlice";
// import HeartIcon from "../Components/Icon/HeartIcon";
// import MicroIcon from "../Components/Icon/MicroIcon";
// import Dots from "../Components/Icon/Dots";

// export interface Song {
//   id: number;
//   name: string;
//   singer: string;
//   view: string;
//   like: string;
//   img: string;
//   src: string;
//   up: number;
//   arrowup: boolean;
//   type: number;
//   goiy: boolean;
// }
// const PageNamePage: React.FC = () => {
//   const [likedSongs, setLikedSongs] = useState<number[]>([]);
//   const { songs, currentSong, isPlaying } = useSelector(
//     (state: RootState) => state.dataSongSlice
//   );
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const likedSongsFromLocal = getLikedSongsFromLocal();
//     setLikedSongs(likedSongsFromLocal);
//   }, []);

//   const likedSongsDetails = songs.filter((song) =>
//     likedSongs.includes(song.id)
//   );

//   const handleSongClick = (song: Song) => {
//     if (currentSong?.id === song.id) {
//       dispatch(pauseSong());
//     } else {
//       dispatch(playSong(song));
//     }
//   };

//   const handlePlayAllClick = () => {
//     dispatch(playLikedSongs(likedSongsDetails));
//   };

//   return (
//     <div className="pb-[90px]">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-white text-2xl font-bold">Danh Sách Bài Hát Đã Like</h2>
//         {likedSongsDetails.length > 0 && (
//           <button
//             className="btn_play_all"
//             onClick={handlePlayAllClick}
//           >
//             Phát Tất Cả
//           </button>
//         )}
//       </div>
//       {likedSongsDetails.length === 0 ? (
//         <div className="empty_data">
//           <Empty className="" description="Chưa Có Bài Hát Nào" />
//         </div>
//       ) : (
//         <div className="song_container">
//           {likedSongsDetails.map((song) => (
//             <div key={song.id} className="song_item">
//               <div className="flex items-center item_music_bxh">
//                 <div className="top_number">
//                   <span
//                     className="px-2"
//                     style={{
//                       color:
//                         song.id === 1
//                           ? "#50e3c2"
//                           : song.id == 2
//                           ? "#4a90e2"
//                           : song.id == 3
//                           ? "#2e77cc"
//                           : "#e1dede",
//                       fontSize:
//                         song.id === 1
//                           ? "39px"
//                           : song.id === 2
//                           ? "36px"
//                           : song.id === 3
//                           ? "35px"
//                           : "32px",
//                       fontWeight: 700,
//                     }}
//                   >
//                     {song.id}
//                   </span>
//                 </div>
//                 <div className="on_top px-1">
//                   <div className="flex justify-center items-center">
//                     <span className="text-white" style={{ fontWeight: 600 }}>
//                       {song.up}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="w-full pl-1">
//                   <div className="flex item_song_trend">
//                     <div className="flex w-2/5" style={{ overflow: "hidden" }}>
//                       <div className=" ml-1 rounded-md content_song_left contentSong_left">
//                         <Image
//                           className="rounded-md img_song"
//                           style={{}}
//                           src={song.img}
//                           layout="fill"
//                           objectFit="cover"
//                           alt=""
//                         />
//                         <div className="div_opacity">
//                           <button
//                             className="btn_active_song"
//                             onClick={() => handleSongClick(song)}
//                           >
//                             {currentSong?.id === song.id && isPlaying ? (
//                               <PauseIcon
//                                 classname=""
//                                 width="25px"
//                                 height="25px"
//                                 fill="white"
//                               />
//                             ) : (
//                               <PlayActiveIcon
//                                 classname=""
//                                 width="25px"
//                                 height="25px"
//                                 fill="white"
//                               />
//                             )}
//                           </button>
//                         </div>
//                       </div>
//                       <div className=" pl-2 flex items-center">
//                         <div className="">
//                           <div className="name_song">
//                             <span>{song.name}</span>
//                           </div>
//                           <div className="name_singer">
//                             <p>{song.singer}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="infor_music flex items-center px-3">
//                       <div className="space-y-1">
//                         <div className="flex space-x-2">
//                           <div className="">
//                             <span className="text-white opacity-90">
//                               {song.view}
//                             </span>
//                           </div>
//                         </div>
//                         <div className="flex space-x-2">
//                           <div className="">
//                             <span className="text-white opacity-90">
//                               {song.like}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="heart flex items-center">
//                       <div className="">
//                         <button className="flex items-center">
//                           <HeartIcon
//                             width="20px"
//                             height="20px"
//                             fill="white"
//                             classname="btn_icon"
//                           />
//                         </button>
//                       </div>
//                       <div className="">
//                         <button className="flex items-center">
//                           <MicroIcon
//                             width="20px"
//                             height="20px"
//                             fill="white"
//                             classname="btn_icon"
//                           />
//                         </button>
//                       </div>
//                       <div className="">
//                         <button className="flex items-center">
//                           <Dots
//                             width="20px"
//                             height="20px"
//                             fill="white"
//                             classname="btn_icon"
//                           />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PageNamePage;

"use client";
import React, { useEffect, useState } from "react";
import { Empty } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reudx/store";
import {
  saveLikedSongToLocal,
  getLikedSongsFromLocal,
  removeLikedSongFromLocal,
} from "../../localStorage/dataLocal";
import "./style.scss";
import Image from "next/image";
import PlayActiveIcon from "../Components/Icon/PlayActiveIcon";
import PauseIcon from "../Components/Icon/PauseIcon";
import { playSong, pauseSong, playLikedSongs } from "../reudx/dataSongSlice";
import HeartIcon from "../Components/Icon/HeartIcon";
import MicroIcon from "../Components/Icon/MicroIcon";
import Dots from "../Components/Icon/Dots";
import SortupIcon from "../Components/Icon/SortupIcon";
import CaretDown from "../Components/Icon/CaretDown";
import HeartFullIcon from "../Components/Icon/HeartFullIcon";

interface Song {
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
  const [likedSongs, setLikedSongs] = useState<number[]>([]);
  const { songs, currentSong, isPlaying } = useSelector(
    (state: RootState) => state.dataSongSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const likedSongsFromLocal = getLikedSongsFromLocal();
    setLikedSongs(likedSongsFromLocal);
  }, []);

  const likedSongsDetails = songs.filter((song) =>
    likedSongs.includes(song.id)
  );

  const handleSongClick = (song: Song) => {
    if (currentSong?.id === song.id) {
      dispatch(pauseSong());
    } else {
      dispatch(playSong(song));
    }
  };

  const handlePlayAllClick = () => {
    dispatch(playLikedSongs(likedSongsDetails));
  };

  // const [likedSongs, setLikedSongs] = useState<number[]>([]);
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
    <div className="pb-[90px] px-3">
      <div className="flex justify-around items-center mb-4">
        <div className="">
          <h2
            className="text-white text-2xl font-bold"
            style={{ opacity: 0.9 }}
          >
            Danh Sách Bài Hát Bạn Đã Thích
          </h2>
        </div>
        <div className="">
          {likedSongsDetails.length > 0 && (
            <button
              className="btn_play_all text-white opacity-80 hover:opacity-100"
              onClick={handlePlayAllClick}
            >
              Phát Tất Cả
            </button>
          )}
        </div>
      </div>
      {likedSongsDetails.length === 0 ? (
        <div className="empty_data">
          <Empty className="" description="Chưa Có Bài Hát Nào" />
        </div>
      ) : (
        <div className="song_container">
          {likedSongsDetails.map((song) => (
            <div key={song.id} className="song_item">
              <div className="flex items-center item_music_bxh">
                <div className="top_number">
                  <span
                    className="px-2"
                    style={{
                      color:
                        song.id === 1
                          ? "#50e3c2"
                          : song.id == 2
                          ? "#4a90e2"
                          : song.id == 3
                          ? "#2e77cc"
                          : "#e1dede",
                      fontSize:
                        song.id === 1
                          ? "39px"
                          : song.id === 2
                          ? "36px"
                          : song.id === 3
                          ? "35px"
                          : "32px",
                      fontWeight: 700,
                    }}
                  >
                    {song.id}
                  </span>
                </div>
                <div className="on_top px-1">
                  <div className="flex justify-center items-center">
                    {song.arrowup ? (
                      <SortupIcon width="15px" height="15px " fill="#50e3c2" />
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
                    <span className="text-white" style={{ fontWeight: 600 }}>
                      {song.up}
                    </span>
                  </div>
                </div>
                <div className="w-full pl-1">
                  <div className="flex item_song_trend">
                    <div className="flex w-2/5" style={{ overflow: "hidden" }}>
                      <div className=" ml-1 rounded-md content_song_left contentSong_left">
                        <Image
                          className="rounded-md img_song"
                          style={{}}
                          src={song.img}
                          layout="fill"
                          objectFit="cover"
                          alt=""
                        />
                        <div className="div_opacity">
                          <button
                            className="btn_active_song"
                            onClick={() => handleSongClick(song)}
                          >
                            {currentSong?.id === song.id && isPlaying ? (
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
                            <span>{song.name}</span>
                          </div>
                          <div className="name_singer">
                            <p>{song.singer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="infor_music flex items-center px-3">
                      <div className="space-y-1">
                        <div className="flex space-x-2">
                          <div className="">
                            <span className="text-white opacity-90">
                              {song.view}
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="">
                            <span className="text-white opacity-90">
                              {song.like}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="heart flex items-center">
                      <div className="">
                        <button
                          className="flex items-center btn_like_song"
                          onClick={() => handleLikeClick(song.id)}
                        >
                          {likedSongs.includes(song.id) ? (
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
      )}
    </div>
  );
};

export default PageNamePage;
