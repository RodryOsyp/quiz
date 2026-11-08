import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink shadow-[0_5px_0_0_#7a9a12] hover:brightness-110 active:translate-y-[3px] active:shadow-[0_2px_0_0_#7a9a12]",
  secondary: "border border-line bg-surface-2 text-text hover:border-muted",
  ghost: "text-muted hover:bg-surface-2 hover:text-text",
  danger: "text-answer-red hover:bg-answer-red/10",
};
const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5",
  lg: "h-14 px-8 text-lg",
};
export function buttonClass(variant: Variant = "primary", size: Size = "md") {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition",
    "disabled:pointer-events-none disabled:opacity-40",
    variants[variant],
    sizes[size],
  );
}
type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
};
export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonClass(variant, size), className)} {...props} />
  );
}
