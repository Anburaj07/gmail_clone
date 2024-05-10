import React, { useState } from "react";
import GmailList from "./GmailList";
import { useGetGmailsQuery } from "../redux/slices/gmailApi";

const Content = ({ field }) => {
  const { data: gmails, isLoading, isSuccess, refetch } = useGetGmailsQuery();
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
    promotion = gmails.filter((el) => el.category === "promotion");
    social = gmails.filter((el) => el.category === "social");
    primary = gmails.filter(
      (el) => el.category !== "promotion" && el.category !== "social"
    );
  }

  let data = "";
  if (field == "inbox") {
    data =
      state === "primary"
        ? primary
        : state === "promotion"
        ? promotion
        : social;
  } else if (field == "starred") {
    data = gmails.filter((el) => el.starred==true);
  }
  // else if (field == "sent") {
  //   data = gmails.filter((el) => el.starred==true); //doubt
  // }
  else{
    data=primary
  }

  return (
    <div className="w-[83.5%] pb-4 rounded-2xl bg-[#e1d9dd] sticky top-0 h-[36rem] box-border overflow-y-auto ">
      <div className="flex justify-between p-4 sticky top-0 bg-[#e1d9dd]">
        <div>
          <button>◻️</button>
          <button onClick={() => refetch()}>🔄️</button>
        </div>
        {isSuccess && <div>Total: {data.length} </div>}
      </div>
      {field == "inbox" && (
        <div className={`w-[50%] text-left flex items-start pl-2`}>
          <div
            onClick={() => setState("primary")}
            className={`w-[33%] p-2 hover:bg-[#d0c3c5] ${
              state === "primary" &&
              "font-semibold text-[#5030E5] border-b-4 border-[#0b57d0]"
            }`}
          >
            <button>🖼️ Primary</button>
          </div>
          <div
            onClick={() => setState("promotion")}
            className={`w-[33%] p-2 hover:bg-[#d0c3c5] ${
              state === "promotion" &&
              "font-semibold text-[#5030E5] border-b-4 border-[#0b57d0]"
            }`}
          >
            <button>🧷 Promotions</button>
          </div>
          <div
            onClick={() => setState("social")}
            className={`w-[33%] p-2 hover:bg-[#d0c3c5] ${
              state === "social" &&
              "font-semibold text-[#4123c5] border-b-4 border-[#0b57d0]"
            }`}
          >
            <button>👪 Social</button>
          </div>
        </div>
      )}
      <GmailList data={data} />
    </div>
  );
};

export default Content;
