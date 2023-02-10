import React from 'react';
import Description from '../components/about/Description';
import FilosofiLogo from '../components/about/FilosofiLogo';
import Hero from '../components/Hero';
import History from '../components/about/History';
import Join from '../components/about/Join';
import VisiMisi from '../components/about/VisiMisi';
import { HimaRplProvider } from '../components/logo/context/HimaRplContext';

const About = () => {
  return (
    <>
      <main className='w-full flex flex-col gap-y-5'>
        <HimaRplProvider>
          <Hero title={'Tentang HIMARPL'} />
          <Description />
          <VisiMisi />
          <FilosofiLogo />
          <History />
          <Join />
        </HimaRplProvider>
      </main>
    </>
  );
};

export default About;
