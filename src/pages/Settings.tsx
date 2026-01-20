import { AppShell } from '../components/AppShell';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useAppStore } from '../store/useAppStore';
import { User, Eye, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';

export default function Settings() {
    const { user, setUserRole } = useAppStore();
    const [lowFocus, setLowFocus] = useState(false);

    return (
        <AppShell>
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold text-slate-800 mb-6">Settings</h1>

                <div className="space-y-6">
                    <Card>
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <User className="w-5 h-5 text-blue-500" /> Profile
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <label className="block text-slate-500 mb-1">Name</label>
                                <p className="font-medium text-slate-800">{user.name}</p>
                            </div>
                            <div>
                                <label className="block text-slate-500 mb-1">Surgery Check</label>
                                <p className="font-medium text-slate-800">{user.surgeryType}</p>
                            </div>
                            <div>
                                <label className="block text-slate-500 mb-1">Date</label>
                                <p className="font-medium text-slate-800">{user.surgeryDate}</p>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Eye className="w-5 h-5 text-emerald-500" /> Accessibility & Mode
                        </h3>

                        <div className="flex items-center justify-between py-2">
                            <div>
                                <p className="font-medium text-slate-800">Caregiver Mode</p>
                                <p className="text-xs text-slate-500">Adjusts instructions for a helper.</p>
                            </div>
                            <button
                                onClick={() => setUserRole(user.role === 'patient' ? 'caregiver' : 'patient')}
                                className={cn(
                                    "w-12 h-6 rounded-full transition-colors relative",
                                    user.role === 'caregiver' ? "bg-blue-600" : "bg-slate-200"
                                )}
                            >
                                <span className={cn(
                                    "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                                    user.role === 'caregiver' ? "left-7" : "left-1"
                                )} />
                            </button>
                        </div>

                        <div className="h-px bg-slate-100 my-4" />

                        <div className="flex items-center justify-between py-2">
                            <div>
                                <p className="font-medium text-slate-800">Low Focus Mode</p>
                                <p className="text-xs text-slate-500">Larger text and simplified layout.</p>
                            </div>
                            <button
                                onClick={() => setLowFocus(!lowFocus)}
                                className={cn(
                                    "w-12 h-6 rounded-full transition-colors relative",
                                    lowFocus ? "bg-blue-600" : "bg-slate-200"
                                )}
                            >
                                <span className={cn(
                                    "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                                    lowFocus ? "left-7" : "left-1"
                                )} />
                            </button>
                        </div>
                    </Card>

                    <Button variant="ghost" className="w-full text-red-500 hover:bg-red-50 hover:text-red-600">
                        <LogOut className="w-4 h-4 mr-2" /> Sign Out
                    </Button>
                </div>
            </div>
        </AppShell>
    );
}
