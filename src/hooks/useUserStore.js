import { QUESTS, IDLE_PENALTY } from '../data/quests';

const USERS_KEY = 'sl_users_v2';
const SESSION_KEY = 'sl_session_v2';

export const getAllUsers = () => {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || {}; }
  catch { return {}; }
};

export const saveAllUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getDefaultState = () => ({
  points: 0,
  history: [],
  today: {
    date: '',
    checks: QUESTS.map(() => false),
    submitted: false,
  },
});

export const getUserState = (name) => {
  const all = getAllUsers();
  if (!all[name]) all[name] = getDefaultState();
  return all[name];
};

export const saveUserState = (name, state) => {
  const all = getAllUsers();
  all[name] = state;
  saveAllUsers(all);
};

export const deleteUser = (name) => {
  const all = getAllUsers();
  delete all[name];
  saveAllUsers(all);
  if (getSession() === name) clearSession();
};

export const getSession = () => {
  try { return localStorage.getItem(SESSION_KEY) || ''; }
  catch { return ''; }
};

export const setSession = (name) => {
  localStorage.setItem(SESSION_KEY, name);
};

export const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const checkAndResetDay = (name, state) => {
  const now = new Date().toDateString();
  if (!state.today || state.today.date === now) return state;

  let updated = { ...state };

  if (state.today.date && !state.today.submitted) {
    const allIdle = !state.today.checks || state.today.checks.every(c => !c);
    let delta = 0;
    if (allIdle) {
      delta = -IDLE_PENALTY;
    } else {
      state.today.checks.forEach((c, i) => {
        delta += c ? QUESTS[i].pts : -QUESTS[i].pts;
      });
    }
    const newPoints = Math.max(0, state.points + delta);
    const historyEntry = {
      date: state.today.date,
      checks: [...state.today.checks],
      points: newPoints,
      delta,
      auto: true,
    };
    updated = {
      ...updated,
      points: newPoints,
      history: [historyEntry, ...state.history].slice(0, 60),
    };
  }

  updated.today = {
    date: now,
    checks: QUESTS.map(() => false),
    submitted: false,
  };

  saveUserState(name, updated);
  return updated;
};
