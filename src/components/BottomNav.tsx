import { Home, ClipboardCheck, Stethoscope, HelpCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

export function BottomNav() {
    const navItems = [
        { label: 'Home', path: '/', icon: Home },
        { label: 'Check-in', path: '/check', icon: ClipboardCheck },
        { label: 'Wound', path: '/wound', icon: Stethoscope },
        { label: 'Help', path: '/help', icon: HelpCircle },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div className="max-w-[480px] mx-auto h-[80px] flex items-center justify-around px-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            cn(
                                "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors active:scale-95 touch-manipulation",
                                isActive
                                    ? "text-blue-600"
                                    : "text-slate-400 hover:text-slate-600"
                            )
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <div className={cn(
                                    "p-1.5 rounded-xl transition-colors",
                                    isActive && "bg-blue-50"
                                )}>
                                    <item.icon className={cn(
                                        "w-7 h-7",
                                        isActive && "fill-current"
                                    )} />
                                </div>
                                <span className="text-xs font-semibold tracking-wide">{item.label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
