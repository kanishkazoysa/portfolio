import React from 'react';

interface CustomAnimatedButtonProps {
  title: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  className?: string;
  borderColors?: string[];
  backgroundColor?: string;
  textColor?: string;
}

const CustomAnimatedButton: React.FC<CustomAnimatedButtonProps> = ({
  title,
  icon,
  iconPosition = 'left',
  onClick,
  className = '',
  borderColors = ['#E2CBFF', '#393BB2', '#E2CBFF'],
  backgroundColor = 'bg-slate-950',
  textColor = 'text-white'
}) => {
  const gradientStyle = `conic-gradient(from 90deg at 50% 50%, ${borderColors.join(', ')})`;

  return (
    <button 
      className={`custom-animated-button relative inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none ${className}`} 
      onClick={onClick}
    >
      <span 
        className="custom-animated-button-border absolute inset-[-1000%] animate-[spin_4s_linear_infinite]" 
        style={{ background: gradientStyle }}
      />
      <span className={`custom-animated-button-content relative inline-flex h-full w-full items-center justify-center rounded-lg ${backgroundColor} ${textColor} px-4 py-1 text-sm font-medium transition-all duration-300 ease-in-out hover:bg-opacity-80`}>
        {iconPosition === 'left' && icon && <span className="mr-2">{icon}</span>}
        <span className="whitespace-nowrap">{title}</span>
        {iconPosition === 'right' && icon && <span className="ml-2">{icon}</span>}
      </span>
    </button>
  );
};

export default CustomAnimatedButton;