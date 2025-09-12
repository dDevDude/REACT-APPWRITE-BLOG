import React from "react";
import { LogoIcon } from "../Svgs/index";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="cursor-pointer flex space-x-4 items-center"
    >
      <LogoIcon />
      <h1 className="text-3xl font-bold tracking-tight font-[Open_Sans]">
        TravelDiaries
      </h1>
    </button>
  );
};

export default Logo;
