import { Col, Layout, Row } from 'antd';
import AboutUs from 'newsLetter/AboutUs/AboutUs';
import AntiSpamPage from 'newsLetter/AntiSpam/AntiSpamPage';
import Contact from 'newsLetter/ContactUs/Contact';
import Footer from 'newsLetter/Footer/Footer';
import Home from 'newsLetter/Home';
import Navbar from 'newsLetter/Home/Navbar/Navbar';
import HowItWorks from 'newsLetter/HowItWorks/HowItWorks';
import Pricing from 'newsLetter/Pricing/Pricing';
import TermsPage from 'newsLetter/Terms/TermsPage';
import Testimonial from 'newsLetter/Testimonial/Testimonial';
import { useEffect } from 'react';
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import './index.scss';

function App() {
  const navigate = useNavigate();
  const { Header } = Layout;
  const { pathname } = useLocation();

  const handleContactClick = () => {
    navigate(`/contact`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {}, []);
  return (
    <div className="App  relative">
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        {pathname === '/' ? (
          <Header
            className="h-[850px] lg:h-[950px] relative heroSec bg-center bg-no-repeat bg-cover text-center"
            style={{
              padding: '0px',
              backgroundColor: '#FAFAFA',
            }}
          >
            <div className="absolute bottom-0 bg-[#00000090]  w-full h-[705px]   lg:h-[805px] text-white">
              <Row>
                <Col className='lg:pt-8 pt-4 ' md={24} xs={24} sm={24}>
                  <h1 style={{fontFamily: "poppins,Sans-serif"}} className=" text-[white] text-[32px] leading-[45px]  lg:leading-none w-[80%] lg:w-[60%] mx-auto flex items-center  lg:text-[50px] font-bold">
                    Effective newsletter marketing - done for you!
                  </h1>
                  {/* <h1 style={{fontFamily: "poppins,Sans-serif"}} className=" text-[white] text-[35px] leading-[45px] lg:leading-none  lg:text-[50px] font-bold">
                    – 
                  </h1> */}
                </Col>
                <Col
                  className="text-[17px] leading-7 mt-3  "
                  md={24}
                  xs={24}
                  sm={24}
                >
                  <p className='w-[80%] lg:w-[40%] mx-auto'>We create and email a personalized monthly newsletter to all your clients, manage your client database and provide full reporting.</p>
                </Col>
              </Row>
            </div>
            <Row className="absolute bottom-0 flex  justify-center item-center  left-0 w-full  h-[110px] text-black">
              <Col
                md={16}
                xs={24}
                sm={12}
                className="border-b-[2px] items-center  border-stone-100 bg-[white] lg:w-[60%] w-[90%] flex flex-wrap justify-between"
              >
                <div className="text-[16px] p-2  leading-[30px] lg:leading-none text-[#353535] w-full lg:w-4/5">
                  Do you stay in touch with your clients? We'll do it for you...
                </div>
                <span className="w-full lg:basis-1/5 ">
                  <button
                    onClick={handleContactClick}
                    className="contact-us-button h-[50px] align-middle"
                  >
                    Contact Us
                  </button>
                </span>
              </Col>
            </Row>
            <Row className="absolute bottom-[110px] flex  justify-center item-center left-0 w-full   text-black">
              <Col
                md={16}
                xs={24}
                sm={12}
                className="border-b-[2px] items-center  border-stone-100 bg-[white] lg:w-full w-full  flex flex-wrap justify-between"
              >
                <img className='w-full !h-[300px] lg:!h-[450px]'   src="https://newsletterready.co.nz/wp-content/uploads/2021/06/newsletter-ready.jpg" alt="" />
              </Col>
            </Row>

            <div className="bg-[#FAFAFA] h-[145px] py-[30px] text-[16px]">
              <Navbar />
            </div>
          </Header>
        ) : (
          <Header
            style={{
              padding: '0px',
              backgroundColor: '#FAFAFA',
              height: '140px',
            }}
          >
            <div className="bg-[#FAFAFA] h-6 py-[30px] text-[16px]">
              <Navbar />
            </div>
          </Header>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<AboutUs />} />
          <Route path="/how-it-works/" element={<HowItWorks />} />
          <Route path="/pricing/" element={<Pricing />} />
          <Route path="/testimonials/" element={<Testimonial />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/terms-conditions/" element={<TermsPage />} />
          <Route path="/anti-spam-policy/" element={<AntiSpamPage />} />
        </Routes>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
