/**
 * Hero visual — a window-chromed mock of a HireStack requisition,
 * showing a large applicant pool screened down to a shortlist, with
 * each candidate's pipeline status.
 */
export function ScreeningPipeline() {
  return (
    <div
      className="relative overflow-hidden rounded-[14px] border bg-white"
      style={{
        borderColor: "var(--border)",
        boxShadow:
          "0 12px 32px rgba(22,29,36,0.12), 0 2px 6px rgba(22,29,36,0.05)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-1.5 border-b px-4 py-2.5"
        style={{ borderColor: "var(--border)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span
          className="ml-3 text-[11px] tracking-[-0.01em] text-fg3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          app.hirestack.com/r/senior-backend
        </span>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
          <span
            className="text-[13px] leading-none"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent-700)", letterSpacing: 0, textTransform: "none" }}
          >
            ✓
          </span>
          <span>HireStack</span>
          <span style={{ color: "var(--slate-200)" }}>·</span>
          <span>overnight</span>
          <span style={{ color: "var(--slate-200)" }}>·</span>
          <span>420 → 12 shortlisted</span>
        </div>

        <h3
          className="mb-3 text-[19px] leading-[1.3] tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
        >
          420 applicants screened to a shortlist of 12 — overnight.
        </h3>

        <p className="mb-5 text-[14px] leading-[1.55] text-fg2">
          HireStack matched every résumé to the <span className="cite-chip">JD</span>, ran async
          interviews, scored against your must-haves, and surfaced the candidates worth your time —
          with the reasons attached.
        </p>

        {/* Candidate rows */}
        <div
          className="space-y-2 border-t pt-4"
          style={{ borderColor: "var(--border)" }}
        >
          <CandidateRow n="01" name="Priya Nair" detail="7y · backend" status="shortlisted" />
          <CandidateRow n="02" name="Rohan Mehta" detail="interview" status="scheduled" />
          <CandidateRow n="03" name="Aarav Shah" detail="JD mismatch" status="screened" />
        </div>
      </div>
    </div>
  );
}

function CandidateRow({
  n,
  name,
  detail,
  status,
}: {
  n: string;
  name: string;
  detail: string;
  status: "shortlisted" | "scheduled" | "screened";
}) {
  const badge = {
    shortlisted: {
      label: "Shortlisted",
      color: "#2F8F6F",
      bg: "#E6F2EC",
      border: "rgba(47,143,111,0.25)",
    },
    scheduled: {
      label: "Interview set",
      color: "var(--teal-700)",
      bg: "var(--teal-50)",
      border: "rgba(67,96,115,0.25)",
    },
    screened: {
      label: "Screened out",
      color: "var(--accent-700)",
      bg: "var(--accent-50)",
      border: "rgba(135,107,52,0.28)",
    },
  }[status];
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span
        className="text-[10px] tracking-[0.05em] text-fg4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {n}
      </span>
      <span
        className="text-[14px] tracking-[-0.005em] text-fg1"
        style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
      >
        {name}
      </span>
      <span
        className="text-[11px] text-fg3"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {detail}
      </span>
      <span
        className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium"
        style={{
          color: badge.color,
          background: badge.bg,
          borderColor: badge.border,
        }}
      >
        {badge.label}
      </span>
    </div>
  );
}
