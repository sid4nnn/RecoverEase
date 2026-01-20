import { useState } from 'react';
import { AppShell } from '../components/AppShell';
import { Card } from '../components/Card';
import { ChevronDown, ChevronUp, Calendar, Info, AlertTriangle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function RecoveryPlan() {
    const [expandedDay, setExpandedDay] = useState<string | null>('day3');

    const days = [
        {
            id: 'day1',
            day: 'Day 1-2',
            title: 'Immediate Post-Op',
            status: 'completed',
            content: {
                todo: ['Rest and elevate', 'Ice every 2 hours', 'Take pain meds as scheduled'],
                normal: ['Swelling typically peaks', 'Grogginess from anesthesia'],
                warning: ['Fever > 38°C', 'Uncontrollable pain']
            }
        },
        {
            id: 'day3',
            day: 'Day 3-7',
            title: 'Early Mobility',
            status: 'active',
            content: {
                todo: ['Start gentle physio', 'Short walks indoors', 'Keep wound dry'],
                normal: ['Bruising may appear', 'Itching around incision'],
                warning: ['Red streaks on skin', 'Pus or bleeding']
            }
        },
        {
            id: 'week2',
            day: 'Week 2',
            title: 'Stitches Removal & Progress',
            status: 'future',
            content: {
                todo: ['Clinic visit for checkup', 'Increase walking distance', 'Start scar care if cleared'],
                normal: ['Stiffness in morning', 'Decreased pain meds'],
                warning: ['Sudden sharp pain', 'Knee locking']
            }
        }
    ];

    return (
        <AppShell>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold text-slate-800 mb-6">Recovery Timeline</h1>

                <div className="space-y-4">
                    {days.map((item) => (
                        <Card key={item.id} noPadding className="overflow-hidden">
                            <div
                                className={cn(
                                    "p-4 flex items-center justify-between cursor-pointer transition-colors",
                                    item.status === 'active' ? "bg-blue-50/50" : "hover:bg-slate-50"
                                )}
                                onClick={() => setExpandedDay(expandedDay === item.id ? null : item.id)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm",
                                        item.status === 'completed' ? "bg-emerald-100 text-emerald-600" :
                                            item.status === 'active' ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" :
                                                "bg-slate-100 text-slate-400"
                                    )}>
                                        {item.status === 'completed' ? <CheckCircleIcon /> : <Calendar className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <h3 className={cn("font-bold text-lg", item.status === 'active' ? "text-blue-900" : "text-slate-700")}>
                                            {item.day}: {item.title}
                                        </h3>
                                        <p className="text-sm text-slate-500">
                                            {item.status === 'completed' ? "Completed" : item.status === 'active' ? "Current Stage" : "Upcoming"}
                                        </p>
                                    </div>
                                </div>
                                {expandedDay === item.id ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
                            </div>

                            {expandedDay === item.id && (
                                <div className="p-6 border-t border-slate-100 bg-white animation-slide-down">
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div>
                                            <h4 className="flex items-center gap-2 font-semibold text-slate-800 mb-3">
                                                <CheckCircleIcon className="w-4 h-4 text-blue-500" /> To Do
                                            </h4>
                                            <ul className="space-y-2 text-sm text-slate-600">
                                                {item.content.todo.map((t, i) => <li key={i} className="flex gap-2"><span>•</span> {t}</li>)}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="flex items-center gap-2 font-semibold text-slate-800 mb-3">
                                                <Info className="w-4 h-4 text-emerald-500" /> Normal
                                            </h4>
                                            <ul className="space-y-2 text-sm text-slate-600">
                                                {item.content.normal.map((t, i) => <li key={i} className="flex gap-2"><span>•</span> {t}</li>)}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="flex items-center gap-2 font-semibold text-slate-800 mb-3">
                                                <AlertTriangle className="w-4 h-4 text-amber-500" /> Warning Signs
                                            </h4>
                                            <ul className="space-y-2 text-sm text-slate-600">
                                                {item.content.warning.map((t, i) => <li key={i} className="flex gap-2"><span>•</span> {t}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
            </div>
        </AppShell>
    );
}

function CheckCircleIcon({ className }: { className?: string }) {
    return (
        <svg className={cn("w-5 h-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
        </svg>
    );
}
