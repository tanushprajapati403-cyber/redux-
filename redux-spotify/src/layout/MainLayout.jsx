import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Player from "../Components/Player";
import ButtonPages from "../pages/ButtonPages";
import SongDetails from "../pages/SongDetails";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <Navbar />

      <div className="flex-1 min-h-0 p-2 gap-2 grid grid-cols-[1.3fr_3fr_1.3fr]">
        <div className="border-none shadow-md rounded-lg bg-[#121212] overflow-hidden px-4 py-6">
          <ButtonPages/>
        </div>

        <div className="overflow-auto  [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-thumb]:bg-gray-500 border shadow-md rounded-lg bg-[#1f1f1f]">
          <Outlet />
        </div>

        <div className="px-4 py-6 border-none shadow-md rounded-lg bg-[#121212] overflow-hidden [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-thumb]:bg-gray-500 border ">
          <SongDetails/>
        </div>
      </div>

      <Player />
    </div>
  );
};

export default MainLayout;
