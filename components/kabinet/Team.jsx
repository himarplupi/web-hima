import React from 'react';

import Button from '../Button'

const Team = () => {
  return (
    <div className="w-full px-5 py-[60px] rounded-[20px] bg-web-color-orange-gradient grid place-items-center mb-4">
      <section className="w-full flex flex-row justify-center items-center xl:max-w-8xl">
        <div className="w-full grid md:grid-cols-2 md:grid-rows-1 gap-[30px]">
          <div
            className="w-full max-w-[680px] h-[300px] grid place-items-center bg-[#282828] rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.04),0px_8px_16px_rgba(0,0,0,0.08)]"
          >
            <Button href='/team#be' text='Badan Eksekutif' type='link' theme='light' size='normal' />
          </div>
          <div
            className="w-full max-w-[680px] h-[300px] grid place-items-center bg-[#282828] rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.04),0px_8px_16px_rgba(0,0,0,0.08)]"
          >
            <Button href='/team#dp' text='Dewan Perwakilan' type='link' theme='light' size='normal' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
