import React from "react";
import "remixicon/fonts/remixicon.css";

const SongCard = ({ song, handlePlay }) => {
  return (
    <div className="h-55 w-40 p-4 rounded-xl text-white hover:bg-[#bdb3b328]  transition duration-300 cursor-pointer group">
      <div className="w-full h-30 rounded-lg overflow-hidden mb-4 relative">
        <img
          src={song.thumbnail} 
          alt="Discover Weekly"
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => handlePlay(song)}
          className="absolute bottom-2 right-2 text-black text-xl bg-green-600 px-2 py-1 rounded-full shadow-lg opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
        >
          <i className="ri-play-large-fill"></i>
        </button>
      </div>

      <h2 className="font-semibold text-[15px] mb-1 line-clamp-1">
        {song.title}
      </h2>

      <p className="text-gray-400 text-[10px] leading-snug line-clamp-2">
        {song.artist}
      </p>
    </div>
  );
};

export default SongCard;
