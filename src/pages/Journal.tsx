import { useState } from 'react';
import { AppShell } from '../components/AppShell';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Smile, Frown, Meh } from 'lucide-react';
import { cn } from '../lib/utils';
import { format } from 'date-fns';

export default function Journal() {
    const [mood, setMood] = useState<number | null>(null);
    const [pain, setPain] = useState<number>(2);
    const [note, setNote] = useState('');

    const entries = [
        { date: new Date(), pain: 2, mood: 1, note: "Feeling much better today. Walked 10 mins." },
        { date: new Date(Date.now() - 86400000), pain: 4, mood: 0, note: "Slept poorly. Knee felt stiff." },
    ];

    return (
        <AppShell>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                {/* New Entry Form */}
                <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-4">New Entry</h2>
                    <Card>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-3">How are you feeling?</label>
                                <div className="flex justify-between gap-4">
                                    {[
                                        { val: 0, icon: Frown, label: "Poor" },
                                        { val: 1, icon: Meh, label: "Okay" },
                                        { val: 2, icon: Smile, label: "Great" }
                                    ].map((m) => (
                                        <button
                                            key={m.val}
                                            onClick={() => setMood(m.val)}
                                            className={cn(
                                                "flex-1 flex flex-col items-center gap-2 p-3 rounded-xl border transition-all",
                                                mood === m.val
                                                    ? "bg-blue-50 border-blue-500 text-blue-700"
                                                    : "border-slate-200 hover:bg-slate-50 text-slate-400"
                                            )}
                                        >
                                            <m.icon className="w-8 h-8" />
                                            <span className="text-sm font-medium">{m.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-3">Pain Level (0-10)</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="10"
                                    value={pain}
                                    onChange={(e) => setPain(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between mt-2 text-xs text-slate-400 font-medium">
                                    <span>No Pain</span>
                                    <span className="text-blue-600 font-bold text-lg">{pain}</span>
                                    <span>Severe</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Notes</label>
                                <textarea
                                    className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 min-h-[100px]"
                                    placeholder="How was your sleep? Any new sensations?"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                />
                            </div>

                            <Button className="w-full">Save Entry</Button>
                        </div>
                    </Card>
                </div>

                {/* History */}
                <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-4">History</h2>
                    <div className="space-y-4">
                        {entries.map((entry, i) => (
                            <Card key={i} className="flex gap-4">
                                <div className={cn(
                                    "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
                                    entry.mood === 2 ? "bg-emerald-100 text-emerald-600" :
                                        entry.mood === 1 ? "bg-blue-100 text-blue-600" :
                                            "bg-amber-100 text-amber-600"
                                )}>
                                    {entry.mood === 2 ? <Smile /> : entry.mood === 1 ? <Meh /> : <Frown />}
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-medium mb-1">{format(entry.date, 'EEEE, MMM d, yyyy')}</p>
                                    <p className="text-slate-800 text-sm mb-2">{entry.note}</p>
                                    <span className="inline-block bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded">
                                        Pain: {entry.pain}/10
                                    </span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </AppShell>
    );
}
