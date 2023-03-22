import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Drive",
    thumbnail:
      "https://i.scdn.co/image/ab67706f000000025353886459b6832a8bb4c90a",
    time: "5200",
    fllowers: 10,
    musics: [1, 3, 5],
  },
  {
    id: 5,
    name: "Drive 2",
    thumbnail:
      "https://i.scdn.co/image/ab67706f00000002c771198277ecd33007dd2de4",
    time: "5200",
    fllowers: 10,
    musics: [1, 3, 5],
  },
];

export const playlists = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addPlaylist: (state, { payload }) => {
      state?.push({
        id: state?.at(-1).id + 1,
        name: payload?.title,
        thumbnail: payload?.thumbnail,
        time: "5200",
        fllowers: 10,
        musics: [],
      });

      return state;
    },
    removePlaylist: (state, { payload }) => {
      return state?.filter((state) => state?.id != payload);
    },
    addMusic: (state, { payload }) => {
      const removeDupcate = (array) => {
        const arrayMap = new Set(array);

        return [...arrayMap];
      };

      const playlist = state?.find(
        (playlist) => playlist?.id == payload?.playlistId
      );
      if (!playlist) return state;

      playlist.musics = removeDupcate([...playlist?.musics, payload?.trackId]);
      return state;
    },
    removeMusic: (state, { payload }) => {
      console.log(payload);

      const { playlistId, trackId } = payload;
      const playlist = state?.find((playlist) => playlist?.id == playlistId);

      if (!playlist) return state;
      playlist.musics = playlist?.musics?.filter((id) => id != trackId);

      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPlaylist, removePlaylist, addMusic, removeMusic } =
  playlists.actions;

export default playlists.reducer;
