import {
  FacebookFilled,
  LinkedinFilled,
  RightOutlined,
} from '@ant-design/icons';
import { Col, Input, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handlePricingClick = () => {
    navigate(`/pricing`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const homeClick = () => {
    navigate(`/`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const aboutClick = () => {
    navigate(`/about`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const howItWorkClick = () => {
    navigate(`/how-it-works`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const testimonialsClick = () => {
    navigate(`/testimonials`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactClick = () => {
    navigate(`/contact`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const termsClick = () => {
    navigate(`/terms-conditions`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const spamClick = () => {
    navigate(`/anti-spam-policy`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      <div className="bg-black lg:px-0 px-6">
        <Row className="my-12 text-white !ml-0 !mr-0">
          <Col md={3} xs={24} sm={12}></Col>
          <Col md={6} xs={24} sm={24}>
            <img
              width="150"
              height="100"
              src="https://newsletterready.co.nz/wp-content/uploads/2021/06/newsletter-ready-logo-white-1.svg"
              alt="Footer Logo"
              data-lazy-src="https://newsletterready.co.nz/wp-content/uploads/2021/06/newsletter-ready-logo-white-1.svg"
              data-ll-status="loaded"
              className="entered lazyloaded mb-4"
            />
            <p className="text-sm">Newsletter Ready Ltd</p>
            <p className="text-sm">66 Surrey Crescent Grey Lynn</p>
            <p className="text-sm">Auckland 1022</p>
            <p className="mt-6 mb-2 font-bold text-teal-400 text-sm">
              Open Hours
            </p>
            <p>Mon – Fri 9am - 5pm</p>
            <p>P: 09 972-1192</p>
            <p>E: info@newsletterready.co.nz</p>
          </Col>
          <Col className="flex flex-wrap" md={6} xs={24} sm={12}>
            <Col
              md={24}
              xs={24}
              sm={24}
              className="text-2xl font-bold lg:mb-8 mb-5 lg:mt-0 mt-5"
            >
              Menu
            </Col>
            <Col md={12} xs={12} sm={12}>
              <p
                onClick={homeClick}
                className="flex items-center cursor-pointer"
                style={{
                  marginLeft: '0px',
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block',
                }}
                onMouseEnter={(e: any) => {
                  e.target.style.marginLeft = '10px';
                }}
                onMouseLeave={(e: any) => {
                  e.target.style.marginLeft = '0px';
                }}
              >
                <RightOutlined className="mr-2" />
                Home
              </p>
            </Col>
            <Col md={12} xs={12} sm={12}>
              <p
                onClick={aboutClick}
                className="flex items-center cursor-pointer"
                style={{
                  marginLeft: '0px',
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block',
                }}
                onMouseEnter={(e: any) => {
                  e.target.style.marginLeft = '10px';
                }}
                onMouseLeave={(e: any) => {
                  e.target.style.marginLeft = '0px';
                }}
              >
                <RightOutlined className="mr-2" />
                About
              </p>
            </Col>
            <Col className="mt-3" md={12} xs={12} sm={12}>
              <p
                onClick={howItWorkClick}
                className="flex items-center cursor-pointer"
                style={{
                  marginLeft: '0px',
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block',
                }}
                onMouseEnter={(e: any) => {
                  e.target.style.marginLeft = '10px';
                }}
                onMouseLeave={(e: any) => {
                  e.target.style.marginLeft = '0px';
                }}
              >
                <RightOutlined className="mr-2" />
                How It Works
              </p>
            </Col>
            <Col className="mt-3" md={12} xs={12} sm={12}>
              <p
                onClick={handlePricingClick}
                className="flex items-center cursor-pointer"
                style={{
                  marginLeft: '0px',
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block',
                }}
                onMouseEnter={(e: any) => {
                  e.target.style.marginLeft = '10px';
                }}
                onMouseLeave={(e: any) => {
                  e.target.style.marginLeft = '0px';
                }}
              >
                <RightOutlined className="mr-2" />
                Pricing
              </p>
            </Col>
            <Col className="my-3" md={12} xs={12} sm={12}>
              <p
                onClick={testimonialsClick}
                className="flex items-center cursor-pointer"
                style={{
                  marginLeft: '0px',
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block',
                }}
                onMouseEnter={(e: any) => {
                  e.target.style.marginLeft = '10px';
                }}
                onMouseLeave={(e: any) => {
                  e.target.style.marginLeft = '0px';
                }}
              >
                <RightOutlined className="mr-2" />
                Testimonials
              </p>
            </Col>
            <Col className="my-3" md={12} xs={12} sm={12}>
              <p
                onClick={contactClick}
                className="flex items-center cursor-pointer"
                style={{
                  marginLeft: '0px',
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block',
                }}
                onMouseEnter={(e: any) => {
                  e.target.style.marginLeft = '10px';
                }}
                onMouseLeave={(e: any) => {
                  e.target.style.marginLeft = '0px';
                }}
              >
                <RightOutlined className="mr-2" />
                Contact
              </p>
            </Col>
            <Col md={12} xs={12} sm={12}>
              <p
                onClick={termsClick}
                className="flex items-center cursor-pointer"
                style={{
                  marginLeft: '0px',
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block',
                }}
                onMouseEnter={(e: any) => {
                  e.target.style.marginLeft = '10px';
                }}
                onMouseLeave={(e: any) => {
                  e.target.style.marginLeft = '0px';
                }}
              >
                <RightOutlined className="mr-2" />
                Terms & Conditions
              </p>
            </Col>
            <Col md={12} xs={12} sm={12}>
              <p
                onClick={spamClick}
                className="flex items-center cursor-pointer"
                style={{
                  marginLeft: '0px',
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block',
                }}
                onMouseEnter={(e: any) => {
                  e.target.style.marginLeft = '10px';
                }}
                onMouseLeave={(e: any) => {
                  e.target.style.marginLeft = '0px';
                }}
              >
                <RightOutlined className="mr-2" />
                Anti Spam Policy
              </p>
            </Col>
            <Col md={2} xs={2} sm={2}>
              <a
                href="https://www.facebook.com/profile.php?id=100070067708241"
                className="flex items-center hover:"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'none' }}
                target="_blank"
              >
                <FacebookFilled className="lg:mt-24 mt-6 lg:mb-0 mb-5 text-[22px]" />
              </a>
            </Col>
            <Col md={2} xs={2} sm={2}>
              <a
                href="https://www.linkedin.com/company/newsletter-ready-nz/"
                className="flex items-center"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'none' }}
                target="_blank"
              >
                <LinkedinFilled className="lg:mt-24 mt-6 lg:mb-0 mb-5 text-[22px]" />
              </a>
            </Col>
          </Col>
          <Col md={6} xs={24} sm={24}>
            <Col
              md={24}
              xs={24}
              sm={24}
              className="text-2xl font-bold lg:mb-8 mb-3"
            >
              Newsletter
            </Col>
            <Col md={24} xs={24} sm={24} className="text-sm lg:mb-8 mb-3">
              Sign up here
            </Col>
            <Col
              md={24}
              xs={24}
              sm={24}
              className="text-sm lg:w-[100%] w-[100%] lg:mb-8 mb-3 flex"
            >
              <Input
                className="pl-5 p-2"
                placeholder="Enter your email address"
              />
              <button className="bg-[#4dbfbf] hover:bg-[#4ca7c0] text-white font-bold py-2 px-4">
                <img
                  src="https://img.icons8.com/ios/50/null/paper-plane--v1.png"
                  className="inline h-6"
                  alt=""
                />
              </button>
            </Col>
          </Col>
          <Col md={3} xs={24} sm={12}></Col>
        </Row>
      </div>
      <Col
        className="py-5 bg-[#232323] text-center text-white"
        md={24}
        xs={24}
        sm={24}
      >
        2022 © All rights reserved by{' '}
        <span className="text-teal-400">Newsletter Ready Limited</span>
      </Col>
    </>
  );
}
