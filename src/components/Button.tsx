import React from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg' | 'icon';
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 bg-gradient-to-br from-blue-500 to-blue-600",
        secondary: "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm",
        ghost: "text-slate-600 hover:bg-slate-100",
        danger: "bg-red-50 text-red-600 hover:bg-red-100 border border-red-100",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5",
        lg: "px-6 py-3 text-lg",
        icon: "p-2",
    };

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-xl",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
