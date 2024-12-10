"use client";
import Header from "./Components/Header/Header";
import Sibar from "./Components/Sibar/Sibar";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import { store } from "./reudx/store";
import { Provider } from "react-redux";
import { MusicPlayerProvider } from "@/context/MusicPlayerContext";

export default function Home() {
  return (
    <Provider store={store}>
      <MusicPlayerProvider>
        <div className="">
          <Body />
        </div>
      </MusicPlayerProvider>
    </Provider>
  );
}
