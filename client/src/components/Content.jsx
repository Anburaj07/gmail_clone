import React, { useState } from "react";
import GmailList from "./GmailList";
import {
  useDeleteGmailMutation,
  useGetGmailsQuery,
} from "../redux/slices/gmailApi";
import delete_icon from "../../images/delete.png";
import SingleMail from "./SingleMail";
import { useDispatch, useSelector } from "react-redux";
import { setGmailId } from "../redux/slices/gmailSlice";

const Content = ({ field }) => {
  const { data: gmails, isLoading, isSuccess, refetch } = useGetGmailsQuery();
  const [deleteGmail] = useDeleteGmailMutation();
  const [state, setState] = useState("primary");
  const dispatch = useDispatch();
  const gmailId = useSelector((store) => store.getGmail.gmailId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center m-auto h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  let promotion = gmails.filter((el) => el.category === "promotion");
  let primary = gmails.filter(
    (el) => el.category !== "promotion" && el.category !== "social"
  );
  let social = gmails.filter((el) => el.category === "social");

  let data = primary;
  if (field === "inbox") {
    data =
      state === "primary"
        ? primary
        : state === "promotion"
        ? promotion
        : social;
  } else if (field === "starred") {
    data = gmails.filter((el) => el.starred === true);
  }

  const handleDelete = (id) => {
    deleteGmail(id);
    alert("Mail deleted successfully!");
    dispatch(setGmailId({ gmailId: "" }));
  };

  return (
    <div className="w-[83.5%] rounded-2xl bg-[#e1d9dd] sticky top-0 h-[36rem] box-border overflow-y-auto">
      <div className="flex justify-between p-4 sticky top-0 bg-[#e1d9dd]">
        {!gmailId ? (
          <div className="flex justify-between w-[5%]">
            <button>◻️</button>
            <button onClick={refetch}>🔄️</button>
          </div>
        ) : (
          <div className="flex justify-between w-[5%]">
            <button onClick={() => dispatch(setGmailId({ gmailId: "" }))}>⬅️</button>
            <img
              src={delete_icon}
              className="cursor-pointer"
              alt=""
              onClick={() => handleDelete(gmailId)}
            />
          </div>
        )}
        {isSuccess && <div>Total: {data.length} </div>}
      </div>
      {!gmailId ? (
        <div>
          {field === "inbox" && (
            <div className={`w-[50%] text-left flex items-start pl-2`}>
              {["primary", "promotion", "social"].map((category) => (
                <div
                  key={category}
                  onClick={() => setState(category)}
                  className={`w-[33%] p-2 hover:bg-[#d0c3c5] ${
                    state === category &&
                    "font-semibold text-[#5030E5] border-b-4 border-[#0b57d0]"
                  }`}
                >
                  <button>
                    {category === "primary"
                      ? "🖼️ Primary"
                      : category === "promotion"
                      ? "🧷 Promotions"
                      : "👪 Social"}
                  </button>
                </div>
              ))}
            </div>
          )}
          <GmailList data={data} />
        </div>
      ) : (
        <SingleMail />
      )}
    </div>
  );
};

export default Content;
