import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logoMark from '../assets/image/Logomark Landscape Light.png';

const Navbar = () => {
  return (
    <header className='absolute md:top-7 left-1/2 -translate-x-2/4'>
      <nav className='navbar bg-brand-footer text-white h-[50px] md:w-[1000px] w-screen md:rounded-lg flex px-5 py-8 justify-between items-center'>
        <Image src={logoMark} alt='Logo HIMARPL' width={100} height={50} />
        <div className='fill-white md:hidden flex'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </div>
        <div className='md:flex hidden gap-x-16 text-sm'>
          <Link href='/'>Beranda</Link>
          <Link href='/'>Tentang Kami</Link>
          <Link href='/'>#KabinetExplora</Link>
          <Link href='/'>Blog</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
