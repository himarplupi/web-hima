import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';

const visiMisiContent = {
  badanEksekutif: {
    visi: `Mewujudkan dan mengoptimalkan HIMA RPL yang kompetitif, unggul dan kreatif dengan menjunjung tinggi budaya kekeluargaan yang demokratis.`,
    misi: [
      `Harmonisasi Membangun budaya organisasi yang harmonis, professional dan berkomitmen.`,
      `Kader Menciptakan kader yang berjiwa kepemimpinan serta memiliki integritas.`,
      `Advokasi Memaksimalkan peran HIMA RPL dalam pelayanan advokasi yang  dinamis dalam upaya menyejahterakan mahasiswa prodi RPL.`,
      `Prestasi (Mikat) Menjadikan HIMA RPL sebagai wadah pengembangan minat bakat dan potensi mahasiswa prodi RPL`,
      `Internal-Eksternal Menjalin dan menjaga kerjasama baik dengan organ internal dan eksternal kampus.`,
    ],
  },
  dewanPerwakilan: {
    visi: `Mewujudkan DP HIMA RPL yang bersinergi dengan berasaskan aspiratif serta sebagai lembaga yang eksplisit, professional dan fungsionalitas bagi civitas RPL`,
    misi: [
      `Menjalin kerjasama dengan pihak internal maupun pihak eksternal prodi.`,
      `Menampung aspirasi civitas RPL.`,
      `Melaksanakan tugas dan wewenang secara efektif.`,
      `Bertindak tegas dan transparan dalam fungsi pengawasan.`,
    ],
  },
};

const VisiMisiContent = ({ division }) => {
  let type;
  let title;

  if (division.toLowerCase() === 'be') {
    type = 'badanEksekutif';
    title = 'Badan Eksekutif';
  } else {
    type = 'dewanPerwakilan';
    title = 'Dewan Perwakilan';
  }

  const { visi, misi = [] } = visiMisiContent[type];
  return (
    <Disclosure as="div" className="mb-2 transition ease-in-out">
      {({ open }) => (
        <>
          <Disclosure.Button
            as="div"
            className="font-medium mb-4 text-lg cursor-pointer p-4 rounded-xl bg-white text-brand-footer"
          >
            <h3 className="flex flex-row justify-between">
              <span>{title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 ${open ? 'rotate-180 transform' : ''}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </h3>
          </Disclosure.Button>
          <Transition
            enter="transition duration-500 ease-in-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-in-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel as="div" className="leading-8">
              <p>
                <strong>Visi: </strong> {visi}
              </p>
              <p>
                <strong>Misi: </strong>
                {misi.map((misi, index) => `${index + 1}). ${misi} `)}
              </p>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

const VisiMisi = () => {
  return (
    <div className="w-full px-5 py-[60px] rounded-[20px] bg-web-color-orange-gradient grid place-items-center">
      <section className="section-3-content w-full flex flex-row justify-between items-center gap-x-[100px] xl:max-w-8xl">
        {/* START: Illustration */}
        <div className="bg-[#D9D9D9] w-[600px] h-[300px] rounded-[20px] md:block hidden"></div>
        {/* END: Illustration */}

        {/* START: Content */}
        <div className="w-full max-w-[716px] flex flex-col gap-y-[50px]">
          <div className="space-y-[30px] text-white">
            <h2 className="font-semibold text-4xl leading-[3.625rem]">
              Visi & Misi
            </h2>

            <div className="text-lg leading-[150%] space-y-4">
              <VisiMisiContent division={'be'} />
              <VisiMisiContent division={'dp'} />
            </div>
          </div>
        </div>
        {/* END: Content */}
      </section>
    </div>
  );
};

export default VisiMisi;
