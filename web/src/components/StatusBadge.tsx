"use client";

import { STATUS_COLORS, type ProjectStatus } from "@/data/types";
import { useI18n } from "@/i18n/LanguageProvider";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { dict } = useI18n();
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
      {dict.labels.status[status]}
    </span>
  );
}
