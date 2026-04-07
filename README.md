# Solo Leveling — Hunter System

A gamified daily habit tracker inspired by the Solo Leveling manhwa. Multi-user, fully offline, runs in the browser.

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
```

Outputs to the `build/` folder — deploy anywhere (Netlify, Vercel, GitHub Pages).

## Project Structure

```
src/
├── data/
│   ├── ranks.js          # All 7 rank tiers (E → National) with SVG art, colors, thresholds
│   └── quests.js         # Daily quest list with point values
├── hooks/
│   ├── useUserStore.js   # localStorage multi-user state management
│   ├── useAudio.js       # Web Audio API hook for SFX
│   └── useParticleCanvas.js  # Animated particle canvas hook
├── components/
│   ├── LoginScreen.jsx   # Manhwa-style login with particle network bg
│   ├── AwakeningScreen.jsx   # Cinematic transition on login
│   ├── HomeScreen.jsx    # Dashboard with animated rank card
│   ├── QuestScreen.jsx   # Daily checklist + submit
│   ├── RankScreen.jsx    # Full rank showcase with particle canvas
│   ├── HistoryScreen.jsx # Past day records
│   ├── RankUpOverlay.jsx # Rank-up cinematic overlay
│   ├── RankSvg.jsx       # Rank character SVG renderer
│   ├── SwordsIcon.jsx    # Crossed swords SVG component
│   └── Toast.jsx         # Global toast notification system
├── styles/
│   └── global.css        # All styles (animations, layout, components)
├── App.jsx               # Root component — state machine + routing
└── index.js              # React entry point
```

## Game Logic

- **Submit daily** — check completed quests, hit Submit. Points update only on submit.
- **Checked quest** → +pts, **Unchecked** → -pts
- **No login for a day** → -30 pts penalty on next open
- **7 Rank tiers** — E → D → C → B → A → S → National Level Hunter
- **Multi-user** — each hunter has isolated localStorage data
- **Auto-reset** — new day detected on app open, previous day auto-processed

## Quests (Customizable in `src/data/quests.js`)

| Quest | Points |
|---|---|
| Hunt & apply (3 job applications) | 25 |
| Build something (1hr code/project) | 20 |
| Conquer the iron (gym/run) | 20 |
| Hydration protocol (4 jugs water) | 10 |
| Lights out by 1 AM | 15 |
| Clean fuel only (no junk food) | 15 |
| Iron discipline (no smoking/alcohol/self-pleasure) | 30 |
| Stay present (no mindless scrolling) | 15 |

**Perfect day = 150 pts.** Hit S-rank in ~2–3 weeks of consistency.
