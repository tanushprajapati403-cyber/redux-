import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { likemusic, pause, play } from "../features/SongReducer";
import { useNavigate } from "react-router";

const LikedSongs = () => {
  let { likedSongs, isPlaying } = useSelector((store) => store.music);
  let dispatch = useDispatch();
    let navigate = useNavigate();
  return (
    <div className="bg-[#121212] text-white font-sans min-h-screen p-8">
  {/* Header Section */}
  <header className="flex items-end gap-6 mb-8 bg-linear-to-b from-[#450af5] to-[#121212] -m-8 p-8 pt-20">
    <div className="w-52 h-52 bg-linear-to-br from-[#450af5] to-[#8e8ee5] shadow-2xl flex items-center justify-center rounded-sm">
      <span className="text-white text-8xl">♥</span>
    </div>
    <div>
      <p className="text-xs font-bold uppercase tracking-wider text-gray-300">Playlist</p>
      <h1 className="text-8xl font-black py-2 tracking-tighter">Liked Songs</h1>
      <div className="flex items-center gap-1 mt-4 text-sm font-semibold">
        <span>Tanush Prajapati</span>
        <span className="before:content-['•'] before:mx-2">{likedSongs.length} songs</span>
      </div>
    </div>
  </header>

  <section className="mt-8">
    {/* Table Header - No Time Column */}
    <div className="grid grid-cols-[16px_4fr_3fr_2fr_120px] gap-4 px-4 py-2 border-b border-white/10 text-gray-400 text-xs uppercase font-bold tracking-widest mb-4">
      <span>#</span>
      <span>Title</span>
      <span>Artist</span>
      <span>Album</span>
      <span className="text-right pr-4">Status</span>
    </div>

    {likedSongs.length > 0 ? (
      likedSongs.map((elem , index) => (
        <div 
          key={elem.id} 
          className="grid grid-cols-[16px_4fr_3fr_2fr_120px] gap-4 px-4 py-2 hover:bg-white/10 rounded-md transition group items-center text-gray-400 hover:text-white"
        >
          <div className="relative w-4 flex items-center justify-center">
            <span className="text-sm group-hover:hidden">{index + 1}</span>
            <button
              onClick={() => isPlaying ? dispatch(pause()) : dispatch(play())}
              className="hidden group-hover:flex items-center justify-center text-white absolute inset-0 w-full h-full"
            >
              {isPlaying ? <i className="ri-pause-fill"></i> : <i className="ri-play-fill text-xs"></i>}
            </button>
          </div>

          <div className="flex items-center gap-3 overflow-hidden">
            <img src={elem?.thumbnail} alt="thumb" className="h-10 w-10 rounded object-cover shrink-0" />
            <span className="text-white font-medium line-clamp-1">{elem?.title}</span>
          </div>

          <span className="text-sm line-clamp-1">{elem?.artist}</span>

          <span className="text-sm line-clamp-1">{elem?.album}</span>

          <div className="flex items-center justify-end pr-8">
            <button 
              onClick={() => dispatch(likemusic(elem))}
              className="hover:scale-110 active:scale-95 transition"
            >
              <i className="ri-checkbox-circle-fill text-green-500 text-xl"></i>
            </button>
          </div>
        </div>
      ))
    ) : (
      <div className="flex flex-col items-center justify-center py-20 opacity-50">
        <i onClick={()=> navigate('/Home')} className="ri-heart-line text-6xl mb-4 cursor-pointer hover:scale-120 transition  hover:text-green-500 hover:border-green-500"></i>
        <p className="text-lg">Your liked songs will appear here.</p>
      </div>
    )}
  </section>
</div>
     
  );
};

export default LikedSongs;
