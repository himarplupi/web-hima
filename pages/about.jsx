import React from 'react';
import Description from '../components/about/Description';
import FilosofiLogo from '../components/about/FilosofiLogo';
import Hero from '../components/Hero';
import History from '../components/about/History';
import Join from '../components/about/Join';
import VisiMisi from '../components/about/VisiMisi';
import { LogoProvider as HimaRplProvider } from '../components/logo/context/LogoContext';
import getContent from '../utils/getContent';

export const getServerSideProps = () => getContent('about')

const About = ({ content }) => {
  const { hero, description, visimisi: visiMisi, filosofiLogo, history, join } = content;
  return (
    <>
      <main className='w-full flex flex-col gap-y-5'>
        <HimaRplProvider>
          <Hero title={hero.title} description={hero.description} />
          <Description content={description} />
          <VisiMisi content={ visiMisi } />
          <FilosofiLogo />
          <History content={history} />
          <Join content={join} />
        </HimaRplProvider>
      </main>
    </>
  );
};

export default About;
