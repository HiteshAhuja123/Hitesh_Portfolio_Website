import Link from "next/link";

export function CaseStudyLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen px-6 pt-10 pb-28 md:px-10 md:pt-14">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex text-sm text-zinc-500 transition-colors hover:text-white"
        >
          ← Selected work
        </Link>

        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Case study
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl">
          {title}
        </h1>

        <div className="mt-14 md:mt-20">{children}</div>
      </div>
    </main>
  );
}

export function StudySection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 border-t border-white/10 pt-14 first:mt-0 first:border-0 first:pt-0 md:mt-20 md:pt-20">
      <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">{label}</h2>
      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-zinc-400 md:text-base md:leading-[1.75]">
        {children}
      </div>
    </section>
  );
}

export function ArchBlock({ lines }: { lines: string[] }) {
  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 font-mono text-[13px] leading-relaxed text-zinc-300 md:px-6 md:text-sm">
      {lines.map((line) => (
        <div key={line} className="border-b border-white/5 py-2.5 last:border-0 last:pb-0 first:pt-0">
          {line}
        </div>
      ))}
    </div>
  );
}
