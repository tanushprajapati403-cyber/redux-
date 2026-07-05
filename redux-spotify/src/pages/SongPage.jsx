import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { followArtist } from "../features/SongReducer";

const SongPage = () => {
  let { addArtist, currentSong } = useSelector((store) => store.music);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  return (
    <div className="bg-[#121212] text-white min-h-screen font-sans flex flex-col items-start justify-start gap-3">
      {/* 1. Header Section with Gradient */}
      <div className="bg-linear-to-b from-[#0a4d3e] to-[#121212] p-8 pt-16 flex items-end gap-6">
        {/* Cover Icon */}
        <div className="w-48 h-48 bg-[#056952] shadow-2xl flex items-center justify-center rounded-sm shrink-0">
          <i className="ri-bookmark-fill text-white text-8xl"></i>
        </div>

        {/* Text Info */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold uppercase">Playlist</p>
          <h1 className="text-8xl font-black tracking-tighter">
            Your Episodes
          </h1>
          <p className="text-sm font-bold mt-4">Tanush Prajapati</p>
        </div>
      </div>

      <div className="min-h-full minh-w-full px-3 py-5 flex items-start gap-16 justify-start flex-wrap">
        {addArtist.length > 0 ? (
          addArtist.map((elem, index) => {
            return (
              <div
                key={index}
                className="h-45 group relative flex flex-col items-center p-5 rounded-lg  hover:bg-[#282828] transition-all duration-300 w-48 cursor-pointer"
              >
                {/* Circular Image Section */}
                <div className="relative w-25 h-25 mb-4 ">
                  <img
                    src={elem.thumbnail}
                    alt={elem.title}
                    className="w-full h-full object-cover rounded-full"
                  />

                  {/* Follow Button - Hover pe neeche se upar aayega */}
                  <div
                    onClick={() => {
                      dispatch(followArtist(elem));
                      // dispatch(addSong(currentSong));
                    }}
                    className="absolute bottom-1 left-16 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <button className="bg-[#1db954] text-black text-[12px] font-bold py-2 px-3 rounded-full shadow-xl hover:scale-105 active:scale-95">
                      unfollow
                    </button>
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full text-left">
                  <h3 className="text-white font-bold truncate text-[10px] mb-1">
                    {elem.title}
                  </h3>
                  <p className="text-[#b3b3b3] text-[7px] font-medium">
                    Artist
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className=" ml-50">
            <div className="flex flex-col items-center justify-center py-10">
              <div
                onClick={() => navigate("/Home")}
                className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-6 cursor-pointer hover:scale-105 transition hover:text-green-500 hover:border-green-500"
              >
                <i className="ri-add-line text-4xl font-light"></i>
              </div>
              <h2 className="text-3xl font-bold">Add to Your Episodes</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SongPage;
