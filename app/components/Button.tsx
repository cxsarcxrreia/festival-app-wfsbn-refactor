import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  to: string; // Change interface to accept 'to'
  variant?: ButtonVariant;
  children: React.ReactNode;
}

// Destructure 'to' but pass it as 'href' to the Link component
export default function Button({ to, variant = 'primary', children }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-md font-bold text-center transition-all duration-300 shadow-md hover:shadow-lg inline-block";

  const variantClasses = {
    primary: 'bg-[#165031] text-white hover:bg-green-700',
    secondary: 'bg-[#165031]/20 text-[#165031] hover:bg-[#165031]/40',
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <Link href={to} className={finalClassName}> 
      {children}
    </Link>
  );
}