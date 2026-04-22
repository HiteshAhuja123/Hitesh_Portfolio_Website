import type { Metadata } from "next";
import { ArchBlock, CaseStudyLayout, StudySection } from "@/components/case-study/CaseStudyLayout";

export const metadata: Metadata = {
  title: "ICICI Lombard Campaign Platform | Hitesh Ahuja",
  description: "Mobile-first campaign landing platform for ICICI Lombard. 6-step progressive form, AES-256 encryption, AWS ECS, 850KB → 520KB bundle.",
};

export default function IciciLombardCaseStudyPage() {
  return (
    <CaseStudyLayout title="Travel Insurance Campaign Landing Platform">

      <StudySection label="Overview">
        <p>
          A mobile-first, production-grade web application built for ICICI Lombard that serves as the
          primary landing destination for YouTube and Instagram insurance campaigns. Users land from an
          ad and are guided through a <strong>6-step progressive form</strong> — destination, dates,
          traveler configuration, health screening, DOB validation, and mobile verification — before
          being redirected to a quote comparison page.
        </p>
        <p className="mt-4 text-zinc-500">
          The entire flow replaces a traditionally painful multi-page insurance form with a fast,
          single-page guided experience optimized for 3G mobile users.
        </p>
      </StudySection>

      <StudySection label="Problem Statement">
        <p>
          ICICI Lombard was running paid campaigns on YouTube and Instagram but losing the majority of
          users before reaching quote generation. The existing flow was desktop-first, form-heavy, and
          unoptimized. For a campaign-driven product, every second of load time and every extra form
          field is a direct revenue leak.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["60–70%", "Form abandonment on old platform"],
            ["75%", "Traffic from mobile devices"],
            ["8 min", "Avg time-to-quote before"],
            ["850KB", "Initial JS bundle size"],
          ].map(([val, label]) => (
            <div key={label} className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-violet-50 dark:bg-white/[0.03] px-4 py-5 text-center">
              <p className="text-2xl font-bold text-emerald-400">{val}</p>
              <p className="text-xs text-zinc-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Product Thinking">
        <p>
          <strong>Target users:</strong> Indian travelers arriving from social media ads — low patience,
          high intent, predominantly on mobile (390px viewport). They&apos;ve clicked an ad for travel
          insurance. The window to convert is narrow.
        </p>
        <p className="mt-4 text-zinc-500">
          <strong>Key insight — Progressive disclosure:</strong> Instead of showing all 15+ fields at
          once, break the journey into 6 logical steps, each with a single cognitive task. Show only
          what&apos;s needed at each step, validate in real time, and never let the user feel lost.
        </p>
        <p className="mt-4 text-zinc-500">
          <strong>Campaign context:</strong> UTM parameters from YouTube/Instagram ads are captured on
          landing and preserved through every step — enabling attribution analysis of which creatives
          drive completed quotes vs. which drive abandonment.
        </p>
      </StudySection>

      <StudySection label="Key Features">
        <div className="space-y-6">
          {[
            ["6-step progressive form", "Destination selection (visual cards + search), dual-month calendar, traveler age-group configuration, conditional health screening, DOB collection for 71–85 age group, and mobile verification with T&C acceptance."],
            ["Conditional step logic", "Steps 4 and 5 only render based on previous answers. Total step count is dynamic; progress bar recalculates accordingly. getTotalSteps(formData) — a pure function that calculates visible step count on every render."],
            ["Enterprise API integration", "Custom HTTP interceptor with AES-256 body encryption, RSA-2048 key exchange, JWT auto-refresh, and correlation ID injection. Reverse-engineered from existing Angular codebase — no documentation existed for Next.js."],
            ["UTM attribution", "Captures YouTube/Instagram campaign parameters on landing, passes them through all API calls and GTM events for conversion attribution."],
            ["GA4 event tracking", "15+ events covering step progression, field errors, abandonment, and quote generation success/failure with PII hashing."],
            ["Token expiry handling", "TokenService stores expiry timestamp. Before every API call, checks if expiry is within 2 minutes. If yes, silently refreshes before proceeding — zero user-visible disruption even for elderly users spending 10+ min on form."],
          ].map(([title, desc]) => (
            <div key={title as string}>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{title}</h4>
              <p className="text-zinc-500 mt-2 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Tech Stack with Reasoning">
        <div className="space-y-4">
          {[
            ["Next.js 14 App Router", "Server Components for SEO-optimized initial HTML (Core Web Vitals affect ad quality scores); Client Components for interactive form."],
            ["TypeScript strict mode", "Insurance data (DOBs, health conditions, policy numbers) is type-sensitive; strict TS caught 30+ bugs before runtime."],
            ["CSS Modules over Tailwind", "Removed Tailwind to cut bundle by 200KB+; hand-coded mobile-first CSS gives full performance control."],
            ["CryptoJS + JSEncrypt", "AES-256-CBC for body encryption, RSA-2048 for key exchange; matches legacy backend contract."],
            ["Docker + AWS ECS", "Multi-stage builds for minimal image size; ECS for auto-scaling under campaign traffic spikes. Image reduced from 1.2GB → 380MB (–68%)."],
          ].map(([tech, reason]) => (
            <div key={tech as string} className="border-b border-zinc-100 dark:border-white/5 pb-4 last:border-0">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">{tech}</p>
              <p className="text-zinc-500 text-sm mt-1">{reason}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Architecture & Data Flow">
        <ArchBlock
          lines={[
            "Step 1 — User lands from ad → Server Component renders instantly → UTM params captured",
            "Step 2 — Client hydration → ApiClient initializes → JWT acquired, auto-refresh timer started",
            "Step 3 — User progresses → each step validates → GA4 events fire on every transition",
            "Step 4 — Submission → AES-256 encrypt body → RSA-2048 encrypt key → inject JWT + headers",
            "Step 5 — On success → quote comparison redirect → GA4 quote_generated fires",
          ]}
        />
      </StudySection>

      <StudySection label="Challenges & Solutions">
        <div className="space-y-8">
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Challenge 1 — Dynamic Step Count</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Steps 4 and 5 only render based on earlier answers. The progress bar needed to reflect
              the real total, not a fixed 6.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              ✓ Solution: getTotalSteps(formData) — a pure function that calculates visible step count
              on every render. The useMultiStep hook consumes this. Progress bar = currentStep /
              dynamicTotal × 100.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Challenge 2 — Token Expiry Mid-Form</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Users spending 10+ minutes on the form (common for elderly travelers filling DOB/health
              fields) would hit JWT expiry on submission.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              ✓ Solution: TokenService stores expiry timestamp on acquisition. Before every API call,
              checks if expiry is within 2 minutes. If yes, silently refreshes in background before
              proceeding. Zero auth failures in production.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Challenge 3 — Undocumented API Encryption Contract</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              The ICICI backend required AES-encrypted body + RSA-encrypted key + a specific header
              format — none of it was documented for the Next.js project.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              ✓ Solution: Reverse-engineered the existing Angular codebase to understand the encryption
              flow. Built an abstraction layer (ApiClient) that hides all crypto complexity from
              components. Added a skipEncryption flag for endpoints that don&apos;t need it.
            </p>
          </div>
        </div>
      </StudySection>

      <StudySection label="Impact & Results">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["–39%", "JS bundle (850KB → 520KB)"],
            ["1.8s", "FCP on 3G"],
            ["78%", "Mobile form completion rate"],
            ["–68%", "Docker image size"],
            ["8→3.5min", "Time-to-quote"],
            ["Zero", "Mid-session auth failures"],
            ["15+", "GA4 funnel events"],
            ["99.9%", "API uptime"],
          ].map(([val, label]) => (
            <div key={label} className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-violet-50 dark:bg-white/[0.03] px-4 py-5 text-center">
              <p className="text-2xl font-bold text-emerald-400">{val}</p>
              <p className="text-xs text-zinc-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Future Improvements">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          <li>Autosave to localStorage — resume abandoned form sessions (currently lost on tab close)</li>
          <li>A/B test step order — test &quot;travelers before dates&quot; variant</li>
          <li>Real-time quote preview — show estimated price range as user fills in traveler details</li>
          <li>PWA support — service worker for offline resilience on poor 3G connections</li>
          <li>i18n — Hindi and regional language support for deeper campaign reach</li>
        </ul>
      </StudySection>

    </CaseStudyLayout>
  );
}
