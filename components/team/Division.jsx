import React, { useEffect, useState } from 'react';
import MemberContainer from './member-components/MemberContainer';

const Division = ({ members: departments = [] }) => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    if (mobile.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);

  return (
    <>
      {departments.map((department, index) => (
        <MemberContainer
          key={index}
          isMobileMode={isMobile}
          department={department['department-name']}
          members={department.members}
        />
      ))}
    </>
  );
};

export default Division;
