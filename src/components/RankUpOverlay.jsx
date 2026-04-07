const RankUpOverlay = ({ rank, points, visible, onClose }) => {
  if (!rank) return null;
  return (
    <div className={`ru-overlay${visible ? ' show' : ''}`}>
      <div className="ru-sys">◈ System Notification ◈</div>
      <div
        className="ru-badge"
        style={{
          borderColor: rank.color,
          background: rank.color + '12',
          boxShadow: `0 0 50px ${rank.color}44`,
        }}
      >
        <div
          className="ru-letter"
          style={{ color: rank.color, textShadow: `0 0 30px ${rank.color}` }}
        >
          {rank.display}
        </div>
      </div>
      <div className="ru-title" style={{ color: rank.color }}>{rank.title}</div>
      <div className="ru-tagline">{rank.tagline}</div>
      <div className="ru-pts">{points} pts total</div>
      <button className="ru-close" onClick={onClose}>Continue ›</button>
    </div>
  );
};

export default RankUpOverlay;
