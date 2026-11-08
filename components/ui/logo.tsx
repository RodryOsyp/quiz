import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="font-display text-xl font-bold tracking-tight">
      Quiz<span className="text-accent">Battle</span>
    </Link>
  );
}