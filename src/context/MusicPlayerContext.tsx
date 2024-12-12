// // FILE: src/context/MusicPlayerContext.tsx
// import React, { createContext, useState, useContext, ReactNode } from "react";

// interface Song {
//   id: number;
//   name: string;
//   singer: string;
//   view: string;
//   like: string;
//   img: string;
//   src: string;
//   up: number;
// }

// interface MusicPlayerContextProps {
//   currentSong: Song | null;
//   setCurrentSong: (song: Song) => void;
//   isPlaying: boolean;
//   setIsPlaying: (isPlaying: boolean) => void;
// }

// const MusicPlayerContext = createContext<MusicPlayerContextProps | undefined>(
//   undefined
// );

// export const MusicPlayerProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [currentSong, setCurrentSong] = useState<Song | null>(null);
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);

//   return (
//     <MusicPlayerContext.Provider
//       value={{ currentSong, setCurrentSong, isPlaying, setIsPlaying }}
//     >
//       {children}
//     </MusicPlayerContext.Provider>
//   );
// };

// // export const useMusicPlayer = () => {
// //   const context = useContext(MusicPlayerContext);
// //   if (!context) {
// //     throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");
// //   }
// //   return context;
// // };

// export const useMusicPlayer = () => {
//   const context = useContext(MusicPlayerContext);
//   if (!context) {
//     throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");
//   }
//   return context;
// };

import React, { createContext, useState, useContext, ReactNode } from "react";
import DefaultImg from "../../src/Img/pickleball-img.png";

interface Song {
  id: number;
  name: string;
  singer: string;
  view: string;
  like: string;
  img: string;
  src: string;
  up: number;
}

interface MusicPlayerContextProps {
  currentSong: Song | null;
  setCurrentSong: (song: Song) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextProps | undefined>(
  undefined
);

const defaultSong: Song = {
  id: 1,
  name: "PICKLEBALL",
  singer: "Đỗ Phú Quí",
  view: "100Tr lượt xem",
  like: "2Tr lượt thích",
  img: "/img/pickleball-img.png",
  src: "/audio/pickleball.m4a",
  up: 1,
};

export const MusicPlayerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(defaultSong);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <MusicPlayerContext.Provider
      value={{ currentSong, setCurrentSong, isPlaying, setIsPlaying }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");
  }
  return context;
};
