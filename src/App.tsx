import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import RecoveryPlan from './pages/RecoveryPlan';
import Medications from './pages/Medications';
import Physio from './pages/Physio';
import SymptomCheck from './pages/SymptomCheck';
import WoundCare from './pages/WoundCare';
import Journal from './pages/Journal';
import Settings from './pages/Settings';
import Help from './pages/Help';
import FamilyUpdates from './pages/FamilyUpdates';
import Notifications from './pages/Notifications';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/schedule" element={<RecoveryPlan />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/physio" element={<Physio />} />
        <Route path="/check" element={<SymptomCheck />} />
        <Route path="/wound" element={<WoundCare />} />
        <Route path="/history" element={<Journal />} />
        <Route path="/activity" element={<Physio />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/family-updates" element={<FamilyUpdates />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
