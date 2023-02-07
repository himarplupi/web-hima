import Button from '../Button';

const Section1 = () => (
  <div className='w-full py-24 px-6 h-screen rounded-[20px] bg-web-color-orange-gradient md:grid md:place-items-center mb-4'>
    <section className='section-1-content text-white text-center flex flex-col gap-y-[50px] xl:max-w-8xl'>
      <div className='flex flex-col gap-y-[30px]'>
        <h5 className='font-normal text-base'>Selamat Datang di Website Resmi</h5>

        <div className='space-y-[10px]'>
          <h2 className='font-semibold uppercase md:text-5xl text-3xl md:leading-[3.625rem]'>
            Himpunan Mahasiswa
          </h2>

          <h1 className='font-semibold uppercase md:text-5xl text-3xl md:leading-[4.813rem]'>
            Rekayasa Perangkat Lunak
          </h1>
        </div>

        <h5 className='block font-normal text-base md:text-xl'>
          Universitas Pendidikan Indonesia
        </h5>
      </div>

      <div className='button-container flex flex-row justify-center flex-wrap gap-x-[10px] gap-y-[10px]'>
        <Button text='Tentang HIMARPL' type='link' href='/about' />

        <Button text='Kontak Kami' type='link' href='/contact' theme='light' />
      </div>
    </section>
  </div>
);

export default Section1;
