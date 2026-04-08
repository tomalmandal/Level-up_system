import { QUESTS } from "../data/quests";

const HistoryScreen = ({ history, onBack }) => (
  <div className="screen history-screen">
    <div className="scr-hdr z2">
      <button className="back-btn" onClick={onBack}>
        ‹
      </button>
      <div className="scr-title">Battle History</div>
    </div>

    <div className="hist-body">
      {!history || !history.length ? (
        <div
          style={{
            textAlign: "center",
            padding: "48px 20px",
            color: "#475569",
            fontSize: 10,
            fontFamily: "'Cinzel', serif",
            letterSpacing: 2,
          }}
        >
          NO RECORDS YET
          <span
            style={{
              fontSize: 9,
              display: "block",
              marginTop: 6,
              color: "#0f172a",
            }}
          >
            Submit your first day to begin
          </span>
        </div>
      ) : (
        history.map((h, idx) => (
          <div key={idx} className="hc">
            <div className="hc-hdr">
              <span className="hc-date">
                {h.date}
                {h.auto ? " (auto)" : ""}
              </span>
              <span
                className="hc-delta"
                style={{ color: h.delta >= 0 ? "#10b981" : "#ef4444" }}
              >
                {h.delta >= 0 ? "+" : ""}
                {h.delta} pts → {h.points}
              </span>
            </div>
            <div className="hc-body">
              {QUESTS.map((q, i) => (
                <div key={i} className="hc-row">
                  <span style={{ color: h.checks[i] ? "#10b981" : "#ef4444" }}>
                    {h.checks[i] ? "✓" : "✗"} {q.name}
                  </span>
                  <span style={{ color: "#475569", fontSize: 10 }}>
                    {h.checks[i] ? "+" : "-"}
                    {q.pts}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  </div>
);

export default HistoryScreen;
