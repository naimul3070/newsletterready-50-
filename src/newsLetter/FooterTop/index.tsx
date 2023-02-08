import { useNavigate } from 'react-router-dom';

const FooterTop = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/pricing`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="lg:h-[500px] h-[370px] footerTop bg-center bg-no-repeat bg-cover text-center ">
        <div className="lg:text-[40px] text-[32px]  text-center lg:font-[800] font-[700] lg:mt-[90px] mt-[35px]">
          <h1> Cost-effective customer</h1>
          <h1> communications</h1>
        </div>
        <div className="text-[16px] font-normal text-[#7A7A7A] text-center mt-8 mb-2">
          <p> Who has time to run a business as well as create</p>
          <p> a monthly newsletter and manage your client</p>
          <p> database? We can do this for you.</p>
        </div>
        <div className="text-center">
          <button onClick={handleClick} className="learn-more-button">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
