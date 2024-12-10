// FILE: src/app.tsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/reudx/store";
import { MusicPlayerProvider } from "./context/MusicPlayerContext";
import Trending from "./app/trending/page";
import PlayerMusic from "./app/Components/Body/PlayerMusic";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MusicPlayerProvider>
        <Trending />
        <PlayerMusic />
      </MusicPlayerProvider>
    </Provider>
  );
};

export default App;
