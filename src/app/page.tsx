import { Logo } from "@/components/Logo";
import { ScreeningPipeline } from "@/components/ScreeningPipeline";
import {
  ArrowRight,
  Briefcase,
  Check,
  ChevronDown,
  ChevronRight,
  FileText,
  MessageSquare,
  Play,
  Shield,
} from "@/components/Icons";

const NAV = [
  { label: "Product", caret: true },
  { label: "Solutions", caret: true },
  { label: "Pricing", caret: false },
  { label: "Security", caret: false },
  { label: "Resources", caret: true },
];

const TRUSTED = [
  { name: "Razorpay", sub: "Bengaluru" },
  { name: "Zomato", sub: "Gurugram" },
  { name: "Swiggy", sub: "Bengaluru" },
  { name: "CRED", sub: "Bengaluru" },
  { name: "Freshworks", sub: "Chennai" },
  { name: "Postman", sub: "Bengaluru" },
];

const FEATURES = [
  {
    n: "01 — Source",
    title: "Write the JD once. Reach every portal.",
    body: "HireStack reads your job description, turns it into a structured profile, and posts the role to Naukri, LinkedIn, and your careers page in one click — pulling every applicant into a single pipeline.",
  },
  {
    n: "02 — Screen",
    title: "Every résumé read against your must-haves.",
    body: "Each application is matched to the role's must-haves and nice-to-haves, ranked on fit, and the clear mismatches are filtered out — with the reason on every decision, never keyword bingo.",
  },
  {
    n: "03 — Interview",
    title: "Preliminary interviews, run autonomously.",
    body: "HireStack conducts structured, consistent first-round interviews over chat or voice, scores the answers against your rubric, and hands your team a ranked shortlist with full transcripts.",
  },
];

const DETAIL_ITEMS = [
  {
    Icon: FileText,
    title: "JD-aware matching",
    body: "Parses the job description into must-haves and nice-to-haves, then ranks every applicant against them — so the shortlist reflects the role, not a keyword count.",
  },
  {
    Icon: Briefcase,
    title: "Post everywhere, once",
    body: "One click pushes the role to Naukri, LinkedIn, and your careers page, and every applicant lands in one pipeline — no copy-pasting across portals.",
  },
  {
    Icon: MessageSquare,
    title: "Structured AI interviews",
    body: "Runs the same fair, bias-checked questions for every candidate, scores the answers, and shares the transcript — consistency a human panel can't match at volume.",
  },
  {
    Icon: Shield,
    title: "You decide, with evidence",
    body: "Every shortlist and reject links to the résumé line or interview answer behind it. DPDP Act-aligned and audit-ready, so hiring stays defensible.",
  },
];

const TIERS = [
  {
    name: "Starter",
    price: "₹4,999",
    per: "/ month",
    desc: "For startups hiring for a few roles at a time.",
    features: [
      "Up to 5 active roles",
      "JD analysis & multi-portal posting",
      "AI résumé screening",
      "Email support",
    ],
    cta: "Start 14-day trial",
    variant: "secondary" as const,
  },
  {
    name: "Growth",
    price: "₹14,999",
    per: "/ month",
    desc: "For scaling teams hiring across functions.",
    features: [
      "Up to 25 active roles",
      "Autonomous AI interviews",
      "Custom scoring criteria",
      "ATS integration",
      "Priority support",
    ],
    cta: "Request a demo",
    variant: "primary" as const,
    featured: true,
    pill: "Most chosen",
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "",
    desc: "For large recruitment teams and RPOs.",
    features: [
      "Unlimited active roles",
      "SSO & role-based access",
      "Bias & compliance reporting",
      "Data residency in India",
      "Dedicated success manager",
    ],
    cta: "Talk to sales",
    variant: "dark" as const,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-bone text-fg2">
      {/* ═══ NAV ═══════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 border-b border-transparent bg-bone/85 backdrop-blur-md" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 md:px-10">
          <Logo size={32} />
          <div className="hidden items-center gap-6 md:flex">
            {NAV.map((l) => (
              <span
                key={l.label}
                className="flex cursor-pointer items-center gap-1 text-[14px] text-fg2 transition-colors hover:text-fg1"
              >
                {l.label}
                {l.caret && <ChevronDown size={13} />}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="focus-ring rounded-[6px] px-3 py-2 text-[14px] text-fg2 transition-colors hover:bg-slate-50 hover:text-fg1">
              Sign in
            </button>
            <button
              className="focus-ring rounded-[6px] px-4 py-2 text-[14px] font-medium text-bone transition-colors"
              style={{ background: "var(--slate-700)" }}
            >
              Request a demo
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-columns" />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-500)" }} />
              For talent teams, by design
            </div>
            <h1
              className="t-display text-[44px] md:text-[60px] lg:text-[72px]"
              style={{ textWrap: "balance" }}
            >
              From job post to
              <br />
              <span className="t-mark">shortlist</span>,
              <br />
              while you sleep.
            </h1>
            <p className="mt-7 max-w-[540px] text-[17px] leading-[1.55] text-fg2 md:text-[18px]">
              HireStack reads the job description, posts it across every portal, screens every
              applicant, and runs the first interviews — so your team starts at the shortlist, not
              the slush pile.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                className="focus-ring inline-flex items-center gap-2 rounded-[8px] px-6 py-3.5 text-[15px] font-medium text-white transition-colors"
                style={{ background: "var(--accent-700)" }}
              >
                Request a demo
                <ArrowRight size={16} />
              </button>
              <button
                className="focus-ring inline-flex items-center gap-2 rounded-[8px] border bg-white px-5 py-3.5 text-[15px] font-medium text-fg1 transition-colors hover:bg-slate-50"
                style={{ borderColor: "var(--border-strong)" }}
              >
                <Play size={12} />
                Watch the product tour
                <ChevronRight size={14} />
              </button>
              <span className="text-[13px] text-fg3">14-day trial · No card required</span>
            </div>
          </div>

          <div className="relative">
            <ScreeningPipeline />
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY ═══════════════════════════════════════ */}
      <section className="border-y bg-bone-50" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1240px] px-6 py-10 md:px-10">
          <div className="text-center text-[12px] tracking-[-0.005em] text-fg3">
            Trusted by talent teams that have made <span className="text-fg1 font-medium">20,000 hires</span>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {TRUSTED.map((f) => (
              <div key={f.name} className="flex items-baseline gap-2 opacity-70">
                <span
                  className="text-[18px] tracking-[-0.01em] text-fg1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-fg3">
                  {f.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-[760px]">
          <span className="t-eyebrow">What HireStack does</span>
          <h2
            className="mt-4 text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            The whole top of the funnel, run as one{" "}
            <span style={{ fontStyle: "italic", color: "var(--fg1)" }}>autonomous loop.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            Sourcing that posts itself. Screening that reads against the role. Interviews that run
            on their own. Your recruiters step in where judgment matters — at the shortlist.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <article
              key={f.n}
              className="card-lift flex flex-col rounded-[14px] border bg-white p-7"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em]"
                style={{ color: "var(--teal-700)" }}
              >
                {f.n}
              </div>
              <h3
                className="mb-3 text-[20px] leading-[1.2] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                {f.title}
              </h3>
              <p className="mb-5 text-[14px] leading-[1.6] text-fg2">{f.body}</p>

              {/* Inline mini-visual per feature */}
              {i === 0 && (
                <div
                  className="mt-auto rounded-[10px] border p-4"
                  style={{ borderColor: "var(--border)", background: "var(--bone-50)" }}
                >
                  <div
                    className="mb-2 text-[10px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: "var(--teal-700)" }}
                  >
                    ✓ HireStack · posted
                  </div>
                  <div className="text-[13px] leading-[1.45] text-fg1">
                    &ldquo;Live on Naukri, LinkedIn &amp; careers page ·{" "}
                    <span className="cite-chip">420 applicants</span> in one pipeline.&rdquo;
                  </div>
                </div>
              )}
              {i === 1 && (
                <div
                  className="mt-auto rounded-[10px] border bg-white p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="text-[14px] leading-[1.55] text-fg1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Matched{" "}
                    <span className="hl-yellow">9 of 10 must-haves</span>; strong on distributed
                    systems, lighter on frontend.
                    <sup
                      className="ml-0.5 inline-block rounded-[3px] px-1.5 align-super text-[9px] font-semibold text-white"
                      style={{ background: "var(--accent-700)", fontFamily: "var(--font-sans)" }}
                    >
                      9/10
                    </sup>
                  </div>
                </div>
              )}
              {i === 2 && (
                <div
                  className="mt-auto flex items-start gap-2.5 rounded-[10px] border p-4"
                  style={{
                    borderColor: "var(--accent-100)",
                    background: "var(--accent-50)",
                  }}
                >
                  <span
                    className="shrink-0"
                    style={{ color: "var(--accent-700)" }}
                  >
                    <MessageSquare size={16} />
                  </span>
                  <div>
                    <div
                      className="mb-1 text-[12px] font-semibold leading-tight"
                      style={{ color: "var(--accent-700)" }}
                    >
                      Interview scored · 8.6 / 10
                    </div>
                    <div
                      className="text-[11px] leading-[1.5]"
                      style={{ color: "var(--accent-700)" }}
                    >
                      System design strong, transcript attached for your panel.
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ═══ PRODUCT DETAIL — DARK ════════════════════════════ */}
      <section
        className="relative"
        style={{ background: "var(--slate-900)", color: "var(--fg-on-dark)" }}
      >
        <div className="mx-auto grid max-w-[1240px] items-start gap-12 px-6 py-24 md:grid-cols-[1fr_1.05fr] md:gap-16 md:px-10 md:py-32">
          <div>
            <span
              className="text-[12px] font-medium uppercase tracking-[0.12em]"
              style={{ color: "var(--teal-300)" }}
            >
              Inside the pipeline
            </span>
            <h2
              className="mt-4 text-[34px] md:text-[44px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
            >
              One requisition, every{" "}
              <span style={{ fontStyle: "italic", color: "var(--teal-300)" }}>candidate,</span>{" "}
              in context.
            </h2>
            <p className="mt-5 max-w-[480px] text-[17px] leading-[1.65]" style={{ color: "rgba(232,237,242,0.78)" }}>
              HireStack doesn&apos;t split posting from screening from interviewing. They&apos;re one
              continuous loop — so a role goes from open to shortlist without a recruiter touching
              the slush pile.
            </p>

            <div className="mt-9 grid gap-5">
              {DETAIL_ITEMS.map((d) => (
                <div key={d.title} className="flex gap-4">
                  <div
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px]"
                    style={{ background: "rgba(84,122,149,0.22)", color: "var(--teal-300)" }}
                  >
                    <d.Icon size={18} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-[15px] font-semibold" style={{ color: "var(--fg-on-dark)" }}>
                      {d.title}
                    </h4>
                    <p className="text-[14px] leading-[1.55]" style={{ color: "rgba(232,237,242,0.72)" }}>
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product shot */}
          <div
            className="overflow-hidden rounded-[14px] border bg-white text-fg2"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="flex items-center gap-1.5 border-b px-4 py-2.5"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
            </div>
            <div className="p-6 md:p-7">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
                <span
                  className="text-[13px] leading-none"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent-700)", letterSpacing: 0, textTransform: "none" }}
                >
                  ✓
                </span>
                Requisition · Senior Backend Engineer
              </div>
              <h4
                className="mb-3 text-[18px] leading-[1.3] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                Priya Nair · 7 yrs · shortlisted
              </h4>
              <p className="mb-4 text-[14px] leading-[1.6] text-fg2">
                HireStack matched Priya to{" "}
                <span className="hl-yellow">
                  9 of 10 must-haves and scored her interview 8.6/10 on system design
                </span>{" "}
                — strongest on distributed systems, lighter on frontend.
              </p>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {["420 applicants", "Score 8.6", "Bengaluru"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border bg-bone px-2 py-0.5 text-[10px] text-fg3"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2 border-t pt-3" style={{ borderColor: "var(--border)" }}>
                {[
                  { n: "01", title: "Match to JD", badge: "9 / 10", color: "var(--accent-700)", bg: "var(--accent-50)", border: "rgba(135,107,52,0.28)" },
                  { n: "02", title: "Interview score", badge: "8.6 / 10", color: "#2F8F6F", bg: "#E6F2EC", border: "rgba(47,143,111,0.25)" },
                ].map((r) => (
                  <div key={r.n} className="flex items-center gap-3 py-1.5">
                    <span
                      className="text-[10px] tracking-[0.05em] text-fg4"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.n}
                    </span>
                    <span
                      className="text-[14px] text-fg1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.title}
                    </span>
                    <span
                      className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium"
                      style={{
                        color: r.color,
                        background: r.bg,
                        borderColor: r.border,
                      }}
                    >
                      {r.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-start gap-12 md:grid-cols-[260px_1fr] md:gap-16">
          <div>
            <div
              className="mb-4 grid h-12 w-12 place-items-center rounded-full text-[14px] font-semibold text-white"
              style={{ background: "var(--slate-700)" }}
            >
              KR
            </div>
            <div className="text-[15px] font-semibold text-fg1">Kavya Reddy</div>
            <div className="text-[13px] text-fg3">Head of Talent Acquisition</div>
            <div className="text-[13px]" style={{ color: "var(--teal-700)" }}>
              Razorpay, Bengaluru
            </div>
          </div>
          <p
            className="text-[24px] leading-[1.45] md:text-[28px]"
            style={{ fontFamily: "var(--font-display)", color: "var(--fg1)", letterSpacing: "-0.005em", textWrap: "pretty" }}
          >
            We were spending three weeks just screening résumés for every senior role, and good
            candidates dropped off while they waited. HireStack posts the role everywhere, screens
            hundreds of applicants overnight, and books the first interviews on its own — my team
            now starts at the shortlist, not the slush pile.
          </p>
        </div>
      </section>

      {/* ═══ PRICING ═══════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-[1240px] border-t px-6 py-24 md:px-10 md:py-32"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mb-14 max-w-[760px]">
          <span className="t-eyebrow">Pricing</span>
          <h2
            className="mt-4 text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Plans that scale with{" "}
            <span style={{ fontStyle: "italic" }}>how much you&apos;re hiring,</span>{" "}
            not headcount.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            Every plan includes unlimited applicants, multi-portal posting, and DPDP&nbsp;Act-aligned candidate data.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {TIERS.map((t) => {
            const featured = t.featured;
            return (
              <div
                key={t.name}
                className="card-lift relative flex flex-col rounded-[14px] border bg-white p-7 md:p-8"
                style={{
                  borderColor: featured ? "var(--slate-700)" : "var(--border)",
                  boxShadow: featured
                    ? "0 12px 32px rgba(22,29,36,0.12), 0 2px 6px rgba(22,29,36,0.05)"
                    : undefined,
                }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-[14px] font-semibold tracking-[-0.005em] text-fg1">
                    {t.name}
                  </span>
                  {t.pill && (
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em]"
                      style={{ background: "var(--accent-500)", color: "var(--slate-950)" }}
                    >
                      {t.pill}
                    </span>
                  )}
                </div>
                <div className="mb-3 flex items-baseline gap-2">
                  <span
                    className="text-[44px] tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--fg1)", lineHeight: 1 }}
                  >
                    {t.price}
                  </span>
                  {t.per && (
                    <span className="text-[13px] text-fg3">{t.per}</span>
                  )}
                </div>
                <p className="mb-6 text-[14px] leading-[1.55] text-fg2">{t.desc}</p>
                <ul className="mb-7 space-y-2.5 text-[14px] text-fg2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span style={{ color: "var(--teal-700)" }} className="mt-1 shrink-0">
                        <Check size={14} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`focus-ring mt-auto rounded-[8px] px-5 py-3 text-[14px] font-medium transition-colors`}
                  style={
                    t.variant === "primary"
                      ? { background: "var(--accent-700)", color: "white" }
                      : t.variant === "dark"
                        ? { background: "var(--slate-700)", color: "var(--bone)" }
                        : {
                            background: "white",
                            color: "var(--fg1)",
                            border: "1px solid var(--border-strong)",
                          }
                  }
                >
                  {t.cta}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══════════════════════════════════════ */}
      <section
        className="relative"
        style={{ background: "var(--slate-900)", color: "var(--fg-on-dark)" }}
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2
            className="mx-auto max-w-[760px] text-[44px] md:text-[64px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.05, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Start every search at the{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent-500)" }}>shortlist.</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.55]"
            style={{ color: "rgba(232,237,242,0.72)" }}
          >
            14-day trial. No card required. Post your first role in minutes.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button
              className="focus-ring inline-flex items-center gap-2 rounded-[8px] px-7 py-4 text-[15px] font-medium text-white"
              style={{ background: "var(--accent-700)" }}
            >
              Request a demo
              <ArrowRight size={16} />
            </button>
            <button
              className="focus-ring inline-flex items-center gap-2 rounded-[8px] border px-6 py-4 text-[15px] font-medium"
              style={{
                borderColor: "rgba(232,237,242,0.28)",
                color: "var(--fg-on-dark)",
              }}
            >
              Post a role free
            </button>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ════════════════════════════════════════════ */}
      <footer
        className="border-t"
        style={{ background: "var(--slate-950)", color: "var(--fg-on-dark)", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] md:px-10">
          <div>
            <Logo size={28} inverse />
            <p className="mt-4 max-w-[300px] text-[13px] leading-[1.6]" style={{ color: "rgba(232,237,242,0.6)" }}>
              An AI recruiter that posts, screens, interviews, and shortlists — so your team hires
              faster, fairer, and with the evidence in hand.
            </p>
          </div>
          {[
            { h: "Product", items: ["Sourcing", "Screening", "AI interviews", "Integrations", "Changelog"] },
            { h: "Solutions", items: ["Startups", "High-volume hiring", "Tech recruiting", "Agencies & RPOs", "Campus"] },
            { h: "Company", items: ["About", "Customers", "Careers", "Press", "Contact"] },
            { h: "Resources", items: ["Documentation", "Security", "Trust center", "DPDP Act", "API"] },
          ].map((col) => (
            <div key={col.h}>
              <div
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: "rgba(232,237,242,0.55)" }}
              >
                {col.h}
              </div>
              <ul className="space-y-2 text-[13px]">
                {col.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="transition-colors"
                      style={{ color: "rgba(232,237,242,0.8)" }}
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-3 px-6 py-5 text-[12px] md:flex-row md:items-center md:px-10" style={{ color: "rgba(232,237,242,0.55)" }}>
            <span>© {new Date().getFullYear()} HireStack, Inc. · HireStack assists hiring decisions; final hiring choices and compliance remain with the employer.</span>
            <div className="flex gap-5">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">DPA</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
