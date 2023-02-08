import Button from '../Button';
import WindowCard from './WindowCard';

import PhotoKabinet from '../../assets/image/foto-kabinet-explora.webp';

const Section2 = () => (
  <div className='w-full px-5 h-fit rounded-[20px] bg-web-color-light-gray grid place-items-center'>
    <section className='section-2-content w-full flex flex-col gap-y-[60px] -translate-y-[140px] xl:max-w-8xl'>
      <WindowCard title='Kabinet Explora' imageSrc={PhotoKabinet} />

      <div className='flex flex-row flex-wrap justify-between items-center'>
        <div className='w-full max-w-[500px] text-brand-footer space-y-5 md:mb-0 mb-8'>
          <h2 className='font-semibold text-4xl leading-[2.75rem]'>
            Kabinet Explora
          </h2>

          <p className='text-lg leading-[1.5rem]'>
            Nama dari kabinet yang kini sedang menjalankan masa kerjanya pada
            periode 22/23 ini yang dipimpin oleh Ali Aziz Fadilah dan Bagus
            Subagja.
          </p>
        </div>

        <Button text='Cari Tahu #KabinetExplora' type='link' href='/' />
      </div>
    </section>
  </div>
);

export default Section2;
