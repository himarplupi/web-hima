import React from 'react';

import LogoHimaRpl from '../logo/LogoHimaRpl';
import { useHimaRplContext } from '../logo/context/HimaRplContext';

const FilosofiLogo = () => {
  const { title, description } = useHimaRplContext();
  console.log(title.value);
  return (
    <div className="w-full px-5 py-[60px] rounded-[20px] bg-web-color-dark-gray grid place-items-center mb-4">
      <section className="w-full flex flex-col items-center gap-y-[40px] xl:max-w-8xl">
        <div className="space-y-[20px] text-center ">
          <h2
            className="font-semibold text-4xl leading-[3.625rem] bg-clip-text bg-web-color-red-gradient"
            style={{
              WebkitTextFillColor: 'transparent',
            }}
          >
            Filosofi Logo HIMARPL
          </h2>

          <p className="text-lg leading-[150%] text-white">Behind The Logo</p>
        </div>

        <div className="w-full relative grid grid-cols-1 grid-rows-1 gap-[30px] place-items-center -translate-x-8">
          <LogoHimaRpl />
        </div>

        {/* START: Logo Description */}
        <div className="w-full max-w-[716px] flex flex-col">
          <div className="space-y-[20px] text-white text-center">
            <p
              className={`font-semibold text-2xl ${
                title.value && 'bg-clip-text bg-web-color-red-gradient fill-text-color-transparent'
              }`}
            >
              {title.value
                ? title.value
                : '[ Klik Logo untuk melihat deskripsi ]'}
            </p>

            <p
              className={`text-base leading-[150%] space-y-4 ${
                description ? 'visible' : 'invisible'
              }`}
            >
              {description.value}
            </p>
          </div>
        </div>
        {/* END: Logo Description */}
      </section>
    </div>
  );
};

export default FilosofiLogo;
