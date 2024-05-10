import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const Homepage = () => {
  const [state,setState]=useState("inbox")
  return (
    <div className="flex justify-between w-[100%] p-4 h-screen box-border">
      <Sidebar setState={setState}/>
      <Content field={state} />
    </div>
  );
};

export default Homepage;
