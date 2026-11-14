import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { QuizCard } from "@/components/ui/quiz-button";

export const metadata: Metadata = {
  title: "My quizzes",
};


export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">My Quizzes</h1>
          <p className="mt-1 text-muted">
            Create your quizz, add questions and start the game!
          </p>
        </div>
        <Link href="/dashboard/new" className={buttonClass()}>
          <Plus className="size-5" /> New quiz
        </Link>
      </div>
      {quizzes.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-line p-12 text-center text-muted">
          Empty here... Its time to create your first quiz!
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              id={quiz.id}
              title={quiz.title}
              questionCount={quiz.questions.length}
            />
          ))}
        </div>
      )}
    </div>
  );
}
