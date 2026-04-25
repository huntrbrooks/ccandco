import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-border bg-card/85 shadow-[0_24px_80px_rgba(94,70,56,0.08)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
