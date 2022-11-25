import Button from '../Button';
import Card from '../Card';

import spaceIllustration from '../../assets/image/space-illustration.png';

const Section4 = () => (
  <div className='w-full px-5 py-[60px] rounded-[20px] bg-web-color-light-gray grid place-items-center'>
    <section className='section-4-content w-full flex flex-col justify-center items-center gap-y-[50px] xl:max-w-8xl'>
      <h2 className='font-semibold text-5xl leading-[3.625rem] text-brand-footer'>
        Berita
      </h2>

      {/* Blog Cards */}
      <div className='blog-cards-container w-full flex flex-row justify-between'>
        <Card
          url='/'
          type='blog'
          title='Judul Blog - 1'
          category='Kategori'
          imageSrc={spaceIllustration}
          author='Admin'
          createdDate={new Date()}
        />

        <Card
          url='/'
          type='blog'
          title='Judul Blog - 2'
          category='Kategori'
          imageSrc={spaceIllustration}
          author='Admin'
          createdDate={new Date()}
        />

        <Card
          url='/'
          type='blog'
          title='Judul Blog - 3'
          category='Kategori'
          imageSrc={spaceIllustration}
          author='Admin'
          createdDate={new Date()}
        />
      </div>

      <Button
        text='Lebih Banyak'
        type='link'
        href='/blogs'
        theme='light'
        size='small'
      />
    </section>
  </div>
);

export default Section4;
