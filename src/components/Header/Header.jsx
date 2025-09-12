import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import AuthButton from "./AuthButton";

const Header = () => {
  return (
    <header className="flex justify-between py-5">
      <Logo />
      <Navbar />
      <AuthButton />
    </header>
  );
};

export default Header;
