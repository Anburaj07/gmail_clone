import React, { useState } from "react";
import SingleMail from "./SingleMail";
import { useGetGmailsQuery } from "../redux/slices/gmailApi";
import GmailList from "./GmailList";

const Content = () => {
  const { data: gmails, isLoading, isSuccess } = useGetGmailsQuery();
  const [state, setState] = useState("Primary");
  console.log(state);
  return (
    <div className="w-[83.5%] py-4 rounded-2xl bg-[#e1d9dd]">
      <div className="flex justify-between p-2">
        <div>◻️ 🔄️ </div>
        {isSuccess && <div>Total: {gmails.length} </div>}
      </div>
      <div className={`w-[50%] text-left flex items-start `}>
        <div
          onClick={() => setState("Primary")}
          className={`w-[33%] p-2 hover:bg-[#d0c3c5] ${
            state == "Primary" &&
            "font-semibold text-[#5030E5] border-b-2 border-indigo-500"
          }`}
        >
          <button>🖼️ Primary</button>
        </div>
        <div
          onClick={() => setState("Promotions")}
          className={`w-[33%] p-2 hover:bg-[#d0c3c5] ${
            state == "Promotions" &&
            "font-semibold text-[#5030E5] border-b-2 border-indigo-500"
          }`}
        >
          <button>🧷 Promotions</button>
        </div>
        <div
          onClick={() => setState("Social")}
          className={`w-[33%] p-2 hover:bg-[#d0c3c5] ${
            state == "Social" &&
            "font-semibold text-[#5030E5] border-b-2 border-indigo-500"
          }`}
        >
          <button>👪 Social</button>
        </div>
      </div>
      <GmailList data={gmails} />
    </div>
  );
};

export default Content;
