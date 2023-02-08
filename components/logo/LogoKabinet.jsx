import React, { useEffect } from 'react';
import $ from 'jquery';
import { useKabinetContext } from './context/KabinetContext';

const philosophyLogo = {
  letter: {
    title: 'Leter C dan E',
    description:
      'Huruf C bermakna organisasi yang memfokuskan visi agar tidak menyimpang. Sedangkan huruf E sendiri merupakan inisial dari kabinet Explora.',
  },
  compas: {
    title: 'Kompas',
    description:
      'Jarum kompas memiliki arti sebagai pengarah dan petunjuk arah tujuan. Arah diagonal yang ditunjukkan oleh jarum menunjukkan bahwa jalan yang ditempuh tidak monoton.',
  },
  saturnus: {
    title: 'Saturnus',
    description:
      'Planet Saturnus seperti peta yang menunjukkan keberadaan yang “harus”. Saturnus bermaksud segala tanggung jawab dan komitmen harus didedikasikan sepenuh hati.',
  },
  explora: {
    title: 'Kabinet Explora',
    description:
      'Explora yang diambil dari kata eksplorasi, artinya kegiatan untuk memperoleh pengalaman baru dari situasi yang baru.',
  },
};

const LogoKabinet = () => {
  const { title, description } = useKabinetContext();

  const handleLogoContent = (pathLogo) => {
    title.setValue(philosophyLogo[pathLogo].title);
    description.setValue(philosophyLogo[pathLogo].description);
  };

  useEffect(() => {
    $('#logogram path').click(function () {
      $('path').css({
        fill: '#838383',
      });

      handleLogoContent($(this).attr('class'));

      if ($(this).hasClass('letter')) {
        $(this).css({
          fill: '#48BF91',
        });
        $('.compas').css({
          fill: '#3A55B4',
        });
      }
      if ($(this).hasClass('compas')) {
        $(this).css({
          fill: '#3A55B4',
        });
        // showKabinetDesc('compas');
      }
      if ($(this).hasClass('saturnus')) {
        $(this).css({
          fill: '#3A55B4',
        });
        $('.compas').css({
          fill: '#3A55B4',
        });
        // showKabinetDesc('saturnus');
      }
    });

    $('#logotype').click(function () {
      $('path').css({
        fill: '#838383',
      });

      handleLogoContent('explora');

      $('#logotype path').css({
        fill: '#3A55B4',
      });

      if ($('#logotype path').hasClass('xp')) {
        $('#logotype .xp').css({
          fill: '#48BF91',
        });
      }
    });
  }, [handleLogoContent]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="350"
      height="300"
      viewBox="0 0 829 712"
      fill="none"
      className="md:w-[350px] w-[260px]"
    >
      <g clipPath="url(#clip0_38_58)" className="path-group" id="logogram">
        <path
          className="letter"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M395.796 0.453991C321.457 6.89172 255.411 42.4295 209.888 100.485C153.545 172.341 139.322 270.769 173.032 355.54C192.018 403.281 223.351 443.165 265.56 473.32C325.816 516.369 405.125 531.435 478.318 513.73C577.067 489.846 653.423 410.316 673.207 310.736C674.254 305.485 675.305 298.651 675.547 295.549L675.99 289.909L673.492 289.476C669.647 288.81 598.947 280.948 598.752 281.166C598.657 281.271 598.036 284.838 597.372 289.093C594.637 306.623 589.132 323.744 580.715 340.888C553.807 395.699 501.2 433.214 439.635 441.495C429.191 442.901 405.963 443.116 396.164 441.899C337.799 434.649 288.114 402.448 258.582 352.73C211.591 273.62 232.162 170.605 306.063 114.962C332.27 95.2291 362.039 83.3393 396.164 78.9749C412.112 76.9353 437.924 78.2759 455.447 82.0541C464.013 83.9003 481.649 89.6067 489.966 93.2218L496.09 95.8833L497.826 92.0361C498.781 89.9203 506.365 74.1422 514.679 56.9738C522.994 39.8052 529.57 25.5276 529.292 25.2456C528.271 24.2071 510.902 17.1091 501.569 13.9163C483.926 7.88032 466.11 3.83994 446.635 1.45729C435.535 0.0992363 406.508 -0.473658 395.796 0.453991Z"
          fill="#838383"
        ></path>
        <path
          className="saturnus"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M402.334 157.719C357.669 163.959 322.749 196.494 313.807 240.198C311.845 249.789 311.22 263.327 312.326 272.286C313.142 278.891 315.601 289.951 316.683 291.878C316.997 292.436 330.87 279.409 354.281 256.569L391.382 220.374L441.956 206.189C469.772 198.388 492.676 191.881 492.855 191.731C493.534 191.159 484.878 183.076 478.14 177.989C465.886 168.738 450.282 161.852 434.691 158.816C427.362 157.389 409.122 156.771 402.334 157.719ZM475.495 264.806L437.829 301.298L388 315.222C360.593 322.879 338.17 329.336 338.17 329.569C338.17 330.177 345.2 336.827 349.959 340.722C362.751 351.191 377.904 358.335 395.134 362.02C405.247 364.183 425.303 364.37 434.691 362.388C477.37 353.38 508.299 322.874 517.34 280.871C519.476 270.953 519.698 250.754 517.771 241.804C516.104 234.065 514.336 228.206 513.684 228.266C513.396 228.292 496.211 244.736 475.495 264.806Z"
          fill="#838383"
        ></path>
        <path
          className="compas"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M471.063 206.414C429.931 218.014 395.902 227.651 395.443 227.829C394.529 228.181 285.169 334.963 284.781 335.881C284.65 336.193 285.479 336.137 286.623 335.756C287.768 335.375 320.7 326.12 359.806 315.189C398.912 304.259 431.65 295.003 432.558 294.62C434.005 294.01 546.217 186.265 546.217 185.485C546.217 185.319 546.134 185.214 546.033 185.252C545.931 185.29 512.195 194.813 471.063 206.414Z"
          fill="#838383"
        ></path>
      </g>
      <g className="path-group" id="logotype">
        <path
          className="xp"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M107 591.333C107 591.579 115.087 604.918 124.97 620.976C134.854 637.034 142.638 650.671 142.268 651.279C141.899 651.888 133.587 665.121 123.798 680.688C114.009 696.254 106 709.191 106 709.438C106 709.684 112.419 709.885 120.265 709.885H134.53L145.852 690.958C152.079 680.548 157.725 671.276 158.398 670.355C159.453 668.913 161.331 671.539 171.939 689.284L184.255 709.885H198.686C209.964 709.885 212.955 709.612 212.371 708.635C210.71 705.857 178.705 654.365 177.423 652.409C176.147 650.462 177.402 648.075 194.01 620.844L211.977 591.385L198.318 591.107C190.244 590.942 184.254 591.232 183.669 591.817C183.125 592.361 177.677 601.228 171.563 611.521C165.449 621.814 160.009 630.372 159.473 630.536C158.938 630.701 153.204 621.846 146.731 610.86L134.963 590.885H120.981C113.292 590.885 107 591.087 107 591.333ZM245 650.385V709.885H257.5H270V690.385V670.885H285.411C302.218 670.885 308.697 669.597 317.327 664.539C340.944 650.699 340.115 609.607 315.953 596.456C306.658 591.397 302.873 590.911 272.75 590.898L245 590.885V650.385ZM293.98 611.974C302.395 613.779 307.148 619.018 308.49 627.969C309.842 636.983 305.456 645.41 297.541 649.005C294.366 650.447 290.981 650.847 281.75 650.864L270 650.885V630.885V610.885H279.451C284.649 610.885 291.187 611.375 293.98 611.974Z"
          fill="#838383"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M510.402 590.372C493.325 594.087 479.547 607.434 473.308 626.307C470.893 633.611 470.631 635.87 470.573 649.885C470.501 667.239 471.467 671.906 477.69 684.262C494.899 718.436 543.797 720.864 564.969 688.597C567.211 685.18 570.243 678.785 571.707 674.385C574.138 667.077 574.371 665.001 574.394 650.385C574.418 635.627 574.211 633.758 571.721 626.307C562.454 598.576 538.152 584.334 510.402 590.372ZM0 650.385V709.885H36.5H73V703.385V696.885H43.5H14V676.885V656.885H41H68V650.385V643.885H40.979H13.959L14.229 623.635L14.5 603.385L43.25 603.12L72 602.854V596.87V590.885H36H0V650.385ZM371 650.385V709.885H405.5H440V703.385V696.885H412.5H385V643.885V590.885H378H371V650.385ZM616 650.385V709.885H623H630V686.385V662.885H644.515H659.029L660.765 665.765C661.719 667.348 667.45 677.913 673.5 689.243L684.5 709.843L692.776 709.864L701.051 709.885L699.395 706.635C698.485 704.847 692.623 694.075 686.37 682.695C680.116 671.316 675.012 661.641 675.026 661.195C675.04 660.75 676.911 659.527 679.183 658.477C702.419 647.749 702.327 607.146 679.04 595.42C671.465 591.606 665.254 590.885 639.951 590.885H616V650.385ZM749 649.531C737.175 681.774 727.343 708.564 727.152 709.064C726.956 709.576 730.172 709.844 734.511 709.679L742.219 709.385L745.587 699.885C747.44 694.66 750.139 687.115 751.586 683.117L754.216 675.851L778.311 676.117L802.406 676.385L808.354 693.135L814.301 709.885H821.757C827.286 709.885 829.102 709.562 828.782 708.635C828.545 707.948 818.747 681.173 807.01 649.135L785.67 590.885L778.085 590.896L770.5 590.906L749 649.531ZM539.826 606.855C553.795 614.341 561 629.169 561 650.432C561 654.931 560.541 661.034 559.979 663.994C557.527 676.927 548.559 689.497 538.126 694.622C533.097 697.092 531.439 697.381 522.5 697.348C510.59 697.305 505.715 695.506 498.024 688.312C491.589 682.292 488.377 676.679 485.96 667.229C479.816 643.205 487.208 617.607 503.035 608.103C510.686 603.509 513.203 602.921 524 603.21C532.637 603.441 534.075 603.772 539.826 606.855ZM669.692 605.848C678.61 609.684 682.165 615.683 682.236 627.016C682.307 638.421 676.973 646.131 667.118 648.869C665.128 649.422 655.962 649.876 646.75 649.879L630 649.885V627.052C630 614.493 630.337 603.865 630.75 603.432C631.163 603 638.943 602.872 648.04 603.148C662.15 603.576 665.332 603.972 669.692 605.848ZM779 610.187C779 610.353 783.05 621.867 788 635.775C792.95 649.682 797 661.471 797 661.973C797 662.491 788.74 662.885 777.893 662.885C763.036 662.885 758.885 662.607 759.232 661.635C759.478 660.948 763.689 649.025 768.589 635.14C773.49 621.255 777.837 609.892 778.25 609.89C778.663 609.888 779 610.021 779 610.187Z"
          fill="#838383"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_38_58">
          <rect
            width="521"
            height="521"
            fill="white"
            transform="translate(155)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoKabinet;