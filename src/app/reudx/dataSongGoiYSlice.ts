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
  type: number;
  goiy: boolean;
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
    type: 1,
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
    up: 5,
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
    up: 6,
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
    type: 2,
    goiy: false,
  },
]

const dataSongGoiYSlice = createSlice({
  name: "dataSongGoiY",
  initialState,
  reducers: {}
});

export const {} = dataSongGoiYSlice.actions

export default dataSongGoiYSlice.reducer