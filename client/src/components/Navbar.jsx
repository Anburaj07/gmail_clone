import React, { useState } from "react";
import profile from "../../images/photo.jpg";
import styled from "styled-components";
const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleSearch=()=>{
    console.log(search)
  }
  return (
    <DIV className="flex items-center justify-around w-[100%] bg-[#d6dadc] p-4">
      <div className=" w-[20%] flex items-center">
        <h2 className="text-xl font-normal ">Gmail</h2>
      </div>
      <div className="rounded-full flex justify-around items-center bg-white w-[40%]">
        <button>🔍</button>
        <input
          type="text"
          className="w-[50%] font-normal text-lg"
          placeholder="Search mail"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key=="Enter"){
                handleSearch()
            }
          }}
        />
        <button onClick={()=>setSearch('')}>✖️</button>
      </div>
      {/* border border-gray-600 */}
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
    /* border: 2px solid red; */
    height: 50px;
  }
`;
