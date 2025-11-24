// Educational-themed SVG icons for the quiz maker
export const NotebookIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="10" y1="5" x2="10" y2="7" />
    <line x1="10" y1="11" x2="10" y2="13" />
    <line x1="10" y1="17" x2="10" y2="19" />
  </svg>
)

export const ChecklistIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z" />
    <path d="M9 9l3 3 6-6" />
  </svg>
)

export const QuestionMarkIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

export const BrainIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 3C6.716 3 5 4.716 5 7s1.716 4 4 4" />
    <path d="M15 3c2.284 0 4 1.716 4 4s-1.716 4-4 4" />
    <path d="M9 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    <path d="M15 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    <path d="M7 13c-1.5 1-2 3-2 5 0 2 1 3 3 3h8c2 0 3-1 3-3 0-2-.5-4-2-5" />
    <path d="M12 17v3" />
  </svg>
)

export const TrophyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 9H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2" />
    <path d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3H6z" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
)
