import { configureStore } from "@reduxjs/toolkit";
import playlists from "./slices/playlist";

export const store = configureStore({
  reducer: {
    playlists: playlists,
  },
});
