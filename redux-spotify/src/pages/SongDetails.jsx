import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, followArtist, likemusic } from "../features/SongReducer";

const SongDetails = () => {
  let { currentSong, likedSongs, addArtist } = useSelector(
    (store) => store.music,
  );
  let dispatch = useDispatch();

  let isLiked = likedSongs?.some((song) => song.id === currentSong?.id);
  let Artistadd = addArtist.some((artist) => artist.id === currentSong.id);
  return (
    <>
      {currentSong ? (
        <div className="group">
          <div className="flex items-center justify-between mb-4 text-white overflow-auto">
            <div className="flex items-center gap-3 transition-transform duration-500 ease-in-out group-hover:translate-x-4">
              <h1 className="opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
                <i className="ri-sidebar-unfold-line text-xl text-gray-400"></i>
              </h1>

              <span className="font-bold line-clamp-1">
                {currentSong?.title}
              </span>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <i className="ri-more-fill text-xl cursor-pointer"></i>
              <i className="ri-expand-diagonal-s-line text-xl cursor-pointer"></i>
            </div>
          </div>
          <div className="w-full h-90 rounded-2xl border overflow-hidden bg-black relative">
            <img
              src={currentSong?.thumbnail}
              className="w-full h-full object-cover"
            />
            <div className="flex absolute top-70 left-55 text-center">
              <h1 className=" text-[50px] text-gray-300 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out cursor-pointer">
                <i className="ri-share-2-line"></i>
              </h1>
              <h1
                onClick={() => {
                  dispatch(likemusic(currentSong));
                  dispatch(addSong(currentSong));
                }}
                className=" text-[20px] font-[50px] mt-2"
              >
                {isLiked ? (
                  <i className="ri-checkbox-circle-fill text-green-500 text-[50px]"></i>
                ) : (
                  <i className="ri-checkbox-circle-fill text-gray-300 text-[50px]"></i>
                )}
              </h1>
            </div>
          </div>
          <div className="text-white   backdrop-blur-md w-full min-h-25 p-2 bg-blur-md mt-1">
            <h2 className="font-semibold text-[25px] line-clamp-1 hover:underline cursor-pointer">
              {currentSong?.title}
            </h2>
            <p className="text-gray-400 text-[15px] leading-snug line-clamp-2 hover:underline cursor-pointer">
              {currentSong?.artist}
            </p>
          </div>
          <div className="text-white bg-[#2b2a2afc] px-2 py-3 rounded-2xl  backdrop-blur-md w-full min-h-25 bg-blur-md ">
            <h2 className="font-semibold text-[20px] mb-1 line-clamp-3 hover:underline cursor-pointer">
              Album <br /> {currentSong?.album}
            </h2>
            <div className="flex items-start justify-start mt-5">
              <div
                className="px-1 py-1 backdrop-blur-md bg-blur-md border border-white text-white rounded-3xl flex items-center justify-center hover:scale-105 transition"
                onClick={() => {
                  dispatch(followArtist(currentSong));
                  // dispatch(addSong(currentSong));
                }}
              >
                {Artistadd ? (
                  <button className="bg-[#1db954] text-black text-[12px] font-bold py-2 px-4 rounded-full shadow-xl hover:scale-105 active:scale-95">
                   Unfollow
                  </button>
                ) : (
                  <button className="bg-gray-500 text-black text-[12px] font-bold py-2 px-4 rounded-full shadow-xl hover:scale-105 active:scale-95">
                    Follow
                  </button>
                )}
              </div>

              <p className="ml-49 mt-3 text-gray-400 text-[17px] leading-snug line-clamp-1 hover:underline cursor-pointer">
                {currentSong?.year}
              </p>
            </div>
          </div>
          <br />
          <div className="text-white bg-[#2b2a2afc] p-3 rounded-2xl gap-4 backdrop-blur-md w-full h-30 flex items-center">
            <>
              <div className="h-24 w-24 shrink-0">
                <div className="h-full w-full rounded-xl overflow-hidden bg-amber-200">
                  <img
                    src={currentSong?.thumbnail}
                    alt="thumb"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center items-start overflow-hidden">
                <div className="flex items-center w-full">
                  <h4 className="text-[15px] font-bold cursor-pointer truncate">
                    {currentSong?.title}
                  </h4>
                  <i className="ri-checkbox-circle-fill text-green-500 text-base ml-2 shrink-0"></i>
                </div>

                <p className="text-[14px] text-gray-400 cursor-pointer truncate w-full">
                  {currentSong?.artist}
                </p>
              </div>
            </>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full h-90 rounded-2xl border overflow-hidden bg-black">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Iplxbc62jGKxacuSIjQTm8JAAMhVWCJFeA&s"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6 text-white backdrop-blur-md w-full h-32 p-2 bg-blur-md flex items-center justify-center gap-2">
            <h1 className="text-[90px] text-center">
              <i className="ri-spotify-fill text-green-500"></i>
            </h1>
            <h1 className="text-[35px]  hover:underline cursor-pointer">
              Spotify
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default SongDetails;
