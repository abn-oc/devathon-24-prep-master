import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button
            className={`border p-2 rounded-lg w-full hover:bg-black bg-white hover:text-white text-black transition-all duration-200 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
