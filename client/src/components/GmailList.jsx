import React from "react";
import SingleMail from "./SingleMail";

const GmailList = ({ data }) => {
  return (
    <div>
      {data?.map((el) => (
        <SingleMail key={el._id} {...el} />
      ))}
    </div>
  );
};

export default GmailList;
