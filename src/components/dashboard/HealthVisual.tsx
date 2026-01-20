import { cn } from '../../lib/utils';

export function HealthVisual({ className }: { className?: string }) {
    // This is a placeholder for a 3D medical visual.
    // In a real app, this would be a Canvas or Spline scene.
    // We simulate it with a gradient and some abstract shapes.
    return (
        <div className={cn("relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-50", className)}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-blue-200/50 rounded-full blur-3xl animate-pulse" />
                <div className="w-48 h-48 bg-indigo-200/50 rounded-full blur-2xl absolute top-1/4 left-1/4" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="w-40 h-64 bg-white/40 backdrop-blur-sm border border-white/60 rounded-[2rem] shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                    {/* Abstract Body Shape Placeholder */}
                    <div className="w-20 h-48 bg-gradient-to-b from-blue-400/20 to-blue-600/20 rounded-full" />
                </div>
                <p className="mt-6 text-indigo-900/60 font-medium tracking-wide text-sm uppercase">Recovery Status: Good</p>
            </div>
        </div>
    );
}
