import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import Image from 'next/image';

import VisiMisiImage from '../../assets/image/illustrations/visi-misi.png';

const VisiMisiContent = ({ division }) => {
  return (
    <Disclosure as="div" className="mb-2 transition ease-in-out">
      {({ open }) => (
        <>
          <Disclosure.Button
            as="div"
            className="font-medium mb-4 text-lg cursor-pointer p-6 rounded-xl bg-white text-brand-footer"
          >
            <h3 className="flex flex-row justify-between opacity-70 font-semibold">
              <span>{division?.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 ${open ? 'rotate-180 transform' : ''}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </h3>
          </Disclosure.Button>
          <Transition
            enter="transition duration-500 ease-in-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-in-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel as="div" className="leading-8">
              <p>
                <strong>Visi: </strong> {division?.visi}
              </p>
              <p>
                <strong>Misi: </strong>
                {division?.misi.map((misi, index) => `${index + 1}). ${misi} `)}
              </p>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

const VisiMisi = ({ content }) => {
  return (
    <div className="w-full px-5 py-[60px] rounded-[20px] bg-web-color-orange-gradient grid place-items-center">
      <section className="section-3-content w-full flex flex-row justify-between items-center xl:max-w-8xl">
        {/* START: Illustration */}
        {/* <div className="bg-[#D9D9D9] w-[600px] h-[300px] rounded-[20px] lg:block hidden"></div> */}
        <div className='w-full sm:flex align-middle justify-center hidden'>
          <Image
            src={VisiMisiImage}
            alt='Title'
            priority
            width={300}
            height={300}
            className='object-cover object-center'
          />
        </div>
        {/* END: Illustration */}

        {/* START: Content */}
        <div className="w-full max-w-[716px] flex flex-col gap-y-[50px]">
          <div className="space-y-[30px] text-white">
            <h2 className="font-semibold text-4xl leading-[3.625rem]">
              Visi & Misi
            </h2>

            <div className="text-lg leading-[150%] space-y-4">
              {
                content.map((division, index) => (
                  <VisiMisiContent key={index} division={division} />
                ))
              }
            </div>
          </div>
        </div>
        {/* END: Content */}
      </section>
    </div>
  );
};

export default VisiMisi;
