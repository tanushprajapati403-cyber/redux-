import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const ButtonPages = () => {

  let navigate = useNavigate()
  const { likedSongs } = useSelector((store) => store.music)
  return (
  
 <div className='text-white'>
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-xl font-bold">Your Library</h2>
    <div className="flex items-center gap-4 text-gray-400">
      <button className="flex items-center gap-1 bg-[#282828] hover:bg-[#3e3e3e] px-3 py-1 rounded-full text-white text-sm font-semibold transition">
        <i className="ri-add-line text-lg"></i> Create
      </button>
      <i className="ri-expand-diagonal-s-line hover:text-white cursor-pointer"></i>
    </div>
  </div>
  
  <div className="flex gap-2 mb-6">
    <button onClick={()=>navigate('/Home') } className="bg-[#282828] hover:bg-[#3e3e3e] px-4 py-1.5 rounded-full text-sm font-semibold transition">Playlists</button>
    <button className="bg-[#282828] hover:bg-[#3e3e3e] px-4 py-1.5 rounded-full text-sm font-semibold transition">Podcasts</button>
  </div>

  <div className="flex items-center justify-between mb-4 text-gray-400">
    <i className="ri-search-line hover:text-white cursor-pointer"></i>
    <div className="flex items-center gap-1 hover:text-white cursor-pointer text-sm">
      <span>Recents</span>
      <i className="ri-list-check"></i>
    </div>
  </div>

  <div className="space-y-4">
    
    <div onClick={()=>navigate('/Home/LikedSongs') } className="flex items-center gap-3 hover:bg-[#1a1a1a] p-2 rounded-md cursor-pointer transition">
      <div className="w-12 h-12 bg-linear-to-br from-[#450af5] to-[#c4efd9] rounded flex items-center justify-center">
        <i className="ri-heart-fill text-white text-xl"></i>
      </div>
      <div >
        <h4 className="text-green-500 font-semibold">Liked Songs</h4>
        <div  className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
          <i className="ri-pushpin-fill text-green-500 rotate-45"></i>
          <span>Playlist • {likedSongs.length} {likedSongs.length === 1 || likedSongs.length === 0 ? "song" : "songs"}</span>
        </div>
      </div>
    </div>

    <div onClick={()=>navigate('/Home/songs')} className="flex items-center gap-3 hover:bg-[#1a1a1a] p-2 rounded-md cursor-pointer transition">
      <div className="w-12 h-12 bg-[#006450] rounded flex items-center justify-center">
        <i className="ri-bookmark-fill text-[#1ed760] text-xl"></i>
      </div>
      <div>
        <h4 className="font-semibold">Your Episodes</h4>
        <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
          <i className="ri-pushpin-fill text-green-500 rotate-45"></i>
          <span>Playlist • Saved & downloaded episodes</span>
        </div>
      </div>
    </div>

  </div>
 </div>
  )
}

export default ButtonPages