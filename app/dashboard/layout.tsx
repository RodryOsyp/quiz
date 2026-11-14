import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export default function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-6 flex flex-1 flex-col">
      <header className="mb-10 flex items-center justify-between">
        <Logo />
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
