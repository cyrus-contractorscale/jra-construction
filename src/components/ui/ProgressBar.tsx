import { cn } from "@/lib/cn";

interface ProgressBarProps {
  value: number; // 0 - 100
  className?: string;
}

export function ProgressBar({ value, className }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-ink-200", className)}>
      <div
        className="h-full rounded-full bg-brand-500 transition-all duration-500 ease-out"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
