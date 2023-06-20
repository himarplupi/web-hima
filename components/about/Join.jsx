import React from 'react'

import Button from '../Button'
import Image from 'next/image'
import JoinImage from '../../assets/image/illustrations/join.png'

const Join = ({ content }) => {
  return (
    <div className='w-full px-5 py-[60px] rounded-[20px] bg-web-color-dark-gray grid place-items-center'>
    <section className='section-7-content w-full flex flex-row-reverse justify-between items-center xl:max-w-8xl'>
      {/* START: Join HIMARPL */}
      <div className='w-full max-w-[716px] flex flex-col gap-y-[50px]'>
        <div className='space-y-[30px] text-white'>
          <h2 className='font-semibold text-4xl leading-[3.625rem]'>
            {content?.title}
          </h2>

          <p className='text-lg leading-[150%] opacity-90'>
            {content?.description}
          </p>
        </div>

        <Button text='Gabung Sekarang' type='link' theme='gradient' href='/join' />
      </div>
      {/* END: Join HIMARPL */}

      {/* Image */}
      <div className='w-full sm:flex align-middle justify-center hidden'>
      <Image
          src={JoinImage}
          alt='Title'
          priority
          width={300}
          height={300}
          className='object-cover object-center'
        />
      </div>
    </section>
  </div>
  )
}

export default Join