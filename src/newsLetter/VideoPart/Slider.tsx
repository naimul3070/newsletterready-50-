import { Card, Col, Row } from 'antd';
import FiveStar from 'newsLetter/Testimonial/FiveStar';
import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import BabataImage from '../../common/assets/babta.jpg';
import AccountsImage from '../../common/assets/first-class-accounts.jpg';
import JimMovingImage from '../../common/assets/jims-mowing.jpg';
import './videoPart.scss';

export default class SliderPart extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <>
        <Row className="bg-white lg:my-[120px] mb-[30px]">
          <Col md={24} xs={24} sm={12}>
            <div className="mb-12">
              <Slider {...settings}>
                <div>
                  <Card className="rounded text-center" bordered={false}>
                    <div className="flex justify-center">
                      <img className="w-20" src={JimMovingImage} alt="" />
                    </div>
                    <h1 className="text-[20px] font-bold">Jim's Mowing</h1>
                    <div className="text-[16px] font-normal mt-2">
                      “I received 6 new jobs from my existing customers that I
                      would not have got without Newsletter Ready's Email
                      newsletter service! By not keeping in touch with my
                      customers I was leaving money on the table!”
                    </div>
                    <div className="flex justify-center py-1">
                      <FiveStar />
                    </div>
                    <p className="text-base font-bold">Alison</p>
                    <p className="text-base">Franchisee</p>
                  </Card>
                </div>
                <div>
                  <Card className="rounded text-center" bordered={false}>
                    <div className="flex justify-center">
                      <img className="w-20" src={AccountsImage} alt="" />
                    </div>
                    <h1 className="text-[20px] font-bold">
                      First Class Accounts
                    </h1>
                    <div className="text-[16px] font-normal mt-2">
                      “Thank you for such an easy and professional service. We
                      had always tried to do this ourselves but never could. A
                      welcome relief.”
                    </div>
                    <div className="flex justify-center py-1">
                      <FiveStar />
                    </div>
                    <p className="text-base font-bold">John</p>
                    <p className="text-base">Manager</p>
                  </Card>
                </div>
                <div>
                  <Card className="rounded text-center" bordered={false}>
                    <div className="flex justify-center">
                      <img className="w-20" src={BabataImage} alt="" />
                    </div>
                    <h1 className="text-[20px] font-bold">BABATA</h1>
                    <div className="text-[16px] font-normal mt-2">
                      “Our monthly newsletters really jog our customer's
                      memories and get them calling us up where they wouldn’t
                      have done otherwise.”
                    </div>
                    <div className="flex justify-center py-1">
                      <FiveStar />
                    </div>
                    <p className="text-base font-bold">Melanie</p>
                    <p className="text-base">CEO</p>
                  </Card>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
