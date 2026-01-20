import { create } from 'zustand';
import { addDays, format } from 'date-fns';

export type UserRole = 'patient' | 'caregiver';

export interface User {
    id: string;
    name: string;
    role: UserRole;
    surgeryType: string;
    surgeryDate: string;
    recoveryDay: number;
    stage: 'Inflammation' | 'Proliferation' | 'Remodeling';
}

export interface Medication {
    id: string;
    name: string;
    dosage: string;
    times: string[]; // e.g., ["08:00", "20:00"]
    takenHistory: Record<string, boolean[]>; // date string -> boolean array matching times
}

export interface AppState {
    user: User;
    medications: Medication[];
    setUserRole: (role: UserRole) => void;
    markMedicationTaken: (medId: string, outputIndex: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
    user: {
        id: 'u1',
        name: 'Sarah',
        role: 'patient',
        surgeryType: 'ACL Reconstruction',
        surgeryDate: format(addDays(new Date(), -3), 'yyyy-MM-dd'),
        recoveryDay: 3,
        stage: 'Inflammation',
    },
    medications: [
        {
            id: 'm1',
            name: 'Amoxicillin',
            dosage: '500mg',
            times: ['08:00', '16:00', '00:00'],
            takenHistory: {},
        },
        {
            id: 'm2',
            name: 'Ibuprofen',
            dosage: '400mg',
            times: ['09:00', '21:00'],
            takenHistory: {},
        }
    ],
    setUserRole: (role) => set((state) => ({ user: { ...state.user, role } })),
    markMedicationTaken: (medId, index) => set((state) => {
        const today = format(new Date(), 'yyyy-MM-dd');
        const newMeds = state.medications.map(med => {
            if (med.id !== medId) return med;
            const history = { ...med.takenHistory };
            const dailyLog = history[today] || Array(med.times.length).fill(false);
            dailyLog[index] = !dailyLog[index]; // toggle
            history[today] = dailyLog;
            return { ...med, takenHistory: history };
        });
        return { medications: newMeds };
    }),
}));
