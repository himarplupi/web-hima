import Link from 'next/link';

const Button = ({
  text = 'Button Text',
  type = 'button' || 'link' || 'anchor',
  theme = 'dark' || 'light' || 'green' || 'gradient',
  size = 'normal' || 'small',
  href = '',
  target = '_self',
  onClick = (e = new Event()) => {},
}) => {
  const baseClass = 'block w-fit rounded-[10px] font-semibold text-center';

  const themeClass = {
    dark: 'bg-web-color-dark-gray text-white',
    light: 'bg-white text-brand-footer',
    green: 'bg-brand-green text-white',
    gradient: 'bg-web-color-red-gradient text-white'
  };

  const sizeClass = {
    normal: 'px-[60px] py-[20px] text-lg leading-[1.375rem]',
    small: 'px-[40px] py-[20px] text-sm',
  };

  const isTypeButton = type === 'button';
  const isTypeLink = type === 'link';
  const isTypeAnchor = type === 'anchor';

  if (isTypeButton) {
    return (
      <button
        onClick={onClick}
        className={`${baseClass} ${sizeClass[size]} ${themeClass[theme]}`}
      >
        {text}
      </button>
    );
  }

  if (isTypeLink) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`${baseClass} ${sizeClass[size]} ${themeClass[theme]}`}
        target={target}
      >
        {text}
      </Link>
    );
  }

  if (isTypeAnchor) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseClass} ${sizeClass[size]} ${themeClass[theme]}`}
      >
        {text}
      </a>
    );
  }
};

export default Button;
