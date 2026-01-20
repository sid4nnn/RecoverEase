import { cn } from '../lib/utils';

interface PillToggleProps<T extends string> {
    options: { label: string; value: T }[];
    value: T;
    onChange: (value: T) => void;
    className?: string;
}

export function PillToggle<T extends string>({ options, value, onChange, className }: PillToggleProps<T>) {
    return (
        <div className={cn("inline-flex bg-slate-100 p-1 rounded-xl", className)}>
            {options.map((option) => (
                <button
                    key={option.value}
                    onClick={() => onChange(option.value)}
                    className={cn(
                        "px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                        value === option.value
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-slate-500 hover:text-slate-700"
                    )}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}
