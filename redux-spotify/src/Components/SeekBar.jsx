import React from "react";
import { useSongs } from "../hooks/UseSongs";
import { useDispatch } from "react-redux";
import {
  nextSong,
  pause,
  play,
  prevSong,
  Repeat,
} from "../features/SongReducer";

const SeekBar = () => {
  let { isPlaying , isRepeat } = useSongs();
  let dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center gap-6 text-xl text-gray-400 ">
        <span><i className="ri-shuffle-line text-green-500 text-[19px] cursor-pointer hover:text-green-400"></i></span>
        <i
          onClick={() => dispatch(prevSong())}
          className="ri-skip-back-fill cursor-pointer hover:text-white"
        ></i>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition">
          {isPlaying ? (
            <i
              onClick={() => dispatch(pause())}
              className="ri-pause-fill ml-0.5"
            ></i>
          ) : (
            <i
              onClick={() => dispatch(play())}
              className="ri-play-fill ml-0.5"
            ></i>
          )}
        </div>
        <i
          onClick={() => dispatch(nextSong())}
          className="ri-skip-forward-fill cursor-pointer hover:text-white"
        ></i>
        <span
          onClick={() => {
            dispatch(Repeat());
          }}
        >
          {isRepeat ?<i className="ri-repeat-line cursor-pointer text-green-500"></i> : <i className="ri-repeat-line cursor-pointer text-white"></i>}
          
        </span>
      </div>

      <div className="flex items-center gap-2 w-full text-[10px] text-gray-400">
        <span>1:49</span>
        <div className="h-1 flex-1 bg-zinc-600 rounded-full group cursor-pointer relative">
          <div className="h-full bg-white group-hover:bg-green-500 w-[60%] rounded-full"></div>
        </div>
        <span>3:15</span>
      </div>
    </>
  );
};

export default SeekBar;
