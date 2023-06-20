import Image from 'next/image';

import Button from '../Button';

import AspirasiImage from '../../assets/image/illustrations/aspirasi.png';

const Section7 = ({ content }) => (
  <div className='w-full px-5 py-[60px] rounded-[20px] bg-web-color-orange-gradient grid place-items-center'>
    <section className='section-7-content w-full flex flex-row-reverse justify-between items-center gap-x-[100px] xl:max-w-8xl'>
      {/* Image */}
      <div className='w-full sm:flex hidden align-middle justify-center'>
        <Image
          src={AspirasiImage}
          alt='Form Aspirasi RPL'
          priority
          width={340}
          className='object-cover object-center rounded-[20px]'
        />
      </div>

      {/* Content */}
      <div className='w-full max-w-[716px] flex flex-col gap-y-[50px]'>
        <div className='space-y-[30px] text-white'>
          <h2 className='font-semibold text-4xl leading-[3.625rem]'>
            {content?.title}
          </h2>

          <p className='text-lg leading-[150%] opacity-90'>
            {content?.description}
          </p>
        </div>

        <Button text={content?.cta?.text} type='link' href={content?.cta?.link} target='_blank' />
      </div>
    </section>
  </div>
);

export default Section7;
