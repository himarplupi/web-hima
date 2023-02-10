import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <button
      type="button"
      className={`${
        isVisible ? 'visible' : 'invisible'
      } md:inline-block p-6 bg-brand-secondary text-white font-medium text-xs leading-tight uppercase rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl focus:bg-red-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-xl transition duration-150 ease-in-out hidden bottom-5 right-5 fixed`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 stroke-white stroke-[2px]"
      >
        <path
          fillRule="evenodd"
          d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
