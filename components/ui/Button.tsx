
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ to, onClick, children, variant = 'primary', className = '' }) => {
  const baseClasses = "inline-block font-heading font-semibold text-center px-8 py-3 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-lg";
  const variantClasses = {
    primary: "bg-accent text-white hover:bg-orange-500",
    secondary: "bg-secondary text-white hover:bg-green-700",
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={finalClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={finalClassName}>
      {children}
    </button>
  );
};

export default Button;
