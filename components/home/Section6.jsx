import Button from '../Button';
import Card from '../Card';

import spaceIllustration from '../../assets/image/space-illustration.png';

const Section6 = () => (
  <div className='w-full px-5 py-[60px] rounded-[20px] bg-web-color-light-gray grid place-items-center'>
    <section className='section-6-content w-full flex flex-col justify-center items-center gap-y-[50px] xl:max-w-8xl'>
      <h2 className='font-semibold text-5xl leading-[3.625rem] text-brand-footer'>
        Event
      </h2>

      {/* Blog Cards */}
      <div className='blog-cards-container w-full flex flex-row justify-between'>
        <Card
          url='/'
          type='event'
          title='Judul Event - 1'
          category='Kategori'
          imageSrc={spaceIllustration}
          createdDate={new Date()}
        />

        <Card
          url='/'
          type='event'
          title='Judul Event - 2'
          category='Kategori'
          imageSrc={spaceIllustration}
          createdDate={new Date()}
        />

        <Card
          url='/'
          type='event'
          title='Judul Event - 3'
          category='Kategori'
          imageSrc={spaceIllustration}
          createdDate={new Date()}
        />
      </div>

      <Button
        text='Lebih Banyak'
        type='link'
        href='/events'
        theme='light'
        size='small'
      />
    </section>
  </div>
);

export default Section6;
