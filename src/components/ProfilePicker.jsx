import { ROLES } from '../data/roles';
import './ProfilePicker.css';

export default function ProfilePicker({ onSelect }) {
  return (
    <div className="profile-picker">
      <div className="picker-header">
        <h1>Squad Deck</h1>
        <p>Select your role to get started</p>
      </div>
      <div className="role-cards">
        {ROLES.map(role => (
          <button
            key={role.id}
            className="role-card"
            onClick={() => onSelect(role.id)}
          >
            <span className="role-icon">{role.icon}</span>
            <div className="role-info">
              <strong>{role.name}</strong>
              <span className="role-desc">{role.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
