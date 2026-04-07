import { useEffect } from 'react';

const AwakeningScreen = ({ username, rank, isNew, onDone }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  if (!rank) return null;

  return (
    <div className="screen awake-screen">
      <div className="awake-sys">◈ System Message ◈</div>
      <div className="awake-msg" style={{ color: rank.color }}>
        {isNew ? 'A NEW HUNTER HAS AWAKENED' : 'WELCOME BACK, HUNTER'}
      </div>
      <div className="awake-sub">
        {username.toUpperCase()} · {rank.title.toUpperCase()}
      </div>
      <div className="awake-bars">
        {Array.from({ length: 7 }, (_, i) => (
          <div
            key={i}
            className="awake-bar"
            style={{ background: rank.color, animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default AwakeningScreen;
