import Image from 'next/image';

import Button from '../Button';

import spaceIllustration from '../../assets/image/space-illustration.png';

const Section7 = () => (
  <div className='w-full px-5 py-[60px] rounded-[20px] bg-web-color-orange-gradient grid place-items-center'>
    <section className='section-7-content w-full flex flex-row-reverse justify-between items-center gap-x-[100px] xl:max-w-8xl'>
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
            FORASI (Form Aspirasi)
          </h2>

          <p className='text-2xl leading-[150%]'>
            Memiliki kritik dan saran untuk HIMARPL? Kirim masukan anda kepada
            kami melalui Form Aspirasi.
          </p>
        </div>

        <Button text='Form Aspirasi RPL' type='link' href='/forasi' />
      </div>
    </section>
  </div>
);

export default Section7;
