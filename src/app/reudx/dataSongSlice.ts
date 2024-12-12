import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Song {
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
interface SongGoiY {
  id: number;
  name: string;
  singer: string;
  view: string;
  like: string;
  img: string;
  src: string;
  up: number;
}
const initialState:Song[] =[
  {
    id: 1,
    name: "PICKLEBALL",
    singer: "Đỗ Phú Quí",
    view: "100Tr lượt xem",
    like: "2Tr lượt thích",
    img: "/img/pickleball-img.png",
    src: "/audio/pickleball.m4a",
    up: 1,
    goiy: true,
  },
  {
    id: 2,
    name: "Têt Đông Đầy",
    singer: "Khoa, Kay Trần, Duck V",
    view: "201Tr lượt xem",
    like: "2Tr lượt thích",
    img: "/img/tetdongday-img.png",
    src: "/audio/tetdongday.m4a",
    up: 1,
    goiy: true,
  },
  {
    id: 3,
    name: "Thiên Lý Ơi",
    singer: "Jack - J97",
    view: "555Tr lượt xem",
    like: "10Tr lượt thích",
    img: "/img/thienlyoi-img.png",
    src: "/audio/thienlyoi.m4a",
    up: 1,
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
    up: 1,
    goiy: true,
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
    up: 1,
    goiy: true,
  },
  {
    id: 7,
    name: "APT",
    singer: "Rosé & Bruno Mars",
    view: "1.2B lượt xem",
    like: "101Tr lượt thích",
    img: "/img/apt-img.png",
    src: "/audio/apt-new.m4a",
    up: 1,
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
    up: 1,
    goiy: true,
  },
  {
    id: 9,
    name: "Ngáo Ngơ",
    singer: "HIEUTHUHAI,Atus...",
    view: "345Tr lượt xem",
    like: "45.6Tr lượt thích",
    img: "/img/ngaongo-img.png",
    src: "/audio/ngaongo.m4a",
    up: 1,
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
    goiy: true,
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
    goiy: true,
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
    goiy: true,
  },
  {
    id: 13,
    name: "Tình Đầu Quá Chén",
    singer: "Quang Hùng MasterD,...",
    view: "202Tr lượt xem",
    like: "12.6Tr lượt thích",
    img: "/img/tinhdauquachen-img.png",
    src: "/audio/tinhdauquachen.m4a",
    up: 1,
    goiy: true,
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
    goiy: true,
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
    goiy: true,
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
    goiy: true,
  },
]

const dataSongSlice = createSlice({
  name: "dataSong",
  initialState,
  reducers: {}
});

export const {} = dataSongSlice.actions

export default dataSongSlice.reducer