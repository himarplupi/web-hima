import React from 'react';
import { useKabinetContext } from '../logo/context/KabinetContext';
import LogoKabinet from '../logo/LogoKabinet';

const FilosofiLogo = () => {
  const { title, description } = useKabinetContext();

  return (
    <div className="w-full px-5 py-[60px] rounded-[20px] bg-web-color-light-gray grid place-items-center mb-4">
      <section className="w-full flex flex-col items-center gap-y-[40px] xl:max-w-8xl text-brand-footer">
        <div className="space-y-[20px] text-center ">
          <h2 className="font-semibold text-4xl leading-[3.625rem]">
            Filosofi Logo Kabinet
          </h2>

          <p className="text-lg leading-[150%]">Behind The Logo</p>
        </div>

        {/* START: Logo Kabinet */}
        <div className="w-full grid grid-cols-1 grid-rows-1 gap-[30px] place-items-center">
          <LogoKabinet />
        </div>
        {/* END: Logo Kabinet */}

        {/* START: Logo Description */}
        <div className="w-full max-w-[716px] flex flex-col">
          <div className="space-y-[20px] text-brand-footer text-center">
            <p
              className={`font-semibold text-2xl ${
                title.value &&
                'bg-clip-text bg-gradient-to-r from-[#48BF91] to-[#3A55B4] fill-text-color-transparent'
              }`}
            >
              {title.value !== ''
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
