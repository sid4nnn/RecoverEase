import { Activity, Footprints, Flame } from 'lucide-react';
import { Card } from '../Card';

export function RecoveryInsights() {
    const metrics = [
        {
            label: 'Pain Level',
            value: '2/10',
            trend: 'down',
            icon: Flame,
            color: 'text-orange-500',
            bg: 'bg-orange-50',
        },
        {
            label: 'Mobility',
            value: '85%',
            trend: 'up',
            icon: Footprints,
            color: 'text-blue-500',
            bg: 'bg-blue-50',
        },
        {
            label: 'Adherence',
            value: '100%',
            trend: 'stable',
            icon: Activity,
            color: 'text-emerald-500',
            bg: 'bg-emerald-50',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics.map((metric) => (
                <Card key={metric.label} className="flex items-center gap-4 p-4">
                    <div className={`p-3 rounded-full ${metric.bg} ${metric.color}`}>
                        <metric.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 font-medium">{metric.label}</p>
                        <p className="text-xl font-bold text-slate-800">{metric.value}</p>
                    </div>
                </Card>
            ))}
        </div>
    );
}
