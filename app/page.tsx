import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">QuizBattle</h1>
      <Link href="/dashboard" className="underline">
        Я ведущий
      </Link>
    </main>
  );
}
