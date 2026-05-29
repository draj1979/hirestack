/**
 * HireStack wordmark — a navy rounded square holding a bone stack
 * of layers with a gold corner-tab, paired with the wordmark
 * "HireStack" (italic "Stack") in display serif.
 */
export function Logo({ size = 32, inverse = false }: { size?: number; inverse?: boolean }) {
  const slate = inverse ? "var(--bone)" : "var(--slate-700)";
  const bone = inverse ? "var(--slate-700)" : "var(--bone)";
  const accent = "var(--accent-500)";
  const text = inverse ? "var(--bone)" : "var(--slate-700)";

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 56 56"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="4" y="4" width="48" height="48" rx="8" fill={slate} />
        <Stack layer={bone} />
        <path d="M52 4v9h-9c0-4.971 4.029-9 9-9z" fill={accent} />
      </svg>
      <span
        className="text-[24px] tracking-[-0.01em]"
        style={{ fontFamily: "var(--font-display)", color: text }}
      >
        Hire
        <em style={{ fontStyle: "italic" }}>Stack</em>
      </span>
    </div>
  );
}

/** Just the rounded mark — used as favicon-style accent. */
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" aria-hidden="true">
      <rect x="4" y="4" width="48" height="48" rx="8" fill="var(--slate-700)" />
      <Stack layer="var(--bone)" />
      <path d="M52 4v9h-9c0-4.971 4.029-9 9-9z" fill="var(--accent-500)" />
    </svg>
  );
}

/** Stack-of-layers mark — a diamond layered twice below it. */
function Stack({ layer }: { layer: string }) {
  return (
    <g fill="none" stroke={layer} strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round">
      <path d="M28 16 41 23 28 30 15 23 28 16Z" fill={layer} stroke="none" />
      <path d="M15 28 28 35 41 28" />
      <path d="M15 33 28 40 41 33" />
    </g>
  );
}
