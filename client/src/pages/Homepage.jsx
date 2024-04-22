import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const Homepage = () => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Homepage;
