import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Component } from 'react';
import { Card, Col, Row } from 'antd';
import FiveStar from './FiveStar';
import JimMovingImage from '../../common/assets/jims-mowing.jpg';
import AccountsImage from '../../common/assets/first-class-accounts.jpg';
import BabataImage from '../../common/assets/babta.jpg';
import './Tesmonial.scss';

export default class Testimonial extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <Row className="bg-white lg:px-0 px-6">
          <Col md={3} xs={24} sm={12}></Col>
          <Col md={18} xs={24} sm={24}>
            <div className="mb-28 mt-10">
              <h1 className="lg:text-5xl text-[32px] text-center font-bold ">Testimonials</h1>
              <Slider {...settings}>
                <div>
                  <Card
                    className="shadow-[2px_3px_15px_3px_#e5e5e5] mt-8 rounded mx-5 mb-6"
                    bordered={false}
                  >
                    <FiveStar />
                    <div className="text-[16px] font-normal mt-2">
                      “I received 6 new jobs from my existing customers that I
                      would not have got without Newsletter Ready's Email
                      newsletter service! By not keeping in touch with my
                      customers I was leaving money on the table!”
                    </div>
                    <div className="flex mt-5">
                      <img className="w-16" src={JimMovingImage} alt="" />
                      <div className="ml-4">
                        <h1 className="text-[20px] font-bold">Jim's Mowing</h1>
                        <p className="text-base">Alison - Franchisee</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div>
                  <Card
                    className="shadow-[2px_3px_15px_3px_#e5e5e5] mt-8 rounded mx-5 mb-6"
                    bordered={false}
                  >
                    <FiveStar />
                    <div className="text-[16px] font-normal mt-2">
                      “Thank you for such an easy and professional service. We
                      had always tried to do this ourselves but never could. A
                      welcome relief.”
                    </div>
                    <div className="flex mt-5">
                      <img className="w-16 h-[72px]" src={AccountsImage} alt="" />
                      <div className="ml-4">
                        <h1 className="text-[20px] font-bold">First Class</h1>
                        <h1 className="text-[20px] font-bold">Accounts</h1>
                        <p className="text-base">John - Manager</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div>
                  <Card
                    className="shadow-[2px_3px_12px_2px_#e5e5e5]  mt-8 rounded mx-5 mb-6"
                    bordered={false}
                  >
                    <FiveStar />
                    <div className="text-[16px] font-normal mt-2">
                      “Our monthly newsletters really jog our customer's
                      memories and get them calling us up where they wouldn’t
                      have done otherwise.”
                    </div>
                    <div className="flex mt-5">
                      <img className="w-16" src={BabataImage} alt="" />
                      <div className="ml-4">
                        <h1 className="text-[20px] font-bold">BABTA</h1>
                        <p className="text-base">Melanie - CEO</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div></div>
              </Slider>
            </div>
          </Col>
          <Col md={3} xs={24} sm={12}></Col>
        </Row>
      </>
    );
  }
}
