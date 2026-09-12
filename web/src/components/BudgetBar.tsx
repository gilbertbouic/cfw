type Props = {
  rows: {
    label: string;
    value: number | null;
    note?: string;
    color: string;
  }[];
  currency: string;
  formatMoney: (n: number | null | undefined, c?: string) => string;
};

export function BudgetBar({ rows, currency, formatMoney }: Props) {
  const numeric = rows.map((r) => r.value).filter((n): n is number => n != null);
  const base = Math.max(1, ...numeric);

  return (
    <div className="space-y-3">
      {rows.map((r) => {
        const width =
          r.value == null ? 0 : Math.min(100, Math.round((r.value / base) * 100));
        return (
          <div key={r.label}>
            <div className="mb-1 flex justify-between gap-3 text-xs">
              <span className="font-medium text-muted">{r.label}</span>
              <span className="text-right font-semibold text-foreground">
                {formatMoney(r.value, currency)}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-primary-soft">
              {r.value == null ? (
                <div className="h-full w-full bg-[repeating-linear-gradient(90deg,#d7e3de_0_6px,transparent_6px_12px)]" />
              ) : (
                <div
                  className={`h-full rounded-full ${r.color}`}
                  style={{ width: `${width}%` }}
                />
              )}
            </div>
            {r.note && <p className="mt-1 text-[11px] text-muted">{r.note}</p>}
          </div>
        );
      })}
    </div>
  );
}
