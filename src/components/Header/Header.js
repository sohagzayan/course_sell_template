import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logoUdamy.png";
import { useDataContext } from "../../context/GetDataContext";
const Header = () => {
  const navigate = useNavigate()
  const value = useDataContext();
  const { card, setCard } = value;
  const [headerScroll, setHeaderScroll] = useState(false);
  const location = useLocation()
  console.log(location.pathname.includes('feedback'));


  useEffect(()=>{
      Aos.init({duration : 3000})
    },[])
    
    const goHomeNavigate =()=>{
    navigate('/')

  }




  const headerScrollColorChnage = () => {
    const scrolly = window.scrollY;
    console.log(scrolly);
    if (scrolly > 120) {
      setHeaderScroll(true);
    } else {
      setHeaderScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerScrollColorChnage);
  }, []);

  return (
    <div style={{visibility : location.pathname.includes('feedback') ? 'hidden' : '' }}  className={ headerScroll
          ? " z-50  w-full  mx-auto  mt-3 sticky top-0  bg-secondary_white shadow-lg transition-all ease-linear duration-200 py-2 px-4"
          : " z-50 transition-all ease-linear duration-150  w-full mx-auto container mt-3  transform  px-4"
      }
    >
      <div className=" flex justify-between items-center container mx-auto">
        <div className="w-32">
          <img className='cursor-pointer' onClick={goHomeNavigate} src={logo} alt="logo" />
        </div>
        <ul className="menuList flex items-center  gap-5 text-dark_blue font-semibold tracking-wider">
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-light_tomato" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="relative ">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-light_tomato" : ""
              }
              to="/card"
            >
              Card
            </NavLink>
            {card.length ? (
              <small className="absolute -top-3 -right-3 bg-light_tomato w-6 h-6 flex items-center justify-center rounded-full text-white">
                {card.length}
              </small>
            ) : null}
          </li>
          <li className=" ">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-light_tomato" : ""
              }
              to="/feedback"
            >
              Feedback
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
