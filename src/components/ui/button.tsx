import React, { ReactNode } from "react";

interface ButtonProps {
  size: string;
  variant: string;
  onClick?: () => void;
  children: ReactNode; // Add children prop
}

const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  onClick,
  children,
}) => {
  return (
    <button onClick={onClick} className={`btn ${size} ${variant}`}>
      {children} {/* Render children */}
    </button>
  );
};

export default Button;
