import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logoMark from '../assets/image/Logomark Landscape Light.png';

const Navbar = () => {
  return (
    <header className='absolute top-7 left-1/2 -translate-x-2/4'>
      <nav className='navbar bg-brand-footer text-white h-[50px] w-[1000px] rounded-lg flex px-5 py-3 justify-between items-center'>
        <Image src={logoMark} alt='logo' width={100} height={50} />
        <div className='flex gap-x-16 text-sm'>
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
