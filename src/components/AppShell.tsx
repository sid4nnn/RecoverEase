import React from 'react';
import { BottomNav } from './BottomNav';

interface AppShellProps {
    children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 pb-[100px]">
            <main className="max-w-[480px] mx-auto p-4 md:p-6 w-full">
                {children}
            </main>
            <BottomNav />
        </div>
    );
}
