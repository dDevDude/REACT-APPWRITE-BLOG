import React from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const AuthButton = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const handleLogout = () => {
    authService
      .logout()
      .then((res) => {
        if (res) dispatch(logout());
        else alert("Failed To Logout");
      })
      .catch((e) => alert(e.message));
  };

  const handleLogin = () => {
    navigate("/login");
  };

  if (isLoggedIn) {
    return (
      <button
        onClick={handleLogout}
        className="flex cursor-pointer items-center justify-center overflow-hidden rounded-md px-4 py-2 bg-[var(--sky-blue)] text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors"
      >
        <span className="truncate font-serif text-lg font-thin">Logout</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="flex cursor-pointer items-center justify-center overflow-hidden rounded-md px-4 py-2 bg-[var(--sky-blue)] text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 transition-colors"
    >
      <span className="truncate font-serif text-lg font-thin">
        Login / Signup
      </span>
    </button>
  );
};

export default AuthButton;
