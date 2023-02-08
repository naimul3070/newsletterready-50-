import { Col, Row } from 'antd';
import React from 'react';
import SliderPart from './Slider';
import VideoPlayer from './VideoPlayer';

export default function VideoAndSlider() {
  return (
    <>
      <div className="bg-white lg:px-0 px-6">
        <Row gutter={[10, 5]} className="!ml-0 !mr-0">
          <Col md={3} xs={24} sm={12}></Col>
          <Col md={9} xs={24} sm={24}>
            <VideoPlayer />
          </Col>
          <Col md={9} xs={24} sm={12}>
            <SliderPart />
          </Col>
          <Col md={3} xs={24} sm={12}></Col>
        </Row>
      </div>
    </>
  );
}
