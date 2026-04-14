import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3 text-[15px] font-bold transition-all duration-300 rounded-full tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    // Solid Orange (Lenity style primary)
    primary: "bg-accent text-white border border-accent hover:bg-white hover:text-accent shadow-lg hover:shadow-xl",
    // Navy (Secondary) - Executive Matte with subtle orange hover
    secondary: "bg-primary text-white border border-primary hover:border-accent hover:text-accent shadow-md hover:shadow-lg",
    // Gradient (Original accent kept for special calls)
    accent: "bg-gradient-to-r from-[#F28C28] to-[#E07B17] text-white hover:shadow-depth hover:to-[#D06A06]",
    // Outline White
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary",
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};