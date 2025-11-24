"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Trash2, Check } from "lucide-react"
import { QuestionMarkIcon } from "@/components/icons/education-icons"

interface Question {
  id: string
  text: string
  options: string[]
  correctAnswer: number
}

export default function CreateQuiz() {
  const [quizTitle, setQuizTitle] = useState("")
  const [quizDescription, setQuizDescription] = useState("")
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      text: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: 1,
    },
  ])

  const addQuestion = () => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      text: "",
      options: ["", "", "", ""],
      correctAnswer: 0,
    }
    setQuestions([...questions, newQuestion])
  }

  const updateQuestion = (id: string, field: string, value: any) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, [field]: value } : q)))
  }

  const updateOption = (id: string, index: number, value: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === id
          ? {
              ...q,
              options: q.options.map((opt, i) => (i === index ? value : opt)),
            }
          : q,
      ),
    )
  }

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <QuestionMarkIcon className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Create a New Quiz</h1>
          </div>
          <p className="text-muted-foreground">Build an engaging quiz with multiple-choice questions</p>
        </div>

        {/* Quiz Details Card */}
        <div className="bg-card rounded-xl border border-border p-6 mb-8 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Quiz Title</label>
            <Input
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              placeholder="Enter quiz title"
              className="bg-background border-border text-foreground"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Quiz Description</label>
            <Input
              value={quizDescription}
              onChange={(e) => setQuizDescription(e.target.value)}
              placeholder="What is this quiz about?"
              className="bg-background border-border text-foreground"
            />
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground">Questions</h2>
          {questions.map((question, qIndex) => (
            <div key={question.id} className="bg-card rounded-xl border border-border p-6 space-y-4">
              {/* Question Header */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-muted-foreground">Question {qIndex + 1}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteQuestion(question.id)}
                  className="text-secondary hover:text-secondary/80"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              {/* Question Text */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Question Text</label>
                <Input
                  value={question.text}
                  onChange={(e) => updateQuestion(question.id, "text", e.target.value)}
                  placeholder="Enter your question"
                  className="bg-background border-border text-foreground"
                />
              </div>

              {/* Options */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-foreground">Multiple Choice Options</label>
                {question.options.map((option, oIndex) => (
                  <div key={oIndex} className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuestion(question.id, "correctAnswer", oIndex)}
                      className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                        question.correctAnswer === oIndex
                          ? "border-primary bg-primary"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      {question.correctAnswer === oIndex && <Check className="w-3 h-3 text-white" />}
                    </button>
                    <Input
                      value={option}
                      onChange={(e) => updateOption(question.id, oIndex, e.target.value)}
                      placeholder={`Option ${oIndex + 1}`}
                      className="flex-1 bg-background border-border text-foreground"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add Question Button */}
        <Button
          onClick={addQuestion}
          variant="outline"
          className="w-full border-2 border-dashed border-primary text-primary hover:bg-primary/5 mb-8 bg-transparent"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Another Question
        </Button>

        {/* Sticky Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-lg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-4">
            <Button variant="outline" className="flex-1 border-border text-foreground bg-transparent">
              Save as Draft
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">Publish Quiz</Button>
          </div>
        </div>
        <div className="h-20"></div>
      </div>
    </div>
  )
}
