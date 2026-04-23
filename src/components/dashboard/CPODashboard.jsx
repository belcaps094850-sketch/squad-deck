import QuickActions from '../QuickActions';
import { ROLES } from '../../data/roles';
import { pi, epics, teams, escalations, ceremonies } from '../../data/mockData';
import './Dashboard.css';

const statusLabel = { 'in-progress': 'In Progress', 'at-risk': 'At Risk', 'done': 'Done', 'blocked': 'Blocked' };

export default function CPODashboard() {
  const role = ROLES.find(r => r.id === 'cpo');
  const piEvents = ceremonies.filter(c => ['System Demo', 'PI Planning', 'Inspect & Adapt'].includes(c.name));

  return (
    <div className="dashboard">
      <QuickActions actions={role.quickActions} />

      {/* PI Progress */}
      <div className="section">
        <h2 className="section-title">📈 {pi.name} — Sprint {pi.currentSprint}/{pi.totalSprints}</h2>
        <div className="card">
          <div className="metric-row">
            <div className="metric">
              <span className="metric-label">Overall Completion</span>
              <span className="metric-value">{pi.completionPct}%</span>
            </div>
            <div className="metric">
              <span className="metric-label">Current Sprint</span>
              <span className="metric-value">{pi.currentSprint} / {pi.totalSprints}</span>
            </div>
            <div className="metric">
              <span className="metric-label">PI End Date</span>
              <span className="metric-value">{pi.endDate}</span>
            </div>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar" style={{ width: `${pi.completionPct}%` }} />
          </div>
        </div>
      </div>

      {/* Portfolio / Epics */}
      <div className="section">
        <h2 className="section-title">📦 Portfolio Epics</h2>
        <div className="card">
          <table className="data-table">
            <thead>
              <tr>
                <th>Epic</th>
                <th>Team</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Stories</th>
              </tr>
            </thead>
            <tbody>
              {epics.map(e => (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.owner}</td>
                  <td><span className={`badge badge-${e.status}`}>{statusLabel[e.status]}</span></td>
                  <td>
                    <div className="inline-progress">
                      <div className="inline-bar" style={{ width: `${e.progress}%` }} />
                      <span>{e.progress}%</span>
                    </div>
                  </td>
                  <td>{e.done}/{e.stories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Team Health */}
      <div className="section">
        <h2 className="section-title">💪 Team Health</h2>
        <div className="card-grid">
          {teams.map(t => (
            <div key={t.id} className="card team-card">
              <div className="team-name">{t.name}</div>
              <div className="metric-row small">
                <div className="metric">
                  <span className="metric-label">Velocity</span>
                  <span className="metric-value">{t.velocity}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Planned</span>
                  <span className="metric-value">{t.planned}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Health</span>
                  <span className="metric-value">{t.health}%</span>
                </div>
              </div>
              <span className={`badge badge-${t.risk === 'low' ? 'done' : t.risk === 'medium' ? 'at-risk' : 'blocked'}`}>
                Risk: {t.risk}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Escalations */}
      <div className="section">
        <h2 className="section-title">🚨 Escalations</h2>
        <div className="card">
          <table className="data-table">
            <thead>
              <tr><th>ID</th><th>Issue</th><th>Team</th><th>Raised By</th><th>Age</th><th>Severity</th></tr>
            </thead>
            <tbody>
              {escalations.map(e => (
                <tr key={e.id}>
                  <td className="mono">{e.id}</td>
                  <td>{e.title}</td>
                  <td>{e.team}</td>
                  <td>{e.raisedBy}</td>
                  <td>{e.age}d</td>
                  <td><span className={`badge badge-${e.severity === 'high' ? 'blocked' : 'at-risk'}`}>{e.severity}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PI Events */}
      <div className="section">
        <h2 className="section-title">📅 Upcoming PI Events</h2>
        <div className="card">
          <table className="data-table">
            <thead><tr><th>Event</th><th>Date</th><th>Duration</th></tr></thead>
            <tbody>
              <tr><td>System Demo</td><td>{pi.systemDemoDate}</td><td>2 hrs</td></tr>
              <tr><td>PI Planning</td><td>{pi.piPlanningDate}</td><td>2 days</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
