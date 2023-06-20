import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import spaceIllustration from '../../../assets/image/space-illustration.png';
import instagram from '../../../assets/icons/instagram.svg';
import github from '../../../assets/icons/github.svg';
import linkedin from '../../../assets/icons/linkedin.svg';
import twitter from '../../../assets/icons/twitter.svg';
import tiktok from '../../../assets/icons/tiktok.svg';
import line from '../../../assets/icons/line.svg';

const getIcon = (name) => {
  switch (name) {
    case 'instagram':
      return instagram;
    case 'github':
      return github;
    case 'linkedin':
      return linkedin;
    case 'twitter':
      return twitter;
    case 'tiktok':
      return tiktok;
    case 'line':
      return line;
    default:
      return instagram;
  }
};

const Card = ({
  imageSrc = spaceIllustration,
  name,
  membership,
  department,
  sosmed = [],
}) => {
  return (
    <article className="blog-card w-full max-w-[420px] rounded-xl overflow-hidden flex flex-col gap-y-0 bg-white shadow-md">
      {/* START: Image Profile */}
      <Image
        src={imageSrc}
        alt={``}
        priority
        width={500}
        height={500}
        className="w-full object-cover object-center"
      />
      {/* END: Image Profile */}

      {/* START: Member Profile */}
      <div className="px-[30px] py-[20px] flex flex-col gap-y-[10px] text-center font-medium">

        <h3 className="font-bold text-lg bg-clip-text bg-web-color-orange-gradient fill-text-color-transparent">{name}</h3>
        <p className="text-sm text-brand-footer opacity-80">
          {membership || ''} {department}
        </p>

        <div className="social flex flex-row justify-center gap-x-2 pt-4 pb-2">
          {sosmed.map((item, i) => (
            <Link href={item.url} key={i}>
              <Image
                src={getIcon(item.label.toLowerCase())}
                alt={item.label}
                priority
                width={24}
                height={24}
                className="hover:opacity-80"
              />
            </Link>
          ))}
        </div>
      </div>
      {/* END: Member Profile */}
    </article>
  );
};

export default Card;
