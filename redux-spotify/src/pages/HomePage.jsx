import React, { useEffect, useMemo } from "react";
import musics from "../utils/Songs.json";
import { nanoid } from "nanoid";
import SongCard from "../Components/SongCard";
import { useSongs } from "../hooks/UseSongs";
import { setallSongs } from "../features/SongReducer";

const HomePage = () => {
  let { handlePlay, dispatch } = useSongs();

  // let songs = musics.map((elem) => {
  //   return { ...elem, id: nanoid() };
  // });

  let songs = useMemo(()=>{
   return  musics.map((elem , index) => {
    return { ...elem, id: index + 1 };
  })
  
  });

  useEffect(() => {
    dispatch(setallSongs(songs));
  }, []);

  return (
    <div className="flex flex-wrap gap-3 px-6 py-4">
      {songs.map((elem) => {
        return <SongCard key={elem.id} song={elem} handlePlay={handlePlay} />;
      })}
    </div>
  );
};

export default HomePage;
