import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuestionItem } from "@/components/question-item";
import { getQuiz } from "@/lib/mock-data";

export async function generateMetadata({
  params,
}: PageProps<"/dashboard/quizzes/[quizId]">): Promise<Metadata> {
  const { quizId } = await params;
  const quiz = await getQuiz(Number(quizId));
  return { title: quiz?.title ?? "Quiz not found" };
}
export default async function QuizPage({
  params,
}: PageProps<"/dashboard/quizzes/[quizId]">) {
  const { quizId } = await params;
  const quiz = await getQuiz(Number(quizId));

  if (!quiz) {
    notFound();
  }
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">{quiz.title}</h1>
        <p className="mt-1 text-muted">Questions: {quiz.questions.length}</p>
      </div>

      <div className="space-y-3">
        {quiz.questions.map((question, index) => (
          <QuestionItem
            key={question.id}
            question={question}
            number={index + 1}
          />
        ))}
      </div>
    </div>
  );
}
