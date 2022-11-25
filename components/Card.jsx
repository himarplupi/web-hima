import Link from 'next/link';
import Image from 'next/image';

import spaceIllustration from '../assets/image/space-illustration.png';

const Card = ({
  url = '/',
  title = 'Judul Blog',
  category = 'Kategori',
  imageSrc = spaceIllustration || '',
  author = 'Admin',
  createdDate = new Date(2022, 11, 19),
}) => {
  return (
    <>
      {/* Blog Card */}
      <div className='blog-card w-full max-w-[420px] rounded-[20px] overflow-hidden flex flex-col gap-y-0 bg-white'>
        <Link href={url}>
          <Image
            src={imageSrc}
            alt={`${title} Thumbnail`}
            className='h-[180px] object-cover object-center'
          />
        </Link>

        <div className='px-[30px] py-[20px] flex flex-col gap-y-[10px]'>
          <small
            className='block text-sm leading-[1.063rem] bg-clip-text bg-web-color-orange-gradient'
            style={{
              WebkitTextFillColor: 'transparent',
            }}
          >
            {category}
          </small>

          <Link href={url}>
            <h4 className='font-bold text-lg leading-[1.375rem]'>{title}</h4>
          </Link>

          <p className='text-sm leading-[1.063rem]'>
            Oleh <b>{author}</b> -
            {createdDate.toLocaleString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;