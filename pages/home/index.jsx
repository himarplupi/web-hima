import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import styles from '../../styles/Home.module.css';

import Button from '../../components/Button';
import Card from '../../components/Card';
import WindowCard from './components/WindowCard';

import spaceIllustration from '../../assets/image/space-illustration.png';

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
        <div className='w-full h-[800px] rounded-[20px] bg-web-color-orange-gradient grid place-items-center px-5'>
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
        <div className='w-full h-[660px] rounded-[20px] bg-web-color-light-gray grid place-items-center px-5'>
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
        <div className='w-full h-[610px] rounded-[20px] bg-web-color-orange-gradient grid place-items-center px-5'>
          <section className='section-3-content w-full flex flex-row justify-between items-center xl:max-w-8xl'>
            {/* Image */}
            <Image
              src={spaceIllustration}
              alt='Program Kerja'
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
        <div className='w-full h-[775px] rounded-[20px] bg-web-color-light-gray grid place-items-center px-5'>
          <section className='section-4-content w-full flex flex-col justify-center items-center gap-y-[50px] xl:max-w-8xl'>
            <h2 className='font-semibold text-5xl leading-[3.625rem] text-brand-footer'>
              Berita
            </h2>

            {/* Blog Cards */}
            <div className='blog-cards-container w-full flex flex-row justify-between'>
              <Card
                url='/'
                title='Judul Blog - 1'
                category='Kategori'
                imageSrc={spaceIllustration}
                author='Admin'
                createdDate={new Date()}
              />

              <Card
                url='/'
                title='Judul Blog - 2'
                category='Kategori'
                imageSrc={spaceIllustration}
                author='Admin'
                createdDate={new Date()}
              />

              <Card
                url='/'
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
              href='/blog'
              theme='light'
              size='small'
            />
          </section>
        </div>

        {/* Section 5 */}
        <div className='w-full h-[1225px] rounded-[20px] bg-web-color-dark-gray grid place-items-center px-5'>
          Section 5
        </div>

        {/* Section 6 */}
        <div className='w-full h-[775px] rounded-[20px] bg-web-color-light-gray grid place-items-center px-5'>
          Section 6
        </div>

        {/* Section 7 */}
        <div className='w-full h-[610px] rounded-[20px] bg-web-color-orange-gradient grid place-items-center px-5'>
          Section 7
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
