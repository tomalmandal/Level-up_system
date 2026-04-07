import { QUESTS } from '../data/quests';

const QuestScreen = ({ userState, onToggle, onSubmit, onBack }) => {
  const { today } = userState;
  const checks = today.checks || QUESTS.map(() => false);
  const submitted = today.submitted;
  const checked = checks.filter(Boolean).length;
  const total = QUESTS.length;
  const pct = Math.round((checked / total) * 100);

  const earned = checks.reduce((a, c, i) => c ? a + QUESTS[i].pts : a, 0);
  const lost   = checks.reduce((a, c, i) => !c ? a + QUESTS[i].pts : a, 0);
  const net    = earned - lost;

  return (
    <div className="screen quest-screen">
      <div className="scr-hdr z2">
        <button className="back-btn" onClick={onBack}>‹</button>
        <div className="scr-title">Daily Quests</div>
        {submitted && (
          <div style={{ fontSize: 9, color: '#10b981', fontFamily: "'Cinzel', serif", letterSpacing: 1 }}>
            ✓ Submitted
          </div>
        )}
      </div>

      <div className="quest-meta z2">
        <div className="qm-date">
          {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase()}
        </div>
        <div className="qm-bar-wrap">
          <div className="qm-row">
            <span className="qm-label">Quest Progress</span>
            <span className="qm-count">{checked} / {total}</span>
          </div>
          <div className="qm-track">
            <div className="qm-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="qm-note">
            {submitted
              ? 'Submitted. See you tomorrow, hunter.'
              : 'Check completed quests → submit to update rank'}
          </div>
        </div>
      </div>

      <div className="quest-list">
        {QUESTS.map((q, i) => (
          <div
            key={i}
            className={`qc-item${checks[i] ? ' checked' : ''}${submitted ? ' locked' : ''}`}
            onClick={() => !submitted && onToggle(i)}
          >
            <div className="qc-box">{checks[i] ? '✓' : ''}</div>
            <div>
              <div className="qc-name">{q.name}</div>
              <div className="qc-sub">{q.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="submit-zone z2">
        <button
          className={`submit-btn ${submitted ? 'done' : 'ready'}`}
          onClick={!submitted ? onSubmit : undefined}
        >
          {submitted ? (
            <><span>✓</span><span>Submitted for today</span></>
          ) : (
            <><span style={{ fontSize: 16 }}>⚔</span><span>Submit Daily Report</span></>
          )}
        </button>
        {!submitted && (
          <div className="submit-hint">
            {checked > 0
              ? `Net: ${net >= 0 ? '+' : ''}${net} pts  (${earned} earned · ${lost} lost)`
              : 'Mark your completed quests above'}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestScreen;
