import React from 'react';
import Description from '../components/about/Description';
import FilosofiLogo from '../components/about/FilosofiLogo';
import Hero from '../components/about/Hero';
import History from '../components/about/History';
import Join from '../components/about/Join';
import VisiMisi from '../components/about/VisiMisi';
import { HimaRplProvider } from '../components/logo/context/HimaRplContext';

const About = () => {
  return (
    <>
      <HimaRplProvider>
        <Hero />
        <Description />
        <VisiMisi />
        <FilosofiLogo />
        <History />
        <Join />
      </HimaRplProvider>
    </>
  );
};

export default About;
