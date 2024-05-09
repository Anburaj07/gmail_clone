import React, { useState } from "react";
import SingleMail from "./SingleMail";
import { useGetGmailsQuery } from "../redux/slices/gmailApi";
import GmailList from "./GmailList";

const Content = () => {
  const { data: gmails, isLoading, isSuccess } = useGetGmailsQuery();
  const [state, setState] = useState("primary");
  let promotion = [];
  let primary = [];
  let social = [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center m-auto h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (isSuccess) {
    promotion = gmails.filter((el) => el.category == "promotion");
    social = gmails.filter((el) => el.category == "social");
    primary = gmails.filter(
      (el) => el.category != "promotion" && el.category != "social"
    );
  }
  console.log(promotion, "promotion");
  console.log("primary:", primary);

  let data =
    state === "primary" ? primary : state === "promotion" ? promotion : social;

  return (
    <div className="w-[83.5%] py-4 rounded-2xl bg-[#e1d9dd]">
      <div className="flex justify-between p-2">
        <div>◻️ 🔄️ </div>
        {isSuccess && <div>Total: {data.length} </div>}
      </div>
      <div className={`w-[50%] text-left flex items-start `}>
        <div
          onClick={() => setState("primary")}
          className={`w-[33%] p-2 hover:bg-[#d0c3c5] ${
            state == "Primary" &&
            "font-semibold text-[#5030E5] border-b-4 border-indigo-900"
          }`}
        >
          <button>🖼️ Primary</button>
        </div>
        <div
          onClick={() => setState("promotion")}
          className={`w-[33%] p-2 hover:bg-[#d0c3c5] ${
            state == "Promotions" &&
            "font-semibold text-[#5030E5] border-b-4 border-indigo-900"
          }`}
        >
          <button>🧷 Promotions</button>
        </div>
        <div
          onClick={() => setState("social")}
          className={`w-[33%] p-2 hover:bg-[#d0c3c5] ${
            state == "Social" &&
            "font-semibold text-[#4123c5] border-b-4 border-indigo-900"
          }`}
        >
          <button>👪 Social</button>
        </div>
      </div>
      <GmailList data={data} />
    </div>
  );
};

export default Content;
