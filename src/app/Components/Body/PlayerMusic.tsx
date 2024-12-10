// // FILE: src/components/PlayerMusic.tsx
// "use client";
// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import RandomMusicIcon from "../Icon/RandomMusicIcon";
// import BackMusicIcon from "../Icon/BackMusicIcon";
// import PlayActiveIcon from "../Icon/PlayActiveIcon";
// import NextMusicIcon from "../Icon/NextMusicIcon";
// import ReplayIcon from "../Icon/ReplayIcon";
// import MicroIcon from "../Icon/MicroIcon";
// import ScreensIcon from "../Icon/ScreensIcon";
// import VolumeOnIcon from "../Icon/VolumeOnIcon";
// import ListIcon from "../Icon/ListIcon";
// import { useMusicPlayer } from "../../../context/MusicPlayerContext";
// import "./style.scss";

// const PlayerMusic: React.FC = () => {
//   const { currentSong, isPlaying, setIsPlaying } = useMusicPlayer();
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   useEffect(() => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.play();
//       } else {
//         audioRef.current.pause();
//       }
//     }
//   }, [isPlaying, currentSong]);

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-2 lg:grid-cols-3">
//         <div className="control_music_left py-3 flex">
//           <div className="">
//             {currentSong && (
//               <Image
//                 src={currentSong.img}
//                 alt={currentSong.name}
//                 width={60}
//                 height={60}
//               />
//             )}
//           </div>
//           <div className="">
//             <div className="nameSong">
//               <span>{currentSong?.name}</span>
//             </div>
//             <div className="nameSinger">
//               <p>{currentSong?.singer}</p>
//             </div>
//           </div>
//         </div>
//         <div className="btn_controls control_music_center py-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <button className="btn_control btn_style_bg">
//                 <RandomMusicIcon width="20px" height="20px" fill="white" />
//               </button>
//             </div>
//             <div className="flex items-center ">
//               <button className="btn_style_bg">
//                 <BackMusicIcon width="22px" height="22px" fill="white" />
//               </button>
//             </div>
//             <div className="flex items-center btn_style_color">
//               <button
//                 className="hover:text-purple-500 "
//                 onClick={handlePlayPause}
//               >
//                 <PlayActiveIcon width="28px" height="28px" fill="white" />
//               </button>
//             </div>
//             <div className="flex items-center">
//               <button className="btn_style_bg">
//                 <NextMusicIcon
//                   classname=""
//                   width="22px"
//                   height="22px"
//                   fill="white"
//                 />
//               </button>
//             </div>
//             <div className="flex items-center">
//               <button className="btn_style_bg">
//                 <ReplayIcon width="20px" height="20px" fill="white" />
//               </button>
//             </div>
//           </div>
//           <div className="time_player"></div>
//         </div>
//         <div className="control_music_right py-3 flex items-center justify-end">
//           <div className="flex items-center">
//             <div className="flex items-center">
//               <button className="flex items-center btn_style_bg">
//                 <MicroIcon
//                   classname=""
//                   width="20px"
//                   height="20px"
//                   fill="white"
//                 />
//               </button>
//             </div>
//             <div className="flex items-center">
//               <button className="btn_style_bg">
//                 <ScreensIcon width="20px" height="20px" fill="white" />
//               </button>
//             </div>
//             <div className="">
//               <div className="flex items-center">
//                 <button className="btn_style_bg">
//                   <VolumeOnIcon
//                     classname=""
//                     width="20px"
//                     height="20px"
//                     fill="white"
//                   />
//                 </button>
//               </div>
//               <div className="control_volume"></div>
//             </div>
//             <div className="lists_music flex items-center">
//               <button className="btn_style_bg">
//                 <ListIcon width="20px" height="20px" fill="white" />
//               </button>
//             </div>
//           </div>
//           <div className=""></div>
//         </div>
//       </div>
//       {currentSong && <audio ref={audioRef} src={currentSong.src} />}
//     </div>
//   );
// };

// export default PlayerMusic;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import RandomMusicIcon from "../Icon/RandomMusicIcon";
import BackMusicIcon from "../Icon/BackMusicIcon";
import PlayActiveIcon from "../Icon/PlayActiveIcon";
import NextMusicIcon from "../Icon/NextMusicIcon";
import ReplayIcon from "../Icon/ReplayIcon";
import MicroIcon from "../Icon/MicroIcon";
import ScreensIcon from "../Icon/ScreensIcon";
import VolumeOnIcon from "../Icon/VolumeOnIcon";
import ListIcon from "../Icon/ListIcon";
import { useMusicPlayer } from "../../../context/MusicPlayerContext";
import "./style.scss";

const PlayerMusic: React.FC = () => {
  const { currentSong, isPlaying, setIsPlaying } = useMusicPlayer();
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  );

  useEffect(() => {
    if (audioElement) {
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying, currentSong, audioElement]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <div className="control_music_left py-3 flex">
          <div className="">
            {currentSong && (
              <Image
                src={currentSong.img}
                alt={currentSong.name}
                width={60}
                height={60}
              />
            )}
          </div>
          <div className="">
            <div className="nameSong">
              <span>{currentSong?.name}</span>
            </div>
            <div className="nameSinger">
              <p>{currentSong?.singer}</p>
            </div>
          </div>
        </div>
        <div className="btn_controls control_music_center py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button className="btn_control btn_style_bg">
                <RandomMusicIcon width="20px" height="20px" fill="white" />
              </button>
            </div>
            <div className="flex items-center ">
              <button className="btn_style_bg">
                <BackMusicIcon width="22px" height="22px" fill="white" />
              </button>
            </div>
            <div className="flex items-center btn_style_color">
              <button
                className="hover:text-purple-500 "
                onClick={handlePlayPause}
              >
                <PlayActiveIcon width="28px" height="28px" fill="white" />
              </button>
            </div>
            <div className="flex items-center">
              <button className="btn_style_bg">
                <NextMusicIcon
                  classname=""
                  width="22px"
                  height="22px"
                  fill="white"
                />
              </button>
            </div>
            <div className="flex items-center">
              <button className="btn_style_bg">
                <ReplayIcon width="20px" height="20px" fill="white" />
              </button>
            </div>
          </div>
          <div className="time_player"></div>
        </div>
        <div className="control_music_right py-3 flex items-center justify-end">
          <div className="flex items-center">
            <div className="flex items-center">
              <button className="flex items-center btn_style_bg">
                <MicroIcon
                  classname=""
                  width="20px"
                  height="20px"
                  fill="white"
                />
              </button>
            </div>
            <div className="flex items-center">
              <button className="btn_style_bg">
                <ScreensIcon width="20px" height="20px" fill="white" />
              </button>
            </div>
            <div className="">
              <div className="flex items-center">
                <button className="btn_style_bg">
                  <VolumeOnIcon
                    classname=""
                    width="20px"
                    height="20px"
                    fill="white"
                  />
                </button>
              </div>
              <div className="control_volume"></div>
            </div>
            <div className="lists_music flex items-center">
              <button className="btn_style_bg">
                <ListIcon width="20px" height="20px" fill="white" />
              </button>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
      {currentSong && (
        <audio ref={(audio) => setAudioElement(audio)} src={currentSong.src} />
      )}
    </div>
  );
};

export default PlayerMusic;
