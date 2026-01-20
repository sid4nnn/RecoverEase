import { useNavigate } from 'react-router-dom';
import { AppShell } from '../components/AppShell';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useAppStore } from '../store/useAppStore';
import {
    Activity,
    Thermometer,
    Pill,
    Moon,
    Footprints,
    ChevronRight,
    CheckCircle2,
    Phone,
    Bell,
    Users
} from 'lucide-react';

export default function Dashboard() {
    const navigate = useNavigate();
    const { user } = useAppStore();

    // Mock data for health cards
    const healthStats = [
        { label: 'Pain Level', value: '2/10', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-50' },
        { label: 'Temperature', value: '36.8°C', icon: Thermometer, color: 'text-orange-500', bg: 'bg-orange-50' },
        { label: 'Next Meds', value: '2:00 PM', icon: Pill, color: 'text-purple-500', bg: 'bg-purple-50' },
        { label: 'Sleep', value: '7h 20m', icon: Moon, color: 'text-indigo-500', bg: 'bg-indigo-50' },
        { label: 'Steps', value: '1,240', icon: Footprints, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    ];

    return (
        <AppShell>
            <div className="flex flex-col gap-6">
                {/* Greeting & Date */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                        <div>
                            <h1 className="text-2xl font-bold text-slate-800">Hi, {user.name}</h1>
                            <p className="text-slate-500 text-sm">Day {user.recoveryDay} of recovery</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="secondary"
                            size="icon"
                            className="bg-white shadow-sm border border-slate-100 text-slate-600 relative w-12 h-12 rounded-2xl"
                            onClick={() => navigate('/notifications')}
                        >
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                        </Button>
                    </div>
                </div>

                {/* Today's Status Card */}
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 border-none text-white shadow-lg shadow-blue-500/20">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <CheckCircle2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold">You're doing great</h2>
                            <p className="text-blue-100 text-sm">Status: Stable & Improving</p>
                        </div>
                    </div>
                </Card>

                {/* Primary Actions */}
                <div className="grid grid-cols-1 gap-4">
                    <Button
                        size="lg"
                        className="h-16 text-lg font-semibold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 rounded-2xl flex items-center justify-between px-6"
                        onClick={() => navigate('/check')}
                    >
                        <span>Start Daily Check-in</span>
                        <ChevronRight className="w-6 h-6 opacity-80" />
                    </Button>

                    <div className="grid grid-cols-2 gap-4">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="h-24 font-semibold bg-white border-2 border-slate-100 hover:bg-slate-50 hover:border-blue-100 text-slate-800 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-sm"
                            onClick={() => navigate('/wound')}
                        >
                            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                                <Activity className="w-5 h-5" />
                            </div>
                            <span className="text-sm">Check Wound</span>
                        </Button>
                        <Button
                            size="lg"
                            variant="secondary"
                            className="h-24 font-semibold bg-white border-2 border-slate-100 hover:bg-slate-50 hover:border-purple-100 text-slate-800 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-sm"
                            onClick={() => navigate('/family-updates')}
                        >
                            <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
                                <Users className="w-5 h-5" />
                            </div>
                            <span className="text-sm">Family Updates</span>
                        </Button>
                    </div>
                </div>

                {/* Health Snapshots */}
                <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3">Health Snapshot</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {healthStats.map((stat, i) => (
                            <Card
                                key={i}
                                className={`p-4 flex flex-col gap-2 ${stat.label === 'Next Meds' ? 'cursor-pointer active:scale-95 transition-transform' : ''}`}
                                noPadding
                                onClick={() => stat.label === 'Next Meds' && navigate('/medications')}
                            >
                                <div className={`w-8 h-8 ${stat.bg} ${stat.color} rounded-lg flex items-center justify-center`}>
                                    <stat.icon className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="text-xs text-slate-500 font-medium block">{stat.label}</span>
                                    <span className="text-lg font-bold text-slate-800">{stat.value}</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Emergency Section */}
                <div className="mt-4 pt-6 border-t border-slate-100">
                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-2xl border border-red-100/50">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-red-900">Need urgent help?</h4>
                                <p className="text-xs text-red-600/80">Call your clinic or emergency services</p>
                            </div>
                        </div>
                        <Button
                            size="sm"
                            variant="ghost"
                            className="text-red-600 hover:bg-red-100"
                            onClick={() => window.location.href = 'tel:911'}
                        >
                            Call
                        </Button>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}
