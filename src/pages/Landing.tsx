import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <Card className="max-w-md w-full text-center">
                <h1 className="text-3xl font-bold text-slate-800 mb-4">RecoverEase</h1>
                <p className="text-slate-500 mb-8">Your companion for a safe and confident post-surgery recovery.</p>
                <div className="space-y-3">
                    <Button className="w-full" onClick={() => navigate('/auth')}>Start Recovery Plan</Button>
                    <Button variant="secondary" className="w-full" onClick={() => navigate('/auth')}>I'm a Caregiver</Button>
                </div>
            </Card>
        </div>
    );
}
