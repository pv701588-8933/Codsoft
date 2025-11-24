"use client"

import { useState, useEffect } from "react"

const InteractiveIllustration = ({ className }: { className: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Animated background circle */}
    <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" opacity="0.2" />

    {/* Interactive elements - squares and circles */}
    <g>
      {/* Top left square */}
      <rect x="40" y="40" width="30" height="30" rx="4" fill="currentColor" opacity="0.8" />
      {/* Top right circle */}
      <circle cx="140" cy="55" r="15" fill="currentColor" opacity="0.6" />
      {/* Center - connected nodes showing interaction */}
      <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.9" />
      {/* Bottom left circle */}
      <circle cx="55" cy="145" r="12" fill="currentColor" opacity="0.7" />
      {/* Bottom right square */}
      <rect x="135" y="135" width="25" height="25" rx="3" fill="currentColor" opacity="0.8" />
    </g>

    {/* Connection lines showing interaction */}
    <g stroke="currentColor" strokeWidth="2" opacity="0.5">
      <line x1="100" y1="100" x2="55" y2="55" />
      <line x1="100" y1="100" x2="140" y2="55" />
      <line x1="100" y1="100" x2="55" y2="145" />
      <line x1="100" y1="100" x2="147" y2="147" />
    </g>

    {/* Center pulse effect dots */}
    <circle cx="100" cy="100" r="26" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
  </svg>
)

const FastQuizCreationIllustration = ({ className }: { className: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background gradient circle */}
    <circle cx="100" cy="100" r="85" fill="#FF6584" opacity="0.1" />

    {/* Main form card with bold shadow */}
    <rect x="45" y="50" width="110" height="85" rx="8" fill="white" stroke="#FF6584" strokeWidth="3" />
    <rect x="47" y="52" width="106" height="80" fill="none" stroke="#FF6584" strokeWidth="1" opacity="0.2" />

    {/* Form input fields - bold and colorful */}
    <rect x="60" y="65" width="80" height="10" rx="3" fill="#6C63FF" />
    <rect x="60" y="82" width="80" height="10" rx="3" fill="#FFD369" />
    <rect x="60" y="99" width="50" height="10" rx="3" fill="#FF6584" />

    {/* Speed lines showing fast action */}
    <line x1="155" y1="65" x2="175" y2="65" stroke="#FF6584" strokeWidth="3" strokeLinecap="round" />
    <line x1="160" y1="78" x2="180" y2="78" stroke="#FFD369" strokeWidth="3" strokeLinecap="round" />
    <line x1="158" y1="91" x2="178" y2="91" stroke="#6C63FF" strokeWidth="3" strokeLinecap="round" />

    {/* Checkmark symbol - bold and green */}
    <g stroke="#4CAF50" strokeWidth="4" fill="none" strokeLinecap="round">
      <path d="M 55 140 L 65 150 L 80 135" />
    </g>

    {/* Small decorative stars */}
    <circle cx="120" cy="145" r="3" fill="#FFD369" />
    <circle cx="140" cy="155" r="2.5" fill="#FF6584" />
  </svg>
)

const InstantResultsIllustration = ({ className }: { className: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background circle */}
    <circle cx="100" cy="100" r="110" fill="#FFD369" opacity="0.15" />

    <circle cx="100" cy="115" r="85" fill="white" stroke="#FFD369" strokeWidth="6" />

    {/* Gauge arc background */}
    <path d="M 20 115 A 85 85 0 0 1 180 115" stroke="#E0E0E0" strokeWidth="18" fill="none" strokeLinecap="round" />

    {/* Gauge arc filled (speed indicator) */}
    <path d="M 20 115 A 85 85 0 0 1 170 35" stroke="#FF6584" strokeWidth="18" fill="none" strokeLinecap="round" />

    {/* Needle pointing up (fast) */}
    <line x1="100" y1="115" x2="100" y2="25" stroke="#FF6584" strokeWidth="8" strokeLinecap="round" />
    <circle cx="100" cy="115" r="12" fill="#FF6584" />

    {/* Result text - PASS in bold */}
    <text x="100" y="175" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#6C63FF">
      PASS
    </text>

    {/* Trophy symbols - much larger */}
    <g fill="#FF6584">
      <path d="M 35 40 L 45 65 L 68 65 L 50 80 L 60 105 L 35 90 L 10 105 L 20 80 L 2 65 L 25 65 Z" />
      <path d="M 175 25 L 188 52 L 215 52 L 193 68 L 205 95 L 180 80 L 155 95 L 167 68 L 145 52 L 172 52 Z" />
    </g>
  </svg>
)

const TrackProgressIllustration = ({ className }: { className: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background circle */}
    <circle cx="100" cy="100" r="110" fill="#6C63FF" opacity="0.15" />

    <circle cx="65" cy="90" r="65" fill="white" stroke="#6C63FF" strokeWidth="5" />

    {/* Pie slice - progress indicator */}
    <path d="M 65 25 A 65 65 0 0 1 125 125 L 65 90 Z" fill="#FF6584" opacity="0.9" />
    <path d="M 65 90 L 125 125 A 65 65 0 0 1 15 90 L 65 90 Z" fill="#FFD369" opacity="0.7" />
    <path d="M 65 90 L 15 90 A 65 65 0 0 1 65 25 L 65 90 Z" fill="#6C63FF" opacity="0.5" />

    {/* Percentage text - much larger */}
    <text x="65" y="100" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#242424">
      78%
    </text>

    <g fill="#FF6584" opacity="0.95">
      <rect x="150" y="115" width="22" height="45" rx="3" />
      <rect x="178" y="85" width="22" height="75" rx="3" fill="#FFD369" />
    </g>

    {/* Trend arrow going up - bolder and larger */}
    <g stroke="#4CAF50" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 145 130 L 175 95" />
      <path d="M 175 95 L 165 110" />
      <path d="M 175 95 L 190 105" />
    </g>

    {/* Trophy icon - much larger and bolder */}
    <g stroke="#FFD369" strokeWidth="5" fill="none" strokeLinecap="round">
      <path d="M 35 160 L 48 115 L 68 115 L 82 160 M 65 115 Q 65 90 82 80 Q 99 90 99 115" />
      <rect x="48" y="160" width="34" height="12" rx="2" fill="#FFD369" opacity="0.7" />
    </g>
  </svg>
)

export function FeaturesCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      id: 1,
      title: "Easy & Interactive",
      description: "Create and take quizzes with a smooth, intuitive interface designed for all users",
      icon: InteractiveIllustration,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: 2,
      title: "Fast Quiz Creation",
      description: "Build professional quizzes in minutes with our powerful question editor",
      icon: FastQuizCreationIllustration,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      id: 3,
      title: "Instant Results",
      description: "Get immediate feedback and detailed performance analytics on every quiz",
      icon: InstantResultsIllustration,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      id: 4,
      title: "Track Progress",
      description: "Monitor your learning journey with comprehensive statistics and insights",
      icon: TrackProgressIllustration,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  const feature = features[current]
  const Icon = feature.icon
  const iconSize = "w-16 h-16"

  return (
    <div className="relative h-64 sm:h-96 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-2xl"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 text-center">
        <div className="space-y-6 max-w-sm">
          <div className={`inline-block p-8 ${feature.bgColor} rounded-full transition-all duration-500`}>
            <Icon className={`${iconSize} ${feature.color}`} />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-primary w-6" : "bg-muted-foreground/50"
            }`}
            aria-label={`Go to feature ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
