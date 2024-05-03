import React from "react";
import SingleMail from "./SingleMail";
import { useGetGmailsQuery } from "../redux/slices/gmailApi";
import GmailList from "./GmailList";

const Content = () => {
  const { data: gmails, isLoading, isSuccess } = useGetGmailsQuery();
  return (
    <div className="w-[83.5%] py-4 rounded-2xl bg-[#e1d9dd]">
      <div className="flex justify-between px-2">
        <div>◻️ 🔄️ </div>
        {isSuccess && <div>Total: {gmails.length} </div>}
      </div>
      <nav className="w-[50%] flex justify-between p-4">
        <button>🖼️ Primary</button>
        <button>🧷 Promotions</button>
        <button>👪 Social</button>
      </nav>
      <GmailList data={gmails} />
    </div>
  );
};

export default Content;
