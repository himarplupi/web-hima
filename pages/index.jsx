import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Button from '../components/Button';
import Card from '../components/Card';
import WindowCard from '../components/home/WindowCard';

import spaceIllustration from '../assets/image/space-illustration.png';

const Home = () => {
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
        <div className='w-full px-5 h-[800px] rounded-[20px] bg-web-color-orange-gradient grid place-items-center'>
          <section className='section-1-content text-white text-center flex flex-col gap-y-[50px] xl:max-w-8xl'>
            <div className='flex flex-col gap-y-[30px]'>
              <h5 className='font-normal text-xl'>
                Selamat Datang di Website Resmi
              </h5>

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

              <Button
                text='Kontak Kami'
                type='link'
                href='/contact'
                theme='light'
              />
            </div>
          </section>
        </div>

        {/* Section 2 */}
        <div className='w-full px-5 h-[660px] rounded-[20px] bg-web-color-light-gray grid place-items-center'>
          <section className='section-2-content w-full flex flex-col gap-y-[60px] -translate-y-[140px] xl:max-w-8xl'>
            <WindowCard title='Kabinet Explora' imageSrc={spaceIllustration} />

            <div className='flex flex-row justify-between items-center'>
              <div className='w-full max-w-[500px] text-brand-footer space-y-5'>
                <h2 className='font-semibold text-4xl leading-[2.75rem]'>
                  Kabinet Explora
                </h2>

                <p className='text-xl leading-[1.5rem]'>
                  Nama dari kabinet yang kini sedang menjalankan masa kerjanya
                  pada periode 22/23 ini yang dipimpin oleh Ali Aziz Fadilah dan
                  Bagus Subagja.
                </p>
              </div>

              <Button text='Cari Tahu #KabinetExplora' type='link' href='/' />
            </div>
          </section>
        </div>

        {/* Section 3 */}
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
                  Penasaran dengan proker yang ada pada HIMARPL periode ini?
                  Silahkan cek daftar program kerja Kabinet Explora.
                </p>
              </div>

              <Button
                text='Daftar Program Kerja'
                type='link'
                href='/program-kerja'
              />
            </div>
          </section>
        </div>

        {/* Section 4 */}
        <div className='w-full px-5 py-[60px] rounded-[20px] bg-web-color-light-gray grid place-items-center'>
          <section className='section-4-content w-full flex flex-col justify-center items-center gap-y-[50px] xl:max-w-8xl'>
            <h2 className='font-semibold text-5xl leading-[3.625rem] text-brand-footer'>
              Berita
            </h2>

            {/* Blog Cards */}
            <div className='blog-cards-container w-full flex flex-row justify-between'>
              <Card
                url='/'
                type='blog'
                title='Judul Blog - 1'
                category='Kategori'
                imageSrc={spaceIllustration}
                author='Admin'
                createdDate={new Date()}
              />

              <Card
                url='/'
                type='blog'
                title='Judul Blog - 2'
                category='Kategori'
                imageSrc={spaceIllustration}
                author='Admin'
                createdDate={new Date()}
              />

              <Card
                url='/'
                type='blog'
                title='Judul Blog - 3'
                category='Kategori'
                imageSrc={spaceIllustration}
                author='Admin'
                createdDate={new Date()}
              />
            </div>

            <Button
              text='Lebih Banyak'
              type='link'
              href='/blogs'
              theme='light'
              size='small'
            />
          </section>
        </div>

        {/* Section 5 */}
        <div className='w-full px-5 py-[60px] rounded-[20px] bg-web-color-dark-gray grid place-items-center'>
          <section className='section-5-content w-full flex flex-col items-center gap-y-[80px] xl:max-w-8xl'>
            <div className='space-y-[20px] text-center '>
              <h2
                className='font-semibold text-5xl leading-[3.625rem] bg-clip-text bg-web-color-red-gradient'
                style={{
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Rekan Podcast
              </h2>

              <p className='text-2xl leading-[150%] text-white'>
                Yuk, dengerin obrolan-obrolan menarik dari HIMARPL di Rekan
                Podcast!
              </p>
            </div>

            {/* Spotify Card Container */}
            <div className='spotify-card-container w-full grid grid-cols-2 grid-rows-2 gap-[30px]'>
              {[...Array(4)].map((item, index) => (
                <div
                  key={index}
                  className='w-full max-w-[680px] h-[352px] grid place-items-center bg-[#282828] rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.04),0px_8px_16px_rgba(0,0,0,0.08)]'
                >
                  <h3 className='font-bold text-5xl leading-[3.625rem] text-white opacity-20'>
                    aset spotify
                  </h3>
                </div>
              ))}
            </div>

            <Button
              text='Dengarkan di Spotify'
              type='link'
              href='https://spotify.com/'
              size='small'
              theme='green'
            />
          </section>
        </div>

        {/* Section 6 */}
        <div className='w-full px-5 py-[60px] rounded-[20px] bg-web-color-light-gray grid place-items-center'>
          <section className='section-6-content w-full flex flex-col justify-center items-center gap-y-[50px] xl:max-w-8xl'>
            <h2 className='font-semibold text-5xl leading-[3.625rem] text-brand-footer'>
              Event
            </h2>

            {/* Blog Cards */}
            <div className='blog-cards-container w-full flex flex-row justify-between'>
              <Card
                url='/'
                type='event'
                title='Judul Event - 1'
                category='Kategori'
                imageSrc={spaceIllustration}
                createdDate={new Date()}
              />

              <Card
                url='/'
                type='event'
                title='Judul Event - 2'
                category='Kategori'
                imageSrc={spaceIllustration}
                createdDate={new Date()}
              />

              <Card
                url='/'
                type='event'
                title='Judul Event - 3'
                category='Kategori'
                imageSrc={spaceIllustration}
                createdDate={new Date()}
              />
            </div>

            <Button
              text='Lebih Banyak'
              type='link'
              href='/events'
              theme='light'
              size='small'
            />
          </section>
        </div>

        {/* Section 7 */}
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
                  Memiliki kritik dan saran untuk HIMARPL? Kirim masukan anda
                  kepada kami melalui Form Aspirasi.
                </p>
              </div>

              <Button text='Form Aspirasi RPL' type='link' href='/forasi' />
            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
