import React, { useState } from "react";
import delete_icon from "../../images/delete.png";
import {
  useDeleteGmailMutation,
  useEditGmailMutation,
} from "../redux/slices/gmailApi";

const SingleMail = ({
  _id,
  from,
  to,
  subject,
  category,
  content,
  date,
  starred,
}) => {
  const [showDelete, setShowDelete] = useState(false);
  const [deleteGmail] = useDeleteGmailMutation();
  const [editGmail] = useEditGmailMutation();
  const handleDelete = (id) => {
    deleteGmail(id);
  };
  const handleStarred = () => {
    editGmail({
      id: _id,
      from,
      to,
      category,
      subject,
      content,
      date,
      starred: !starred,
    });
  };
  return (
    <div
      className="flex justify-between p-2 hover:shadow-lg bg-[#ccc8d1] w-[99.5%] hover:cursor-pointer border border-[#939395] hover:w-[99.3%]"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <div className="flex w-[17%] pl-2">
        <button onClick={handleStarred}>{starred ? "⭐" : "☆"}</button>
        <p className="pl-2">{from}</p>
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
