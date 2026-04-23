import { useState, useCallback } from 'react';
import { ROLES } from '../data/roles';

const STORAGE_KEY = 'squad-deck-role';

export function useProfile() {
  const [roleId, setRoleId] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || null;
    } catch {
      return null;
    }
  });

  const role = ROLES.find(r => r.id === roleId) || null;

  const selectRole = useCallback((id) => {
    setRoleId(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {}
  }, []);

  const clearRole = useCallback(() => {
    setRoleId(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }, []);

  return { role, selectRole, clearRole };
}
