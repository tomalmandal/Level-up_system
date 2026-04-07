const SwordsIcon = ({ size = 44, className = '' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="8" y1="8" x2="36" y2="36" stroke="rgba(180,190,255,0.9)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="36" y1="8" x2="8" y2="36" stroke="rgba(180,190,255,0.9)" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="5" y="5" width="7" height="4" rx="1" transform="rotate(45 5 5)" fill="rgba(180,190,255,0.7)"/>
    <rect x="32" y="5" width="7" height="4" rx="1" transform="rotate(-45 39 5)" fill="rgba(180,190,255,0.7)"/>
    <circle cx="8" cy="8" r="2" fill="rgba(180,190,255,0.5)"/>
    <circle cx="36" cy="8" r="2" fill="rgba(180,190,255,0.5)"/>
    <circle cx="8" cy="36" r="2" fill="rgba(180,190,255,0.5)"/>
    <circle cx="36" cy="36" r="2" fill="rgba(180,190,255,0.5)"/>
  </svg>
);

export default SwordsIcon;
