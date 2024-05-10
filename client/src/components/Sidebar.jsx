import React, { useState } from "react";
import styled from "styled-components";
import { useAddGmailMutation } from "../redux/slices/gmailApi";

const Sidebar = ({ setState }) => {
  const [showComposePopup, setShowComposePopup] = useState(false);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const [addGmail] = useAddGmailMutation();

  const handleComposeClick = () => {
    setShowComposePopup((prev) => !prev);
    setContent("");
    setTo("");
    setSubject("");
  };

  function getCurrentDate() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
    });
    return formattedDate;
  }

  const handlePostMail = () => {
    let obj = {
      from: "Anburaj",
      to,
      subject,
      content,
      date: getCurrentDate(),
    };
    addGmail(obj);
    handleComposeClick();
    alert("Mail sent successfully!");
    setContent("");
    setTo("");
    setSubject("");
  };
  return (
    <SIDEBAR className=" w-[13%] h-full m-2">
      <button
        className="bg-white w-[70%] p-3 text-[#464646] rounded-xl"
        onClick={handleComposeClick}
      >
        ✏️ Compose
      </button>
      <div id="fileds" className="flex flex-col items-start ml-2 mt-4">
        <button onClick={() => setState("inbox")}>📩 Inbox</button>
        <button onClick={() => setState("starred")}>⭐ Starred</button>
        <button>⌚ Snoozed</button>
        <button>🧷 Important</button>
        <button onClick={() => setState("sent")}>➡️ Sent</button>
        <button>📁 Drafts</button>
        <button onClick={() => setState("spam")}>🚫 Spam</button>
      </div>
      {showComposePopup && (
        <ComposePopup>
          <div className="flex justify-between bg-[##f2f2f2] text-[##041e49] p-2 px-6 font-semibold">
            <p>New Message</p>
            <button onClick={handleComposeClick}>X</button>
          </div>
          <div className="flex flex-col px-4">
            <input
              type="text"
              placeholder="Recipients"
              className="border-b-2 border-[#eceff1] p-2 focus:outline-none"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-2 border-b-2 border-[#eceff1] focus:outline-none"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="focus:outline-none p-2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="p-2">
            <button
              className="bg-[#0b57d0] text-white px-6 py-2 rounded-full hover:font-semibold"
              onClick={handlePostMail}
            >
              Send
            </button>
          </div>
        </ComposePopup>
      )}
    </SIDEBAR>
  );
};

export default Sidebar;

const SIDEBAR = styled.div`
  #fileds {
    button {
      color: white;
      font-size: medium;
      margin-bottom: 12px;
      width: 60%;
      text-align: left;
      padding: 5px;
    }
    :hover {
      background-color: gray;
      border-radius: 10px;
    }
  }
`;

const ComposePopup = styled.div`
  width: 40%;
  position: absolute;
  top: 65%;
  left: 75%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  z-index: 999;
`;
