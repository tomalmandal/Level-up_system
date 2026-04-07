import { useEffect, useRef } from "react";
import { GUILD_IMAGE_SRC } from "../data/guildImage";
import { RANKS, getRank, getNextRank, getRankProgress } from "../data/ranks";

const RankScreen = ({ points, onBack }) => {
  const rank = getRank(points);
  const nextRank = getNextRank(rank);
  const pct = getRankProgress(points);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const ps = Array.from({ length: 40 }, () => ({
      x: Math.random() * 380,
      y: Math.random() * 300,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2.5 + 0.5,
      o: Math.random() * 0.5 + 0.1,
    }));

    const loop = () => {
      ctx.clearRect(0, 0, 380, 300);
      ps.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 380) p.vx *= -1;
        if (p.y < 0 || p.y > 300) p.vy *= -1;
        ctx.globalAlpha = p.o;
        ctx.fillStyle = rank.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [rank.color]);

  return (
    <div className="screen rank-screen">
      <div className="scr-hdr z2">
        <button className="back-btn" onClick={onBack}>
          ‹
        </button>
        <div className="scr-title">Hunter Rank</div>
      </div>

      <div className="rank-content">
        <div className="rank-showcase">
          <div className="rsc-hero" style={{ background: rank.bg }}>
            <div className="rsc-grid" />
            <div className="rsc-char">
              <img
                src={GUILD_IMAGE_SRC}
                alt=""
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "138%",
                  height: "138%",
                  left: "-19%",
                  top: "-19%",
                  objectFit: "contain",
                  opacity: 0.11,
                  filter:
                    "blur(.15px) drop-shadow(0 0 20px rgba(255,255,255,.07))",
                  pointerEvents: "none",
                }}
              />
            </div>
            <div className="rsc-glow" style={{ background: rank.glow }} />
            <div className="rsc-vig" />
            <canvas
              ref={canvasRef}
              className="rsc-canvas"
              width={380}
              height={300}
            />
            <div
              className="rsc-letter"
              style={{
                color: rank.color,
                textShadow: `0 0 50px ${rank.color}cc, 0 0 100px ${rank.color}55`,
              }}
            >
              {rank.display}
            </div>
            <div className="rsc-title">{rank.title}</div>
          </div>
          <div className="rsc-footer">
            <div className="rscf-row">
              <span className="rscf-label">Hunter Points</span>
              <span className="rscf-pts" style={{ color: rank.color }}>
                {points} pts
              </span>
            </div>
            <div className="rscf-track">
              <div
                className="rscf-fill"
                style={{ width: `${pct}%`, background: rank.color }}
              />
            </div>
            <div className="rscf-labels">
              <span>
                {points - rank.min} / {nextRank ? nextRank.min - rank.min : "∞"}{" "}
                XP
              </span>
              <span>{nextRank ? `→ ${nextRank.title}` : "MAX RANK"}</span>
            </div>
          </div>
        </div>

        <div className="rank-ladder">
          <div className="rl-title">◈ Rank Ladder ◈</div>
          {RANKS.map((rk, idx) => {
            const isCur = rk.rank === rank.rank;
            const isDone = points >= rk.min && !isCur;
            return (
              <div
                key={rk.rank}
                className={`rl-item${isCur ? " rl-cur" : isDone ? " rl-past" : ""}`}
              >
                <div className="rl-letter" style={{ color: rk.color }}>
                  {rk.display}
                </div>
                <div className="rl-info">
                  <div
                    className="rl-name"
                    style={{ color: isCur ? rk.color : "#475569" }}
                  >
                    {rk.title}
                  </div>
                  <div className="rl-range">
                    {rk.min}
                    {RANKS[idx + 1]
                      ? ` – ${RANKS[idx + 1].min - 1} pts`
                      : " pts+"}
                  </div>
                </div>
                <div className="rl-mark" style={{ color: rk.color }}>
                  {isCur ? "◈" : isDone ? "✓" : "○"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RankScreen;
