import { createSlice, current } from "@reduxjs/toolkit";

let songsSlice = createSlice({
  name: "song",
  initialState: {
    allSongs: [],
    likedSongs: [],
    addArtist: [],
    currentSong: null,
    isPlaying: false,
    isRepeat: false,
  },
  reducers: {
    setallSongs: (state, action) => {
      state.allSongs = action.payload;
      console.log("set allSonga means array:", current(state));
    },

    addSong: (state , action) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
      console.log("song added and play");
    },

    play: (state) => {
      if (!state.currentSong) {
        state.currentSong = state.allSongs[0];
        state.isPlaying = true;
        console.log("no song are seletced so play a 0th index song are play");
        return;
      }
      state.isPlaying = true;
      console.log("play");
    },

    pause: (state) => {
      state.isPlaying = false;
      console.log("pause");
    },

    nextSong: (state) => {
      if (state.currentSong === null || state.allSongs === undefined) {
        state.currentSong = state.allSongs[0];
        state.isPlaying = true;
        console.log("next song play , but currentsong and allsongs are null");
        return;
      }

      if (state.isRepeat) {
        state.isRepeat = { ...state.currentSong };
        state.isPlaying = true;
        console.log(
          "again repeated by isRepeat on nextSong click(not play/workbutton nextSong)",
        );
        return;
      }

      let currentMusic = state.allSongs.findIndex(
        (elem) => elem.id === state.currentSong.id,
      );
      let nextIndex = (currentMusic + 1) % state.allSongs.length;
      state.currentSong = state.allSongs[nextIndex];
      state.isPlaying = true;

      console.log("next song play");
    },

    prevSong: (state) => {
      if (state.currentSong === null || state.allSongs === undefined) {
        state.currentSong = state.allSongs[0];
        state.isPlaying = true;
        console.log(
          "previous song play , but currentsong and allsongs are null",
        );
        return;
      }

      if (state.isRepeat) {
        state.isRepeat = { ...state.currentSong };
        state.isPlaying = true;
        console.log(
          "again repeated by isRepeat on prevSong click(not play/workbutton prevSong)",
        );
        return;
      }

      let currentMusic = state.allSongs.findIndex(
        (elem) => elem.id === state.currentSong.id,
      );
      let nextIndex =
        (currentMusic - 1 + state.allSongs.length) % state.allSongs.length;
      state.currentSong = state.allSongs[nextIndex];
      state.isPlaying = true;

      console.log("previous song play");
    },

    Repeat: (state) => {
      if (state.currentSong) {
        state.isRepeat = !state.isRepeat;
        state.isPlaying = true;

        console.log("reapetad");
      } else {
        console.log("gana nahi hai (crrentSong are null)......");
      }
    },

    likemusic: (state, action) => {
      let song = action.payload;
      let isExistSong = state.likedSongs.find((elem) => elem.id === song.id);

      if (isExistSong) {
        state.likedSongs = state.likedSongs.filter(
          (elem) => elem.id !== song.id,
        );
        console.log("same hain likedsong mein to remove ho gaya ye");
      } else {
        state.likedSongs.push(song);
        console.log("push hoo gaya song likedsong mein");
      }
    },

    followArtist: (state, action) => {
      console.log(current(state));

      let artist = action.payload;
      let isExistArtist = state.addArtist.find((elem) => elem.id === artist.id);

      if (isExistArtist) {
        state.addArtist = state.addArtist.filter(
          (elem) => elem.id !== artist.id,
        );
        console.log("same hain addartist mein to remove ho gaya ye");
      } else {
        state.addArtist.push(artist);
        console.log("push hoo gaya artist addartist mein");
      }
    },
  },
});
//  console.log(allSongs)
export let {
  addSong,
  play,
  pause,
  setallSongs,
  nextSong,
  prevSong,
  Repeat,
  likemusic,
  followArtist,
} = songsSlice.actions;

export default songsSlice.reducer;

// if(state.currentSong === null || state.allSongs === undefined) return ;
