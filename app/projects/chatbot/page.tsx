import type { Metadata } from "next";
import { ArchBlock, CaseStudyLayout, StudySection } from "@/components/case-study/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Travel Insurance Conversational AI",
  description:
    "Frontend engineering for a conversational travel-insurance purchase journey at ICICI Lombard — Next.js 15, React, TypeScript, SSE streaming and dynamic UI-schema rendering.",
};

export default function ChatbotCaseStudyPage() {
  return (
    <CaseStudyLayout title="Travel Insurance Conversational AI">

      <StudySection label="Overview">
        <p>
          A conversational travel-insurance purchase platform built at ICICI Lombard that replaces a
          traditional multi-screen journey with a single guided chat interface. In one conversation the
          user moves through quote generation, plan selection, applicant details, insured details, KYC,
          payment and policy issuance.
        </p>
        <p className="mt-4 text-zinc-500">
          I contributed primarily on the frontend — building the conversational UI, the SSE streaming
          layer, and the dynamic rendering engine that turns backend events into interactive UI.
        </p>
      </StudySection>

      <StudySection label="Problem / Context">
        <p>
          Traditional insurance funnels are built around forms, not people. The same data is re-entered
          across disconnected screens, plan comparisons are buried behind jargon, and KYC and payment —
          where intent is highest — are also where users drop off. The business wanted a single,
          auditable, conversational journey that keeps compliance and data accuracy intact.
        </p>
      </StudySection>

      <StudySection label="My Contribution">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          <li>Built the conversational UI and message rendering for the full purchase journey</li>
          <li>Implemented the SSE streaming client and an asynchronous stream parser for mixed-format backend events</li>
          <li>Built a dynamic UI-schema renderer that maps backend payloads to interactive components (plan cards, forms, prompts)</li>
          <li>Handled race conditions between plan and premium responses, plus validation, session handling and responsive/mobile UX</li>
          <li>Integrated the frontend against FastAPI endpoints for quote, plans, applicant, insured, KYC and payment</li>
        </ul>
        <p className="mt-4 text-zinc-500 text-sm">
          The backend (FastAPI, Oracle DB, rule-based + LLM intent detection, state-machine journey
          orchestration) was owned by the wider team; my work sat on the client and the API boundary.
        </p>
      </StudySection>

      <StudySection label="Technical Architecture">
        <ArchBlock
          lines={[
            "User input → Next.js 15 (App Router) client",
            "→ POST /chat with conversation context",
            "→ FastAPI: rule-based → LLM intent detection",
            "→ state machine advances the journey stage",
            "→ API layer (plans, premium, applicant, insured, KYC, payment)",
            "→ SSE stream back to the client",
            "→ async stream parser (JSON / Python-literal / text fallback)",
            "→ component dispatch: ChatMessage | PlanCards | UISchemaRenderer",
          ]}
        />
        <p className="mt-6 text-zinc-500 text-sm">
          <strong>Rendering:</strong> SSR for the initial page shell (insurance pages need SEO), fully
          client-side for all chat interaction after hydration. React state and <code>useRef</code>
          patterns coordinate streaming text, cached payloads and deferred UI rendering.
        </p>
      </StudySection>

      <StudySection label="Key Engineering Challenges">
        <div className="space-y-8">
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Mixed-format SSE payloads</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              The stream carried strict JSON, Python-style dicts (<code>None</code>/<code>True</code>/<code>False</code>)
              and plain text interchangeably, so a single <code>JSON.parse()</code> failed on a large share of events.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: a layered parser — strict JSON first, then a Python-literal to JS normalisation
              pass, then a plain-text fallback — so no event is ever dropped and the UI degrades gracefully.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Race between plan and premium responses</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Plans and premiums arrive as separate SSE chunks in no guaranteed order. If premiums land
              first, plan cards render with blank prices.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: a cache-and-merge strategy — premium chunks are held in a <code>useRef</code> cache
              and merged when plans arrive, so cards render once, complete, in a single update. A
              &quot;wait-for-text-completion&quot; lock stops cards appearing mid-sentence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Dynamic UI without frontend redeploys</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              The journey needed new steps and field sets without shipping a frontend build each time.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: a UI-schema renderer that interprets backend-described components at runtime, so
              journey changes are driven by the backend contract rather than client code.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Mobile animation performance</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Multiple plan cards animating simultaneously dropped frame rate on mid-range devices.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: serialised animations with <code>AnimatePresence mode=&quot;wait&quot;</code> and
              auto-expanded the recommended plan on mobile to cut concurrent animation work.
            </p>
          </div>
        </div>
      </StudySection>

      <StudySection label="Impact">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {[
            ["~60% ↓", "LLM cost — rule-first intent routing"],
            ["<200ms", "Response on structured journey steps"],
            ["58 → 91", "Lighthouse across the broader platform"],
          ].map(([val, label]) => (
            <div key={label} className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-emerald-50 dark:bg-white/[0.03] px-5 py-6 text-center">
              <p className="text-2xl font-bold text-emerald-400">{val}</p>
              <p className="text-sm text-zinc-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-zinc-500 text-sm">
          The conversational journey replaced a long multi-screen flow with a single guided
          conversation, and the dynamic renderer let the team evolve the journey from the backend.
        </p>
      </StudySection>

      <StudySection label="Tech Stack">
        <p className="text-sm">
          Next.js 15 (App Router) · React · TypeScript · Server-Sent Events · CSS Modules · FastAPI
          (backend) · Oracle DB (backend) · rule-based + LLM intent detection · state-machine journey
          orchestration
        </p>
      </StudySection>

    </CaseStudyLayout>
  );
}
