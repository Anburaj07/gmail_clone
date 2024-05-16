import React, { useState } from "react";
import delete_icon from "../../images/delete.png";
import {
  useDeleteGmailMutation,
  useEditGmailMutation,
} from "../redux/slices/gmailApi";
import { useDispatch } from "react-redux";
import { setGmailId } from "../redux/slices/gmailSlice";

const Gmail = ({
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
  const dispatch = useDispatch();

  const handleDelete = () => {
    deleteGmail(_id);
    alert("Mail deleted successfully!");
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

  const handleClick = () => {
    dispatch(setGmailId({ gmailId: _id }));
  };

  return (
    <div
      className="flex justify-between p-2 hover:shadow-lg bg-[#ccc8d1] w-[99.5%] hover:cursor-pointer border border-[#939395] hover:w-[99.3%]"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <div className="flex w-[17%] pl-2" onClick={handleClick}>
        <button onClick={handleStarred}>{starred ? "⭐" : "☆"}</button>
        <p className="pl-2">{from}</p>
      </div>
      
      <div className="w-[75%] flex" onClick={handleClick}>
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
            onClick={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default Gmail;
