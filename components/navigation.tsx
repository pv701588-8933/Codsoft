import Link from "next/link"
import { Button } from "@/components/ui/button"
import { QuizLogo } from "./quiz-logo"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Maker text */}
          <Link href="/" className="flex items-center gap-2.5">
            <QuizLogo />
            <span className="font-bold text-lg tracking-tight hidden sm:inline">
              <span className="text-foreground">Quiz</span> <span className="text-primary">Maker</span>
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/create" className="text-foreground hover:text-primary transition">
              Create Quiz
            </Link>
            <Link href="/browse" className="text-foreground hover:text-primary transition">
              Browse Quizzes
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
