import Button from '../Button';

const Section1 = () => (
  <div className='w-full px-5 h-[800px] rounded-[20px] bg-web-color-orange-gradient grid place-items-center'>
    <section className='section-1-content text-white text-center flex flex-col gap-y-[50px] xl:max-w-8xl'>
      <div className='flex flex-col gap-y-[30px]'>
        <h5 className='font-normal text-xl'>Selamat Datang di Website Resmi</h5>

        <div className='space-y-[10px]'>
          <h2 className='font-medium text-5xl leading-[3.625rem]'>
            Himpunan Mahasiswa
          </h2>

          <h1 className='font-medium text-[4rem] leading-[4.813rem]'>
            Rekayasa Perangkat Lunak
          </h1>
        </div>

        <h5 className='block font-normal text-xl'>
          Universitas Pendidikan Indonesia
        </h5>
      </div>

      <div className='button-container flex flex-row justify-center gap-x-[40px]'>
        <Button text='Tentang HIMARPL' type='link' href='/about' />

        <Button text='Kontak Kami' type='link' href='/contact' theme='light' />
      </div>
    </section>
  </div>
);

export default Section1;
