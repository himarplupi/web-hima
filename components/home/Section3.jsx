import Image from 'next/image';

import Button from '../Button';

import ProkerImage from '../../assets/image/illustrations/proker.png';

const Section3 = ({ content }) => (
  <div className='w-full px-5 py-[60px] rounded-[20px] bg-web-color-orange-gradient grid place-items-center'>
    <section className='section-3-content w-full flex flex-row justify-between items-center xl:max-w-8xl'>
      {/* Image */}
      <div className='w-full sm:flex align-middle justify-center hidden'>
        <Image
          src={ProkerImage}
          alt='Program Kerja'
          priority
          width={260}
          className='object-cover object-center'
        />
      </div>

      {/* Content */}
      <div className='w-full max-w-[716px] flex flex-col gap-y-[50px]'>
        <div className='space-y-[30px] text-white'>
          <h2 className='font-semibold text-4xl leading-[3.625rem]'>
            {content?.title}
          </h2>

          <p className='text-lg justify-start leading-[150%] opacity-90'>
            {content?.description}
          </p>
        </div>

        <Button text='Daftar Program Kerja' type='link' href='/program-kerja' />
      </div>
    </section>
  </div>
);

export default Section3;
