import React, { HTMLProps } from 'react';

interface SeparatorProps extends HTMLProps<HTMLDivElement> { }

export default function Separator({ className, ...props }: SeparatorProps) {
    return (
        <div
            className={`border-b border-gray-300 my-2 w-full ${className}`}
            {...props}
        />
    );
}
