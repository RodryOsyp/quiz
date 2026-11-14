"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function JoinCodeForm() {
  const router = useRouter();
  const [code, setCode] = useState("");

  function handleChange(value: string) {
    setCode(value.replace(/\D/g, "").slice(0, 6));
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/join/${code}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col gap-3 rounded-3xl border border-line bg-surface p-3"
    >
      <input
        value={code}
        onChange={(event) => handleChange(event.target.value)}
        inputMode="numeric"
        placeholder="000000"
        className="h-16 rounded-2xl bg-bg text-center font-display text-3xl tracking-[0.3em] outline-none placeholder:text-line focus:ring-4 focus:ring-accent/20"
      />
      <Button type="submit" size="lg" disabled={code.length !== 6}>
        Войти в игру
      </Button>
    </form>
  );
}
