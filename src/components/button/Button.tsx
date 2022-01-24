/** @jsx h */
import { h } from 'preact';
import './button.less';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary'
  label: string;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  colored?: boolean;
}

export const Button = ({ variant = 'primary', label, colored = true, isLoading, ...props }: ButtonProps) => {
  const skin: string = colored ? '' :  `-dark-skin` ;
  const buttonClass: string = isLoading ? `button-${variant}${skin}-loading` : `button-${variant}${skin}`;

  return (
    <button
      type="button"
      className={['button', `${buttonClass}`].join(' ')}
      { ...props }
    >
      {label}
    </button>
  );
};
