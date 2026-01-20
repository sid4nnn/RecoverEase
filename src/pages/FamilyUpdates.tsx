import { AppShell } from '../components/AppShell';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { User, Heart, Share2, Plus } from 'lucide-react';

export default function FamilyUpdates() {

    const updates = [
        { id: 1, user: 'You', action: 'completed daily check-in', time: '10:30 AM', likes: 2 },
        { id: 2, user: 'Dad', action: 'viewed your wound update', time: '09:15 AM', likes: 0 },
        { id: 3, user: 'Mom', action: 'sent some love', time: 'Yesterday', likes: 1 },
    ];

    return (
        <AppShell>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Family Updates</h1>
                <Button variant="ghost" size="icon" className="bg-blue-50 text-blue-600 rounded-full">
                    <Plus className="w-5 h-5" />
                </Button>
            </div>

            <Card className="bg-blue-600 text-white mb-6 border-none">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Share2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                        <h2 className="font-bold text-lg">Sharing is active</h2>
                        <p className="text-blue-100 text-sm">3 family members are receiving your recovery updates.</p>
                    </div>
                </div>
            </Card>

            <div className="space-y-4">
                <h3 className="font-bold text-slate-800 text-lg">Recent Activity</h3>
                {updates.map((update) => (
                    <Card key={update.id} className="flex gap-4 p-4" noPadding>
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                            <User className="w-5 h-5 text-slate-400" />
                        </div>
                        <div className="flex-1">
                            <p className="text-slate-800 text-sm">
                                <span className="font-semibold">{update.user}</span> {update.action}
                            </p>
                            <div className="flex items-center gap-4 mt-2">
                                <span className="text-xs text-slate-400 font-medium">{update.time}</span>
                                {update.likes > 0 && (
                                    <div className="flex items-center gap-1 text-pink-500 text-xs font-bold">
                                        <Heart className="w-3 h-3 fill-current" />
                                        {update.likes}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </AppShell>
    );
}
