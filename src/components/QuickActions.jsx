import './QuickActions.css';

export default function QuickActions({ actions }) {
  return (
    <div className="quick-actions">
      {actions.map(label => (
        <button key={label} className="qa-btn" onClick={() => alert(`${label} — coming soon!`)}>
          {label}
        </button>
      ))}
    </div>
  );
}
