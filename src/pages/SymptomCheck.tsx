import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppShell } from '../components/AppShell';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { CheckCircle2, ArrowLeft, Thermometer, AlertTriangle, Phone, Moon } from 'lucide-react';
import { cn } from '../lib/utils';

export default function SymptomCheck() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [mood, setMood] = useState<string | null>(null);
    const [pain, setPain] = useState(0);
    const [sleep, setSleep] = useState(7);
    const [temp, setTemp] = useState(36.5);

    const totalSteps = 5;

    // Logic: Pain > 6 OR Temp > 38 OR Temp < 35 -> Emergency
    const isEmergency = pain > 6 || temp > 38 || temp < 35;

    // Step 1: Mood Data
    const moods = [
        { label: 'Great', emoji: '🤩', val: 'great' },
        { label: 'Good', emoji: '🙂', val: 'good' },
        { label: 'Okay', emoji: '😐', val: 'okay' },
        { label: 'Bad', emoji: '🙁', val: 'bad' },
        { label: 'Awful', emoji: '😫', val: 'awful' },
    ];

    // Navigation handlers
    const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    return (
        <AppShell>
            {/* Header / Progress */}
            <div className="flex items-center justify-between mb-8">
                {step > 1 && step < 5 ? (
                    <button onClick={prevStep} className="p-2 -ml-2 text-slate-400 hover:text-slate-600">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                ) : <div />}

                {step < 5 && (
                    <span className="text-sm font-semibold text-slate-400">
                        Step {step} of {totalSteps}
                    </span>
                )}
                <div className="w-8" />
            </div>

            {/* Step 1: Mood */}
            {step === 1 && (
                <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-2">How are you feeling?</h1>
                        <p className="text-slate-500">Select the emoji that matches your mood.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        {moods.map((m) => (
                            <button
                                key={m.val}
                                onClick={() => { setMood(m.val); nextStep(); }}
                                className={cn(
                                    "flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left",
                                    mood === m.val
                                        ? "border-blue-500 bg-blue-50/50"
                                        : "border-slate-100 bg-white hover:border-blue-200"
                                )}
                            >
                                <span className="text-4xl">{m.emoji}</span>
                                <span className="text-lg font-semibold text-slate-700">{m.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 2: Pain */}
            {step === 2 && (
                <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-2">Pain Level</h1>
                        <p className="text-slate-500">Slide to adjust current pain level.</p>
                    </div>

                    <Card className="py-12 px-6 flex flex-col items-center justify-center gap-8">
                        <div className="flex flex-col items-center">
                            <span className={cn(
                                "text-6xl font-black mb-2",
                                pain < 4 ? "text-emerald-500" : pain < 7 ? "text-orange-500" : "text-red-500"
                            )}>
                                {pain}
                            </span>
                            <span className="text-slate-400 font-medium tracking-widest uppercase text-sm">
                                {pain === 0 ? 'No Pain' : pain < 10 ? 'Scale 1-10' : 'Worst Pain'}
                            </span>
                        </div>

                        <input
                            type="range"
                            min="0"
                            max="10"
                            step="1"
                            value={pain}
                            onChange={(e) => setPain(Number(e.target.value))}
                            className="w-full h-4 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600"
                        />

                        <div className="flex justify-between w-full text-xs text-slate-400 font-bold px-1">
                            <span>0</span>
                            <span>5</span>
                            <span>10</span>
                        </div>
                    </Card>

                    <Button size="lg" className="w-full text-lg h-14" onClick={nextStep}>
                        Continue
                    </Button>
                </div>
            )}

            {/* Step 3: Sleep - NEW */}
            {step === 3 && (
                <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-2">Sleep</h1>
                        <p className="text-slate-500">How many hours did you sleep last night?</p>
                    </div>

                    <Card className="py-12 px-6 flex flex-col items-center justify-center gap-8">
                        <div className="flex flex-col items-center">
                            <span className="text-5xl font-black mb-2 text-indigo-500 flex items-center gap-2">
                                {sleep} <span className="text-2xl text-slate-400 font-bold">hrs</span>
                            </span>
                            <div className="flex items-center gap-2 text-slate-400">
                                <Moon className="w-4 h-4" />
                                <span className="font-medium uppercase text-sm">Duration</span>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <input
                                type="range"
                                min="0"
                                max="12"
                                step="0.5"
                                value={sleep}
                                onChange={(e) => setSleep(Number(e.target.value))}
                                className="w-full h-4 bg-indigo-100 rounded-full appearance-none cursor-pointer accent-indigo-500"
                            />
                        </div>

                        <div className="flex justify-between w-full text-xs text-slate-400 font-bold px-1">
                            <span>0h</span>
                            <span>6h</span>
                            <span>12h+</span>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setSleep(s => Math.max(0, s - 0.5))}
                                className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-xl font-bold text-slate-600 hover:bg-slate-50"
                            >-</button>
                            <button
                                onClick={() => setSleep(s => Math.min(12, s + 0.5))}
                                className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-xl font-bold text-slate-600 hover:bg-slate-50"
                            >+</button>
                        </div>
                    </Card>

                    <Button size="lg" className="w-full text-lg h-14" onClick={nextStep}>
                        Continue
                    </Button>
                </div>
            )}

            {/* Step 4: Temperature */}
            {step === 4 && (
                <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-2">Temperature</h1>
                        <p className="text-slate-500">What is your current body temperature?</p>
                    </div>

                    <Card className="py-12 px-6 flex flex-col items-center justify-center gap-8">
                        <div className="flex flex-col items-center">
                            <span className={cn(
                                "text-5xl font-black mb-2 flex items-start gap-1",
                                (temp > 38 || temp < 35) ? "text-red-500" : "text-emerald-500"
                            )}>
                                {temp.toFixed(1)} <span className="text-2xl text-slate-400 mt-1">°C</span>
                            </span>
                            <div className="flex items-center gap-2 text-slate-400">
                                <Thermometer className="w-4 h-4" />
                                <span className="font-medium uppercase text-sm">Celsius</span>
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <input
                                type="range"
                                min="35.0"
                                max="42.0"
                                step="0.1"
                                value={temp}
                                onChange={(e) => setTemp(Number(e.target.value))}
                                className={cn(
                                    "w-full h-4 rounded-full appearance-none cursor-pointer",
                                    (temp > 38 || temp < 35) ? "accent-red-500 bg-red-100" : "accent-emerald-500 bg-emerald-100"
                                )}
                            />
                        </div>

                        <div className="flex justify-between w-full text-xs text-slate-400 font-bold px-1">
                            <span>35.0°C</span>
                            <span>37.0°C</span>
                            <span>42.0°C</span>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setTemp(t => Math.max(35, Number((t - 0.1).toFixed(1))))}
                                className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-xl font-bold text-slate-600 hover:bg-slate-50"
                            >-</button>
                            <button
                                onClick={() => setTemp(t => Math.min(42, Number((t + 0.1).toFixed(1))))}
                                className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-xl font-bold text-slate-600 hover:bg-slate-50"
                            >+</button>
                        </div>
                    </Card>

                    <Button size="lg" className="w-full text-lg h-14" onClick={nextStep}>
                        Submit
                    </Button>
                </div>
            )}

            {/* Step 5: Summary / Result */}
            {step === 5 && (
                <div className="flex flex-col items-center text-center gap-6 animate-in fade-in zoom-in-95 duration-500 pt-6">
                    {isEmergency ? (
                        <>
                            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-2 animate-pulse">
                                <AlertTriangle className="w-12 h-12 text-red-600" />
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold text-red-600 mb-2">Attention Required</h1>
                                <p className="text-slate-600 leading-relaxed max-w-xs mx-auto mb-4">
                                    Your symptoms (Temperature {temp}°C, Pain {pain}/10) indicate you may need medical attention.
                                </p>
                            </div>

                            <Card className="bg-red-50 border-red-100 w-full p-4 mb-2">
                                <div className="text-left flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-red-900 text-sm">Please contact your provider</p>
                                        <p className="text-xs text-red-700">Do not ignore high fever or severe pain.</p>
                                    </div>
                                </div>
                            </Card>

                            <div className="w-full space-y-3">
                                <Button
                                    className="w-full h-14 text-lg bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-500/30"
                                    onClick={() => window.location.href = 'tel:911'}
                                >
                                    Call Emergency Services
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="w-full"
                                    onClick={() => navigate('/')}
                                >
                                    Back to Home
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                                <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold text-slate-800 mb-2">Check-in Complete!</h1>
                                <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">
                                    Great work. Your vitals are stable and you are improving compared to yesterday.
                                </p>
                            </div>

                            <div className="w-full mt-8">
                                <Button
                                    className="w-full h-14 text-lg bg-slate-900 text-white hover:bg-slate-800"
                                    onClick={() => navigate('/')}
                                >
                                    Back to Home
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </AppShell>
    );
}
