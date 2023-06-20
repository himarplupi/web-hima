import React from 'react';
import DescHimaRpl from '../../assets/image/illustrations/desc-himarpl.png';
import Image from 'next/image';

const Description = ({ content }) => {
  return (
    <div className="w-full px-6 py-24 h-fit rounded-[20px] bg-web-color-light-gray grid place-items-center">
      <section className="section-3-content w-full flex flex-row justify-between items-center xl:max-w-8xl">
        {/* START: Content */}
        <div className="w-full max-w-[716px] flex flex-col gap-y-[50px]">
          <div className="space-y-[30px] text-brand-footer">
            <h2 className="font-semibold text-4xl leading-[3.625rem]">
              {content?.title}
            </h2>

            <p className="text-lg leading-[150%] opacity-70">
              <span dangerouslySetInnerHTML={{__html: content?.description}}></span>
            </p>
          </div>
        </div>
        {/* END: Content */}

        {/* START: Illustration */}
        <div className='w-full sm:flex align-middle justify-center hidden'>
          <Image
            src={DescHimaRpl}
            alt='Title'
            priority
            width={500}
            height={500}
            className='object-cover object-center'
          />
        </div>
        {/* END: Illustration */}
      </section>
    </div>
  );
};

export default Description;
