import Button from '../Button';

const podcasts = [
  'https://open.spotify.com/embed/episode/3odJmBOiRM92lIwBfC27XE',
  'https://open.spotify.com/embed/episode/42gr7Zx7vLKouI3N2Y03tN',
  'https://open.spotify.com/embed/episode/3lqizmp4SfFuNhs0kLGKgd',
  'https://open.spotify.com/embed/episode/36v00JuCNGAJelZIbEwTYu'
]

const Section5 = () => (
  <div className='w-full px-5 py-[60px] rounded-[20px] bg-web-color-dark-gray grid place-items-center'>
    <section className='section-5-content w-full flex flex-col items-center gap-y-[80px] xl:max-w-8xl'>
      <div className='space-y-[20px] text-center '>
        <h2
          className='font-semibold text-4xl leading-[3.625rem] bg-clip-text bg-web-color-red-gradient'
          style={{
            WebkitTextFillColor: 'transparent',
          }}
        >
          Rekan Podcast
        </h2>

        <p className='text-lg leading-[150%] text-white'>
          Yuk, dengerin obrolan-obrolan menarik dari HIMARPL di Rekan Podcast!
        </p>
      </div>

      {/* Spotify Card Container */}
      <div className='spotify-card-container w-full grid md:grid-cols-2 md:grid-rows-2 gap-[30px]'>
        {podcasts.map((podcast, index) => (
          <div
            className='w-full max-w-[680px] grid place-items-center bg-[#282828] rounded-[20px] shadow-[0px_0px_4px_rgba(0,0,0,0.04),0px_8px_16px_rgba(0,0,0,0.08)]'
            key={index}
          >
            <iframe style={{borderRadius: '12px'}} src={podcast} width={"100%"} height={"152"} frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        ))}
      </div>

      <Button
        text='Dengarkan di Spotify'
        type='link'
        href='https://open.spotify.com/show/3U3iuQcBYyzC5c13UieYFQ?si=3ffbd1e448ce4aba'
        size='small'
        theme='green'
      />
    </section>
  </div>
);

export default Section5;
