import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-line bg-surface/80 p-6 backdrop-blur",
        className
      )}
      {...props}
    />
  );
}