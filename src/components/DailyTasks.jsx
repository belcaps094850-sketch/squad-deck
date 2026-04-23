import { useState } from 'react';
import './DailyTasks.css';

export default function DailyTasks({ role }) {
  const [tasks, setTasks] = useState(
    role.defaultTasks.map((t, i) => ({ id: i, text: t, done: false }))
  );
  const [input, setInput] = useState('');

  function toggle(id) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function addTask() {
    const text = input.trim();
    if (!text) return;
    setTasks(prev => [...prev, { id: Date.now(), text, done: false }]);
    setInput('');
  }

  const done = tasks.filter(t => t.done).length;

  return (
    <aside className="daily-tasks">
      <div className="dt-header">
        <strong>Today's Tasks</strong>
        <span className="dt-count">{done}/{tasks.length}</span>
      </div>
      <ul className="dt-list">
        {tasks.map(t => (
          <li key={t.id} className={`dt-item ${t.done ? 'done' : ''}`}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggle(t.id)}
              id={`task-${t.id}`}
            />
            <label htmlFor={`task-${t.id}`}>{t.text}</label>
          </li>
        ))}
      </ul>
      <div className="dt-add">
        <input
          type="text"
          placeholder="Add task..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>+</button>
      </div>
    </aside>
  );
}
