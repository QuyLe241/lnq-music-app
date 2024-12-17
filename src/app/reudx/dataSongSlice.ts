// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// interface Song {
//   id: number;
//   name: string;
//   singer: string;
//   view: string;
//   like: string;
//   img: string;
//   src: string;
//   up: number;
//   goiy: boolean;
// }
// interface SongGoiY {
//   id: number;
//   name: string;
//   singer: string;
//   view: string;
//   like: string;
//   img: string;
//   src: string;
//   up: number;
// }
// const initialState:Song[] =[
//   {
//     id: 1,
//     name: "PICKLEBALL",
//     singer: "Đỗ Phú Quí",
//     view: "100Tr lượt xem",
//     like: "2Tr lượt thích",
//     img: "/img/pickleball-img.png",
//     src: "/audio/pickleball.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 2,
//     name: "Têt Đông Đầy",
//     singer: "Khoa, Kay Trần, Duck V",
//     view: "201Tr lượt xem",
//     like: "2Tr lượt thích",
//     img: "/img/tetdongday-img.png",
//     src: "/audio/tetdongday.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 3,
//     name: "Thiên Lý Ơi",
//     singer: "Jack - J97",
//     view: "555Tr lượt xem",
//     like: "10Tr lượt thích",
//     img: "/img/thienlyoi-img.png",
//     src: "/audio/thienlyoi.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 4,
//     name: "Phượng Buồn",
//     singer: "H2K, Sli Petey",
//     view: "100Tr lượt xem",
//     like: "2Tr lượt thích",
//     img: "/img/phuongbuon-img.png",
//     src: "/audio/phongbuon.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 5,
//     name: "Waiting For You",
//     singer: "Mono",
//     view: "333Tr lượt xem",
//     like: "3.3Tr lượt thích",
//     img: "/img/waitingforyou-img.png",
//     src: "/audio/waitingforyou.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 6,
//     name: "Chăm Hoa",
//     singer: "Mono",
//     view: "390Tr lượt xem",
//     like: "3.5Tr lượt thích",
//     img: "/img/chamhoa-img.png",
//     src: "/audio/chamhoa.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 7,
//     name: "APT",
//     singer: "Rosé & Bruno Mars",
//     view: "1.2B lượt xem",
//     like: "101Tr lượt thích",
//     img: "/img/apt-img.png",
//     src: "/audio/apt-new.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 8,
//     name: "Die With Smile",
//     singer: "Lady Gaga & Bruno Mars",
//     view: "567Tr lượt xem",
//     like: "27.8Tr lượt thích",
//     img: "/img/diewithsmile-img.png",
//     src: "/audio/diewithsmile.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 9,
//     name: "Ngáo Ngơ",
//     singer: "HIEUTHUHAI,Atus...",
//     view: "345Tr lượt xem",
//     like: "45.6Tr lượt thích",
//     img: "/img/ngaongo-img.png",
//     src: "/audio/ngaongo.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 10,
//     name: "Sao Hạng A",
//     singer: "HIEUTHUHAI,Song Luân...",
//     view: "346Tr lượt xem",
//     like: "45.5Tr lượt thích",
//     img: "/img/saohanga-img.png",
//     src: "/audio/saohanga.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 11,
//     name: "Bánh Mì không",
//     singer: "Đạt G & Du Uyên",
//     view: "388Tr lượt xem",
//     like: "45.6Tr lượt thích",
//     img: "/img/banhmikhong-img.png",
//     src: "/audio/banhmikhong.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 12,
//     name: "Senorita",
//     singer: "Shawn Mendes & Camila Cabello",
//     view: "2.2Ty lượt xem",
//     like: "123Tr lượt thích",
//     img: "/img/senorita-img.png",
//     src: "/audio/Senorita.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 13,
//     name: "Tình Đầu Quá Chén",
//     singer: "Quang Hùng MasterD,...",
//     view: "202Tr lượt xem",
//     like: "12.6Tr lượt thích",
//     img: "/img/tinhdauquachen-img.png",
//     src: "/audio/tinhdauquachen.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 14,
//     name: "Catch Me If You Can",
//     singer: "Quang Hùng MasterD,...",
//     view: "222Tr lượt xem",
//     like: "15.6Tr lượt thích",
//     img: "/img/catchmeifyoucan-img.png",
//     src: "/audio/catchmeifyoucan.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 15,
//     name: "Yêu Nắm",
//     singer: "BIGDADDY & EMILY",
//     view: "289Tr lượt xem",
//     like: "12Tr lượt thích",
//     img: "/img/yeunam-img.png",
//     src: "/audio/yeunam.m4a",
//     up: 1,
//     goiy: true,
//   },
//   {
//     id: 16,
//     name: "Thêm Bao Nhiêu Lâu",
//     singer: "Đạt G",
//     view: "345Tr lượt xem",
//     like: "32Tr lượt thích",
//     img: "/img/thembaonhieulau-img.png",
//     src: "/audio/thembaonhieulau.m4a",
//     up: 1,
//     goiy: true,
//   },
// ]

// const dataSongSlice = createSlice({
//   name: "dataSong",
//   initialState,
//   reducers: {}
// });

// export const {} = dataSongSlice.actions

// export default dataSongSlice.reducer

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//  type
// 1: trending
// 2: anh trai say hi
// 3: hothit vn
// 4: chon loc
// 5: chill
// 6: giáng sinh
// 7: tết
// 8: ballad
// 9: âu mỹ
// 10: hàn quốc
// 11: edm us-uk
// 12: edm vietnam

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

const defaultSong: Song = {
  id: 1,
  name: "PICKLEBALL",
  singer: "Đỗ Phú Quí",
  view: "100Tr lượt xem",
  like: "2Tr lượt thích",
  img: "/img/pickleball-img.png",
  src: "/audio/pickleball.m4a",
  up: 1,
  arrowup: true,
  type: 1,
  goiy: true,
};

interface MusicPlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  songs: Song[];
}

const initialState: MusicPlayerState = {
  currentSong: defaultSong,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  songs: [
    defaultSong,
    {
      id: 2,
      name: "Têt Đông Đầy",
      singer: "Khoa, Kay Trần, Duck V",
      view: "201Tr lượt xem",
      like: "2Tr lượt thích",
      img: "/img/tetdongday-img.png",
      src: "/audio/tetdongday.m4a",
      up: 5,
      arrowup: true,
      type: 7,
      goiy: false,
    },
    {
      id: 3,
      name: "Thiên Lý Ơi",
      singer: "Jack - J97",
      view: "555Tr lượt xem",
      like: "10Tr lượt thích",
      img: "/img/thienlyoi-img.png",
      src: "/audio/thienlyoi.m4a",
      up: 10,
      arrowup: true,
      type: 1,
      goiy: true,
    },
    {
      id: 4,
      name: "Phượng Buồn",
      singer: "H2K, Sli Petey",
      view: "100Tr lượt xem",
      like: "2Tr lượt thích",
      img: "/img/phuongbuon-img.png",
      src: "/audio/phongbuon.m4a",
      up: 3,
      arrowup: true,
      type: 4,
      goiy: false,
    },
    {
      id: 5,
      name: "Waiting For You",
      singer: "Mono",
      view: "333Tr lượt xem",
      like: "3.3Tr lượt thích",
      img: "/img/waitingforyou-img.png",
      src: "/audio/waitingforyou.m4a",
      up: 1,
      arrowup: false,
      type: 3,
      goiy: true,
    },
    {
      id: 6,
      name: "Chăm Hoa",
      singer: "Mono",
      view: "390Tr lượt xem",
      like: "3.5Tr lượt thích",
      img: "/img/chamhoa-img.png",
      src: "/audio/chamhoa.m4a",
      up: 2,
      arrowup: true,
      type: 3,
      goiy: false,
    },
    {
      id: 7,
      name: "APT",
      singer: "Rosé & Bruno Mars",
      view: "1.2B lượt xem",
      like: "101Tr lượt thích",
      img: "/img/apt-img.png",
      src: "/audio/apt-new.m4a",
      up: 2,
      arrowup: true,
      type: 9,
      goiy: true,
    },
    {
      id: 8,
      name: "Die With Smile",
      singer: "Lady Gaga & Bruno Mars",
      view: "567Tr lượt xem",
      like: "27.8Tr lượt thích",
      img: "/img/diewithsmile-img.png",
      src: "/audio/diewithsmile.m4a",
      up: 10,
      arrowup: true,
      type: 9,
      goiy: false,
    },
    {
      id: 9,
      name: "Ngáo Ngơ",
      singer: "HIEUTHUHAI,Atus...",
      view: "345Tr lượt xem",
      like: "45.6Tr lượt thích",
      img: "/img/ngaongo-img.png",
      src: "/audio/ngaongo.m4a",
      up: 8,
      arrowup: true,
      type: 2,
      goiy: true,
    },
    {
      id: 10,
      name: "Sao Hạng A",
      singer: "HIEUTHUHAI,Song Luân...",
      view: "346Tr lượt xem",
      like: "45.5Tr lượt thích",
      img: "/img/saohanga-img.png",
      src: "/audio/saohanga.m4a",
      up: 1,
      arrowup: true,
      type: 2,
      goiy: false,
    },
    {
      id: 11,
      name: "Bánh Mì không",
      singer: "Đạt G & Du Uyên",
      view: "388Tr lượt xem",
      like: "45.6Tr lượt thích",
      img: "/img/banhmikhong-img.png",
      src: "/audio/banhmikhong.m4a",
      up: 1,
      arrowup: true,
      type: 3,
      goiy: false,
    },
    {
      id: 12,
      name: "Senorita",
      singer: "Shawn Mendes & Camila Cabello",
      view: "2.2Ty lượt xem",
      like: "123Tr lượt thích",
      img: "/img/senorita-img.png",
      src: "/audio/Senorita.m4a",
      up: 1,
      arrowup: true,
      type: 9,
      goiy: false,
    },
    {
      id: 13,
      name: "Tình Đầu Quá Chén",
      singer: "Quang Hùng MasterD,...",
      view: "202Tr lượt xem",
      like: "12.6Tr lượt thích",
      img: "/img/tinhdauquachen-img.png",
      src: "/audio/tinhdauquachen.m4a",
      up: 2,
      arrowup: false,
      type: 2,
      goiy: false,
    },
    {
      id: 14,
      name: "Catch Me If You Can",
      singer: "Quang Hùng MasterD,...",
      view: "222Tr lượt xem",
      like: "15.6Tr lượt thích",
      img: "/img/catchmeifyoucan-img.png",
      src: "/audio/catchmeifyoucan.m4a",
      up: 1,
      arrowup: true,
      type: 2,
      goiy: false,
    },
    {
      id: 15,
      name: "Yêu Nắm",
      singer: "BIGDADDY & EMILY",
      view: "289Tr lượt xem",
      like: "12Tr lượt thích",
      img: "/img/yeunam-img.png",
      src: "/audio/yeunam.m4a",
      up: 1,
      arrowup: true,
      type: 12,
      goiy: false,
    },
    {
      id: 16,
      name: "Thêm Bao Nhiêu Lâu",
      singer: "Đạt G",
      view: "345Tr lượt xem",
      like: "32Tr lượt thích",
      img: "/img/thembaonhieulau-img.png",
      src: "/audio/thembaonhieulau.m4a",
      up: 1,
      arrowup: true,
      type: 8,
      goiy: false,
    },
    {
      id: 17,
      name: "Hòa Nhịp Giáng Sinh",
      singer: "Min",
      view: "675Tr lượt xem",
      like: "66Tr lượt thích",
      img: "/img/hoanhipgiangsinh-img.png",
      src: "/audio/hoanhipgiangsinh.m4a",
      up: 1,
      arrowup: true,
      type: 6,
      goiy: false,
    },
    {
      id: 18,
      name: "Feded",
      singer: "Alan Walker",
      view: "3.9Ty lượt xem",
      like: "123Tr lượt thích",
      img: "/img/feded-img.png",
      src: "/audio/feded.m4a",
      up: 1,
      arrowup: true,
      type: 11,
      goiy: false,
    },
    {
      id: 19,
      name: "On My Way",
      singer: "Alan Walker",
      view: "2.9Ty lượt xem",
      like: "111Tr lượt thích",
      img: "/img/onmyway-img.png",
      src: "/audio/onmyway.m4a",
      up: 1,
      arrowup: true,
      type: 11,
      goiy: false,
    },
    {
      id: 20,
      name: "Alone",
      singer: "Alan Walker",
      view: "2.2Ty lượt xem",
      like: "112Tr lượt thích",
      img: "/img/aloneAlanwaker-img.png",
      src: "/audio/aloneAlanWaker.m4a",
      up: 3,
      arrowup: false,
      type: 11,
      goiy: false,
    },
    {
      id: 21,
      name: "Stay With Me",
      singer: "Chanyeol & Punch",
      view: "879Tr lượt xem",
      like: "88Tr lượt thích",
      img: "/img/staywithme-img.png",
      src: "/audio/staywithme.m4a",
      up: 1,
      arrowup: true,
      type: 10,
      goiy: false,
    },
    {
      id: 22,
      name: "Kill This Love",
      singer: "BLACKPINK",
      view: "345Ty lượt xem",
      like: "66Tr lượt thích",
      img: "/img/killthislove-img.png",
      src: "/audio/killthislove.m4a",
      up: 1,
      arrowup: true,
      type: 10,
      goiy: false,
    },
    {
      id: 23,
      name: "Money",
      singer: "Lisa",
      view: "1.2Ty lượt xem",
      like: "120Tr lượt thích",
      img: "/img/money-img.png",
      src: "/audio/money.m4a",
      up: 1,
      arrowup: true,
      type: 10,
      goiy: false,
    },
    {
      id: 24,
      name: "The Sun OST",
      singer: "",
      view: "656Tr lượt xem",
      like: "65Tr lượt thích",
      img: "/img/thesun-ost-img.png",
      src: "/audio/thesunOSTMV.m4a",
      up: 1,
      arrowup: true,
      type: 10,
      goiy: false,
    },
    {
      id: 25,
      name: "This Love",
      singer: "",
      view: "233Tr lượt xem",
      like: "56Tr lượt thích",
      img: "/img/thislove-ost-img.png",
      src: "/audio/thienlyoi.m4a",
      up: 2,
      arrowup: false,
      type: 10,
      goiy: false,
    },
    {
      id: 26,
      name: "Bạc Phận",
      singer: "Jack x ICM",
      view: "678Tr lượt xem",
      like: "98r lượt thích",
      img: "/img/bacphan-img.png",
      src: "/audio/bacphan.m4a",
      up: 1,
      arrowup: true,
      type: 3,
      goiy: false,
    },
    {
      id: 27,
      name: "Lối Nhỏ",
      singer: "Đen & Phương Anh Đào",
      view: "233Tr lượt xem",
      like: "56Tr lượt thích",
      img: "/img/loinho-img.png",
      src: "/audio/loinho.m4a",
      up: 1,
      arrowup: true,
      type: 5,
      goiy: false,
    },
    {
      id: 28,
      name: "Đếm Ngày Xa Em",
      singer: "Only C & Lou Hoàng",
      view: "389Tr lượt xem",
      like: "69Tr lượt thích",
      img: "/img/demngayxaem-img.png",
      src: "/audio/demngayxaem.m4a",
      up: 1,
      arrowup: true,
      type: 4,
      goiy: false,
    },
    {
      id: 29,
      name: "Có Em Chờ",
      singer: "Min & Mr A",
      view: "456Tr lượt xem",
      like: "21Tr lượt thích",
      img: "/img/coemcho-omg.png",
      src: "/audio/coemcho.m4a",
      up: 1,
      arrowup: true,
      type: 3,
      goiy: false,
    },
    {
      id: 30,
      name: "Nơi Này Có Anh",
      singer: "Sơn Tùng M-TP",
      view: "879Tr lượt xem",
      like: "100Tr lượt thích",
      img: "/img/noinaycoanh-img.png",
      src: "/audio/noinaycoanh.m4a",
      up: 1,
      arrowup: true,
      type: 3,
      goiy: false,
    },
    {
      id: 31,
      name: "Thằng Điên",
      singer: "JUTATEE & Phương Ly",
      view: "345Tr lượt xem",
      like: "66Tr lượt thích",
      img: "/img/thangdien-img.png",
      src: "/audio/thangdien.m4a",
      up: 1,
      arrowup: true,
      type: 4,
      goiy: false,
    },
    {
      id: 32,
      name: "Hãy Trao Cho Anh",
      singer: "Sơn Tùng M-TP",
      view: "678Ty lượt xem",
      like: "66Tr lượt thích",
      img: "/img/haytraochoanh-img.png",
      src: "/audio/haytraochoanh.m4a",
      up: 1,
      arrowup: true,
      type: 3,
      goiy: false,
    },
    {
      id: 33,
      name: "Build The B*ch",
      singer: "Bella Poarch",
      view: "1.5Ty lượt xem",
      like: "232Tr lượt thích",
      img: "/img/buildthebit.png",
      src: "/audio/buildthebit.m4a",
      up: 1,
      arrowup: true,
      type: 9,
      goiy: false,
    },
    {
      id: 34,
      name: "Muộn Rồi Mà Sao Còn",
      singer: "Sơn Tùng M-TP",
      view: "456Ty lượt xem",
      like: "68Tr lượt thích",
      img: "/img/muonroimasaocon-img.png",
      src: "/audio/muonroimasaocon.m4a",
      up: 1,
      arrowup: true,
      type: 3,
      goiy: false,
    },
    {
      id: 35,
      name: "Phía Sau Một Cô Gái",
      singer: "Soobin Hoàng Sơn",
      view: "1.5Ty lượt xem",
      like: "123Tr lượt thích",
      img: "/img/phisaumotcogai-img.png",
      src: "/audio/phiasaumotcogai.m4a",
      up: 1,
      arrowup: true,
      type: 8,
      goiy: false,
    },
    {
      id: 36,
      name: "Xin Đừng Lặng Im",
      singer: "Soobin Hoàng Sơn",
      view: "678Tr lượt xem",
      like: "69Tr lượt thích",
      img: "/img/xindunglangim-img.png",
      src: "/audio/xindunglangim.m4a",
      up: 1,
      arrowup: true,
      type: 8,
      goiy: false,
    },
    {
      id: 37,
      name: "Gửi Anh Xa Nhớ",
      singer: "Bich Phương",
      view: "392Tr lượt xem",
      like: "55Tr lượt thích",
      img: "/img/guianhxanho-img.png",
      src: "/audio/guianhxanho.m4a",
      up: 1,
      arrowup: true,
      type: 8,
      goiy: false,
    },
    {
      id: 38,
      name: "Ngày Mai Em Đi",
      singer: "TOULIVER X LÊ HIẾU X SOOBIN HOÀNG SƠN ",
      view: "868Tr lượt xem",
      like: "101Tr lượt thích",
      img: "/img/ngaymaiemdi-img.png",
      src: "/audio/ngaymaiemdi.m4a",
      up: 1,
      arrowup: true,
      type: 8,
      goiy: false,
    },
    {
      id: 39,
      name: "Ngẫu Hứng",
      singer: "HOAPROX",
      view: "455Tr lượt xem",
      like: "56Tr lượt thích",
      img: "/img/ngauhung-img.png",
      src: "/audio/ngauhung.m4a",
      up: 1,
      arrowup: true,
      type: 12,
      goiy: false,
    },
  ],
};

const dataSongSlice = createSlice({
  name: "dataSong",
  initialState,
  reducers: {
    playSong(state, action: PayloadAction<Song>) {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },
    pauseSong(state) {
      state.isPlaying = false;
    },
    nextSong(state) {
      if (state.currentSong) {
        const currentIndex = state.songs.findIndex(
          (song) => song.id === state.currentSong!.id
        );
        if (currentIndex < state.songs.length - 1) {
          state.currentSong = state.songs[currentIndex + 1];
          state.isPlaying = true;
        }
      }
    },
    prevSong(state) {
      if (state.currentSong) {
        const currentIndex = state.songs.findIndex(
          (song) => song.id === state.currentSong!.id
        );
        if (currentIndex > 0) {
          state.currentSong = state.songs[currentIndex - 1];
          state.isPlaying = true;
        }
      }
    },
    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload;
    },
    setDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload;
    },
  },
});

export const {
  playSong,
  pauseSong,
  nextSong,
  prevSong,
  setCurrentTime,
  setDuration,
} = dataSongSlice.actions;

export default dataSongSlice.reducer;
