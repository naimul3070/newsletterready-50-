import FooterTop from 'newsLetter/FooterTop';
import LearnMoreCard from 'newsLetter/LearnMoreCard/LearnMoreCard';
import Pricing from 'newsLetter/Pricing/Pricing';
import VideoAndSlider from 'newsLetter/VideoPart/VideoAndSlider';
import React, { useEffect } from 'react';

type indexType = {};
const Home: React.FC<indexType> = () => {
  useEffect(() => {}, []);
  return (
    <>
      <VideoAndSlider />
      <LearnMoreCard />
      <Pricing />
      <FooterTop />
    </>
  );
};

export default Home;
