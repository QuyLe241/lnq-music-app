// "use client";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../reudx/store";
// import {
//   playSong,
//   pauseSong,
//   nextSong,
//   prevSong,
// } from "../../reudx/dataSongSlice";
// import Image from "next/image";
// import PlayActiveIcon from "../Icon/PlayActiveIcon";
// import PauseIcon from "../Icon/PauseIcon";
// import BackMusicIcon from "../Icon/BackMusicIcon";
// import NextMusicIcon from "../Icon/NextMusicIcon";
// import RandomMusicIcon from "../Icon/RandomMusicIcon";
// import ReplayIcon from "../Icon/ReplayIcon";
// import MicroIcon from "../Icon/MicroIcon";
// import ScreensIcon from "../Icon/ScreensIcon";
// import VolumeOnIcon from "../Icon/VolumeOnIcon";
// import VolumeOffIcon from "../Icon/VolumeOffIcon";
// import ListIcon from "../Icon/ListIcon";
// import "./style.scss";

// const PlayerMusic: React.FC = () => {
//   const dispatch = useDispatch();
//   const { currentSong, isPlaying, songs } = useSelector(
//     (state: RootState) => state.dataSongSlice
//   );
//   const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
//     null
//   );
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1); // Volume state (0 to 1)
//   const [isMuted, setIsMuted] = useState(false); // Mute state

//   useEffect(() => {
//     if (audioElement && currentSong) {
//       if (isPlaying) {
//         audioElement.play();
//       } else {
//         audioElement.pause();
//       }

//       const handleTimeUpdate = () => {
//         setCurrentTime(audioElement.currentTime);
//       };

//       const handleLoadedMetadata = () => {
//         setDuration(audioElement.duration);
//       };

//       audioElement.addEventListener("timeupdate", handleTimeUpdate);
//       audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);

//       return () => {
//         audioElement.removeEventListener("timeupdate", handleTimeUpdate);
//         audioElement.removeEventListener(
//           "loadedmetadata",
//           handleLoadedMetadata
//         );
//       };
//     }
//   }, [audioElement, currentSong, isPlaying]);

//   useEffect(() => {
//     if (audioElement) {
//       audioElement.volume = volume;
//     }
//   }, [volume, audioElement]);

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       dispatch(pauseSong());
//     } else if (currentSong) {
//       dispatch(playSong(currentSong));
//     }
//   };

//   const handleNextSong = () => {
//     dispatch(nextSong());
//   };

//   const handlePrevSong = () => {
//     dispatch(prevSong());
//   };

//   const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setVolume(Number(e.target.value));
//     setIsMuted(Number(e.target.value) === 0);
//   };

//   const toggleMute = () => {
//     if (isMuted) {
//       setVolume(1); // Unmute and set volume to 100%
//       setIsMuted(false);
//     } else {
//       setVolume(0); // Mute
//       setIsMuted(true);
//     }
//   };

//   const isFirstSong = currentSong
//     ? songs.findIndex((song) => song.id === currentSong.id) === 0
//     : false;

//   const isLastSong = currentSong
//     ? songs.findIndex((song) => song.id === currentSong.id) === songs.length - 1
//     : false;

//   const formatTime = (time: number) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-2 lg:grid-cols-3 px-3">
//         <div className="control_music_left py-3 flex">
//           <div
//             className="flex items-center justify-center"
//             style={{ overflow: "hidden", height: "100%", width: "80px" }}
//           >
//             {currentSong && (
//               <Image
//                 style={{ borderRadius: "5px" }}
//                 src={currentSong.img}
//                 alt={currentSong.name}
//                 width={90}
//                 height={90}
//               />
//             )}
//           </div>
//           <div className="pl-2 flex items-center">
//             <div className="">
//               <div className="nameSong">
//                 <span
//                   style={{ fontSize: "18px", fontWeight: 600, color: "white" }}
//                 >
//                   {currentSong?.name}
//                 </span>
//               </div>
//               <div className="nameSinger">
//                 <p style={{ fontSize: "16px", color: "white", opacity: "0.6" }}>
//                   {currentSong?.singer}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="btn_controls control_music_center py-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <button
//                 className="btn_control btn_style_bg"
//                 title="Phát ngẫu nhiên"
//               >
//                 <RandomMusicIcon width="20px" height="20px" fill="white" />
//               </button>
//             </div>
//             <div className="flex items-center ">
//               <button
//                 className="btn_style_bg"
//                 title="Bài trước đó"
//                 onClick={handlePrevSong}
//                 disabled={isFirstSong}
//               >
//                 <BackMusicIcon width="22px" height="22px" fill="white" />
//               </button>
//             </div>
//             <div className="flex items-center btn_style_color">
//               <button
//                 className="hover:text-purple-500 "
//                 onClick={handlePlayPause}
//               >
//                 {isPlaying ? (
//                   <PauseIcon
//                     classname=""
//                     width="28px"
//                     height="28px"
//                     fill="white"
//                   />
//                 ) : (
//                   <PlayActiveIcon width="28px" height="28px" fill="white" />
//                 )}
//               </button>
//             </div>
//             <div className="flex items-center">
//               <button
//                 className="btn_style_bg"
//                 title="Bài kế tiếp"
//                 onClick={handleNextSong}
//                 disabled={isLastSong}
//               >
//                 <NextMusicIcon
//                   classname=""
//                   width="22px"
//                   height="22px"
//                   fill="white"
//                 />
//               </button>
//             </div>
//             <div className="flex items-center">
//               <button className="btn_style_bg" title="Phát lặp lại">
//                 <ReplayIcon width="20px" height="20px" fill="white" />
//               </button>
//             </div>
//           </div>
//           <div
//             style={{ position: "relative" }}
//             className="time_player flex items-center justify-center pt-2 pb-1"
//           >
//             <span
//               className="time_player_left"
//               style={{ color: "white", opacity: "0.6", fontSize: "15px" }}
//             >
//               {formatTime(currentTime)}
//             </span>
//             <input
//               className="w-4/5 time_player_style"
//               type="range"
//               min="0"
//               max={duration}
//               value={currentTime}
//               style={{
//                 background: `linear-gradient(to right, #fff ${(
//                   (currentTime / duration) *
//                   100
//                 ).toFixed(2)}%, rgba(255, 255, 255, 0.5) ${(
//                   (currentTime / duration) *
//                   100
//                 ).toFixed(2)}%)`,
//               }}
//               onChange={(e) => {
//                 if (audioElement) {
//                   audioElement.currentTime = Number(e.target.value);
//                   setCurrentTime(Number(e.target.value));
//                 }
//               }}
//             />
//             <span
//               className="time_player_right"
//               style={{ color: "white", opacity: "0.6", fontSize: "15px" }}
//             >
//               {formatTime(duration)}
//             </span>
//           </div>
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
//             <div className="flex items-center">
//               <div className="flex items-center">
//                 <button className="btn_style_bg" onClick={toggleMute}>
//                   {isMuted ? (
//                     <VolumeOffIcon width="20px" height="20px" fill="white" />
//                   ) : (
//                     <VolumeOnIcon
//                       classname=""
//                       width="20px"
//                       height="20px"
//                       fill="white"
//                     />
//                   )}
//                 </button>
//               </div>
//               <div className="control_volume flex items-center">
//                 <input
//                   className="volume_style"
//                   type="range"
//                   min="0"
//                   max="1"
//                   step="0.01"
//                   value={volume}
//                   onChange={handleVolumeChange}
//                   style={{
//                     background: `linear-gradient(to right, #fff ${
//                       volume * 100
//                     }%, rgba(255, 255, 255, 0.5) ${volume * 100}%)`,
//                   }}
//                 />
//               </div>
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
//       {currentSong && (
//         <audio
//           ref={(audio) => setAudioElement(audio)}
//           src={currentSong.src}
//           onEnded={handleNextSong}
//         />
//       )}
//     </div>
//   );
// };

// export default PlayerMusic;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reudx/store";
import {
  playSong,
  pauseSong,
  nextSong,
  prevSong,
} from "../../reudx/dataSongSlice";
import Image from "next/image";
import PlayActiveIcon from "../Icon/PlayActiveIcon";
import PauseIcon from "../Icon/PauseIcon";
import BackMusicIcon from "../Icon/BackMusicIcon";
import NextMusicIcon from "../Icon/NextMusicIcon";
import RandomMusicIcon from "../Icon/RandomMusicIcon";
import ReplayIcon from "../Icon/ReplayIcon";
import MicroIcon from "../Icon/MicroIcon";
import ScreensIcon from "../Icon/ScreensIcon";
import VolumeOnIcon from "../Icon/VolumeOnIcon";
import VolumeOffIcon from "../Icon/VolumeOffIcon";
import ListIcon from "../Icon/ListIcon";
import "./style.scss";

const PlayerMusic: React.FC = () => {
  const dispatch = useDispatch();
  const { currentSong, isPlaying, songs } = useSelector(
    (state: RootState) => state.dataSongSlice
  );
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Volume state (0 to 1)
  const [isMuted, setIsMuted] = useState(false); // Mute state

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement && currentSong) {
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }

      const handleTimeUpdate = () => {
        setCurrentTime(audioElement.currentTime);
      };

      const handleLoadedMetadata = () => {
        setDuration(audioElement.duration);
      };

      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      };
    }
  }, [currentSong, isPlaying]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = volume;
    }
  }, [volume]);

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(pauseSong());
    } else if (currentSong) {
      dispatch(playSong(currentSong));
    }
  };

  const handleNextSong = () => {
    dispatch(nextSong());
  };

  const handlePrevSong = () => {
    dispatch(prevSong());
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    setIsMuted(Number(e.target.value) === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(1); // Unmute and set volume to 100%
      setIsMuted(false);
    } else {
      setVolume(0); // Mute
      setIsMuted(true);
    }
  };

  const isFirstSong = currentSong
    ? songs.findIndex((song) => song.id === currentSong.id) === 0
    : false;

  const isLastSong = currentSong
    ? songs.findIndex((song) => song.id === currentSong.id) === songs.length - 1
    : false;

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 px-3">
        <div className="control_music_left py-3 flex">
          <div
            className="flex items-center justify-center"
            style={{ overflow: "hidden", height: "100%", width: "80px" }}
          >
            {currentSong && (
              <Image
                style={{ borderRadius: "5px" }}
                src={currentSong.img}
                alt={currentSong.name}
                width={90}
                height={90}
              />
            )}
          </div>
          <div className="pl-2 flex items-center">
            <div className="">
              <div className="nameSong">
                <span
                  style={{ fontSize: "18px", fontWeight: 600, color: "white" }}
                >
                  {currentSong?.name}
                </span>
              </div>
              <div className="nameSinger">
                <p style={{ fontSize: "16px", color: "white", opacity: "0.6" }}>
                  {currentSong?.singer}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn_controls control_music_center py-3">
          <div className="flex items-center justify-between">
            <div className="" style={{ height: "38px" }}>
              {/* <button
                className="btn_control btn_style_bg"
                title="Phát ngẫu nhiên"
              >
                <RandomMusicIcon width="20px" height="20px" fill="white" />
              </button> */}
              <div
                className="container_btn_position"
                style={{ width: "", height: "100%" }}
              >
                <RandomMusicIcon
                  clasName="style_posotion_icon"
                  width="22px"
                  height="22px"
                  fill="white"
                />
                <button
                  className="btn_style_bg btn_test"
                  style={{ zIndex: 30 }}
                  title="Bài trước đó"
                  onClick={handlePrevSong}
                  disabled={isFirstSong}
                ></button>
              </div>
            </div>
            <div className=" " style={{ height: "38px" }}>
              <div
                className="container_btn_position"
                style={{ height: "100%" }}
              >
                <BackMusicIcon
                  classname="style_posotion_icon"
                  width="22px"
                  height="22px"
                  fill="white"
                />
                <button
                  className="btn_style_bg btn_test"
                  style={{ zIndex: 30 }}
                  title="Bài trước đó"
                  onClick={handlePrevSong}
                  disabled={isFirstSong}
                ></button>
              </div>
            </div>
            <div className="" style={{ height: "38px" }}>
              <div
                className="container_btn_position"
                style={{ height: "100%" }}
              >
                <button
                  className=" btn_style_color"
                  style={{ zIndex: 30 }}
                  onClick={handlePlayPause}
                >
                  {isPlaying ? (
                    <PauseIcon
                      classname="style_posotion_icon"
                      width="28px"
                      height="28px"
                      fill="white"
                    />
                  ) : (
                    <PlayActiveIcon
                      classname="style_posotion_icon"
                      width="28px"
                      height="28px"
                      fill="white"
                    />
                  )}
                </button>
              </div>
            </div>
            {/* <div className="flex items-center">
              <button
                className="btn_style_bg btn_test_next"
                title="Bài kế tiếp"
                onClick={handleNextSong}
                disabled={isLastSong}
              >
                <NextMusicIcon width="22px" height="22px" fill="white" />
              </button>
            </div> */}
            <div className=" " style={{ height: "38px" }}>
              <div
                className="container_btn_position"
                style={{ height: "100%" }}
              >
                <NextMusicIcon
                  classname="style_posotion_icon"
                  width="22px"
                  height="22px"
                  fill="white"
                />
                <button
                  className="btn_style_bg btn_test"
                  style={{ zIndex: 30 }}
                  title="Bài trước đó"
                  onClick={handleNextSong}
                  disabled={isLastSong}
                ></button>
              </div>
            </div>
            {/* <div className="flex items-center">
              <button className="btn_style_bg" title="Phát lặp lại">
                <ReplayIcon width="20px" height="20px" fill="white" />
              </button>
            </div> */}
            <div className=" " style={{ height: "38px" }}>
              <div
                className="container_btn_position"
                style={{ height: "100%" }}
              >
                <ReplayIcon
                  clasname="style_posotion_icon"
                  width="22px"
                  height="22px"
                  fill="white"
                />
                <button
                  className="btn_style_bg btn_test"
                  style={{ zIndex: 30 }}
                  title="Phát lặp lại"
                ></button>
              </div>
            </div>
          </div>
          <div
            style={{ position: "relative" }}
            className="time_player flex items-center justify-center pt-2 pb-1"
          >
            <span
              className="time_player_left"
              style={{ color: "white", opacity: "0.6", fontSize: "15px" }}
            >
              {formatTime(currentTime)}
            </span>
            <input
              className="w-4/5 time_player_style"
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              style={{
                background: `linear-gradient(to right, #fff ${(
                  (currentTime / duration) *
                  100
                ).toFixed(2)}%, rgba(255, 255, 255, 0.5) ${(
                  (currentTime / duration) *
                  100
                ).toFixed(2)}%)`,
              }}
              onChange={(e) => {
                const audioElement = audioRef.current;
                if (audioElement) {
                  audioElement.currentTime = Number(e.target.value);
                  setCurrentTime(Number(e.target.value));
                }
              }}
            />
            <span
              className="time_player_right"
              style={{ color: "white", opacity: "0.6", fontSize: "15px" }}
            >
              {formatTime(duration)}
            </span>
          </div>
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
            <div className="flex items-center">
              <div className="flex items-center">
                <button className="btn_style_bg" onClick={toggleMute}>
                  {isMuted ? (
                    <VolumeOffIcon width="20px" height="20px" fill="white" />
                  ) : (
                    <VolumeOnIcon width="20px" height="20px" fill="white" />
                  )}
                </button>
              </div>
              <div className="control_volume flex items-center">
                <input
                  className="volume_style"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  style={{
                    background: `linear-gradient(to right, #fff ${
                      volume * 100
                    }%, rgba(255, 255, 255, 0.5) ${volume * 100}%)`,
                  }}
                />
              </div>
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
        <audio ref={audioRef} src={currentSong.src} onEnded={handleNextSong} />
      )}
    </div>
  );
};

export default PlayerMusic;
