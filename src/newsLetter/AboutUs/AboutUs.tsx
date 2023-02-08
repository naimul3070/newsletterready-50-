import { Col, Row } from 'antd';
import React from 'react';

const AboutUs = () => {
  return (
    <>
      <Row className="bg-white !ml-0 !mr-0 lg:px-0 px-6" gutter={[10, 2]}>
        {/* We Set You Up */}
        <Col md={3} xs={24} sm={12}></Col>
        <Col md={9} xs={24} sm={12}>
          <p className=" text-[#4dbfbf] text-[16px] font-semibold lg:mt-12 mt-8">
            About Us
          </p>
          <h1 className="text-[36px] font-bold leading-[1.2em]">
            We’re here to help businesses maximize the benefits of email
            marketing
          </h1>
          <div className="text-[16px] font-normal text-[#7A7A7A] mt-2">
            <p>
              Many small businesses have an email database of past and present
              clients, but don’t have the time or knowledge to reach out to
              those clients with regular newsletters.
            </p>
            <p className="my-4">
              Since 2015, Newsletter Ready has been providing a complete monthly
              newsletter service to many small and medium businesses in New
              Zealand.
            </p>
            <p>
              From our Auckland office, our team of creative content writers
              craft a personalised newsletter on behalf of each of our clients,
              and send it to their clients.
            </p>
            <p className="my-4">
              We write the content, manage the database, send the newsletter and
              report on the results – all for less than $200 per month.
            </p>
          </div>
          <p className="mb-12 text-[15px] font-semibold">
            Click here to find out how we can assist you.
          </p>
        </Col>
        <Col md={9} xs={24} sm={12}></Col>
        <Col md={3} xs={24} sm={12}></Col>
      </Row>
    </>
  );
};

export default AboutUs;
