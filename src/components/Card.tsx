import React from 'react';
import { cn } from '../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    noPadding?: boolean;
}

export function Card({ children, className, noPadding = false, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden",
                !noPadding && "p-6",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("mb-4", className)}>
            {children}
        </div>
    );
}

export function CardTitle({ children, className }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3 className={cn("text-lg font-semibold text-slate-800", className)}>
            {children}
        </h3>
    );
}
