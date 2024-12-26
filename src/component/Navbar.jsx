import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-36" alt="logo" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ">
        <NavLink className="flex flex-col items-center gap-1 " to={"/"}>
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink
          className="flex flex-col items-center gap-1 "
          to={"/collection"}
        >
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1 " to={"/about"}>
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1 " to={"/contact"}>
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-400">
              <p className="cursor-pointer hover:text-black"> My profile</p>
              <p className="cursor-pointer hover:text-black"> orders </p>
              <p className="cursor-pointer hover:text-black"> logout </p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5"
            alt=" cart icon"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          onClick={() => setMenuVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* Side Menu for small devices , just to make it more responsive  */}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white translate-all ${
          menuVisible ? "w-full" : "w-0"
        } `}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => {
              setMenuVisible(false);
            }}
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" />

            <p> Back </p>
          </div>

          <NavLink
            onClick={() => {
              setMenuVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              setMenuVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => {
              setMenuVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => {
              setMenuVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
