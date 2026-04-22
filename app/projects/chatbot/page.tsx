import type { Metadata } from "next";
import { ArchBlock, CaseStudyLayout, StudySection } from "@/components/case-study/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Travel Insurance Conversational AI | Hitesh Ahuja",
  description: "Full-stack conversational insurance platform: state machine, FastAPI, Next.js 15, SSE, hybrid NLP. 70% faster purchase time.",
};

export default function ChatbotCaseStudyPage() {
  return (
    <CaseStudyLayout title="Travel Insurance Conversational AI System">

      <StudySection label="Overview">
        <p>
          An intelligent conversational platform built at ICICI Lombard that replaces a multi-screen
          travel insurance purchase flow with a single guided chat interface. Users upload documents,
          answer contextual questions, and receive instant quotes — completing the full journey
          (quote → KYC → payment → policy) in under 3.5 minutes.
        </p>
      </StudySection>

      <StudySection label="Problem Statement">
        <p>
          Traditional insurance funnels are built around forms, not users. The journey forces the same
          data to be re-entered across disconnected screens, buries plan comparisons behind jargon, and
          requires separate KYC flows per traveler. Drop-off is highest at KYC and payment — exactly
          when intent is highest.
        </p>
        <p className="mt-4 text-zinc-500">
          The business needed a system that collapses this into a single, auditable, conversational
          journey without losing compliance or data accuracy.
        </p>
      </StudySection>

      <StudySection label="Product Thinking">
        <p>
          <strong>Target users:</strong> Individual travelers, families (up to 10), and senior citizens
          needing PED/pre-existing disease coverage.
        </p>
        <p className="mt-4 text-zinc-500">
          <strong>Core insight:</strong> The bottleneck wasn&apos;t data collection — it was
          context-switching between screens. A state machine that knows exactly where the user is in the
          journey eliminates that friction entirely.
        </p>
        <p className="mt-4 text-zinc-500">
          <strong>Design principle:</strong> The bot never surfaces a form the user hasn&apos;t been
          prepared for. Each stage is gated by conversational context, not page navigation. Information
          is collected once, reused everywhere.
        </p>
      </StudySection>

      <StudySection label="Architecture & Data Flow">
        <ArchBlock
          lines={[
            "User Input → Next.js 15 (App Router)",
            "→ POST /chat with full conversation history",
            "→ FastAPI backend",
            "→ Intent Detection (Rule-based → LLM fallback)",
            "→ State Machine (7+ stages)",
            "→ API Layer (Plans, Premium, Applicant, Insured, KYC)",
            "→ SSE Stream back to frontend",
            "→ Stream Parser (4-layer fallback)",
            "→ Component Dispatch (ChatMessage | PlanCards | UISchemeRenderer)",
            "→ Oracle DB (session persistence)",
          ]}
        />
        <p className="mt-6 text-zinc-500 text-sm">
          <strong>Rendering strategy:</strong> SSR for the initial page shell (insurance pages need SEO);
          fully CSR post-hydration for all chat interactions. App Router&apos;s hybrid model made this
          seamless without custom configuration.
        </p>
        <p className="mt-4 text-zinc-500 text-sm">
          <strong>State machine stages:</strong> intro → document upload → plan selection → applicant
          KYC → insured details → verification → payment
        </p>
      </StudySection>

      <StudySection label="Performance Optimizations">
        <div className="space-y-3">
          {[
            ["~60% LLM cost reduction", "Rule-first intent routing — LLM only invoked for genuine ambiguity"],
            ["<200ms response time", "On all structured journey steps"],
            ["60fps on mid-range mobile", "AnimatePresence mode=\"wait\" limits concurrent Framer Motion animations to one"],
            ["22% JS bundle reduction", "Dependency audit and lazy loading on adjacent insurance flows"],
            ["Lighthouse 58 → 91 (+57%)", "Across the broader platform through JS cleanup and standalone build"],
          ].map(([stat, desc]) => (
            <div key={stat} className="flex gap-4 border-b border-zinc-100 dark:border-white/5 pb-3 last:border-0">
              <span className="text-emerald-400 font-semibold text-sm shrink-0 w-44">{stat}</span>
              <span className="text-zinc-500 text-sm">{desc}</span>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Challenges & Solutions">
        <div className="space-y-8">
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Challenge 1 — Unpredictable SSE Payloads</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              The backend emitted JSON, Python-style dicts (None/True/False), and plain text in the
              same stream. JSON.parse() failed on ~30% of payloads.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              ✓ Solution: Built a universal 4-layer fallback parser: (1) Strict JSON.parse(), (2)
              Python literal → JS conversion then parse, (3) Function(&apos;return &apos; + raw)() for edge
              cases, (4) Treat as plain text. Parse failures dropped to near-zero.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Challenge 2 — Race Conditions Between Plans and Premium APIs</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Plans and Premium return as separate SSE chunks. If Premium arrives first, cards render
              with blank prices.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              ✓ Solution: Cache-and-merge strategy. Premium chunks are stored silently in a useRef
              cache. When Plans arrive, they trigger a merge that pulls all cached premiums, rendering
              complete cards in one atomic update. A &quot;wait-for-text-completion&quot; lock ensures cards
              never appear mid-sentence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Challenge 3 — Mobile Animation Performance</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Multiple Framer Motion plan cards expanding/collapsing simultaneously dropped to 30fps on
              mid-range devices.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              ✓ Solution: Switched to AnimatePresence mode=&quot;wait&quot; to serialize animations. Auto-opened
              the recommended plan on mobile to reduce initial animation load. Achieved consistent 60fps.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Challenge 4 — Government ID Validation</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Aadhar requires Verhoeff checksum validation. DOB needed leap-year awareness and
              age-limit enforcement (18–70 for standard, different for senior plans).
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              ✓ Solution: Client-side simplified Verhoeff for instant feedback before API call. Full
              verification server-side. DOB validation calculates age to the day, not just year
              difference. Error messages are specific: &quot;February 2024 has 29 days, not 30&quot; instead of
              &quot;Invalid date.&quot;
            </p>
          </div>
        </div>
      </StudySection>

      <StudySection label="Impact">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {[
            ["70% ↓", "Purchase time (12 min → 3.5 min)"],
            ["~45% ↓", "Drop-off rate"],
            ["95%", "Form accuracy"],
            ["~60% ↓", "LLM API costs"],
            ["0", "FE deploys for new product launches"],
            ["<200ms", "Response on structured steps"],
          ].map(([val, label]) => (
            <div key={label} className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-violet-50 dark:bg-white/[0.03] px-5 py-6 text-center">
              <p className="text-3xl font-bold text-emerald-400">{val}</p>
              <p className="text-sm text-zinc-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Future Improvements">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          <li>Voice input via Web Speech API — describe your trip verbally</li>
          <li>Multi-language — Hindi and regional languages for tier-2 expansion</li>
          <li>ML recommendations — suggest coverage based on destination risk profiles</li>
          <li>Offline mode — service worker caches conversation state; syncs on reconnect</li>
          <li>Group discounts — dynamic pricing that surfaces bulk discount at 5+ travelers</li>
        </ul>
      </StudySection>

    </CaseStudyLayout>
  );
}
