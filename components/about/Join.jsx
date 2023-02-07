import React from 'react'

import Button from '../Button'

const Join = () => {
  return (
    <div className='w-full px-5 py-[60px] rounded-[20px] bg-web-color-dark-gray grid place-items-center'>
    <section className='section-7-content w-full flex flex-row-reverse justify-between items-center gap-x-[100px] xl:max-w-8xl'>
      {/* START: Join HIMARPL */}
      <div className='w-full max-w-[716px] flex flex-col gap-y-[50px]'>
        <div className='space-y-[30px] text-white'>
          <h2 className='font-semibold text-4xl leading-[3.625rem]'>
            Join with HIMA
          </h2>

          <p className='text-lg leading-[150%]'>
            Gabung sekarang dengan keluarga besar HIMARPL untuk mahasiswa Rekayasa Perangkat Lunak yang lebih baik
          </p>
        </div>

        <Button text='Gabung Sekarang' type='link' theme='gradient' href='/join' />
      </div>
      {/* END: Join HIMARPL */}

      {/* Image */}
      <div className='w-[550px] h-[550px] bg-brand-gray md:block hidden'></div>
    </section>
  </div>
  )
}

export default Join