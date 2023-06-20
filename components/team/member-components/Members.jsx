import React from 'react';
import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from './Card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

const BREAKPOINTS = {
  567: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
};

const Members = ({ isMobileMode, members = [] }) => {
  // Slide on Mobile
  if (isMobileMode && members.length > 2) {
    return (
      <Swiper
        spaceBetween={50}
        modules={[Scrollbar]}
        breakpoints={BREAKPOINTS}
        scrollbar={{ draggable: true }}
      >
        {members.map((member, i) => (
          <SwiperSlide key={i}>
            <Card
              name={member.name}
              membership={member.membership}
              department={member.department}
              sosmed={member.sosmed}
              imageSrc={`/images/members/${member.img}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className="flex flex-wrap items-center w-full justify-center gap-x-4 gap-y-8 py-3">
      {members.map((member, i) => (
        <Card
          key={i}
          name={member.name}
          membership={member.membership}
          department={member.department}
          sosmed={member.sosmed}
          imageSrc={`/images/members/${member.img}`}
        />
      ))}
    </div>
  );
};

export default Members;
