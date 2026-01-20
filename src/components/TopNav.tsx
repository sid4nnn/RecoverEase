import { Search, Bell, Settings, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Button } from './Button';

export function TopNav() {
    const navItems = [
        { label: 'Dashboard', path: '/' },
        { label: 'Schedule', path: '/schedule' },
        { label: 'History', path: '/history' },
        { label: 'Activity', path: '/activity' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-16 flex items-center justify-between px-6">
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    R
                </div>
                <span className="font-bold text-xl text-slate-900 tracking-tight">RecoverEase</span>
            </div>

            {/* Center: Navigation Pills and Search */}
            <div className="flex items-center gap-8 flex-1 justify-center">
                {/* Nav Pills */}
                <nav className="hidden md:flex bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                cn(
                                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                                    isActive
                                        ? "bg-white text-blue-600 shadow-sm"
                                        : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                                )
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Search */}
                <div className="relative w-64 hidden lg:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all text-sm"
                    />
                </div>
            </div>

            {/* Right: User User & Actions */}
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="text-slate-500 relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-500">
                    <Settings className="w-5 h-5" />
                </Button>

                <div className="h-8 w-px bg-slate-200 mx-1"></div>

                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-slate-800">Sarah J.</p>
                        <p className="text-xs text-slate-500 font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full inline-block">Patient</p>
                    </div>
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 text-slate-400">
                        <User className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </header>
    );
}
