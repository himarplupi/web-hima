import React from 'react';

const Description = () => {
  return (
    <div className="w-full px-6 py-24 h-fit rounded-[20px] bg-web-color-light-gray grid place-items-center mb-4">
      <section className="section-3-content w-full flex flex-row justify-between items-center gap-x-[100px] xl:max-w-8xl">
        {/* START: Content */}
        <div className="w-full max-w-[716px] flex flex-col gap-y-[50px]">
          <div className="space-y-[30px] text-brand-footer">
            <h2 className="font-semibold text-4xl leading-[3.625rem]">
              HIMARPL
            </h2>

            <p className="text-lg leading-[150%]">
            HIMARPL atau <strong>Himpunan Mahasiswa Rekayasa Perangkat Lunak</strong> dibentuk pada <time>14 Desember 2019</time> yang berada di Universitas Pendidikan Indonesia Kampus Daerah Cibiru, HIMARPL merupakan satu –satunya organisasi kemahasiswaan pada program studi rekayasa perangkat lunak. HIMARPL dibentuk pada saat mekanisme forum demokrasi tertinggi yaitu dalam musyawarah mahasiswa HIMARPL yang dihadiri oleh seluruh angkatan pertama program studi Rekayasa Perangkat Lunak.
            </p>
          </div>
        </div>
        {/* END: Content */}

        {/* START: Illustration */}
        <div className="bg-[#D9D9D9] w-[600px] h-[300px] rounded-[20px] md:block hidden"></div>
        {/* END: Illustration */}
      </section>
    </div>
  );
};

export default Description;
