export function QuizLogo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
    >
      {/* Main gradient background circle */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C63FF" />
          <stop offset="100%" stopColor="#5B52D5" />
        </linearGradient>
      </defs>

      <circle cx="20" cy="20" r="19" fill="url(#logoGradient)" />

      {/* Decorative corner elements */}
      <circle cx="28" cy="12" r="3" fill="#FFD369" opacity="0.8" />
      <circle cx="12" cy="28" r="3" fill="#FF6584" opacity="0.8" />

      {/* Central stylized book/quiz icon with lines */}
      <path
        d="M 14 16 L 14 28 Q 14 29 15 29 L 25 29 Q 26 29 26 28 L 26 16 Q 26 15 25 15 L 15 15 Q 14 15 14 16"
        fill="none"
        stroke="#F8F8FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Spine of book */}
      <line x1="20" y1="15" x2="20" y2="29" stroke="#F8F8FF" strokeWidth="1.5" opacity="0.6" />

      {/* Quiz lines - question marks arranged */}
      <circle cx="17" cy="19" r="1.2" fill="#FFD369" />
      <circle cx="23" cy="19" r="1.2" fill="#FF6584" />
      <circle cx="17" cy="24" r="1.2" fill="#FF6584" />
      <circle cx="23" cy="24" r="1.2" fill="#FFD369" />

      {/* Animated indicator - top accent */}
      <path d="M 20 12 L 20 10" stroke="#FFD369" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
    </svg>
  )
}
