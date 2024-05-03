import React, { useState } from "react";
import profile from "../../images/photo.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log(search);
  };
  return (
    <DIV className="flex items-center justify-between w-[100%] p-4 text-left">
      <div className="w-[65%] flex justify-around ">
        <div className=" w-[25%] flex items-center justify-center ">
          <h2
            className="text-xl font-normal text-white hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            Gmail
          </h2>
        </div>
        <div className="rounded-full flex justify-between px-4 items-center bg-white w-[75%]">
          <div className=" flex items-center">
            <button>🔍</button>
            <input
              type="text"
              className="w-[50%] font-normal text-lg ml-2"
              placeholder="Search mail"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
          <button onClick={() => setSearch("")}>✖️</button>
        </div>
      </div>
      <div className="w-[17%] flex justify-around items-center">
        <button>❔</button>
        <button>⚙️</button>
        <button>✉️</button>
        <img src={profile} alt="pic" className="rounded-full w-10 h-10" />
      </div>
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
  div {
    height: 50px;
  }
`;
