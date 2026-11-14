import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type QuizCardProps = {
  id: number;
  title: string;
  questionCount: number;
};

export function QuizCard({ id, title, questionCount }: QuizCardProps) {
  return (
    <Link
      href={`/dashboard/quizzes/${id}`}
      className="group flex min-h-40 flex-col justify-between rounded-3xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-display text-lg leading-snug font-semibold">
          {title}
        </h2>
        <ArrowUpRight className="size-5 shrink-0 text-muted transition group-hover:text-accent" />
      </div>
      <p className="text-sm text-muted">Questions: {questionCount}</p>
    </Link>
  );
}
