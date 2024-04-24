import React from "react";
import SingleMail from "./SingleMail";

const Content = () => {
  return (
    <div className="w-[83.5%] pt-4 rounded-2xl bg-[#e1d9dd]">
      <div className="flex justify-between px-2">
        <div>◻️ 🔄️ </div>
        <div> count </div>
      </div>
      <nav className="w-[50%] flex justify-between p-4">
        <button>🖼️ Primary</button>
        <button>🧷 Promotions</button>
        <button>👪 Social</button>
      </nav>
      <SingleMail/>
      <SingleMail/>
      <SingleMail/>
      <SingleMail/>
      <SingleMail/>
    </div>
  );
};

export default Content;
