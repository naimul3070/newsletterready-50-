import { Card, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import bestValue from '../../common/assets/bestValue.png';
import './pricing.scss';

export default function Pricing() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/contact`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="bg-white lg:px-0 px-6">
        <h1 className="lg:text-5xl text-[32px] text-center font-[800] lg:mt-[80px] mt-8">
          Pricing
        </h1>
        <p className="text-[16px] font-normal text-[#7A7A7A] text-center mt-5 mb-7">
          There’s only one price, it couldn’t be easier
        </p>
        <Row
          className="bg-white lg:mt-20 lg:mb-[100px] mb-[50px] !ml-0 !mr-0"
          gutter={[0, 5]}
        >
          <Col md={6} xs={24} sm={12}></Col>
          <Col md={6} xs={24} sm={24}>
            <Card
              className="shadow-[1px_3px_10px_rgba(0,0,0,0.1)] text-center mt-8 rounded price-card-animation cursor-pointer"
              bordered={true}
              onClick={handleClick}
            >
              <div className="mt-8 mb-12 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 326.95 326.95"
                  width="100%"
                  height="120"
                >
                  <path
                    d="m91.48 136.57a2.79 2.79 0 0 0 -.5.84 76.17 76.17 0 0 0 96.82 97.27c24.71 28.11 49.83 56.47 71.44 80.41 14.59 16.21 40.39 15.42 55.79 0s16.36-41.41 0-55.83l-80.53-71a76.19 76.19 0 0 0 -97.09-97.26 2.36 2.36 0 0 0 -.79.45 2.76 2.76 0 0 0 -.13 3.74l44.23 44.24a7.61 7.61 0 0 1 0 10.82l-30.48 30.49a7.58 7.58 0 0 1 -10.79 0l-44.26-44.28a2.7 2.7 0 0 0 -3.71.11zm170.52 141.88 16.42-16.45a3.65 3.65 0 0 1 3.47-.93l22.46 6a3.72 3.72 0 0 1 2.54 2.56l6 22.47a3.67 3.67 0 0 1 -.93 3.44l-16.41 16.46a3.51 3.51 0 0 1 -2.55 1 3.3 3.3 0 0 1 -.93-.12l-22.45-6a3.36 3.36 0 0 1 -1.42-.72l-.14-.12-.13-.15a3.61 3.61 0 0 1 -.86-1.54l-6-22.48a3.64 3.64 0 0 1 .91-3.44z"
                    fill="#37484a"
                  ></path>
                  <path
                    d="m275.93 44.8c-14.75-14.6-19.23-17.18-27.44-9-4.07 4.07-8.12 8.17-12.2 12.24-2.42 2.4-6.2 2.22-9 .68a152.48 152.48 0 0 0 -27.88-11.54c-3.08-.91-5.9-3.47-5.9-6.86v-17.27c0-12.38-5.66-13-30-13-1.54 0-3 0-4.39 0-20.73.11-25.71 1.45-25.71 13.06v17.25c0 3.42-2.78 5.93-5.86 6.83a146.89 146.89 0 0 0 -14.39 5.16 141.74 141.74 0 0 0 -13.53 6.41c-2.8 1.54-6.56 1.7-9-.7l-12.23-12.22c-8.75-8.76-13.26-5.23-30.52 12s-20.77 21.77-12 30.53l12.2 12.22c2.4 2.4 2.24 6.16.7 9a138.35 138.35 0 0 0 -6.4 13.54 145.12 145.12 0 0 0 -5.14 14.34c-.9 3.08-3.44 5.91-6.85 5.91h-17.29c-12.4 0-13.1 5.62-13.1 30.08s.7 30.08 13.1 30.08h17.27c3.41 0 6 2.83 6.85 5.88a139.54 139.54 0 0 0 5.07 14.1 139.53 139.53 0 0 0 6.47 13.78c1.54 2.81 1.74 6.61-.68 9q-6.08 6.13-12.19 12.23c-8.78 8.76-5.28 13.27 12 30.53s21.77 20.78 30.52 12l12.22-12.22c2.42-2.4 6.18-2.24 9-.7a144 144 0 0 0 13.81 6.52 134 134 0 0 0 14.07 5c3.08.91 5.88 3.44 5.88 6.86v17.27c0 12.4 5.66 13.1 30.07 13.1s30.08-.7 30.08-13.08v-17.27c0-3.39 2.78-6 5.86-6.88a140.61 140.61 0 0 0 14.16-5.05c1.54-.63 3.08-1.29 4.6-2q-9.94-11.38-19.89-22.77a102.38 102.38 0 1 1 61.5-61.31c7.49 6.67 15.09 13.3 22.67 20 .77-1.68 1.49-3.37 2.19-5.07a137.85 137.85 0 0 0 5.05-14.1c.9-3.08 3.44-5.86 6.83-5.86h17.31c12.38 0 13.06-5.63 13.06-30s-.7-30.08-13.1-30.08h-17.28c-3.39 0-5.93-2.81-6.83-5.88a144.88 144.88 0 0 0 -5.16-14.37 140.34 140.34 0 0 0 -6.38-13.52c-1.54-2.8-1.72-6.58.68-9l12.19-12.26c8.75-8.76 5.27-13.24-12-30.51-1.08-1.09-2.1-2.11-3.1-3.08z"
                    fill="#4dbfbf"
                  ></path>
                </svg>
              </div>
              <h1>
                <span className="text-[16px] font-bold">SET UP</span>
                <span className="ml-2 text-[14px]"> (ONE-OFF) </span>
              </h1>
              <h1>
                <span className="text-[50px] font-bold">$245</span>
                <span className="ml-2 text-[16px]"> + GST </span>
              </h1>
              <div className="text-[16px] font-normal text-[#7A7A7A] mt-4">
                <p> Branded email template</p>
                <p className="my-4"> Import client database</p>
                <p> Provide “newsletter sign-up” code</p>
                <p className="my-4"> Email marketing account</p>
                <p> Automated reporting set-up</p>
              </div>
              <button className="pricing-button ">Contact Us</button>
            </Card>
          </Col>
          <Col className="popular-price" md={6} xs={24} sm={24}>
            <Card
              className="rounded shadow-[8px_10px_18px_17px_#e5e5e5] text-center price-card-animation cursor-pointer"
              bordered={true}
              onClick={handleClick}
            >
              <div className="mt-12 mb-12 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384.39 333.24"
                  width="100%"
                  height="110"
                >
                  <g fill="#37494b">
                    <path d="m308.59 181.33v-27.6c0-2.63-2.66-4.78-5.91-4.78h-34.09c-3.25 0-5.91 2.15-5.91 4.78v27.6c0 2.63 2.66 4.78 5.91 4.78h34.09c3.25 0 5.91-2.11 5.91-4.78z"></path>
                    <path d="m238.74 204.18c0-2.63-2.66-4.78-5.91-4.78h-34.1c-3.25 0-5.91 2.15-5.91 4.78v27.6c0 2.63 2.66 4.78 5.91 4.78h34.1c3.25 0 5.91-2.15 5.91-4.78z"></path>
                    <path d="m262.68 204.18v18.71a78.78 78.78 0 0 1 38.52-23.49h-32.61c-3.25 0-5.91 2.15-5.91 4.78z"></path>
                    <rect
                      height="83.76"
                      rx="20.94"
                      width="41.88"
                      x="56.16"
                    ></rect>
                    <path d="m249.12 300.79h-210.82c-5.1 0-9.27-4.54-9.27-10.1v-150.17c0-5.56 4.17-10.11 9.27-10.11h285.11c5.1 0 9.27 4.55 9.27 10.11v57a79.46 79.46 0 0 1 29 10v-151c0-9.62-8.28-17.49-18.4-17.49h-22.5v23.79a36.17 36.17 0 1 1 -72.34 0v-23.82h-135.17v23.82a36.17 36.17 0 0 1 -72.34 0v-23.82h-22.53c-10.12 0-18.4 7.9-18.4 17.52v255.34c0 9.62 8.28 17.49 18.4 17.49h251.45a75.75 75.75 0 0 1 -20.73-28.56z"></path>
                    <rect
                      height="83.76"
                      rx="20.94"
                      width="41.88"
                      x="263.67"
                    ></rect>
                    <path d="m232.83 249.85h-34.1c-3.25 0-5.91 2.15-5.91 4.78v27.6c0 2.63 2.66 4.78 5.91 4.78h34.1c3.25 0 5.91-2.15 5.91-4.78v-27.6c0-2.63-2.66-4.78-5.91-4.78z"></path>
                    <path d="m99 204.18c0-2.63-2.66-4.78-5.91-4.78h-34.09c-3.25 0-5.91 2.15-5.91 4.78v27.6c0 2.63 2.66 4.78 5.91 4.78h34.12c3.25 0 5.91-2.15 5.91-4.78z"></path>
                    <path d="m99 153.73c0-2.63-2.66-4.78-5.91-4.78h-34.09c-3.25 0-5.91 2.15-5.91 4.78v27.6c0 2.63 2.66 4.78 5.91 4.78h34.12c3.25 0 5.91-2.15 5.91-4.78z"></path>
                    <path d="m93.12 249.85h-34.12c-3.25 0-5.91 2.15-5.91 4.78v27.6c0 2.63 2.66 4.78 5.91 4.78h34.12c3.25 0 5.91-2.15 5.91-4.78v-27.6c-.03-2.63-2.66-4.78-5.91-4.78z"></path>
                  </g>
                  <path
                    d="m321.61 212c-34.68 0-62.79 27.14-62.79 60.63s28.11 60.63 62.79 60.63 62.78-27.15 62.78-60.63-28.11-60.63-62.78-60.63zm41.95 45.68-47.65 46a12.95 12.95 0 0 1 -17.69-1.93l-20.09-33.58a9.14 9.14 0 0 1 3.52-12.7 9.85 9.85 0 0 1 13.15 3.41l14.75 24.65 40.4-39a9.91 9.91 0 0 1 13.61 0 9.1 9.1 0 0 1 0 13.13z"
                    fill="#4dbebe"
                  ></path>
                  <path
                    d="m168.89 153.73c0-2.63-2.66-4.78-5.91-4.78h-34.1c-3.25 0-5.91 2.15-5.91 4.78v27.6c0 2.63 2.66 4.78 5.91 4.78h34.12c3.25 0 5.91-2.15 5.91-4.78z"
                    fill="#37494b"
                  ></path>
                  <path
                    d="m238.74 153.73c0-2.63-2.66-4.78-5.91-4.78h-34.1c-3.25 0-5.91 2.15-5.91 4.78v27.6c0 2.63 2.66 4.78 5.91 4.78h34.1c3.25 0 5.91-2.15 5.91-4.78z"
                    fill="#37494b"
                  ></path>
                  <path
                    d="m168.89 204.18c0-2.63-2.66-4.78-5.91-4.78h-34.1c-3.25 0-5.91 2.15-5.91 4.78v27.6c0 2.63 2.66 4.78 5.91 4.78h34.12c3.25 0 5.91-2.15 5.91-4.78z"
                    fill="#37494b"
                  ></path>
                  <path
                    d="m163 249.85h-34.1c-3.25 0-5.91 2.15-5.91 4.78v27.6c0 2.63 2.66 4.78 5.91 4.78h34.1c3.25 0 5.91-2.15 5.91-4.78v-27.6c-.02-2.63-2.68-4.78-5.91-4.78z"
                    fill="#37494b"
                  ></path>
                </svg>
              </div>
              <span className="popular-price-tag">
                <img src={bestValue} alt="" />
              </span>
              <h1 className="mt-12">
                <span className="text-[16px] font-bold">MONTHLY</span>
              </h1>
              <h1>
                <span className="text-[50px] font-bold">$245</span>
                <span className="ml-2 text-[16px]"> + GST </span>
              </h1>
              <div className="text-[16px] font-normal text-[#7A7A7A]  mt-4">
                <p> Personalized Introduction</p>
                <p className="my-4"> Four Interesting, Relevant Articles</p>
                <p> Up to two Dynamic Articles</p>
                <p className="my-4"> Customized Written Content</p>
                <p> Image Re-sizing and Editing</p>
                <p className="my-4"> Monthly Reporting</p>
                <p>Contract-free – stop at any time!</p>
              </div>
              <button className="pricing-button">Contact Us</button>
            </Card>
          </Col>
          <Col md={6} xs={24} sm={12}></Col>
        </Row>
      </div>
    </>
  );
}
