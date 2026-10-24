import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4">
      <p className="text-6xl font-bold">404</p>
      <Link href="/" className="underline">
        Go Home
      </Link>
    </main>
  );
}
