import { Col } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import NavMenu from './Navmenu';

type NavbarType = {};
const Navbar: React.FC<NavbarType> = () => {
  return (
    <div className=" flex items-center justify-between mx-[3%]   xl:mx-[12%]  ">
      <Col className="min-w-[100px]">
      <NavLink  to="/"><img
          width="90"
          height="70"
          src="https://newsletterready.co.nz/wp-content/uploads/2021/06/newsletter-ready-logo-black.svg"
          className="svg-main-logo entered lazyloaded"
          alt=""
          data-lazy-src="https://newsletterready.co.nz/wp-content/uploads/2021/06/newsletter-ready-logo-black.svg"
          data-ll-status="loaded"
        /></NavLink>
        
      </Col>
      <Col className="flex lg:justify-between justify-end w-full items-center  ml-[50px] lg:ml-[200px] mr-[20px]">
        <NavMenu />
      </Col>
    </div>
  );
};

export default Navbar;
