import React, { useState } from "react";
import profile from "../../images/photo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log(search);
  };

  return (
    <div className="flex items-center justify-between w-[100%] p-4 text-left">
      <div className="w-[65%] flex justify-around ">
        <div className="w-[25%] flex items-center justify-center">
          <h2
            className="text-xl font-normal text-white hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            Gmail
          </h2>
        </div>
        <div className="rounded-full h-12 flex justify-between px-4 items-center bg-[#777a9f] w-[75%] focus-within:bg-white">
          <div className="w-[96%] flex items-center">
            <button className="w-[6%]">🔍</button>
            <input
              type="text"
              className="w-[100%] font-normal text-lg ml-2 placeholder-slate-50 bg-[#777a9f] focus:bg-white focus:outline-none focus:placeholder-black"
              placeholder="Search mail"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
          <button className="w-[4%]" onClick={() => setSearch("")}>
            ✖️
          </button>
        </div>
      </div>
      <div className="w-[17%] flex justify-around items-center">
        <button>❔</button>
        <button>⚙️</button>
        <button>✉️</button>
        <img src={profile} alt="pic" className="rounded-full w-10 h-10" />
      </div>
    </div>
  );
};

export default Navbar;

