import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppShell } from '../components/AppShell';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ArrowLeft, Scan, Mic, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function WoundCare() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);

    const totalSteps = 4;

    const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    // Simulated scanning effect
    useEffect(() => {
        if (step === 3) {
            const interval = setInterval(() => {
                setProgress(p => {
                    if (p >= 100) {
                        clearInterval(interval);
                        setTimeout(nextStep, 500);
                        return 100;
                    }
                    return p + 2;
                });
            }, 30);
            return () => clearInterval(interval);
        }
    }, [step]);

    return (
        <AppShell>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                {step > 1 && step < 4 ? (
                    <button onClick={prevStep} className="p-2 -ml-2 text-slate-400 hover:text-slate-600">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                ) : <div />}

                {step < 4 && (
                    <span className="text-sm font-semibold text-slate-400">
                        Step {step} of {totalSteps}
                    </span>
                )}
                <div className="w-8" />
            </div>

            {/* Step 1: Start */}
            {step === 1 && (
                <div className="flex flex-col items-center justify-center text-center h-[60vh] animate-in fade-in zoom-in-95">
                    <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mb-8 relative">
                        <div className="absolute inset-0 border-4 border-blue-100 rounded-full animate-ping opacity-20" />
                        <Scan className="w-12 h-12 text-blue-600" />
                    </div>

                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Wound Check</h1>
                    <p className="text-slate-500 mb-8 max-w-xs mx-auto">
                        We'll help you scan your wound to check for any signs of infection.
                    </p>

                    <Button size="lg" className="w-full h-14 text-lg" onClick={nextStep}>
                        Start Scan
                    </Button>
                </div>
            )}

            {/* Step 2: Guidance */}
            {step === 2 && (
                <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-8">
                    <Card className="bg-slate-900 text-white border-none p-8 flex flex-col items-center text-center gap-6">
                        <div className="w-full aspect-square bg-slate-800 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-600 relative overflow-hidden">
                            <Scan className="w-16 h-16 text-slate-500" />
                            <p className="absolute bottom-4 text-xs text-slate-400 font-medium uppercase tracking-widest">
                                Camera Placeholder
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-2">Position your phone</h2>
                            <p className="text-slate-400 text-sm">
                                Hold about 10cm from the wound. Ensure good lighting.
                            </p>
                        </div>
                    </Card>

                    <Button variant="ghost" className="text-slate-500 gap-2">
                        <Mic className="w-4 h-4" />
                        Voice guidance on
                    </Button>

                    <Button size="lg" className="w-full h-14 text-lg" onClick={nextStep}>
                        I'm Ready
                    </Button>
                </div>
            )}

            {/* Step 3: Scanning */}
            {step === 3 && (
                <div className="flex flex-col items-center justify-center h-[60vh] gap-8">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                className="text-slate-100"
                                strokeWidth="8"
                                stroke="currentColor"
                                fill="transparent"
                                r="90"
                                cx="96"
                                cy="96"
                            />
                            <circle
                                className="text-blue-600 transition-all duration-75 ease-linear"
                                strokeWidth="8"
                                strokeDasharray={2 * Math.PI * 90}
                                strokeDashoffset={2 * Math.PI * 90 * ((100 - progress) / 100)}
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="90"
                                cx="96"
                                cy="96"
                            />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                            <span className="text-3xl font-bold text-slate-800">{progress}%</span>
                            <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">Scanning</span>
                        </div>
                    </div>
                    <p className="text-slate-500 animate-pulse">Analyzing wound structure...</p>
                </div>
            )}

            {/* Step 4: Result */}
            {step === 4 && (
                <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 mt-4">
                    <Card className="bg-emerald-50 border-emerald-100 flex flex-col items-center text-center p-8 gap-4">
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-emerald-900 mb-2">Looks Normal</h2>
                            <p className="text-emerald-700 text-sm leading-relaxed">
                                The wound appears healthy with no signs of infection. Great job keeping it clean.
                            </p>
                        </div>
                    </Card>

                    <Card className="bg-orange-50 border-orange-100 p-4">
                        <div className="flex gap-3">
                            <AlertTriangle className="w-6 h-6 text-orange-500 shrink-0" />
                            <div className="text-sm text-orange-800">
                                <span className="font-bold">Note:</span> If you notice increasing pain or fever later, please scan again or contact your nurse.
                            </div>
                        </div>
                    </Card>

                    <Button
                        size="lg"
                        className="w-full h-14 text-lg mt-4 bg-slate-900 text-white"
                        onClick={() => navigate('/')}
                    >
                        Back to Home
                    </Button>
                </div>
            )}
        </AppShell>
    );
}
