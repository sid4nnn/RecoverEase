import { useNavigate } from 'react-router-dom';
import { AppShell } from '../components/AppShell';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useAppStore } from '../store/useAppStore';
import { Check, Clock, Pill, AlertTriangle, ChevronLeft } from 'lucide-react';
import { cn } from '../lib/utils';
import { format } from 'date-fns';

export default function Medications() {
    const navigate = useNavigate();
    const { medications, markMedicationTaken } = useAppStore();
    const today = format(new Date(), 'yyyy-MM-dd');

    // Helper to check if a specific slot is taken today
    const isTaken = (medId: string, index: number) => {
        const med = medications.find(m => m.id === medId);
        if (!med) return false;
        return med.takenHistory[today]?.[index] || false;
    };

    return (
        <AppShell>
            <div className="flex items-center gap-3 mb-6">
                <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="-ml-2">
                    <ChevronLeft className="w-6 h-6 text-slate-400" />
                </Button>
                <h1 className="text-2xl font-bold text-slate-900">Medications</h1>
            </div>

            <div className="space-y-4">
                {medications.map((med) => (
                    <Card key={med.id} className="relative overflow-visible" noPadding>
                        <div className="p-5">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                                    <Pill className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 leading-tight">{med.name}</h3>
                                    <p className="text-slate-500 text-sm mt-1">{med.dosage} • {med.times.length}x daily</p>
                                </div>
                            </div>

                            {/* Doses Grid */}
                            <div className="grid grid-cols-3 gap-3">
                                {med.times.map((time, idx) => {
                                    const taken = isTaken(med.id, idx);
                                    return (
                                        <button
                                            key={`${med.id}-${idx}`}
                                            onClick={() => markMedicationTaken(med.id, idx)}
                                            className={cn(
                                                "flex flex-col items-center justify-center py-3 px-2 rounded-xl border transition-all duration-200 active:scale-95",
                                                taken
                                                    ? "bg-emerald-500 border-emerald-500 text-white shadow-md shadow-emerald-200"
                                                    : "bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:bg-blue-50"
                                            )}
                                        >
                                            {taken ? (
                                                <Check className="w-5 h-5 mb-1" />
                                            ) : (
                                                <Clock className="w-5 h-5 mb-1 opacity-50" />
                                            )}
                                            <span className="text-xs font-bold">{time}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <Card className="mt-8 bg-amber-50 border-amber-100 p-5" noPadding>
                <div className="flex gap-4">
                    <div className="shrink-0">
                        <AlertTriangle className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-amber-900 mb-1">Missed a dose?</h4>
                        <p className="text-sm text-amber-800/80 mb-3 leading-relaxed">
                            If you miss by &gt;2 hours, check instructions. Do not double up.
                        </p>
                        <Button variant="ghost" className="text-amber-700 bg-amber-100/50 hover:bg-amber-100 h-auto py-2 px-3 text-sm font-semibold">
                            Read Guidelines
                        </Button>
                    </div>
                </div>
            </Card>
        </AppShell>
    );
}
