import type { Metadata } from "next"
import GoogleAIScoreQuiz from "./quiz"

export const metadata: Metadata = {
  title: "Google AI Score — Is Your Business Built for Google's AI?",
  description: "Answer 6 questions and find out instantly if your Google Ads account is working with Google's AI or against it. Free diagnostic for local service businesses.",
}

export default function GoogleAIScorePage() {
  return <GoogleAIScoreQuiz />
}
