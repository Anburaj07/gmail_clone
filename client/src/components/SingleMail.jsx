import React from "react";

const SingleMail = ({ from, subject, content, date }) => {
  return (
    <div className="flex justify-between p-2 hover:shadow-lg bg-[#ccc8d1] w-[99.5%] hover:cursor-pointer border border-[#939395] hover:w-[99.3%]">
      <div className="flex w-[15%]">
        <button>⭐</button>
        <p>{from}</p>
      </div>
      <div className="w-[70%] flex">
        <p>{subject}</p>
        <p className="text-[#4f4f4f]">- {content}</p>
      </div>
      <div className="w-[7%]">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default SingleMail;
