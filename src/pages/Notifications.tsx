import { AppShell } from '../components/AppShell';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Bell, Clock, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Notifications() {
    const navigate = useNavigate();

    const notifications = [
        { id: 1, title: 'Time for Amoxicillin', desc: 'Your 2:00 PM dose is due.', time: 'Now', urgent: true },
        { id: 2, title: 'Daily Check-in Reminder', desc: 'Please complete your symptom check.', time: '1h ago', urgent: false },
        { id: 3, title: 'Great Progress!', desc: 'You have completed 5 days of recovery.', time: 'Yesterday', urgent: false },
    ];

    return (
        <AppShell>
            <div className="flex items-center gap-3 mb-6">
                <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="-ml-2">
                    <ChevronLeft className="w-6 h-6 text-slate-400" />
                </Button>
                <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
            </div>

            <div className="space-y-3">
                {notifications.map((notif) => (
                    <Card key={notif.id} className={`flex gap-4 p-4 ${notif.urgent ? 'bg-blue-50 border-blue-100' : 'bg-white'}`} noPadding>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${notif.urgent ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                            {notif.urgent ? <Clock className="w-5 h-5" /> : <Bell className="w-5 h-5" />}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h3 className={`font-bold text-sm ${notif.urgent ? 'text-blue-900' : 'text-slate-800'}`}>{notif.title}</h3>
                                <span className="text-xs text-slate-400 font-medium">{notif.time}</span>
                            </div>
                            <p className={`text-sm mt-1 ${notif.urgent ? 'text-blue-700' : 'text-slate-500'}`}>{notif.desc}</p>
                        </div>
                        {notif.urgent && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                        )}
                    </Card>
                ))}
            </div>

            <div className="mt-8 text-center">
                <Button variant="ghost" className="text-slate-400 font-medium text-sm">
                    Mark all as read
                </Button>
            </div>
        </AppShell>
    );
}
