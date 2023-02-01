import { Col} from 'antd';
import React from 'react';
import Navmenu from './Navmenu';

type NavbarType = {

};
const Navbar: React.FC<NavbarType> = () => {
  return (
    <div className=" flex justify-between mx-[3%] sm:mx-[3%] md:mx-[4%]  lg:mx-[12%] xl:mx-[19%]  ">
      <Col className="pt-2">
        Logo
      </Col>
      <Col>
        <Navmenu
        />
      </Col>
    </div>
  );
};


export default Navbar;
