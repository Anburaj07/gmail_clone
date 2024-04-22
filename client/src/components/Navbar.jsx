import React from "react";
import profile from "../../images/photo.jpg"
const Navbar = () => {
  return (
    <div className="flex items-center justify-around w-[100%] bg-[#96d2eb] p-4">
      <div className=" w-[20%]">
        <h2 className="text-xl font-normal ">Gmail</h2>
      </div>
      <div className="rounded-lg flex bg-white w-[40%]">
        <button>🔍</button>
        <input type="text" className="w-[50%]"/>
        <button>✖️</button>
      </div>
      {/* border border-gray-600 */}
      <div className="w-[17%] flex justify-around ">
        <button>❔</button>
        <button>⚙️</button>
        <button>✉️</button>
        <img src={profile} alt="pic" className="rounded-full w-10 h-10"/>
      </div>
    </div>
  );
};

export default Navbar;
