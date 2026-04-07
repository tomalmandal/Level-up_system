import { useState, useEffect, useRef, useCallback } from 'react';
import './styles/global.css';

import {
  getAllUsers,
  getUserState,
  saveUserState,
  checkAndResetDay,
  getSession,
  setSession,
  clearSession,
} from './hooks/useUserStore';
import { useAudio } from './hooks/useAudio';
import { useParticleCanvas } from './hooks/useParticleCanvas';
import { getRank } from './data/ranks';
import { QUESTS } from './data/quests';

import LoginScreen    from './components/LoginScreen';
import AwakeningScreen from './components/AwakeningScreen';
import HomeScreen     from './components/HomeScreen';
import QuestScreen    from './components/QuestScreen';
import RankScreen     from './components/RankScreen';
import HistoryScreen  from './components/HistoryScreen';
import RankUpOverlay  from './components/RankUpOverlay';
import Toast          from './components/Toast';
import { toast }      from './components/Toast';

// Screens: login | awakening | home | quests | rank | history
const App = () => {
  const [screen, setScreen]           = useState('login');
  const [username, setUsername]       = useState('');
  const [userState, setUserState]     = useState(null);
  const [isNewUser, setIsNewUser]     = useState(false);
  const [rankUp, setRankUp]           = useState({ visible: false, rank: null });
  const submitLockRef                 = useRef(false);
  const { muted, toggle: toggleAudio } = useAudio();

  // bg particle canvas — color follows rank
  const rankColor = userState ? getRank(userState.points).color : '#4f6ef7';
  const bgCanvasRef = useParticleCanvas({ color: rankColor, count: 50 });

  // Auto-login on mount
  useEffect(() => {
    const saved = getSession();
    if (saved && getAllUsers()[saved]) {
      const state = checkAndResetDay(saved, getUserState(saved));
      setUsername(saved);
      setUserState(state);
      setScreen('home');
    }
  }, []);

  const handleLogin = useCallback((name) => {
    const all = getAllUsers();
    const isNew = !all[name] || !(all[name].history?.length);
    const state = checkAndResetDay(name, getUserState(name));
    setUsername(name);
    setUserState(state);
    setIsNewUser(isNew);
    setSession(name);
    setScreen('awakening');
  }, []);

  const handleAwakeningDone = useCallback(() => {
    setScreen('home');
  }, []);

  const handleNavigate = useCallback((dest) => {
    if (dest === 'login') {
      clearSession();
      setUsername('');
      setUserState(null);
      setScreen('login');
    } else {
      setScreen(dest);
    }
  }, []);

  const handleToggleQuest = useCallback((i) => {
    if (!userState || userState.today.submitted) return;
    const updated = {
      ...userState,
      today: {
        ...userState.today,
        checks: userState.today.checks.map((c, idx) => idx === i ? !c : c),
      },
    };
    setUserState(updated);
    saveUserState(username, updated);
  }, [userState, username]);

  const handleSubmit = useCallback(() => {
    if (!userState || userState.today.submitted || submitLockRef.current) return;
    submitLockRef.current = true;

    const prevRankObj = getRank(userState.points);
    let delta = 0;
    userState.today.checks.forEach((c, i) => {
      delta += c ? QUESTS[i].pts : -QUESTS[i].pts;
    });
    const newPoints = Math.max(0, userState.points + delta);
    const historyEntry = {
      date: userState.today.date,
      checks: [...userState.today.checks],
      points: newPoints,
      delta,
      auto: false,
    };
    const updated = {
      ...userState,
      points: newPoints,
      today: { ...userState.today, submitted: true },
      history: [historyEntry, ...userState.history].slice(0, 60),
    };
    setUserState(updated);
    saveUserState(username, updated);

    setTimeout(() => { submitLockRef.current = false; }, 500);

    const newRankObj = getRank(newPoints);
    if (newRankObj.rank !== prevRankObj.rank) {
      setTimeout(() => {
        setRankUp({ visible: true, rank: newRankObj, points: newPoints });
      }, 600);
    } else {
      toast(
        delta >= 0 ? `+${delta} pts · Submitted` : `${delta} pts · Rough day, hunter`,
        '#818cf8',
        'rgba(79,110,247,.1)'
      );
    }
  }, [userState, username]);

  const currentRank = userState ? getRank(userState.points) : null;

  return (
    <div className="app-shell">
      {/* Shared bg particle canvas */}
      <canvas ref={bgCanvasRef} className="bg-canvas" />

      {/* Screens */}
      {screen === 'login' && (
        <LoginScreen onLogin={handleLogin} />
      )}

      {screen === 'awakening' && currentRank && (
        <AwakeningScreen
          username={username}
          rank={currentRank}
          isNew={isNewUser}
          onDone={handleAwakeningDone}
        />
      )}

      {screen === 'home' && userState && (
        <HomeScreen
          userState={userState}
          onNavigate={handleNavigate}
        />
      )}

      {screen === 'quests' && userState && (
        <QuestScreen
          userState={userState}
          onToggle={handleToggleQuest}
          onSubmit={handleSubmit}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'rank' && userState && (
        <RankScreen
          points={userState.points}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'history' && userState && (
        <HistoryScreen
          history={userState.history}
          onBack={() => setScreen('home')}
        />
      )}

      {/* Global overlays */}
      <RankUpOverlay
        rank={rankUp.rank}
        points={rankUp.points}
        visible={rankUp.visible}
        onClose={() => setRankUp({ visible: false, rank: null })}
      />

      <Toast />

      <button className="audio-toggle" onClick={toggleAudio}>
        {muted ? '🔇' : '🔊'}
      </button>
    </div>
  );
};

export default App;
