import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png"
import { FaHome } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
export default function Navbar() {
  const { user, logOut, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    navigate("/");
  };

  return (
    <header className="bg-cyan-100 shadow-sm fixed top-0 left-0 w-full z-50 ">

      <div className="container mx-auto max-w-10/12 flex md:flex-row flex-col  items-center justify-between p-4">




        <Link to="/" className="font-bold text-xl">
          <img className="md:h-17 h-10" src={logo} alt="" />
        </Link>
        <div className="items-center text-secondary font-bold flex md:flex-row flex-col gap-4">

          <div className="flex items-center">
            <div>  <FaHome className="text-gray-500"></FaHome></div>
            <div><NavLink to="/" className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold underline text-sm" : "text-sm"
            }
            >Home</NavLink></div>
          </div>
          <div className="flex items-center ">

            <div>  <ImProfile className="text-gray-500" /> </div>
            <div><NavLink to="/profile" className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold underline text-sm" : "text-sm"
            }>My Profile</NavLink></div>

          </div>

        </div>
        <nav className="md:flex flex-col items-center md:mt-0 mt-4">

          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={user.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"}
                alt="avatar"
                title={user.displayName || user.email}
                className="w-8 h-8 rounded-full"
              />
              <button onClick={handleLogout} className="btn bg-secondary ">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2 ">
              <Link to="/login" className="btn text-base-200 bg-secondary">
                Login
              </Link>
              <Link to="/signup" className="btn text-base-200 bg-secondary">
                Signup
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
