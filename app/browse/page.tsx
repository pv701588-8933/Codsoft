"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Play } from "lucide-react"
import { NotebookIcon } from "@/components/icons/education-icons"

interface Quiz {
  id: string
  title: string
  description: string
  category: string
  questions: number
  difficulty: "Easy" | "Medium" | "Hard"
}

const sampleQuizzes: Quiz[] = [
  {
    id: "1",
    title: "Geography Basics",
    description: "Test your knowledge of world capitals and countries",
    category: "Geography",
    questions: 10,
    difficulty: "Easy",
  },
  {
    id: "2",
    title: "Python Programming",
    description: "Challenge yourself with intermediate Python concepts",
    category: "Programming",
    questions: 15,
    difficulty: "Medium",
  },
  {
    id: "3",
    title: "History of Science",
    description: "Explore major scientific discoveries and breakthroughs",
    category: "Science",
    questions: 12,
    difficulty: "Medium",
  },
  {
    id: "4",
    title: "Advanced Calculus",
    description: "Master complex mathematical problems and proofs",
    category: "Mathematics",
    questions: 20,
    difficulty: "Hard",
  },
]

export default function BrowseQuizzes() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredQuizzes = sampleQuizzes.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-accent/20 text-accent-foreground"
      case "Hard":
        return "bg-secondary/20 text-secondary"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <NotebookIcon className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Browse Quizzes</h1>
          </div>
          <p className="text-muted-foreground">Find and take quizzes on a variety of topics</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search quizzes by title or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 bg-card border-border text-foreground text-base"
          />
        </div>

        {/* Quiz Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition space-y-4 flex flex-col"
            >
              {/* Category Badge */}
              <div className="flex gap-2">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {quiz.category}
                </span>
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(
                    quiz.difficulty,
                  )}`}
                >
                  {quiz.difficulty}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{quiz.title}</h3>
                <p className="text-sm text-muted-foreground">{quiz.description}</p>
              </div>

              {/* Question Count */}
              <div className="text-sm text-muted-foreground">{quiz.questions} questions</div>

              {/* Take Quiz Button */}
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Play className="w-4 h-4 mr-2" />
                Take Quiz
              </Button>
            </div>
          ))}
        </div>

        {filteredQuizzes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No quizzes found. Try a different search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
