import './Sidebar.css';

export default function Sidebar({ role, activeSection, onSelect }) {
  return (
    <nav className="sidebar">
      <ul>
        {role.navItems.map(item => (
          <li key={item}>
            <button
              className={`sidebar-item ${activeSection === item ? 'active' : ''}`}
              onClick={() => onSelect(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
