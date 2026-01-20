import { AppShell } from '../components/AppShell';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ChevronRight, Phone, MessageCircle } from 'lucide-react';

export default function Help() {
    const faqs = [
        { q: "How do I take my medication?", a: "Follow the schedule in your recovery plan." },
        { q: "When should I call the doctor?", a: "If you have high fever or increasing pain." },
        { q: "Can I shower?", a: "Only after 48 hours. Keep the wound dry." },
    ];

    return (
        <AppShell>
            <h1 className="text-2xl font-bold text-slate-800 mb-6">Help & Support</h1>

            <div className="flex flex-col gap-6">
                <Card className="bg-blue-50 border-blue-100">
                    <h2 className="text-lg font-bold text-blue-900 mb-2">Recovery Guide</h2>
                    <p className="text-blue-700 mb-4 text-sm">
                        Everything you need to know about your recovery journey.
                    </p>
                    <Button variant="secondary" className="bg-white text-blue-600 w-full justify-between group">
                        Read Guide <ChevronRight className="w-4 h-4 text-blue-300 group-hover:text-blue-500" />
                    </Button>
                </Card>

                <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3">Common Questions</h3>
                    <div className="flex flex-col gap-3">
                        {faqs.map((item, i) => (
                            <Card key={i} className="p-4" noPadding>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-slate-700">{item.q}</span>
                                    <ChevronRight className="w-4 h-4 text-slate-300" />
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-slate-800 mb-3">Contact</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="secondary" className="h-16 flex-col gap-1 items-center justify-center bg-white border border-slate-200">
                            <MessageCircle className="w-6 h-6 text-blue-500" />
                            <span className="text-xs font-semibold text-slate-600">Chat</span>
                        </Button>
                        <Button
                            variant="secondary"
                            className="h-16 flex-col gap-1 items-center justify-center bg-red-50 border border-red-100/50 hover:bg-red-100"
                            onClick={() => window.location.href = 'tel:911'}
                        >
                            <Phone className="w-6 h-6 text-red-500" />
                            <span className="text-xs font-bold text-red-600">Emergency</span>
                        </Button>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}
