import React from 'react';
import Hero from '../../components/Hero';
import Division from '../../components/team/Division';
import badanEksekutif from '../../assets/data/badan-eksekutif.json';
import dewanPerwakilan from '../../assets/data/dewan-perwakilan.json';

export const getServerSideProps = ({ query }) => {
  const { department } = query;
  const title = department === 'dp'
    ? 'Dewan Perwakilan'
    : 'Badan Eksekutif';
  const members = department === 'dp'
    ? dewanPerwakilan
    : badanEksekutif;

  // Pass data to the page via props
  return {
    props: {
      title,
      members,
    },
  };
};

const Team = ({ title, members }) => {
  return (
    <>
      <main className="w-full flex flex-col gap-y-5">
        <Hero title={title} />
        <Division members={members} />
      </main>
    </>
  );
};

export default Team;
