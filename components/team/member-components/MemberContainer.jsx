import React from 'react';
import Members from './Members';

const MemberContainer = ({ isMobileMode, members = [], department = '' }) => {
  return (
    <div className="w-full px-5 py-[60px] rounded-[20px] bg-web-color-light-gray grid place-items-center">
      <section className="w-full flex flex-col flex-nowrap gap-y-[40px] xl:max-w-8xl text-brand-footer overflow-hidden">
        <div className="space-y-[20px] text-center ">
          <h2 className="font-semibold text-4xl leading-[3.625rem]">
            {department}
          </h2>
        </div>
        <div className="w-full flex flex-row flex-nowrap overflow-hidden">
          <Members isMobileMode={isMobileMode} members={members} />
        </div>
      </section>
    </div>
  );
};

export default MemberContainer;
