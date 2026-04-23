import QuickActions from '../QuickActions';
import { ROLES } from '../../data/roles';
import { sprint, teamMembers, impediments, ceremonies, retroActions } from '../../data/mockData';
import './Dashboard.css';

const happinessEmoji = (score) => {
  const map = { 1: '😞', 2: '😕', 3: '😐', 4: '🙂', 5: '😄' };
  return map[score] || '😐';
};

export default function SMDashboard() {
  const role = ROLES.find(r => r.id === 'sm');
  const thisWeek = ceremonies.filter(c => c.date >= '2026-04-21' && c.date <= '2026-04-27');

  return (
    <div className="dashboard">
      <QuickActions actions={role.quickActions} />

      {/* Sprint Health */}
      <div className="section">
        <h2 className="section-title">💚 Sprint Health — {sprint.name}</h2>
        <div className="card">
          <div className="metric-row">
            <div className="metric">
              <span className="metric-label">Commitment</span>
              <span className="metric-value">{sprint.totalPoints} pts</span>
            </div>
            <div className="metric">
              <span className="metric-label">Delivered</span>
              <span className="metric-value">{sprint.donePoints} pts</span>
            </div>
            <div className="metric">
              <span className="metric-label">In Progress</span>
              <span className="metric-value">{sprint.inProgressPoints} pts</span>
            </div>
            <div className="metric">
              <span className="metric-label">Velocity</span>
              <span className="metric-value">52 / 56 planned</span>
            </div>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar" style={{ width: `${sprint.donePct}%` }} />
          </div>
          <p className="card-note">{sprint.donePct}% done — {sprint.todoPoints} pts still to do</p>
        </div>
      </div>

      {/* Team Happiness */}
      <div className="section">
        <h2 className="section-title">😊 Team Happiness Tracker</h2>
        <div className="card">
          <table className="data-table">
            <thead><tr><th>Member</th><th>Role</th><th>Capacity</th><th>Happiness</th><th>Score</th></tr></thead>
            <tbody>
              {teamMembers.map(m => (
                <tr key={m.id}>
                  <td>{m.name}</td>
                  <td>{m.role}</td>
                  <td>{m.capacity}%</td>
                  <td style={{ fontSize: '1.2rem' }}>{happinessEmoji(m.happiness)}</td>
                  <td>
                    <span className={`badge badge-${m.happiness >= 4 ? 'done' : m.happiness === 3 ? 'at-risk' : 'blocked'}`}>
                      {m.happiness}/5
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Impediments */}
      <div className="section">
        <h2 className="section-title">🚧 Impediment Log</h2>
        <div className="card">
          <table className="data-table">
            <thead><tr><th>ID</th><th>Issue</th><th>Age</th><th>Owner</th><th>Severity</th><th>Status</th></tr></thead>
            <tbody>
              {impediments.map(i => (
                <tr key={i.id}>
                  <td className="mono">{i.id}</td>
                  <td>{i.title}</td>
                  <td className={i.age >= 5 ? 'text-red' : ''}>{i.age}d</td>
                  <td>{i.owner}</td>
                  <td><span className={`badge badge-${i.severity === 'high' ? 'blocked' : 'at-risk'}`}>{i.severity}</span></td>
                  <td><span className={`badge badge-${i.status === 'in-progress' ? 'in-progress' : 'at-risk'}`}>{i.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ceremony Calendar */}
      <div className="section">
        <h2 className="section-title">📅 Ceremonies This Week</h2>
        <div className="card">
          <table className="data-table">
            <thead><tr><th>Ceremony</th><th>Date</th><th>Time</th><th>Duration</th></tr></thead>
            <tbody>
              {thisWeek.map(c => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.date}</td>
                  <td>{c.time}</td>
                  <td>{c.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Retro Actions */}
      <div className="section">
        <h2 className="section-title">🔄 Retrospective Action Items</h2>
        <div className="card">
          <table className="data-table">
            <thead><tr><th>Action</th><th>Owner</th><th>Due</th><th>Status</th></tr></thead>
            <tbody>
              {retroActions.map(r => (
                <tr key={r.id}>
                  <td>{r.action}</td>
                  <td>{r.owner}</td>
                  <td>{r.due}</td>
                  <td><span className={`badge badge-${r.status === 'done' ? 'done' : r.status === 'in-progress' ? 'in-progress' : 'at-risk'}`}>{r.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
