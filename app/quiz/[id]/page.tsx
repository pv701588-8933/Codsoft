"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { TrophyIcon } from "@/components/icons/education-icons"

interface QuizData {
  id: string
  title: string
  questions: Array<{
    id: string
    text: string
    options: string[]
    correctAnswer: number
  }>
}

const sampleQuiz: QuizData = {
  id: "1",
  title: "Geography Basics",
  questions: [
    {
      id: "1",
      text: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: 1,
    },
    {
      id: "2",
      text: "Which is the largest continent?",
      options: ["Africa", "Europe", "Asia", "Australia"],
      correctAnswer: 2,
    },
    {
      id: "3",
      text: "What is the capital of Japan?",
      options: ["Seoul", "Bangkok", "Tokyo", "Beijing"],
      correctAnswer: 2,
    },
  ],
}

export default function TakeQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)

  const currentQuestion = sampleQuiz.questions[currentQuestionIndex]
  const totalQuestions = sampleQuiz.questions.length
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100

  const handleAnswerSelect = (optionIndex: number) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: optionIndex,
    })
  }

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const correctAnswersCount = Object.entries(answers).filter(([questionId, answer]) => {
    const question = sampleQuiz.questions.find((q) => q.id === questionId)
    return question && answer === question.correctAnswer
  }).length

  if (showResults) {
    const score = Math.round((correctAnswersCount / totalQuestions) * 100)

    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Results Card */}
          <div className="bg-card rounded-2xl border border-border p-8 text-center space-y-6">
            <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary flex items-center justify-center">
              <TrophyIcon className="w-16 h-16 text-primary" />
            </div>

            {/* Results Summary */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Quiz Complete!</h2>
              <div className="space-y-1">
                <div className="text-5xl font-bold text-primary">{score}%</div>
                <p className="text-muted-foreground">
                  You got {correctAnswersCount} out of {totalQuestions} questions correct
                </p>
              </div>
            </div>

            {/* Results Details */}
            <div className="space-y-2 text-left max-w-md mx-auto">
              {sampleQuiz.questions.map((question, index) => {
                const userAnswer = answers[question.id]
                const isCorrect = userAnswer === question.correctAnswer
                return (
                  <div
                    key={question.id}
                    className={`p-4 rounded-lg border ${
                      isCorrect ? "bg-green-50 border-green-200" : "bg-secondary/5 border-secondary/20"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                          isCorrect ? "bg-green-500" : "bg-secondary"
                        }`}
                      >
                        {isCorrect ? "✓" : "✗"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground break-words">{question.text}</p>
                        {!isCorrect && (
                          <p className="text-xs text-secondary mt-1">Your answer: {question.options[userAnswer]}</p>
                        )}
                        <p className="text-xs text-green-600 mt-1">
                          Correct: {question.options[question.correctAnswer]}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => (window.location.href = "/browse")}
                variant="outline"
                className="flex-1 border-border text-foreground"
              >
                Back to Quizzes
              </Button>
              <Button
                onClick={() => {
                  setCurrentQuestionIndex(0)
                  setAnswers({})
                  setShowResults(false)
                }}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Retake Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-muted-foreground">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>2:45</span>
            </div>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-card rounded-xl border border-border p-8 space-y-6">
          {/* Question */}
          <div>
            <h2 className="text-2xl font-bold text-foreground">{currentQuestion.text}</h2>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 rounded-lg border-2 text-left transition ${
                  answers[currentQuestion.id] === index
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion.id] === index ? "border-primary bg-primary" : "border-border"
                    }`}
                  >
                    {answers[currentQuestion.id] === index && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <span className="text-foreground font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            variant="outline"
            className="flex-1 border-border text-foreground disabled:opacity-50 bg-transparent"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button onClick={handleNext} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
            {currentQuestionIndex === totalQuestions - 1 ? (
              <>
                Finish
                <ChevronRight className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
