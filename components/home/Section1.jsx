import Button from '../Button';

const Section1 = ({ content }) => (
  <div className='w-full py-24 px-6 h-screen rounded-[20px] bg-web-color-orange-gradient md:grid md:place-items-center mb-4'>
    <section className='section-1-content text-white text-center flex flex-col gap-y-[50px] xl:max-w-8xl'>
      <div className='flex flex-col gap-y-[30px]'>
        <div className='space-y-[10px]'>
          <h1 className='font-semibold w-full lg:w-[823px] uppercase md:text-5xl text-3xl md:leading-[4rem]'>
            {content?.title}
          </h1>
        </div>

        <p className='block font-normal text-base md:text-xl'>
          {content?.subtitle}
        </p>
      </div>

      <div className='button-container flex flex-row justify-center flex-wrap gap-x-[10px] gap-y-[10px]'>
        <Button text='Tentang HIMARPL' type='link' href='/about' />

        <Button text='Kontak Kami' type='link' href='mailto:himarpl@upi.edu' theme='light' />
      </div>
    </section>
  </div>
);

export default Section1;
