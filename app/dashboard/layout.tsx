import Link from "next/link";

export default function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-6">
      <header className="mb-8 flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">My quizzes</Link>
        <Link href="/dashboard/new">New Quiz</Link>
      </header>
      {children}
    </div>
  );
}
