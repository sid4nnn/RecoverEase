import { useState, useEffect } from 'react';
import { AppShell } from '../components/AppShell';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Play, Pause, RotateCcw, CheckCircle, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Physio() {
    return (
        <AppShell>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-slate-800 mb-6">Daily Exercises</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ExerciseCard
                        title="Ankle Pumps"
                        duration={120}
                        description="Move your foot up and down as far as possible."
                        sets="3 sets of 2 mins"
                    />
                    <ExerciseCard
                        title="Quad Sets"
                        duration={60}
                        description="Tighten your thigh muscle and try to straighten your knee. Hold for 5 sec."
                        sets="10 reps"
                    />
                    <ExerciseCard
                        title="Heel Slides"
                        duration={180}
                        description="Slide your heel towards your button while keeping it on the bed."
                        sets="10 reps"
                    />
                </div>
            </div>
        </AppShell>
    );
}

function ExerciseCard({ title, duration, description, sets }: { title: string, duration: number, description: string, sets: string }) {
    const [isActive, setIsActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(duration);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        let interval: any;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            setCompleted(true);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const toggleTimer = () => setIsActive(!isActive);
    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(duration);
        setCompleted(false);
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    return (
        <Card className={cn("transition-all duration-300", isActive ? "ring-2 ring-blue-400 shadow-md" : "")}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="font-bold text-lg text-slate-800">{title}</h3>
                    <p className="text-sm text-slate-500">{sets}</p>
                </div>
                {completed && <CheckCircle className="text-emerald-500 w-6 h-6" />}
            </div>

            <p className="text-slate-600 mb-6 min-h-[3rem]">{description}</p>

            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl">
                <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-slate-400" />
                    <span className="font-mono text-xl font-bold text-slate-700 w-16">
                        {formatTime(timeLeft)}
                    </span>
                </div>

                <div className="flex gap-2">
                    {!completed && (
                        <Button size="sm" onClick={toggleTimer} variant={isActive ? "secondary" : "primary"}>
                            {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                    )}
                    <Button size="sm" variant="ghost" onClick={resetTimer}>
                        <RotateCcw className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </Card>
    );
}
