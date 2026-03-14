
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
