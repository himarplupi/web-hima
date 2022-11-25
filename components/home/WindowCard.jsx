import Image from 'next/image';

import spaceIllustration from '../../assets/image/space-illustration.png';

const WindowCard = ({
  title = 'Title',
  imageSrc = spaceIllustration || '',
}) => {
  return (
    <>
      {/* Window Card */}
      <div className='bg-web-color-dark-gray rounded-[20px] overflow-hidden flex flex-col gap-y-0'>
        {/* Window Card Header */}
        <div className='relative py-6 bg-web-color-dark-gray text-center'>
          <h4 className='text-base text-white'>{title}</h4>

          {/* Triple Dot */}
          <div className='flex flex-row gap-x-[9.23px] absolute left-[50px] top-1/2 -translate-y-1/2'>
            <div className='w-[13.85px] aspect-square rounded-full bg-dot-red border-[0.5px] border-solid border-dot-red '></div>
            <div className='w-[13.85px] aspect-square rounded-full bg-dot-yellow border-[0.5px] border-solid border-dot-yellow '></div>
            <div className='w-[13.85px] aspect-square rounded-full bg-dot-green border-[0.5px] border-solid border-dot-green '></div>
          </div>
        </div>

        {/* Window Card Image */}
        <Image
          src={imageSrc}
          alt='Title'
          priority
          height={450}
          className='w-full object-cover object-center'
        />
      </div>
    </>
  );
};

export default WindowCard;
