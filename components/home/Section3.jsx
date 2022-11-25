import Image from 'next/image';

import Button from '../Button';

import spaceIllustration from '../../assets/image/space-illustration.png';

const Section3 = () => (
  <div className='w-full px-5 py-[60px] rounded-[20px] bg-web-color-orange-gradient grid place-items-center'>
    <section className='section-3-content w-full flex flex-row justify-between items-center gap-x-[100px] xl:max-w-8xl'>
      {/* Image */}
      <Image
        src={spaceIllustration}
        alt='Program Kerja'
        priority
        width={550}
        className='h-[450px] object-cover object-center rounded-[20px]'
      />

      {/* Content */}
      <div className='w-full max-w-[716px] flex flex-col gap-y-[50px]'>
        <div className='space-y-[30px] text-white'>
          <h2 className='font-semibold text-5xl leading-[3.625rem]'>
            Program Kerja
          </h2>

          <p className='text-2xl leading-[150%]'>
            Penasaran dengan proker yang ada pada HIMARPL periode ini? Silahkan
            cek daftar program kerja Kabinet Explora.
          </p>
        </div>

        <Button text='Daftar Program Kerja' type='link' href='/program-kerja' />
      </div>
    </section>
  </div>
);

export default Section3;
