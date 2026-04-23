import QuickActions from '../QuickActions';
import { ROLES } from '../../data/roles';
import { sprint, backlogItems, ceremonies } from '../../data/mockData';
import './Dashboard.css';

const priorityClass = { high: 'blocked', medium: 'at-risk', low: 'in-progress' };
const statusLabel = { ready: 'Ready', 'needs-ac': 'Needs AC', 'in-refinement': 'In Refinement' };

export default function PODashboard() {
  const role = ROLES.find(r => r.id === 'po');
  const top5 = backlogItems.slice(0, 5);
  const today = ceremonies.filter(c => c.date === '2026-04-23');
  const upcoming = ceremonies.filter(c => c.date > '2026-04-23');

  return (
    <div className="dashboard">
      <QuickActions actions={role.quickActions} />

      {/* Sprint Summary */}
      <div className="section">
        <h2 className="section-title">🏃 {sprint.name} — {sprint.team}</h2>
        <div className="card">
          <div className="metric-row">
            <div className="metric">
              <span className="metric-label">To Do</span>
              <span className="metric-value">{sprint.todoPoints} pts ({sprint.todoPct}%)</span>
            </div>
            <div className="metric">
              <span className="metric-label">In Progress</span>
              <span className="metric-value">{sprint.inProgressPoints} pts ({sprint.inProgressPct}%)</span>
            </div>
            <div className="metric">
              <span className="metric-label">Done</span>
              <span className="metric-value">{sprint.donePoints} pts ({sprint.donePct}%)</span>
            </div>
            <div className="metric">
              <span className="metric-label">Total</span>
              <span className="metric-value">{sprint.totalPoints} pts</span>
            </div>
          </div>
          <div className="stacked-bar">
            <div className="stacked-done" style={{ width: `${sprint.donePct}%` }} title={`Done: ${sprint.donePct}%`} />
            <div className="stacked-inprog" style={{ width: `${sprint.inProgressPct}%` }} title={`In Progress: ${sprint.inProgressPct}%`} />
            <div className="stacked-todo" style={{ width: `${sprint.todoPct}%` }} title={`To Do: ${sprint.todoPct}%`} />
          </div>
          <div className="bar-legend">
            <span><span className="dot dot-done" />Done</span>
            <span><span className="dot dot-inprog" />In Progress</span>
            <span><span className="dot dot-todo" />To Do</span>
          </div>
        </div>
      </div>

      {/* Sprint Burndown */}
      <div className="section">
        <h2 className="section-title">📉 Sprint Burndown</h2>
        <div className="card">
          <div className="burndown-chart">
            {sprint.burndown.map(d => (
              <div key={d.day} className="burndown-col">
                <div className="burndown-bar-wrap">
                  <div
                    className="burndown-bar"
                    style={{ height: `${Math.round((d.remaining / sprint.totalPoints) * 100)}%` }}
                    title={`${d.remaining} pts remaining`}
                  />
                </div>
                <span className="burndown-label">{d.day.replace('Day ', 'D')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Backlog Items */}
      <div className="section">
        <h2 className="section-title">📋 Top Backlog Items</h2>
        <div className="card">
          <table className="data-table">
            <thead>
              <tr><th>ID</th><th>Story</th><th>Priority</th><th>Points</th><th>Status</th></tr>
            </thead>
            <tbody>
              {top5.map(item => (
                <tr key={item.id}>
                  <td className="mono">{item.id}</td>
                  <td>{item.title}</td>
                  <td><span className={`badge badge-${priorityClass[item.priority]}`}>{item.priority}</span></td>
                  <td>{item.points}</td>
                  <td><span className={`badge badge-${item.status === 'ready' ? 'done' : 'at-risk'}`}>{statusLabel[item.status]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Standup Prep */}
      <div className="section">
        <h2 className="section-title">☀️ Standup Prep</h2>
        <div className="card-grid two-col">
          <div className="card">
            <h3 className="card-sub">Committed This Sprint</h3>
            <ul className="plain-list">
              <li>SSO login via ForgeRock — 8 pts</li>
              <li>Customer profile edit v2 — 3 pts</li>
              <li>Session timeout modal — 2 pts</li>
              <li>RBAC role assignment UI — 8 pts</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="card-sub">At Risk</h3>
            <ul className="plain-list risk-list">
              <li>🔴 Password reset flow — missing AC</li>
              <li>🟡 API rate limiting — dependency on Infra</li>
              <li>🟡 Burndown 8 pts behind</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ceremonies */}
      <div className="section">
        <h2 className="section-title">📅 Upcoming Ceremonies</h2>
        <div className="card">
          <table className="data-table">
            <thead><tr><th>Ceremony</th><th>Date</th><th>Time</th><th>Duration</th><th>Team</th></tr></thead>
            <tbody>
              {[...today, ...upcoming].slice(0, 5).map(c => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.date}</td>
                  <td>{c.time}</td>
                  <td>{c.duration}</td>
                  <td>{c.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
