import { Fragment } from 'react';
import Head from 'next/head';

import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';
import Section4 from '../components/home/Section4';
import Section5 from '../components/home/Section5';
import Section6 from '../components/home/Section6';
import Section7 from '../components/home/Section7';
import getContent from '../utils/getContent';

export const getServerSideProps = () => getContent('home')

const Home = ({ content }) => {
  const { hero, kabinet, proker, repod, forasi } = content;

  return (
    <Fragment>
      <Head>
        <title>Home | HIMA RPL</title>
        <meta
          name='description'
          content='Home page of Himpunan Mahasiswa Rekayasa Perangkat Lunak (HIMA RPL)'
        />
      </Head>

      <main className='w-full flex flex-col gap-y-5'>
        {/* Section 1 */}
        <Section1 content={hero} />

        {/* Section 2 */}
        <Section2 content={kabinet} />

        {/* Section 3 */}
        <Section3 content={proker} />

        {/* Section 4 */}
        {/* <Section4 /> */}

        {/* Section 5 */}
        <Section5 content={repod} />

        {/* Section 6 */}
        {/* <Section6 /> */}

        {/* Section 7 */}
        <Section7 content={forasi} />
      </main>
    </Fragment>
  );
};

export default Home;
