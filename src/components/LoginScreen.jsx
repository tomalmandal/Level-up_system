import { useState, useRef, useEffect } from 'react';
import { useParticleCanvas } from '../hooks/useParticleCanvas';
import { getAllUsers, deleteUser as deleteUserStore } from '../hooks/useUserStore';
import { getRank } from '../data/ranks';
import SwordsIcon from './SwordsIcon';

const LoginScreen = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [err, setErr] = useState('');
  const [users, setUsers] = useState({});
  const canvasRef = useParticleCanvas({ color: '#4f6ef7', count: 60, connectLines: true });
  const inputRef = useRef(null);

  useEffect(() => {
    setUsers(getAllUsers());
  }, []);

  const handleLogin = () => {
    const val = name.trim();
    if (!val) { setErr('◈ Enter your hunter name'); return; }
    if (val.length < 2) { setErr('◈ Name too short — min 2 characters'); return; }
    setErr('');
    onLogin(val);
  };

  const handleQuickLogin = (n) => {
    onLogin(n);
  };

  const handleDelete = (e, n) => {
    e.stopPropagation();
    if (!window.confirm(`Remove hunter "${n}"? All progress will be lost.`)) return;
    deleteUserStore(n);
    setUsers(getAllUsers());
  };

  const userList = Object.keys(users);

  return (
    <div className="screen login-screen">
      <canvas ref={canvasRef} className="login-canvas" />
      <div className="login-wrap">
        <div className="login-system-tag">◈ Hunter Association System ◈</div>
        <SwordsIcon size={52} className="login-swords" />
        <div className="login-title">SOLO LEVELING</div>
        <div className="login-sub">Hunter's Daily System</div>

        <div className="login-divider">
          <div className="login-divider-line" />
          <div className="login-divider-text">Enter the System</div>
          <div className="login-divider-line" />
        </div>

        <div className="login-box">
          {userList.length > 0 && (
            <>
              <div className="login-users-label">◈ Registered Hunters</div>
              <div className="login-user-list">
                {userList.map(n => {
                  const u = users[n];
                  const r = getRank(u.points || 0);
                  return (
                    <div key={n} className="login-user-item" onClick={() => handleQuickLogin(n)}>
                      <div
                        className="liu-avatar"
                        style={{ color: r.color, borderColor: r.color + '44', background: r.color + '0e' }}
                      >
                        {r.display}
                      </div>
                      <div className="liu-info">
                        <div className="liu-name">{n}</div>
                        <div className="liu-rank">{r.title} · {u.points || 0} pts</div>
                      </div>
                      <div className="liu-del" onClick={e => handleDelete(e, n)}>✕</div>
                    </div>
                  );
                })}
              </div>
              <div className="login-divider" style={{ margin: '12px 0' }}>
                <div className="login-divider-line" />
                <div className="login-divider-text">or new hunter</div>
                <div className="login-divider-line" />
              </div>
            </>
          )}

          <div className="login-box-label">Hunter Name</div>
          <div className="login-input-wrap">
            <input
              ref={inputRef}
              className="login-input"
              type="text"
              placeholder="Enter your name..."
              maxLength={20}
              autoComplete="off"
              spellCheck={false}
              value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
            />
            <div className="login-input-glow" />
          </div>

          <button className="login-enter-btn" onClick={handleLogin}>
            <span style={{ fontSize: 16 }}>⚔</span>
            <span>Arise</span>
          </button>
          <div className="login-err">{err}</div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
