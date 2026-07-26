type Props = {
  approved: number;
  disbursed: number;
  spent: number;
  currency: string;
  formatMoney: (n: number, c?: string) => string;
};

export function BudgetBar({
  approved,
  disbursed,
  spent,
  currency,
  formatMoney,
}: Props) {
  const base = Math.max(approved, disbursed, spent, 1);
  const pct = (n: number) => Math.min(100, Math.round((n / base) * 100));

  const rows = [
    { label: "Approved", value: approved, color: "bg-sky" },
    { label: "Disbursed", value: disbursed, color: "bg-primary" },
    { label: "Spent", value: spent, color: "bg-success" },
  ];

  return (
    <div className="space-y-3">
      {rows.map((r) => (
        <div key={r.label}>
          <div className="mb-1 flex justify-between text-xs">
            <span className="font-medium text-muted">{r.label}</span>
            <span className="font-semibold text-foreground">
              {formatMoney(r.value, currency)}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-primary-soft">
            <div
              className={`h-full rounded-full ${r.color}`}
              style={{ width: `${pct(r.value)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
