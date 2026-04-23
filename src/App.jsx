import { useState } from 'react';
import { useProfile } from './hooks/useProfile';
import ProfilePicker from './components/ProfilePicker';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DailyTasks from './components/DailyTasks';
import CPODashboard from './components/dashboard/CPODashboard';
import PODashboard from './components/dashboard/PODashboard';
import RTEDashboard from './components/dashboard/RTEDashboard';
import SMDashboard from './components/dashboard/SMDashboard';
import BADashboard from './components/dashboard/BADashboard';
import './App.css';

const DASHBOARD_MAP = {
  cpo: CPODashboard,
  po:  PODashboard,
  rte: RTEDashboard,
  sm:  SMDashboard,
  ba:  BADashboard,
};

export default function App() {
  const { role, selectRole, clearRole } = useProfile();
  const [activeSection, setActiveSection] = useState('Overview');

  if (!role) {
    return <ProfilePicker onSelect={selectRole} />;
  }

  const Dashboard = DASHBOARD_MAP[role.id];

  return (
    <div className="app-layout">
      <Header role={role} onSwitchRole={clearRole} />
      <div className="app-body">
        <Sidebar role={role} activeSection={activeSection} onSelect={setActiveSection} />
        <main className="main-content">
          <Dashboard />
        </main>
        <DailyTasks key={role.id} role={role} />
      </div>
    </div>
  );
}
