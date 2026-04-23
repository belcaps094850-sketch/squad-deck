import QuickActions from '../QuickActions';
import { ROLES } from '../../data/roles';
import { pi, teams, impediments, velocityTrend, demoReadiness } from '../../data/mockData';
import './Dashboard.css';

const daysUntil = (dateStr) => {
  const diff = new Date(dateStr) - new Date('2026-04-23');
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

export default function RTEDashboard() {
  const role = ROLES.find(r => r.id === 'rte');
  const demoDays = daysUntil(pi.systemDemoDate);
  const openImpediments = impediments.filter(i => i.status !== 'resolved');
  const maxVelocity = Math.max(...velocityTrend.map(v => v.planned));

  return (
    <div className="dashboard">
      <QuickActions actions={role.quickActions} />

      {/* ART Status */}
      <div className="section">
        <h2 className="section-title">🚂 ART Status — {pi.name}</h2>
        <div className="card">
          <div className="metric-row">
            <div className="metric">
              <span className="metric-label">Teams on ART</span>
              <span className="metric-value">{teams.length}</span>
            </div>
            <div className="metric">
              <span className="metric-label">PI Completion</span>
              <span className="metric-value">{pi.completionPct}%</span>
            </div>
            <div className="metric">
              <span className="metric-label">Current Sprint</span>
              <span className="metric-value">{pi.currentSprint}/{pi.totalSprints}</span>
            </div>
            <div className="metric">
              <span className="metric-label">System Demo</span>
              <span className="metric-value">{demoDays}d away</span>
            </div>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar" style={{ width: `${pi.completionPct}%` }} />
          </div>
        </div>
      </div>

      {/* Program Board Highlights */}
      <div className="section">
        <h2 className="section-title">📌 Program Board Highlights</h2>
        <div className="card-grid three-col">
          <div className="card">
            <h3 className="card-sub">Cross-Team Dependencies</h3>
            <ul className="plain-list">
              <li>🔴 Phoenix → Titan: ForgeRock API contract</li>
              <li>🔴 Falcon → Horizon: shared DB schema</li>
              <li>🟡 Titan → Phoenix: auth middleware</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="card-sub">Program Risks</h3>
            <ul className="plain-list">
              <li>🔴 ForgeRock env unavailable (Titan)</li>
              <li>🟡 Falcon capacity 30% below plan</li>
              <li>🟡 API Gateway blocked on arch decision</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="card-sub">Blockers</h3>
            <ul className="plain-list">
              <li>🔴 Security review — no reviewer assigned</li>
              <li>🔴 Dynatrace license expired in staging</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Velocity Trend */}
      <div className="section">
        <h2 className="section-title">📊 ART Velocity Trend</h2>
        <div className="card">
          <div className="burndown-chart">
            {velocityTrend.map(v => (
              <div key={v.pi} className="burndown-col wide">
                <div className="vel-bars">
                  <div className="vel-bar-wrap">
                    <div
                      className="vel-bar planned"
                      style={{ height: `${Math.round((v.planned / maxVelocity) * 100)}%` }}
                      title={`Planned: ${v.planned}`}
                    />
                  </div>
                  {v.actual !== null && (
                    <div className="vel-bar-wrap">
                      <div
                        className="vel-bar actual"
                        style={{ height: `${Math.round((v.actual / maxVelocity) * 100)}%` }}
                        title={`Actual: ${v.actual}`}
                      />
                    </div>
                  )}
                </div>
                <span className="burndown-label">{v.pi.replace('PI ', '')}</span>
                <span className="vel-nums">{v.actual !== null ? `${v.actual}/${v.planned}` : `—/${v.planned}`}</span>
              </div>
            ))}
          </div>
          <div className="bar-legend">
            <span><span className="dot" style={{ background: '#93c5fd' }} />Planned</span>
            <span><span className="dot dot-done" />Actual</span>
          </div>
        </div>
      </div>

      {/* System Demo Readiness */}
      <div className="section">
        <h2 className="section-title">🎯 System Demo Readiness ({demoDays} days)</h2>
        <div className="card">
          <table className="data-table">
            <thead><tr><th>Team</th><th>Ready</th><th>Features to Demo</th></tr></thead>
            <tbody>
              {demoReadiness.map(d => (
                <tr key={d.team}>
                  <td>{d.team}</td>
                  <td><span className={`badge badge-${d.ready ? 'done' : 'blocked'}`}>{d.ready ? 'Ready' : 'Not Ready'}</span></td>
                  <td>{d.featuresDemo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Impediments */}
      <div className="section">
        <h2 className="section-title">🚧 Impediment Tracker</h2>
        <div className="card">
          <table className="data-table">
            <thead><tr><th>ID</th><th>Issue</th><th>Team</th><th>Owner</th><th>Age</th><th>Status</th><th>Severity</th></tr></thead>
            <tbody>
              {openImpediments.map(i => (
                <tr key={i.id}>
                  <td className="mono">{i.id}</td>
                  <td>{i.title}</td>
                  <td>{i.team}</td>
                  <td>{i.owner}</td>
                  <td>{i.age}d</td>
                  <td><span className={`badge badge-${i.status === 'in-progress' ? 'in-progress' : 'at-risk'}`}>{i.status}</span></td>
                  <td><span className={`badge badge-${i.severity === 'high' ? 'blocked' : 'at-risk'}`}>{i.severity}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
