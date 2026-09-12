type Props = {
  className?: string;
  size?: "sm" | "md";
};

export function MkweliLockup({ className = "", size = "sm" }: Props) {
  const px = size === "md" ? 28 : 20;
  return (
    <a
      href="https://mkweli.tech"
      className={`inline-flex items-center gap-2 font-medium text-primary-dark transition hover:text-primary ${className}`}
    >
      <img
        src="/brand/mkweli-favicon.ico"
        alt=""
        width={px}
        height={px}
        className="shrink-0 object-contain"
        style={{ width: px, height: px }}
      />
      <span>A Mkweli product</span>
    </a>
  );
}
