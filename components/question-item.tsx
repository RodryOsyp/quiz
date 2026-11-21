import type { Question } from "@/lib/mock-data";
import { ANSWER_STYLES } from "@/lib/answers";
import { cn } from "@/lib/utils";

type QuestionItemProps = {
  question: Question;
  number: number;
};

export function QuestionItem({ question, number }: QuestionItemProps) {
  return (
    <div className="rounded-3xl border border-line bg-surface p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <p className="font-semibold">
          <span className="mr-2 text-muted">{number}.</span>
          {question.text}
        </p>
        <span className="shrink-0 text-sm text-muted">
          {question.timeLimit} с
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={cn(
              "rounded-xl px-3 py-2 text-sm",
              index === question.correctIndex
                ? cn(ANSWER_STYLES[index].bg, "font-semibold text-white")
                : "bg-surface-2 text-muted",
            )}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
