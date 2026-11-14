import { JoinCodeForm } from "@/components/join-code";
import { Button, buttonClass } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { ANSWER_STYLES } from "@/lib/answers";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col mx-auto px-6 py-6 max-w-5xl">
      <header className="flex items-center justify-between">
        <Logo />
        <Link href="/dashboard" className={buttonClass("ghost", "sm")}>
          Я ведущий
        </Link>
      </header>

      <section className="flex flex-1 flex-col items-center justify-center gap-8 py-16 text-center">
        <div className="flex gap-3">
          {ANSWER_STYLES.map(({ bg, icon: Icon }, index) => (
            <div
              key={index}
              className={cn(
                "flex size-14 items-center justify-center rounded-2xl",
                index % 2 === 0 ? "-rotate-6" : "rotate-6",
                bg,
              )}
            >
              <Icon className="size-6 fill-white text-white" />
            </div>
          ))}
        </div>
        <h1 className="font-display text-4xl leading-tight font-bold sm:text-6xl">
          Квиз, в который
          <br />
          играет весь класс
        </h1>

        <p className="max-w-md text-lg text-muted">
          Введи код комнаты с экрана ведущего!
        </p>
        <JoinCodeForm/>
      </section>
    </main>
  );
}
