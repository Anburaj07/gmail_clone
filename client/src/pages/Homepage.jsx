import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const Homepage = () => {
  return (
    <div className="flex justify-between w-[100%] p-4 h-screen box-border">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Homepage;
