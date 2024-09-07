import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button
            className={`border border-transparent p-2 rounded-lg w-full hover:bg-primary bg-white hover:text-white text-black transition-all duration-200 font-medium ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
