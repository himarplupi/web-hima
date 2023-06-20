import React from 'react'

const Hero = ({
  title,
  description = 'Himpunan Mahasiswa Rekayasa Perangkat Lunak'
}) => {
  return (
    <div className="w-full relative md:mt-0 mt-16 py-32 px-6 h-fit rounded-[20px] bg-web-color-orange-gradient grid place-items-center">
      <section className='section-1-content text-white text-center flex flex-col xl:max-w-8xl'>
        <div className='flex flex-col gap-y-[30px]'>
          <h1 className='font-semibold text-4xl'>{title}</h1>

          <div className='space-y-[10px]'>
            <p className='uppercase tex-base'>
              {description}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero