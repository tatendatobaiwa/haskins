import React from 'react';
import '../../styles/home.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  return (
    <button className={`custom-button button-${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
