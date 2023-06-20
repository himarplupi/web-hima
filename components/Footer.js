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
  { url: '/about', title: 'Tentang HIMARPL' },
  { url: '/kabinet', title: 'Kabinet Explora' },
  { url: '/team/be', title: 'Badan Eksekutif' },
  { url: '/team/dp', title: 'Dewan Perwakilan' },
];
const upi = [
  { url: 'https://www.upi.edu/', title: 'Website UPI' },
  { url: 'https://rpl.upi.edu/', title: 'Website RPL' },
  { url: 'https://www.instagram.com/bemupicibiru/', title: 'BEM UPI Cibiru' },
];
const socmed = [
  { url: 'mailto:himarpl@upi.edu', src: EmailIcon },
  { url: 'https://instagram.com/himarpl', src: InstagramIcon },
  { url: 'https://open.spotify.com/show/3U3iuQcBYyzC5c13UieYFQ', src: SpotifyIcon },
];
const Footer = () => {
  return (
    <footer>
      <div className='p-10 bg-brand-footer text-white bottom-0 mb-auto'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
            <div className='block col-span-2'>
              <Image src={logo} alt='Logo' className='mb-5' />
              <div className='mb-10 leading-7'>
                <p>
                  Universitas Pendidikan Indonesia - Kampus Cibiru
                </p>
                <p>
                  Cibiru Wetan, Kec. Cileunyi, Kabupaten Bandung, Jawa Barat 40625
                </p>
              </div>
              <p>© {new Date().getFullYear()} HIMARPL</p>
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
              <Link key={id} href={item.url} target='_blank'>
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
