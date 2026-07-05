import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../features/SongReducer";

export let useSongs = () => {
  let { currentSong, isPlaying, isRepeat } = useSelector(
    (store) => store.music,
  );

  let dispatch = useDispatch();

  let audioRef = useRef(new Audio());

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.url;
      audioRef.current.play();
    }
  }, [currentSong]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  let handlePlay = (song) => {
    dispatch(addSong(song));
  };

  return {
    dispatch,
    audioRef,
    handlePlay,
    isPlaying,
    isRepeat,
  };
};
