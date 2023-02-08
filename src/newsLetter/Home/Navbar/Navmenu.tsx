import React from 'react';
import { NavLink } from 'react-router-dom';

type NavMenuType = {};
const NavMenu: React.FC<NavMenuType> = ({}) => {
  return (
    <>
      {/* <div className="flex justify-between w-full"> */}
      <NavLink className="hidden lg:block" to="/">
        Home
      </NavLink>
      <NavLink className="hidden lg:block" to="/about">
        About
      </NavLink>
      <NavLink className="hidden lg:block" to="/how-it-works">
        How It Works
      </NavLink>
      <NavLink className="hidden lg:block" to="/pricing">
        Pricing
      </NavLink>
      <NavLink className="hidden lg:block" to="/testimonials">
        Testimonials
      </NavLink>
      <NavLink className="" to="/contact">
        <button className="lg:h-[45px] h-[40px] flex justify-center items-center  rounded-[40px] border-2 border-[#33c1f6] transition ease-in-out duration-500 bg-[#4dbfbf] text-[16px] lg:w-[175px] w-[120px] hover:border-black hover:bg-[#4ca7c0]">
          Contact Us
        </button>
      </NavLink>
    </>
  );
};

export default NavMenu;
