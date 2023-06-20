import Image from 'next/image';
import React from 'react';

const History = ({ content }) => {
  return (
    <div className="w-full px-5 py-[60px] rounded-[20px] bg-web-color-orange-gradient grid place-items-center">
      <section className="w-full flex flex-col items-center gap-y-[40px] xl:max-w-8xl">
        <div className="space-y-[20px] text-center ">
          <h2 className="font-semibold text-4xl leading-[3.625rem] text-white">
            {content?.title}
          </h2>

          <p className="text-lg leading-[150%] text-white opacity-90">
            {content?.description}
          </p>
        </div>

        {/* START: Logo Description */}
        <div className="w-full max-w-[716px] flex flex-col">
          {content?.kabinets.map((kabinet, index) => (
            <div
              className="w-full bg-white text-brand-footer lg:text-lg text-base flex flex-row justify-between items-center rounded-xl py-2 px-4 mb-4"
              key={index}
            >
              <div className="w-14">
                <Image
                  src={`/images/contents/logo-kabinet/${kabinet.image}`}
                  alt={`Logo ${kabinet.name}`}
                  priority
                  width={550}
                  height={550}
                  className=''
                />
              </div>
              <p className="font-semibold uppercase">{kabinet.name}</p>
              <time className="font-semibold">{kabinet.priode}</time>
            </div>
          ))}
        </div>
        {/* END: Logo Description */}
      </section>
    </div>
  );
};

export default History;
