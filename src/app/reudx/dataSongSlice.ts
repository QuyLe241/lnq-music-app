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
  },
  {
    id: 2,
    name: "PICKLEBALL",
    singer: "Đỗ Phú Quí",
    view: "100Tr lượt xem",
    like: "2Tr lượt thích",
    img: "/img/pickleball-img.png",
    src: "/audio/pickleball.m4a",
    up: 1,
  },
  {
    id: 3,
    name: "PICKLEBALL",
    singer: "Đỗ Phú Quí",
    view: "100Tr lượt xem",
    like: "2Tr lượt thích",
    img: "PickleballImg",
    src: "/audio/pickleball.m4a",
    up: 1,
  },
  {
    id: 4,
    name: "PICKLEBALL",
    singer: "Đỗ Phú Quí",
    view: "100Tr lượt xem",
    like: "2Tr lượt thích",
    img: "PickleballImg",
    src: "/audio/pickleball.m4a",
    up: 1,
  },
  {
    id: 5,
    name: "PICKLEBALL",
    singer: "Đỗ Phú Quí",
    view: "100Tr lượt xem",
    like: "2Tr lượt thích",
    img: "PickleballImg",
    src: "/audio/pickleball.m4a",
    up: 1,
  },
]

const dataSongSlice = createSlice({
  name: "dataSong",
  initialState,
  reducers: {}
});

export const {} = dataSongSlice.actions

export default dataSongSlice.reducer