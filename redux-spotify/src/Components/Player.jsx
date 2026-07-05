import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SeekBar from "./SeekBar";
import { addSong, likemusic } from "../features/SongReducer";

const Player = () => {
  let { currentSong, isPlaying , likedSongs } = useSelector((store) => store.music);
  let dispatch = useDispatch();

  let isLiked = likedSongs?.some((song) => song.id === currentSong?.id);

  return (
    <div className="bg-black h-[11%] text-white p-2.5 fixed bottom-0 font-sans w-full grid grid-cols-[2fr_3fr_2fr] py-2">
      <div className="h-full flex items-center gap-4 mb-4 py-1.5">
        {currentSong ? (
          <>
            <div className=" h-10 w-10 overflow-hidden">
              <img
                src={currentSong?.thumbnail}
                alt="thumb"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-[11px] font-bold hover:underline cursor-pointer line-clamp-2">
                {currentSong?.title}
              </h4>
              <p className="text-[8px] text-gray-400 hover:underline cursor-pointer line-clamp-2">
                {currentSong?.artist}
              </p>
            </div>
            <div
              onClick={() => {
                dispatch(likemusic(currentSong));
                dispatch(addSong(currentSong));
              }}
            >
              {isLiked ? (
                <i className="ri-checkbox-circle-fill text-green-500 text-lg ml-2"></i>
              ) : (
                <i className="ri-checkbox-circle-fill text-gray-300 text-lg ml-2"></i>
              )}
            </div>
          </>
        ) : (
          <>
            <div className=" text-center gap-1 flex">
              <h1 className="text-[25px] text-center">
                <i className="ri-spotify-fill text-green-500"></i>
              </h1>
              <h1 className="text-[25px] hover:underline cursor-pointer">
                Spotify
              </h1>
            </div>
          </>
        )}
      </div>

      <div className="h-full flex flex-col items-center gap-4">
        <SeekBar />
      </div>

      <div className="flex items-center justify-end gap-2 w-full text-gray-400">
        <i className="ri-mic-line hover:text-white cursor-pointer text-[20px]"></i>
        <i className="ri-menu-2-line hover:text-white cursor-pointer text-[20px]"></i>
        <i className="ri-device-line hover:text-white cursor-pointer text-[20px]"></i>
        <div className="flex items-center gap-2 group w-32">
          <i className="ri-volume-up-line hover:text-white cursor-pointer text-[20px]"></i>
          <div className="h-1 flex-1 bg-zinc-600 rounded-full">
            <div className="h-full bg-white group-hover:bg-green-500 w-[70%] rounded-full"></div>
          </div>
        </div>
        <i className="ri-picture-in-picture-line hover:text-white cursor-pointer text-[20px]"></i>
        <i className="ri-fullscreen-line hover:text-white cursor-pointer text-[20px]"></i>
      </div>
    </div>
  );
};

export default Player;
