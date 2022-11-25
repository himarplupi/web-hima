import React from 'react';
import Image from 'next/image';
import logo from '../assets/image/logomark.png';
import Link from 'next/link';

// icons
import EmailIcon from '../assets/image/icons/Vector.png';
import InstagramIcon from '../assets/image/icons/Vector-1.png';
import SpotifyIcon from '../assets/image/icons/Vector-2.png';

const links = [
  { url: '#', title: 'Media Partner' },
  { url: '#', title: 'Ruang Advo' },
  { url: '#', title: 'Galeri' },
];
const organisasi = [
  { url: '#', title: 'Tentang HIMARPL' },
  { url: '#', title: 'Kabinet Explora' },
  { url: '#', title: 'Badan Eksekutif' },
  { url: '#', title: 'Dewan Perwakilan' },
];
const upi = [
  { url: '#', title: 'Website UPI' },
  { url: '#', title: 'Website RPL' },
  { url: '#', title: 'BEM UPI Cibiru' },
];
const socmed = [
  { url: '#', src: EmailIcon },
  { url: '#', src: InstagramIcon },
  { url: '#', src: SpotifyIcon },
];
const Footer = () => {
  return (
    <footer>
      <div className='p-10 bg-brand-footer text-white bottom-0 mb-auto'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
            <div className='block col-span-2'>
              <Image src={logo} alt='Logo' className='mb-5' />
              <p className='mb-10'>
                Tincidunt mi, amet dignissim ipsum massa integer. Auctor felis,
                et cursus mattis lorem scelerisque eu justo. Enim nunc quam id
                facilisis amet. Vitae dolor tempor.
              </p>
              <p>© 2022 HIMARPL</p>
              <span className='text-xs'>
                Made With ❤ by Departemen Komunikasi dan Informasi{' '}
              </span>
            </div>
            <div className='mb-5'>
              <h5 className='font-bold mb-5'>Link</h5>
              <ul className='block'>
                {links.map((item, id) => (
                  <li key={id}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mb-5'>
              <h5 className='font-bold mb-5'>Organisasi</h5>
              <ul>
                {organisasi.map((item, id) => (
                  <li key={id}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mb-5'>
              <h5 className='font-bold mb-5'>UPI</h5>
              <ul>
                {upi.map((item, id) => (
                  <li key={id}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex justify-end gap-4'>
            {socmed.map((item, id) => (
              <Link key={id} href={item.url}>
                <Image src={item.src} alt={item.url} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
