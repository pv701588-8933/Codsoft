"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { FeaturesCarousel } from "@/components/features-carousel"
import { EasyCreationGraphic, InstantResultsGraphic, TrackProgressGraphic } from "@/components/feature-graphics"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                  Online <span className="text-primary">Quiz Maker</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  Create quizzes or test your knowledge instantly. Engage, educate, and evaluate with our powerful quiz
                  platform.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/create" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Create a Quiz
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/browse" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                  >
                    Take a Quiz
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative h-64 sm:h-96">
              <FeaturesCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl bg-muted/50 border border-border space-y-4">
              <div className="w-24 h-24 mb-4">
                <EasyCreationGraphic />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Easy Creation</h3>
              <p className="text-muted-foreground">
                Create beautiful quizzes with our intuitive editor. No technical skills required.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl bg-muted/50 border border-border space-y-4">
              <div className="w-24 h-24 mb-4">
                <InstantResultsGraphic />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Instant Results</h3>
              <p className="text-muted-foreground">
                Get immediate feedback with detailed analytics and performance tracking.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl bg-muted/50 border border-border space-y-4">
              <div className="w-24 h-24 mb-4">
                <TrackProgressGraphic />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Track Progress</h3>
              <p className="text-muted-foreground">
                Monitor your learning journey with comprehensive statistics and insights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
