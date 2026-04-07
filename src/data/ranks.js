export const RANKS = [
  {
    rank: 'E', display: 'E', title: 'E Level Hunter',
    tagline: 'The awakening begins.', min: 0,
    color: '#94a3b8', glow: 'rgba(148,163,184,0.12)',
    bg: 'linear-gradient(160deg,#080a12,#0c1018)',
    svg: `<svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
      <ellipse cx="190" cy="262" rx="55" ry="7" fill="rgba(148,163,184,0.08)"/>
      <rect x="183" y="75" width="14" height="145" rx="3" fill="rgba(148,163,184,0.07)" stroke="rgba(148,163,184,0.18)" strokeWidth="1"/>
      <polygon points="190,30 170,75 190,58 210,75" fill="rgba(148,163,184,0.12)" stroke="rgba(148,163,184,0.28)" strokeWidth="1"/>
      <circle cx="190" cy="55" r="18" fill="none" stroke="rgba(148,163,184,0.1)" strokeWidth="1"/>
      <line x1="155" y1="98" x2="105" y2="150" stroke="rgba(148,163,184,0.12)" strokeWidth="9" strokeLinecap="round"/>
      <line x1="225" y1="98" x2="275" y2="150" stroke="rgba(148,163,184,0.12)" strokeWidth="9" strokeLinecap="round"/>
      <line x1="170" y1="220" x2="152" y2="278" stroke="rgba(148,163,184,0.09)" strokeWidth="11" strokeLinecap="round"/>
      <line x1="210" y1="220" x2="228" y2="278" stroke="rgba(148,163,184,0.09)" strokeWidth="11" strokeLinecap="round"/>
    </svg>`,
  },
  {
    rank: 'D', display: 'D', title: 'D Level Hunter',
    tagline: 'The gate has opened.', min: 150,
    color: '#4ade80', glow: 'rgba(74,222,128,0.12)',
    bg: 'linear-gradient(160deg,#03100a,#071a0e)',
    svg: `<svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
      <ellipse cx="190" cy="262" rx="55" ry="7" fill="rgba(74,222,128,0.1)"/>
      <rect x="182" y="72" width="16" height="148" rx="3" fill="rgba(74,222,128,0.07)" stroke="rgba(74,222,128,0.2)" strokeWidth="1"/>
      <polygon points="190,26 168,72 190,54 212,72" fill="rgba(74,222,128,0.15)" stroke="rgba(74,222,128,0.35)" strokeWidth="1"/>
      <circle cx="190" cy="50" r="20" fill="none" stroke="rgba(74,222,128,0.12)" strokeWidth="1.5"/>
      <line x1="152" y1="95" x2="96" y2="148" stroke="rgba(74,222,128,0.15)" strokeWidth="10" strokeLinecap="round"/>
      <line x1="228" y1="95" x2="284" y2="148" stroke="rgba(74,222,128,0.15)" strokeWidth="10" strokeLinecap="round"/>
      <line x1="168" y1="220" x2="148" y2="278" stroke="rgba(74,222,128,0.1)" strokeWidth="12" strokeLinecap="round"/>
      <line x1="212" y1="220" x2="232" y2="278" stroke="rgba(74,222,128,0.1)" strokeWidth="12" strokeLinecap="round"/>
      <circle cx="120" cy="175" r="3" fill="rgba(74,222,128,0.3)"/>
      <circle cx="260" cy="175" r="3" fill="rgba(74,222,128,0.3)"/>
    </svg>`,
  },
  {
    rank: 'C', display: 'C', title: 'C Level Hunter',
    tagline: 'Magic courses through you.', min: 350,
    color: '#38bdf8', glow: 'rgba(56,189,248,0.12)',
    bg: 'linear-gradient(160deg,#02080f,#04101e)',
    svg: `<svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
      <ellipse cx="190" cy="262" rx="58" ry="7" fill="rgba(56,189,248,0.1)"/>
      <rect x="181" y="68" width="18" height="152" rx="4" fill="rgba(56,189,248,0.07)" stroke="rgba(56,189,248,0.22)" strokeWidth="1"/>
      <polygon points="190,22 164,68 190,50 216,68" fill="rgba(56,189,248,0.18)" stroke="rgba(56,189,248,0.42)" strokeWidth="1.5"/>
      <circle cx="190" cy="48" r="22" fill="none" stroke="rgba(56,189,248,0.14)" strokeWidth="1.5"/>
      <path d="M148 92 Q90 135 76 172" fill="none" stroke="rgba(56,189,248,0.18)" strokeWidth="11" strokeLinecap="round"/>
      <path d="M232 92 Q290 135 304 172" fill="none" stroke="rgba(56,189,248,0.18)" strokeWidth="11" strokeLinecap="round"/>
      <polygon points="76,172 56,180 78,190" fill="rgba(56,189,248,0.16)"/>
      <polygon points="304,172 324,180 302,190" fill="rgba(56,189,248,0.16)"/>
      <line x1="165" y1="220" x2="144" y2="278" stroke="rgba(56,189,248,0.1)" strokeWidth="12" strokeLinecap="round"/>
      <line x1="215" y1="220" x2="236" y2="278" stroke="rgba(56,189,248,0.1)" strokeWidth="12" strokeLinecap="round"/>
      <circle cx="102" cy="158" r="4" fill="rgba(56,189,248,0.35)"/>
      <circle cx="278" cy="158" r="4" fill="rgba(56,189,248,0.35)"/>
    </svg>`,
  },
  {
    rank: 'B', display: 'B', title: 'B Level Hunter',
    tagline: 'Shadows bow before you.', min: 700,
    color: '#c084fc', glow: 'rgba(192,132,252,0.14)',
    bg: 'linear-gradient(160deg,#07030f,#0e0622)',
    svg: `<svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
      <ellipse cx="190" cy="264" rx="65" ry="9" fill="rgba(192,132,252,0.12)"/>
      <rect x="179" y="64" width="22" height="156" rx="5" fill="rgba(192,132,252,0.07)" stroke="rgba(192,132,252,0.22)" strokeWidth="1"/>
      <polygon points="190,16 160,64 190,44 220,64" fill="rgba(192,132,252,0.22)" stroke="rgba(192,132,252,0.55)" strokeWidth="1.5"/>
      <circle cx="190" cy="44" r="24" fill="none" stroke="rgba(192,132,252,0.14)" strokeWidth="1.5"/>
      <path d="M144 88 Q82 128 64 170" fill="none" stroke="rgba(192,132,252,0.22)" strokeWidth="12" strokeLinecap="round"/>
      <path d="M236 88 Q298 128 316 170" fill="none" stroke="rgba(192,132,252,0.22)" strokeWidth="12" strokeLinecap="round"/>
      <polygon points="64,170 42,180 66,192" fill="rgba(192,132,252,0.2)"/>
      <polygon points="316,170 338,180 314,192" fill="rgba(192,132,252,0.2)"/>
      <line x1="162" y1="220" x2="138" y2="278" stroke="rgba(192,132,252,0.1)" strokeWidth="14" strokeLinecap="round"/>
      <line x1="218" y1="220" x2="242" y2="278" stroke="rgba(192,132,252,0.1)" strokeWidth="14" strokeLinecap="round"/>
      <circle cx="86" cy="152" r="5" fill="rgba(192,132,252,0.45)"/>
      <circle cx="294" cy="152" r="5" fill="rgba(192,132,252,0.45)"/>
      <circle cx="190" cy="240" r="4" fill="rgba(192,132,252,0.25)"/>
    </svg>`,
  },
  {
    rank: 'A', display: 'A', title: 'A Level Hunter',
    tagline: 'Few stand where you stand.', min: 1200,
    color: '#fbbf24', glow: 'rgba(251,191,36,0.14)',
    bg: 'linear-gradient(160deg,#100800,#201200)',
    svg: `<svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
      <ellipse cx="190" cy="264" rx="70" ry="9" fill="rgba(251,191,36,0.13)"/>
      <rect x="177" y="60" width="26" height="160" rx="5" fill="rgba(251,191,36,0.07)" stroke="rgba(251,191,36,0.24)" strokeWidth="1.5"/>
      <polygon points="190,12 155,60 190,38 225,60" fill="rgba(251,191,36,0.25)" stroke="rgba(251,191,36,0.65)" strokeWidth="2"/>
      <circle cx="190" cy="38" r="24" fill="none" stroke="rgba(251,191,36,0.16)" strokeWidth="2"/>
      <path d="M140 85 Q74 124 54 170" fill="none" stroke="rgba(251,191,36,0.24)" strokeWidth="14" strokeLinecap="round"/>
      <path d="M240 85 Q306 124 326 170" fill="none" stroke="rgba(251,191,36,0.24)" strokeWidth="14" strokeLinecap="round"/>
      <polygon points="54,170 30,182 56,194" fill="rgba(251,191,36,0.22)"/>
      <polygon points="326,170 350,182 324,194" fill="rgba(251,191,36,0.22)"/>
      <line x1="158" y1="220" x2="132" y2="278" stroke="rgba(251,191,36,0.12)" strokeWidth="15" strokeLinecap="round"/>
      <line x1="222" y1="220" x2="248" y2="278" stroke="rgba(251,191,36,0.12)" strokeWidth="15" strokeLinecap="round"/>
      <circle cx="76" cy="148" r="6" fill="rgba(251,191,36,0.55)"/>
      <circle cx="304" cy="148" r="6" fill="rgba(251,191,36,0.55)"/>
      <polygon points="190,20 186,32 178,32 185,40 182,52 190,45 198,52 195,40 202,32 194,32" fill="rgba(251,191,36,0.4)"/>
    </svg>`,
  },
  {
    rank: 'S', display: 'S', title: 'S Level Hunter',
    tagline: 'Arise. You command the shadows.', min: 2000,
    color: '#f87171', glow: 'rgba(248,113,113,0.15)',
    bg: 'linear-gradient(160deg,#0f0101,#200202)',
    svg: `<svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
      <ellipse cx="190" cy="264" rx="75" ry="10" fill="rgba(248,113,113,0.14)"/>
      <rect x="175" y="56" width="30" height="164" rx="6" fill="rgba(248,113,113,0.07)" stroke="rgba(248,113,113,0.26)" strokeWidth="1.5"/>
      <polygon points="190,8 150,56 190,34 230,56" fill="rgba(248,113,113,0.28)" stroke="rgba(248,113,113,0.75)" strokeWidth="2"/>
      <circle cx="190" cy="34" r="26" fill="none" stroke="rgba(248,113,113,0.18)" strokeWidth="2"/>
      <circle cx="190" cy="34" r="14" fill="none" stroke="rgba(248,113,113,0.1)" strokeWidth="1"/>
      <path d="M136 80 Q62 118 40 172" fill="none" stroke="rgba(248,113,113,0.26)" strokeWidth="15" strokeLinecap="round"/>
      <path d="M244 80 Q318 118 340 172" fill="none" stroke="rgba(248,113,113,0.26)" strokeWidth="15" strokeLinecap="round"/>
      <polygon points="40,172 14,186 42,198" fill="rgba(248,113,113,0.25)"/>
      <polygon points="340,172 366,186 338,198" fill="rgba(248,113,113,0.25)"/>
      <line x1="154" y1="220" x2="126" y2="278" stroke="rgba(248,113,113,0.13)" strokeWidth="16" strokeLinecap="round"/>
      <line x1="226" y1="220" x2="254" y2="278" stroke="rgba(248,113,113,0.13)" strokeWidth="16" strokeLinecap="round"/>
      <circle cx="62" cy="144" r="7" fill="rgba(248,113,113,0.6)"/>
      <circle cx="318" cy="144" r="7" fill="rgba(248,113,113,0.6)"/>
      <circle cx="190" cy="238" r="6" fill="rgba(248,113,113,0.38)"/>
      <circle cx="190" cy="34" r="5" fill="rgba(248,113,113,0.45)"/>
    </svg>`,
  },
  {
    rank: 'National', display: 'N', title: 'National Level Hunter',
    tagline: 'Beyond rank. Beyond all.', min: 3500,
    color: '#fb923c', glow: 'rgba(251,146,60,0.18)',
    bg: 'linear-gradient(160deg,#0f0400,#200900)',
    svg: `<svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
      <ellipse cx="190" cy="264" rx="80" ry="10" fill="rgba(251,146,60,0.18)"/>
      <rect x="173" y="52" width="34" height="168" rx="7" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.3)" strokeWidth="2"/>
      <polygon points="190,4 146,52 190,28 234,52" fill="rgba(251,146,60,0.32)" stroke="rgba(251,146,60,0.85)" strokeWidth="2.5"/>
      <circle cx="190" cy="28" r="28" fill="none" stroke="rgba(251,146,60,0.2)" strokeWidth="2.5"/>
      <circle cx="190" cy="28" r="16" fill="none" stroke="rgba(251,146,60,0.12)" strokeWidth="1.5"/>
      <path d="M132 76 Q52 112 28 172" fill="none" stroke="rgba(251,146,60,0.28)" strokeWidth="17" strokeLinecap="round"/>
      <path d="M248 76 Q328 112 352 172" fill="none" stroke="rgba(251,146,60,0.28)" strokeWidth="17" strokeLinecap="round"/>
      <polygon points="28,172 0,188 30,202" fill="rgba(251,146,60,0.28)"/>
      <polygon points="352,172 380,188 350,202" fill="rgba(251,146,60,0.28)"/>
      <line x1="150" y1="220" x2="120" y2="278" stroke="rgba(251,146,60,0.15)" strokeWidth="18" strokeLinecap="round"/>
      <line x1="230" y1="220" x2="260" y2="278" stroke="rgba(251,146,60,0.15)" strokeWidth="18" strokeLinecap="round"/>
      <circle cx="50" cy="140" r="9" fill="rgba(251,146,60,0.65)"/>
      <circle cx="330" cy="140" r="9" fill="rgba(251,146,60,0.65)"/>
      <circle cx="190" cy="236" r="7" fill="rgba(251,146,60,0.42)"/>
      <circle cx="190" cy="28" r="8" fill="rgba(251,146,60,0.5)"/>
      <polygon points="190,10 186,22 178,22 185,30 182,42 190,35 198,42 195,30 202,22 194,22" fill="rgba(251,146,60,0.55)"/>
    </svg>`,
  },
];

export const getRank = (points) => {
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (points >= RANKS[i].min) return RANKS[i];
  }
  return RANKS[0];
};

export const getNextRank = (rank) => {
  const i = RANKS.indexOf(rank);
  return i < RANKS.length - 1 ? RANKS[i + 1] : null;
};

export const getRankProgress = (points) => {
  const rank = getRank(points);
  const next = getNextRank(rank);
  if (!next) return 100;
  return Math.round(((points - rank.min) / (next.min - rank.min)) * 100);
};
