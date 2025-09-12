import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      url: "/",
      active: true,
    },
    {
      name: "Blogs",
      url: "/blogs",
      active: false,
    },
    {
      name: "My Blogs",
      url: "/myblogs",
      active: false,
    },
  ];

  return (
    <nav className="flex space-x-8 items-center text-lg font-serif">
      {navItems.map((navItem) => (
        <button key={navItem.url} onClick={() => navigate(navItem.url)}>
          {navItem.name}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
