import { cn } from "@/lib/utils";

export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("text-sm font-semibold text-charcoal", className)}
      {...props}
    />
  );
}

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-2xl border border-input bg-white/75 px-4 text-sm text-charcoal shadow-sm transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-2xl border border-input bg-white/75 px-4 py-3 text-sm text-charcoal shadow-sm transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20",
        className,
      )}
      {...props}
    />
  );
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-12 w-full rounded-2xl border border-input bg-white/75 px-4 text-sm text-charcoal shadow-sm transition focus:border-ring focus:ring-2 focus:ring-ring/20",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="text-sm font-medium text-destructive">{message}</p>;
}
