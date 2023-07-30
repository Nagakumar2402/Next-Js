import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div className={`w-[1280px] mx-auto px-5 md:px-10 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
