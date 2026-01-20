import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { useAppStore } from '../store/useAppStore';

export default function Auth() {
    const navigate = useNavigate();
    const setUserRole = useAppStore((state) => state.setUserRole);

    const handleLogin = (role: 'patient' | 'caregiver') => {
        setUserRole(role);
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <Card className="max-w-md w-full text-center">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Welcome Back</h2>
                <div className="space-y-4">
                    <Button className="w-full" onClick={() => handleLogin('patient')}>
                        Continue as Patient
                    </Button>
                    <Button variant="secondary" className="w-full" onClick={() => handleLogin('caregiver')}>
                        Continue as Caregiver
                    </Button>
                </div>
            </Card>
        </div>
    );
}
