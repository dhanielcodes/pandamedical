import React from 'react';

interface IProps {
  text: string;
  submit?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ text, submit, className, onClick, disabled }: IProps) => (
  <button
    type={submit ? 'submit' : 'button'}
    className={`btn-primary ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

Button.defaultProps = {
  submit: false,
  disabled: false,
  className: '',
  onClick: () => {},
};

export default Button;
