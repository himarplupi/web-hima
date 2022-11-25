import Button from '../Button';

const Section5 = () => (
  <div className='w-full px-5 py-[60px] rounded-[20px] bg-web-color-dark-gray grid place-items-center'>
    <section className='section-5-content w-full flex flex-col items-center gap-y-[80px] xl:max-w-8xl'>
      <div className='space-y-[20px] text-center '>
        <h2
          className='font-semibold text-5xl leading-[3.625rem] bg-clip-text bg-web-color-red-gradient'
          style={{
            WebkitTextFillColor: 'transparent',
          }}
        >
          Rekan Podcast
        </h2>

        <p className='text-2xl leading-[150%] text-white'>
          Yuk, dengerin obrolan-obrolan menarik dari HIMARPL di Rekan Podcast!
        </p>
      </div>

      {/* Spotify Card Container */}
      <div className='spotify-card-container w-full grid grid-cols-2 grid-rows-2 gap-[30px]'>
        {[...Array(4)].map((item, index) => (
          <div
            key={index}
            className='w-full max-w-[680px] h-[352px] grid place-items-center bg-[#282828] rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.04),0px_8px_16px_rgba(0,0,0,0.08)]'
          >
            <h3 className='font-bold text-5xl leading-[3.625rem] text-white opacity-20'>
              aset spotify
            </h3>
          </div>
        ))}
      </div>

      <Button
        text='Dengarkan di Spotify'
        type='link'
        href='https://spotify.com/'
        size='small'
        theme='green'
      />
    </section>
  </div>
);

export default Section5;
