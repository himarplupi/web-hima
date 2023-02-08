import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logoMark from '../assets/image/Logomark Landscape Light.png';
import { Menu, Transition } from '@headlessui/react';

const menuItems = [
  {
    name: 'Beranda',
    url: '/',
  },
  {
    name: 'Tentang Kami',
    url: '/about',
  },
  {
    name: '#KabinetExplora',
    url: '/kabinet',
  },
];

const Navbar = () => {
  return (
    <header className="fixed z-50 md:absolute md:top-7 md:left-1/2 md:-translate-x-2/4">
      <nav className="navbar bg-brand-footer text-white h-[50px] md:w-[1000px] w-screen md:rounded-lg flex px-6 py-8 justify-between items-center">
        <Image src={logoMark} alt="Logo HIMARPL" width={150} height={50} />

        <Menu>
          <Menu.Button>
            <div className="fill-white md:hidden flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-75"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Menu.Items className="md:hidden fixed top-0 left-0 bottom-0 w-3/4 h-screen pb-6 pt-10 text-brand-gray bg-web-color-dark-gray rounded shadow-xl">
              {menuItems.map((menu, index) => (
                <Menu.Item
                  key={index}
                  className="flex flex-col pl-4 pr-2 py-4"
                >
                  {({ active }) => (
                    <Link
                      className={`${active && 'text-brand-primary'}`}
                      href={menu.url}
                    >
                      {menu.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>

        <div className="md:flex hidden gap-x-16 text-sm">
          {menuItems.map((menu, index) => (
            <Link href={menu.url} key={index}>
              {menu.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
