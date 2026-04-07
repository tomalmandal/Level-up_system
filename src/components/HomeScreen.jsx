import { getRank, getNextRank, getRankProgress } from '../data/ranks';
import { GUILD_IMAGE_SRC } from '../data/guildImage';
import SwordsIcon from './SwordsIcon';
import { toast } from './Toast';

const architectRestriction = () => {
  toast(
    '◈ ARCHITECT ACCESS DENIED :: Quest protocols are locked by the System Overseer ◈',
    '#93c5fd',
    'rgba(30,58,138,.18)'
  );
};

const HomeScreen = ({ userState, onNavigate }) => {
  const rank = getRank(userState.points);
  const pct = getRankProgress(userState.points);

  // Guild image style — exact from original HTML
  const guildImgStyle = {
    position: 'absolute',
    inset: 0,
    width: '138%',
    height: '138%',
    left: '-19%',
    top: '-19%',
    objectFit: 'contain',
    opacity: 0.11,
    filter: 'blur(.15px) drop-shadow(0 0 20px rgba(255,255,255,.07))',
    pointerEvents: 'none',
  };

  return (
    <div className="screen home-screen">
      <div className="home-inner z2">
        <div className="home-top">
          <SwordsIcon size={44} className="swords-svg" />
          <div className="home-title">SOLO LEVELING</div>
          <div className="home-sub">Hunter's Daily System</div>
        </div>

        {/* Rank Card — exact layout from original */}
        <div className="rank-card-wrap">
          <div className="rank-card" onClick={() => onNavigate('rank')}>
            <div className="rc-hero" style={{ background: rank.bg }}>
              <div className="rc-grid" />
              {/* Guild image — exact from original */}
              <div className="rc-char">
                <img src={GUILD_IMAGE_SRC} alt="" style={guildImgStyle} />
              </div>
              <div className="rc-glow" style={{ background: rank.glow }} />
              <div className="rc-vig" />
              <div className="rc-content">
                <div
                  className="rc-letter"
                  style={{
                    color: rank.color,
                    textShadow: `0 0 40px ${rank.color}aa, 0 0 80px ${rank.color}44`,
                  }}
                >
                  {rank.display}
                </div>
                <div className="rc-name">{rank.title}</div>
              </div>
            </div>
            <div className="rc-footer">
              <div style={{ flexShrink: 0 }}>
                <div className="rcf-pts-val" style={{ color: rank.color }}>
                  {userState.points} pts
                </div>
                <div className="rcf-pts-label">Total Points</div>
              </div>
              <div className="rcf-xp">
                <div className="rcf-xp-row">
                  <span>Progress</span>
                  <span>{pct}%</span>
                </div>
                <div className="rcf-xp-track">
                  <div
                    className="rcf-xp-fill"
                    style={{ width: `${pct}%`, background: rank.color }}
                  />
                </div>
              </div>
            </div>
            <div className="rc-tap">Tap to view rank</div>
          </div>
        </div>

        {/* 4-grid Nav — fills remaining page height */}
        <div className="nav-grid">
          <div className="ng-btn ng-quests" onClick={() => onNavigate('quests')}>
            <div className="ng-icon">📋</div>
            <div className="ng-label">Daily Quests</div>
          </div>
          <div className="ng-btn ng-rank" onClick={() => onNavigate('rank')}>
            <div className="ng-icon">🏆</div>
            <div className="ng-label">My Rank</div>
          </div>
          <div className="ng-btn ng-history" onClick={() => onNavigate('history')}>
            <div className="ng-icon">📜</div>
            <div className="ng-label">History</div>
          </div>
          <div className="ng-btn ng-manage" onClick={architectRestriction}>
            <div className="ng-icon">⚙</div>
            <div className="ng-label">Manage Quests ↗</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
