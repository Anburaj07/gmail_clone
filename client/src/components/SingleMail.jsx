import React, { useState } from "react";
import delete_icon from "../../images/delete.png";
import { useDeleteGmailMutation } from "../redux/slices/gmailApi";

const SingleMail = ({ _id, from, subject, content, date }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [deleteGmail] = useDeleteGmailMutation();
  const handleDelete = (id) => {
    console.log(id);
    deleteGmail(id);
  };
  return (
    <div
      className="flex justify-between p-2 hover:shadow-lg bg-[#ccc8d1] w-[99.5%] hover:cursor-pointer border border-[#939395] hover:w-[99.3%]"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <div className="flex w-[17%]">
        <button>⭐</button>
        <p>{from}</p>
      </div>
      <div className="w-[75%] flex">
        <p>{subject}</p>
        <p className="text-[#4f4f4f]">- {content}</p>
      </div>

      <div className="w-[7%]">
        {!showDelete ? (
          <p>{date}</p>
        ) : (
          <img
            src={delete_icon}
            className="cursor-pointer"
            alt=""
            onClick={() => handleDelete(_id)}
          />
        )}
      </div>
    </div>
  );
};

export default SingleMail;
