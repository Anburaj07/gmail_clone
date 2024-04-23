import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-[#13547a] to-[#0b9181] bg-cover bg-no-repeat">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
