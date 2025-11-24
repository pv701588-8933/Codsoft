"use client"

export function EasyCreationGraphic() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background gradient circle */}
      <defs>
        <linearGradient id="easyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#6C63FF", stopOpacity: 0.15 }} />
          <stop offset="100%" style={{ stopColor: "#FF6584", stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <circle cx="100" cy="80" r="75" fill="url(#easyGradient)" />

      {/* Laptop/Computer screen */}
      <rect x="40" y="30" width="120" height="75" rx="8" fill="none" stroke="#6C63FF" strokeWidth="3" />
      <rect x="45" y="35" width="110" height="65" rx="4" fill="#F8F8FF" opacity="0.9" />

      {/* UI Elements on screen - simplified form */}
      <line x1="55" y1="50" x2="145" y2="50" stroke="#6C63FF" strokeWidth="2" />
      <rect x="55" y="60" width="25" height="15" rx="2" fill="#FF6584" opacity="0.7" />
      <rect x="90" y="60" width="55" height="15" rx="2" fill="#FFD369" opacity="0.6" />
      <line x1="55" y1="85" x2="75" y2="85" stroke="#6B6B6B" strokeWidth="1.5" opacity="0.5" />
      <line x1="55" y1="92" x2="85" y2="92" stroke="#6B6B6B" strokeWidth="1.5" opacity="0.5" />

      {/* Cursor/Pointer */}
      <path d="M 130 115 L 140 95 L 145 125 Z" fill="#6C63FF" />
      <circle cx="135" cy="100" r="3" fill="#FF6584" />

      {/* Glow effect */}
      <circle cx="100" cy="80" r="75" fill="none" stroke="#6C63FF" strokeWidth="1" opacity="0.2" />
    </svg>
  )
}

export function InstantResultsGraphic() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background gradient circle */}
      <defs>
        <linearGradient id="resultsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FF6584", stopOpacity: 0.15 }} />
          <stop offset="100%" style={{ stopColor: "#FFD369", stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <circle cx="100" cy="80" r="75" fill="url(#resultsGradient)" />

      {/* Large circular progress indicator */}
      <circle cx="100" cy="85" r="40" fill="none" stroke="#E4E1F7" strokeWidth="8" opacity="0.5" />
      <circle
        cx="100"
        cy="85"
        r="40"
        fill="none"
        stroke="#FF6584"
        strokeWidth="8"
        strokeDasharray="188 251"
        opacity="0.9"
        transform="rotate(-90 100 85)"
      />

      {/* Percentage text */}
      <text x="100" y="95" fontSize="20" fontWeight="bold" fill="#6C63FF" textAnchor="middle">
        85%
      </text>

      {/* Success checkmark */}
      <circle cx="155" cy="50" r="18" fill="#6C63FF" />
      <path
        d="M 148 50 L 153 55 L 162 45"
        stroke="#F8F8FF"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Speed indicator lines */}
      <g stroke="#FFD369" strokeWidth="1.5" opacity="0.7">
        <line x1="65" y1="35" x2="75" y2="30" />
        <line x1="60" y1="45" x2="68" y2="40" />
        <line x1="58" y1="55" x2="65" y2="50" />
      </g>
    </svg>
  )
}

export function TrackProgressGraphic() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background gradient circle */}
      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#6C63FF", stopOpacity: 0.15 }} />
          <stop offset="100%" style={{ stopColor: "#FFD369", stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <circle cx="100" cy="80" r="75" fill="url(#progressGradient)" />

      {/* Ascending bar chart */}
      <rect x="40" y="105" width="16" height="20" rx="2" fill="#6C63FF" opacity="0.6" />
      <rect x="62" y="95" width="16" height="30" rx="2" fill="#6C63FF" opacity="0.75" />
      <rect x="84" y="75" width="16" height="50" rx="2" fill="#6C63FF" opacity="0.9" />
      <rect x="106" y="60" width="16" height="65" rx="2" fill="#FF6584" opacity="0.85" />
      <rect x="128" y="45" width="16" height="80" rx="2" fill="#FFD369" opacity="0.9" />

      {/* Baseline */}
      <line x1="35" y1="125" x2="150" y2="125" stroke="#6B6B6B" strokeWidth="2" opacity="0.4" />

      {/* Upward trend line connecting bars */}
      <polyline
        points="48,105 70,95 92,75 114,60 136,45"
        fill="none"
        stroke="#6C63FF"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.6"
      />

      {/* Achievement star on top */}
      <g transform="translate(160, 35)">
        <path
          d="M 0 -10 L 3 -2 L 11 -1 L 4 5 L 7 13 L 0 8 L -7 13 L -4 5 L -11 -1 L -3 -2 Z"
          fill="#FFD369"
          opacity="0.95"
        />
      </g>

      {/* Rising arrow indicator */}
      <path d="M 85 35 L 135 15" stroke="#6C63FF" strokeWidth="2.5" fill="none" opacity="0.7" />
      <path
        d="M 135 15 L 130 22 M 135 15 L 142 18"
        stroke="#6C63FF"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
