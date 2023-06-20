import React, { useEffect } from 'react';
import $ from 'jquery';

import { useLogoContext as useHimaRplContext } from './context/LogoContext';

const philosophyLogo = {
  hexagon:
    'Terinspirasi dari bentuk sarang lebah yang diciptakan oleh Tuhan dengan teknologi yang sangat tinggi, seperti sarang lebah dengan bentuk hexagonalnya yang memberikan efektifitas dengan hasil maksimal.',
  network:
    'Melambangkan hubungan dan relasi yang kuat, cepat, kompetitif, dan semangat juara. Tingatan tersebut juga berarti ada pencapaian dan perkembangan yang didapat.',
  tool: 'Melambangkan Ke-Teknikan yang mengacu pada 3 bentuk landasan yaitu hubungan, kerjasama, dan keterkaitan. Dimana ketiga landasan tersebut menjadi pondasi awal dalam meraih keberhasilan.',
};

const LogoHimaRpl = () => {
  const { title, description } = useHimaRplContext();

  useEffect(() => {
    const handleHexagonLogo = () => {
      $('.logo1').click(function (e) {
        $('.logo1:nth-child(1)').css({
          fill: '#d9d9d6',
          transition: 'all 0.2 ease-in-out',
          cursor: 'pointer',
        });
        $('.logo1:nth-child(2),.logo1:nth-child(3)').css({
          fill: '#a5232d',
          transition: 'all 0.2 ease-in-out',
          cursor: 'pointer',
        });
        $('.logo1:nth-child(4),.logo1:nth-child(5)').css({
          fill: '#e77843',
          transition: 'all 0.2 ease-in-out',
          cursor: 'pointer',
        });
        $('.logo3,.logo2').css({
          fill: '#434343',
          transition: 'all 0.2 ease-in-out',
        });
  
        // ADD title & description logo
        title.setValue('Hexagon');
        description.setValue(philosophyLogo.hexagon);
      });
    };
  
    const handleNetworkLogo = () => {
      $('.logo3').click(function () {
        $('.logo3').css({
          fill: '#a5232d',
          transition: 'all 0.2 ease-in-out',
          cursor: 'pointer',
        });
        $('.logo2,.logo1').css({
          fill: '#434343',
          transition: 'all 0.2 ease-in-out',
        });
  
        // ADD title & description logo
        title.setValue('Network (Connection)');
        description.setValue(philosophyLogo.network);
      });
    };
  
    const handleToolsLogo = () => {
      $('.logo2').click(function () {
        $('#logo21').css({
          fill: '#a5232d',
          transition: 'all 0.2 ease-in-out',
          cursor: 'pointer',
        });
        $('#logo22').css({
          fill: '#e77843',
          transition: 'all 0.2 ease-in-out',
          cursor: 'pointer',
        });
        $('#logo23').css({
          fill: '#d9d9d6',
          transition: 'all 0.2 ease-in-out',
          cursor: 'pointer',
        });
        $('.logo3,.logo1').css({
          fill: '#434343',
          transition: 'all 0.2 ease-in-out',
        });
  
        // ADD title & description logo
        title.setValue('Alat');
        description.setValue(philosophyLogo.tool);
      });
    };
    
    handleHexagonLogo();
    handleNetworkLogo();
    handleToolsLogo();
  }, [title, description]);

  return (
    <>
      <svg
        width="350"
        height="300"
        viewBox="0 0 350 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-[350px] w-10/12 logo-himarpl"
      >
        <path
          d="M89.6829 72.183L216.342 0L343 72.1829L274.882 111.865L216.342 77.2787L157.827 111.85L89.6829 72.183Z"
          fill="#434343"
          className="logo1"
        />
        <path
          d="M210.415 300L83 227.395V192.329L210.415 264.332V300Z"
          fill="#434343"
          className="logo1"
        />
        <path
          d="M153.518 186.099L210.414 218.118L210.416 218.119V253.482L83.0469 181.521L83.0001 181.602V150L118.267 169.818V164.188L83.0001 144.37V121.774L118.267 141.593V135.963L83.0001 116.144L83.0001 93.5484L118.267 113.367V107.737L83.0001 87.9183V82.2654L153.518 121.895V186.099Z"
          fill="#434343"
          className="logo1"
        />
        <path
          d="M318.985 209.374V99.5091L349.669 82.2666V227.396L222.252 299.998V264.291"
          fill="#434343"
          className="logo1"
        />
        <path
          d="M279.152 186.097V121.893L309.836 104.65V204.13L222.252 253.823V218L279.152 186.097Z"
          fill="#434343"
          className="logo1"
        />
        <path
          d="M210.586 167.226V218.128L204.916 214.937V170.502L196.192 165.629L190.522 162.457V156.018L196.192 159.186L196.694 159.466L204.916 164.058L210.586 167.226Z"
          fill="#434343"
          className="logo2"
          id="logo21"
        />
        <path
          d="M228.094 170.502V214.938L222.424 218.01V167.226L228.094 164.058L236.787 159.199L236.818 159.186V125.589L228.173 120.756L222.503 117.588V111.162L228.173 114.33L236.818 119.159V119.149L236.914 119.202H236.927V119.209L242.457 122.303V162.474L236.818 165.629L236.787 165.642L228.094 170.502Z"
          fill="#434343"
          className="logo2"
          id="logo22"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M158 111.86L201.95 137.437C201.373 139.055 201.078 140.759 201.079 142.476C201.072 146.099 202.365 149.608 204.728 152.376C207.091 155.145 210.371 156.993 213.982 157.593C217.594 158.192 221.304 157.503 224.45 155.649C227.597 153.795 229.976 150.896 231.164 147.469C232.353 144.041 232.273 140.308 230.939 136.933C229.605 133.558 227.103 130.762 223.88 129.041C220.657 127.321 216.921 126.789 213.338 127.539C209.755 128.289 206.558 130.274 204.316 133.139L162.842 109L158 111.86ZM216.341 153.01C222.14 153.01 226.841 148.31 226.841 142.51C226.841 136.711 222.14 132.01 216.341 132.01C210.542 132.01 205.841 136.711 205.841 142.51C205.841 148.31 210.542 153.01 216.341 153.01Z"
          fill="#434343"
          className="logo2"
          id="logo23"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M153.849 122.321L83.3312 82.6918V82.6993L30.2525 52.8778C31.6302 49.2372 31.5709 45.2167 30.0866 41.6175C28.6022 38.0182 25.8018 35.1045 22.2433 33.4569C18.6848 31.8094 14.6295 31.549 10.8856 32.7276C7.14176 33.9063 3.98418 36.4374 2.04211 39.8167C0.100048 43.1959 -0.483888 47.1751 0.406669 50.9613C1.29723 54.7475 3.59689 58.0627 6.84737 60.2462C10.0979 62.4297 14.0605 63.3212 17.9456 62.7431C21.8307 62.165 25.3531 60.1596 27.8107 57.1267L83.3312 88.3297V88.3448L118.598 108.163V113.793L83.3312 93.9749V110.925L46.5965 90.2867C47.9763 86.652 47.9216 82.6364 46.4432 79.0399C44.9647 75.4434 42.1712 72.53 38.619 70.8803C35.0669 69.2305 31.017 68.9654 27.2762 70.1379C23.5353 71.3103 20.3783 73.8342 18.434 77.2067C16.4896 80.5792 15.9008 84.5527 16.7848 88.3355C17.6688 92.1183 19.9607 95.4328 23.2038 97.6185C26.447 99.8041 30.4034 100.701 34.2846 100.129C38.1659 99.558 41.6872 97.5607 44.1469 94.5356L83.3311 116.556V116.571L118.598 136.389V142.019L83.3311 122.201V139.151L61.2553 126.747C62.6282 123.111 62.5663 119.097 61.0819 115.504C59.5975 111.911 56.7996 109.004 53.2457 107.36C49.6917 105.717 45.6425 105.459 41.905 106.638C38.1674 107.817 35.0158 110.345 33.078 113.72C31.1402 117.095 30.5585 121.068 31.4489 124.848C32.3392 128.628 34.6362 131.938 37.8822 134.117C41.1282 136.297 45.0849 137.186 48.9639 136.608C52.843 136.031 56.3597 134.028 58.8134 131L83.3311 144.781V144.797L118.598 164.615V170.245L83.3312 150.426V182.028L83.378 181.947C108.246 195.997 113.43 198.967 118.612 201.936L118.613 201.937C123.796 204.906 128.979 207.875 153.849 221.927V122.321ZM15.5 57.4265C21.299 57.4265 26 52.7255 26 46.9265C26 41.1275 21.299 36.4265 15.5 36.4265C9.70101 36.4265 5 41.1275 5 46.9265C5 52.7255 9.70101 57.4265 15.5 57.4265ZM42 84.9265C42 90.7255 37.299 95.4265 31.5 95.4265C25.701 95.4265 21 90.7255 21 84.9265C21 79.1275 25.701 74.4265 31.5 74.4265C37.299 74.4265 42 79.1275 42 84.9265ZM46.5 131.427C52.299 131.427 57 126.726 57 120.927C57 115.128 52.299 110.427 46.5 110.427C40.701 110.427 36 115.128 36 120.927C36 126.726 40.701 131.427 46.5 131.427Z"
          fill="#434343"
          className="logo3"
        />
      </svg>
    </>
  );
};

export default LogoHimaRpl;
