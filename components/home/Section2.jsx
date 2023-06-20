import Button from '../Button';
import WindowCard from './WindowCard';

const Section2 = ({ content }) => (
  <div className='w-full px-5 h-fit rounded-[20px] bg-web-color-light-gray grid place-items-center'>
    <section className='section-2-content w-full flex flex-col gap-y-[60px] -translate-y-[140px] xl:max-w-8xl'>
      <WindowCard title={content?.title} imageSrc={content.image} />

      <div className='flex flex-row flex-wrap justify-between items-center'>
        <div className='w-full max-w-[500px] text-brand-footer space-y-5 md:mb-0 mb-8'>
          <h2 className='font-semibold text-4xl leading-[2.75rem]'>
            {content?.title}
          </h2>

          <p className='text-lg leading-[1.5rem] opacity-70'>
            {content?.description}
          </p>
        </div>

        <Button text='Cari Tahu #KabinetExplora' type='link' href='/kabinet' />
      </div>
    </section>
  </div>
);

export default Section2;
