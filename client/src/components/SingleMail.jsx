import React from "react";

const SingleMail = () => {
  return (
    <div className="flex justify-between p-2 hover:shadow-lg bg-[#ccc8d1] w-[99.5%] hover:cursor-pointer border border-[#939395] hover:w-[99.3%]">
      <div className="flex w-[15%]">
        <button>⭐</button>
        <p>name</p>
      </div>
      <div className="w-[70%]">
        <p>details</p>
      </div>
      <div className="w-[10%]">
        <p>date</p>
      </div>
    </div>
  );
};

export default SingleMail;
