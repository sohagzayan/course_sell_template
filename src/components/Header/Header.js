import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logoUdamy.png";
import { useDataContext } from "../../context/GetDataContext";

const Header = () => {

  const value = useDataContext()
  const {card , setCard}  = value

  return (
    <div className="container mx-auto flex justify-between items-center mt-3 sticky top-0">
      <div className="w-32">
        <img src={logo} alt="logo" />
      </div>
      <ul className="menuList flex items-center  gap-5 text-dark_blue font-semibold tracking-wider">
        <li className="">
          <NavLink
            className={({ isActive }) => (isActive ? "text-light_tomato" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="relative ">
          <NavLink
            className={({ isActive }) => (isActive ? "text-light_tomato" : "")}
            to="/card"
          >
            Card
          </NavLink>
         {
           card.length ?  <small className="absolute -top-3 -right-3 bg-light_tomato w-6 h-6 flex items-center justify-center rounded-full text-white">
           {card.length }
            </small>
         : null
         }
        </li>
        <li className=" ">
          <NavLink
            className={({ isActive }) => (isActive ? "text-light_tomato" : "")}
            to="/feedback"
          >
            Feedback
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
