import QuickActions from '../QuickActions';
import { ROLES } from '../../data/roles';
import { storyReadiness, requirements, stakeholderRequests, ceremonies } from '../../data/mockData';
import './Dashboard.css';

const statusClass = { 'needs-refinement': 'at-risk', 'in-analysis': 'in-progress', 'new': 'blue', 'pending': 'at-risk', 'under-review': 'in-progress' };

export default function BADashboard() {
  const role = ROLES.find(r => r.id === 'ba');
  const workshops = ceremonies.filter(c => ['Backlog Refinement'].includes(c.name));
  const acPct = Math.round((storyReadiness.withAC / storyReadiness.totalStories) * 100);
  const readyPct = Math.round((storyReadiness.readyForSprint / storyReadiness.totalStories) * 100);

  return (
    <div className="dashboard">
      <QuickActions actions={role.quickActions} />

      {/* Story Readiness */}
      <div className="section">
        <h2 className="section-title">✅ Story Readiness Tracker</h2>
        <div className="card">
          <div className="metric-row">
            <div className="metric">
              <span className="metric-label">Total Stories</span>
              <span className="metric-value">{storyReadiness.totalStories}</span>
            </div>
            <div className="metric">
              <span className="metric-label">With AC</span>
              <span className="metric-value">{storyReadiness.withAC} ({acPct}%)</span>
            </div>
            <div className="metric">
              <span className="metric-label">Ready for Sprint</span>
              <span className="metric-value">{storyReadiness.readyForSprint} ({readyPct}%)</span>
            </div>
            <div className="metric">
              <span className="metric-label">In Refinement</span>
              <span className="metric-value">{storyReadiness.inRefinement}</span>
            </div>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar" style={{ width: `${acPct}%` }} />
          </div>
          <p className="card-note">{acPct}% of stories have acceptance criteria</p>
        </div>
      </div>

      {/* AC Coverage by Epic */}
      <div className="section">
        <h2 className="section-title">📦 AC Coverage by Epic</h2>
        <div className="card">
          <table className="data-table">
            <thead><tr><th>Epic</th><th>Total Stories</th><th>With AC</th><th>Coverage</th></tr></thead>
            <tbody>
              {storyReadiness.byEpic.map(e => {
                const pct = Math.round((e.withAC / e.total) * 100);
                return (
                  <tr key={e.epic}>
                    <td>{e.epic}</td>
                    <td>{e.total}</td>
                    <td>{e.withAC}</td>
                    <td>
                      <div className="inline-progress">
                        <div className="inline-bar" style={{ width: `${pct}%`, background: pct < 50 ? '#ef4444' : pct < 80 ? '#f59e0b' : '#22c55e' }} />
                        <span>{pct}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Requirements Queue */}
      <div className="section">
        <h2 className="section-title">📝 Requirements Queue</h2>
        <div className="card">
          <table className="data-table">
            <thead><tr><th>ID</th><th>Requirement</th><th>Requestor</th><th>Age</th><th>Status</th></tr></thead>
            <tbody>
              {requirements.map(r => (
                <tr key={r.id}>
                  <td className="mono">{r.id}</td>
                  <td>{r.title}</td>
                  <td>{r.requestor}</td>
                  <td className={r.age >= 5 ? 'text-red' : ''}>{r.age}d</td>
                  <td><span className={`badge badge-${statusClass[r.status] || 'at-risk'}`}>{r.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stakeholder Inbox */}
      <div className="section">
        <h2 className="section-title">📬 Stakeholder Requests Inbox</h2>
        <div className="card">
          <table className="data-table">
            <thead><tr><th>ID</th><th>Request</th><th>From</th><th>Date</th><th>Priority</th><th>Status</th></tr></thead>
            <tbody>
              {stakeholderRequests.map(s => (
                <tr key={s.id}>
                  <td className="mono">{s.id}</td>
                  <td>{s.title}</td>
                  <td>{s.from}</td>
                  <td>{s.date}</td>
                  <td><span className={`badge badge-${s.priority === 'high' ? 'blocked' : 'at-risk'}`}>{s.priority}</span></td>
                  <td><span className={`badge badge-${statusClass[s.status] || 'at-risk'}`}>{s.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Workshops */}
      <div className="section">
        <h2 className="section-title">🗓️ Upcoming Refinement Sessions</h2>
        <div className="card">
          <table className="data-table">
            <thead><tr><th>Session</th><th>Date</th><th>Time</th><th>Duration</th><th>Team</th></tr></thead>
            <tbody>
              {workshops.map(c => (
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
