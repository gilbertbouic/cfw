import { STATUS_COLORS, STATUS_LABELS, type ProjectStatus } from "@/data/types";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const color = STATUS_COLORS[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold"
      style={{
        backgroundColor: `${color}18`,
        color,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden
      />
      {STATUS_LABELS[status]}
    </span>
  );
}
