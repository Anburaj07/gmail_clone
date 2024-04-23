import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SIDEBAR className=" w-[13%] h-full m-2">
      <button className="bg-white w-[70%] p-3 text-[#464646] rounded-xl">✏️ Compose</button>
      <div className="flex flex-col items-start ml-2 mt-4">
        <button>📩 Inbox</button>
        <button>⭐ Starred</button>
        <button>⌚ Snoozed</button>
        <button>🧷 Important</button>
        <button>➡️ Sent</button>
        <button>📁 Drafts</button>
        <button>🚫 Spam</button>
      </div>
    </SIDEBAR>
  );
};

export default Sidebar;

const SIDEBAR = styled.div`
  div {
    button {
      color: white;
      font-size: medium;
      margin-bottom: 12px;
      width: 60%;
      text-align: left;
      padding: 5px;
    }
    :hover{
      background-color: gray;
      border-radius: 10px;
    }
  }
`;
