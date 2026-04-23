import './Header.css';

export default function Header({ role, onSwitchRole }) {
  return (
    <header className="app-header">
      <div className="header-left">
        <span className="app-logo">Squad Deck</span>
        <span className="header-divider">|</span>
        <span className="header-role">
          {role.icon} {role.name}
        </span>
      </div>
      <div className="header-right">
        <div className="alert-badges">
          {role.alerts.map(a => (
            <span key={a.id} className={`alert-badge badge-${a.level}`} title={a.text}>
              {a.text}
            </span>
          ))}
        </div>
        <button className="switch-role-btn" onClick={onSwitchRole}>
          Switch Role
        </button>
      </div>
    </header>
  );
}
