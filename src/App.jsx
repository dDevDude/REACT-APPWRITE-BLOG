import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false); // todo revert to true
  const dispatch = useDispatch();

  // useEffect(() => {
  //   authService
  //     .getCurrentUser()
  //     .then((userData) => {
  //       if (userData) dispatch(login({ userData }));
  //       else dispatch(logout());
  //     })
  //     .catch((error) => alert(error.message))
  //     .finally(() => setLoading(false));
  // }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
