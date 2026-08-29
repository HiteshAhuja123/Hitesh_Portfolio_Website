import type { Metadata } from "next";
import { ArchBlock, CaseStudyLayout, StudySection } from "@/components/case-study/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Travel Insurance Campaign Platform",
  description:
    "Internship project at ICICI Lombard — a mobile-first Next.js 14 travel-insurance campaign landing journey with a 6-step quote flow, focused on Lighthouse and frontend performance.",
};

export default function IciciLombardCaseStudyPage() {
  return (
    <CaseStudyLayout title="Travel Insurance Campaign Landing Platform">

      <StudySection label="Overview">
        <p>
          A mobile-first web application built at ICICI Lombard that serves as the landing destination
          for YouTube and Instagram travel-insurance campaigns. Users arrive from an ad and move through
          a <strong>6-step quote flow</strong> — destination, travel dates, travellers, health
          information, DOB and mobile number — before being handed to a quote comparison page.
        </p>
        <p className="mt-4 text-zinc-500">
          This was my primary internship project. I owned requirement-gathering and the implementation
          of the quote flow, with frontend performance and Lighthouse as the explicit objective.
        </p>
      </StudySection>

      <StudySection label="Problem / Context">
        <p>
          The existing journey was desktop-first and form-heavy, and most users arriving from paid
          social campaigns dropped off before generating a quote. For a campaign-driven product, load
          time and every extra field are a direct cost, so the brief was a fast, single-page guided
          experience built for mobile.
        </p>
      </StudySection>

      <StudySection label="My Contribution">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          <li>Gathered requirements and built the 6-step progressive quote flow end to end</li>
          <li>Focused on frontend performance and Lighthouse — the main objective set for the project</li>
          <li>Implemented conditional step logic so steps render based on earlier answers, with a progress bar that recalculates</li>
          <li>Wired the client to the encrypted enterprise API contract (encrypted payloads, JWT with silent refresh)</li>
          <li>Added GA4 / GTM events across key interactions to track progression and drop-offs</li>
          <li>Set up deployment on AWS EC2 through Jenkins</li>
        </ul>
      </StudySection>

      <StudySection label="Technical Architecture">
        <ArchBlock
          lines={[
            "User lands from ad → Server Component renders shell → UTM params captured",
            "Client hydrates → API client acquires JWT, starts silent-refresh timer",
            "User progresses → each step validates → GA4 / GTM events fire on transitions",
            "Submit → encrypted request body + headers → enterprise API",
            "On success → redirect to quote comparison",
          ]}
        />
        <p className="mt-6 text-zinc-500 text-sm">
          <strong>Rendering:</strong> Server Components for SEO-friendly initial HTML, Client Components
          for the interactive form. CSS Modules instead of a utility framework to keep the client bundle
          small and mobile load fast.
        </p>
      </StudySection>

      <StudySection label="Key Engineering Challenges">
        <div className="space-y-8">
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Dynamic step count</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Some steps only render based on earlier answers, so the progress bar could not assume a
              fixed total.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: a pure <code>getTotalSteps(formData)</code> function computes the visible step
              count on every render; the multi-step hook and progress bar derive from it.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Token expiry mid-form</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Users spending several minutes on the form would hit JWT expiry at submission.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: the token service stores the expiry timestamp and silently refreshes before any
              call within the expiry window, so submission never fails on auth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Undocumented encryption contract</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              The backend required an encrypted request body and a specific header format, with no
              documentation for a Next.js client.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: worked from the existing Angular implementation to reproduce the contract behind
              a single API-client abstraction, so components never touch crypto directly.
            </p>
          </div>
        </div>
      </StudySection>

      <StudySection label="Impact">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {[
            ["5 min → 2.5 min", "Time-to-quote"],
            ["10K+", "Daily API requests handled"],
            ["AWS EC2 · Jenkins", "Deployment pipeline"],
          ].map(([val, label]) => (
            <div key={label} className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-emerald-50 dark:bg-white/[0.03] px-4 py-5 text-center">
              <p className="text-lg font-bold text-emerald-400">{val}</p>
              <p className="text-xs text-zinc-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Tech Stack">
        <p className="text-sm">
          Next.js 14 (App Router) · React · TypeScript · CSS Modules · JWT auth · encrypted API
          integration · GA4 / GTM · AWS EC2 · Jenkins
        </p>
      </StudySection>

    </CaseStudyLayout>
  );
}
