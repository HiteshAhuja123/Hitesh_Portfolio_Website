import type { Metadata } from "next";
import { ArchBlock, CaseStudyLayout, StudySection } from "@/components/case-study/CaseStudyLayout";

export const metadata: Metadata = {
  title: "FreshBuy Home Insurance Platform | Hitesh Ahuja",
  description: "Angular 16 home insurance SPA. 2-3 day quote → under 3 minutes. RxJS real-time premium, 95% payment success, 45% conversion rate.",
};

export default function FreshBuyCaseStudyPage() {
  return (
    <CaseStudyLayout title="FreshBuy Home Insurance Platform">

      <StudySection label="Overview">
        <p>
          FreshBuy is a comprehensive web application that streamlines the home insurance buying
          process — allowing customers to get instant quotes, customize coverage, and complete policy
          purchases entirely online. The platform handles everything from initial property details
          collection to payment processing and policy issuance, replacing a multi-day agent-driven
          process with a <strong>sub-5-minute digital experience</strong>.
        </p>
      </StudySection>

      <StudySection label="Problem Statement">
        <p>
          Traditional home insurance purchasing involved lengthy paperwork, multiple agent interactions,
          and opaque pricing. The provider needed a modern, customer-centric platform to compete in the
          digital insurance marketplace while maintaining compliance and security standards.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["2–3 days", "Time to get a quote"],
            ["Hidden", "Pricing transparency"],
            ["Zero", "Self-service capability"],
            ["None", "Digital experience"],
          ].map(([val, label]) => (
            <div key={label} className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-violet-50 dark:bg-white/[0.03] px-4 py-5 text-center">
              <p className="text-2xl font-bold text-red-400">{val}</p>
              <p className="text-xs text-zinc-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Solution">
        <p>A responsive Angular SPA that guides users through an intuitive multi-step flow:</p>
        <div className="mt-4 space-y-3">
          {[
            ["1. Smart Lead Capture", "Property details, ownership type, pincode validation"],
            ["2. Dynamic Quote Generation", "Real-time premium calculation based on property specifics"],
            ["3. Flexible Coverage Customization", "Add/remove optional covers with instant pricing updates"],
            ["4. Streamlined KYC", "Integrated digital identity verification"],
            ["5. Secure Payment", "Multi-gateway integration with encrypted payloads"],
            ["6. Instant Policy Issuance", "Automated proposal generation and document delivery"],
          ].map(([step, desc]) => (
            <div key={step as string} className="flex gap-3 text-sm">
              <span className="text-emerald-400 font-semibold shrink-0 w-48">{step}</span>
              <span className="text-zinc-500">{desc}</span>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Key Features">
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Intelligent Premium Calculator</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Real-time computation for 20+ optional covers (Personal Accident, Domestic Appliances,
              Jewelry theft, Garden equipment, Pet cover). Dual calculation modes: built-up area-based
              or construction cost-based. Multi-tenure pricing (1Y / 3Y / 5Y) with discount logic.
              Dynamic add-on pricing recalculates on every selection using RxJS debounced Subjects.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Modular Coverage Builder</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Visual coverage cards showing benefits, exclusions, and pricing. Mandatory vs. optional
              cover logic (e.g., Terrorism cover auto-included). Cover eligibility rules based on
              property type (Owner vs. Tenant). Dependency management for complex add-on combinations
              via centralized AddonFormService.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Quote Persistence & Cross-Device Resume</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Two-layer persistence: encrypted session storage for within-session continuity +
              server-side half-proposals via home/HalfProposal API generating a unique proposal ID.
              FetchProposal restores full application state on any device — resulted in 35% increase in
              quote completion rate.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Payment Orchestration</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Multiple payment gateway support with encrypted payload transmission. Failure handling
              with retry logic. 95% payment success rate. GTM event tracking for full funnel attribution
              without code deploys.
            </p>
          </div>
        </div>
      </StudySection>

      <StudySection label="Tech Stack with Reasoning">
        <div className="space-y-4">
          {[
            ["Angular 16 + TypeScript", "Opinionated structure fits complex enterprise forms; strict TS caught 30+ bugs pre-runtime"],
            ["RxJS", "Reactive state for real-time premium updates without global state overhead; debounceTime prevents API floods on rapid add-on toggles"],
            ["Custom HTTP Interceptor + CryptoJS", "Centralized encryption + auth; matches legacy backend contract (AES-256-CBC + RSA-encrypted key in kv header)"],
            [".NET Core 3.1", "Proxy/hosting layer routing to domain microservices"],
            ["Microservices", "Independent scaling of premium calculation during campaign traffic spikes"],
            ["Lazy Loading", "40% faster initial load; only Step 1 assets downloaded on first paint"],
            ["GTM + GA4", "Marketing can add events without code deploys; full funnel attribution"],
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
            "Step 1 — Pincode validated → ownership type determines available coverages",
            "Step 2 — Home/ViewPrice API → base premium for 1Y/3Y/5Y tenure cards",
            "Step 3 — User adds covers → Home/v1/Premium API recalculates instantly via RxJS",
            "Step 4 — PAN validation, DOB, KYC service identity verification",
            "Step 5 — home/HalfProposal saves pre-payment state → gateway redirect (encrypted)",
            "Step 6 — On success → home/Proposal issues policy → email + WhatsApp confirmation",
          ]}
        />
      </StudySection>

      <StudySection label="Challenges & Solutions">
        <div className="space-y-8">
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Challenge 1 — Real-Time Premium Recalculation</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Premium needed to update instantly on every add-on toggle, tenure change, or Sum Insured
              modification — involving base premiums, add-on costs, discounts, GST, and special
              conditions.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              ✓ Solution: Centralized CalculatePremiumService with RxJS Subjects. Debouncing (300ms)
              prevents API floods during rapid interactions. Base premium responses cached to avoid
              redundant calls. Result: sub-200ms premium updates with zero calculation errors.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Challenge 2 — Cross-Device Quote Resumption</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Users started quotes on mobile, wanted to resume on desktop. Session storage alone
              doesn&apos;t work across devices.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              ✓ Solution: Two-layer persistence — encrypted session storage + server-side half-proposal
              via home/HalfProposal API generating a unique proposal ID. FetchProposal restores full
              state on any device. Result: 35% increase in quote completion rate.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Challenge 3 — Undocumented Encryption Contract</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Backend required AES-encrypted body + separately encrypted AES key in a kv header + JWT
              format. No documentation existed for the Angular project.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              ✓ Solution: Reverse-engineered existing legacy codebase. Built HTTP interceptor as
              abstraction — all crypto complexity hidden from components. Passed compliance audits, zero
              security incidents.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Challenge 4 — Add-On Cover Dependencies</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Add-ons had complex eligibility rules — jewelry cover only for content policies, PA cover
              requires nominee details, terrorism cover auto-included.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              ✓ Solution: Centralized AddonFormService holds all business logic. Conditional rendering
              based on coverage type. Modal-based data collection for complex add-ons. Server-side
              eligibility validation as second layer. Result: zero invalid add-on selections in
              production.
            </p>
          </div>
        </div>
      </StudySection>

      <StudySection label="Impact & Results">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["<3 min", "Quote time (was 2–3 days)"],
            ["45%", "Conversion rate (industry avg 15–20%)"],
            ["10,000+", "Monthly quote volume"],
            ["95%", "Payment success rate"],
            ["35%", "Quote resumption rate"],
            ["70% ↓", "Operational cost vs agent sales"],
            ["–40%", "Initial load time"],
            ["99.7%", "API uptime"],
          ].map(([val, label]) => (
            <div key={label} className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-violet-50 dark:bg-white/[0.03] px-4 py-5 text-center">
              <p className="text-2xl font-bold text-emerald-400">{val}</p>
              <p className="text-xs text-zinc-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Key Learnings">
        <div className="space-y-4 text-sm text-zinc-500">
          <p><strong className="text-zinc-700 dark:text-zinc-300">RxJS requires discipline</strong> — adopted takeUntil(destroy$) pattern religiously to prevent memory leaks across all subscription chains.</p>
          <p><strong className="text-zinc-700 dark:text-zinc-300">Encryption overhead is real</strong> — AES adds 80–150ms; consider encrypting only truly sensitive fields.</p>
          <p><strong className="text-zinc-700 dark:text-zinc-300">Progressive disclosure works</strong> — showing add-ons incrementally increased add-on adoption by 40%.</p>
          <p><strong className="text-zinc-700 dark:text-zinc-300">Mobile-first is non-negotiable</strong> — desktop was only 32% of traffic but took 80% of initial dev effort. Painful lesson learned.</p>
        </div>
      </StudySection>

      <StudySection label="Future Improvements">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          <li>AI-powered recommendations — suggest optimal coverage based on property value and location</li>
          <li>Visual property assessment — upload photos for automated valuation</li>
          <li>SSR migration — Angular Universal for better SEO and initial load</li>
          <li>PWA / offline mode — service worker for quote saving on poor connections</li>
          <li>Multi-language support — Hindi and regional languages for deeper reach</li>
          <li>One-click renewal — pre-filled data for returning customers</li>
        </ul>
      </StudySection>

    </CaseStudyLayout>
  );
}
