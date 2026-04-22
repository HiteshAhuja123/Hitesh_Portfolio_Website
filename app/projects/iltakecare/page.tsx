import type { Metadata } from "next";
import { ArchBlock, CaseStudyLayout, StudySection } from "@/components/case-study/CaseStudyLayout";

export const metadata: Metadata = {
  title: "ILTakeCare KYP Platform | Hitesh Ahuja",
  description: "AI insurance super-platform: RAG chatbot, contactless vitals, medical OCR, MCP server. Built with Next.js, FastAPI, Gemini 1.5, Google Vertex AI.",
};

export default function ILTakeCareCaseStudyPage() {
  return (
    <CaseStudyLayout title="ILTakeCare KYP — Know Your Policy">

      <StudySection label="Overview">
        <p>
          An enterprise-grade AI insurance platform that transforms how 600M+ potential users interact
          with their insurance policies. Built as a full-stack product — a Next.js web application
          backed by a FastAPI microservices architecture — it consolidates a knowledgeable insurance
          advisor, health monitoring system, claims processor, and travel planner into a single
          intelligent platform powered by Google Vertex AI (Gemini 1.5) and Model Context Protocol (MCP).
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 text-sm">
          {[
            ["Frontend", "Next.js (SSR/CSR hybrid)"],
            ["Backend", "FastAPI, 10+ microservices"],
            ["AI Layer", "Gemini 1.5, MCP, RAG"],
            ["Infra", "AWS, Docker, PostgreSQL"],
          ].map(([k, v]) => (
            <div key={k as string} className="rounded-xl border border-zinc-200 dark:border-white/10 bg-violet-50 dark:bg-white/[0.03] p-4">
              <p className="text-zinc-500 text-xs mb-1">{k}</p>
              <p className="text-zinc-800 dark:text-zinc-200 font-medium text-xs">{v}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Problem Statement">
        <p>
          Insurance is one of the most information-dense industries — yet customer support is broken at
          every touchpoint. These problems existed in complete silos, forcing users to juggle 5–6 apps,
          portals, and channels to accomplish one insurance task.
        </p>
        <div className="mt-6 space-y-3">
          {[
            "Policy documents are dense, jargon-heavy, and unnavigable without expert help",
            "Call centers give generic answers — they cannot access a customer's specific policy in real time",
            "Filing a motor claim requires 20+ fields in a rigid form — most users abandon halfway",
            "Health monitoring requires clinic visits or expensive wearables — inaccessible for most Indians",
            "Lab reports are incomprehensible to patients — 23% comprehension rate in user surveys",
            "Policy support exists only in English — excluding 600M+ regional language speakers",
          ].map((p) => (
            <div key={p} className="flex gap-3 text-sm text-zinc-500">
              <span className="text-red-400 mt-0.5 shrink-0">✗</span>
              {p}
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Key Features">
        <div className="space-y-8">
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">1. AI Insurance Chatbot (Agentic RAG)</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              A stateful, multi-turn AI agent — not a simple Q&A bot. It disambiguates user-specific vs.
              general questions using 4 Gemini function-calling tools, searches real-time policy data via
              Google Discovery Engine (RAG), maintains session history in PostgreSQL with message
              indexing, and streams responses token-by-token via SSE. Handles AES-256 encrypted payloads
              for sensitive policy data.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">2. Contactless Vitals — rPPG Face Scan</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Computer vision feature using only the phone&apos;s front camera to measure heart rate, SpO2,
              HRV, and stress. Runs 3 rPPG algorithms in parallel (POS, CHROM, ICA) — selects winner by
              SNR analysis. Two-stage HR estimation: coarse FFT → fine peak detection with harmonic
              suppression. Accuracy improved from 65% baseline to 92%+ — clinical-grade precision, zero
              hardware cost.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">3. Pathocard — Medical Report Intelligence</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Multi-stage pipeline: PDF/image upload → OCR (PyMuPDF) → Gemini Vision fallback →
              structured extraction → LLM-generated layman explanation. SSE streaming shows real-time
              progress on the frontend. Medical literacy uplift: 23% → 81% comprehension in user surveys.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">4. Motor Claim Engine — Conversational Filing</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              User types natural language (&quot;hit a pothole near MG Road, front bumper damaged&quot;). LLM
              extracts structured claim fields; state machine tracks currentClaimState. Only asks
              follow-up questions for missing critical fields. Claim filing time: 12 min → 3.5 min (70%
              reduction).
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">5. Health Quotient + Travel Itinerary</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Conversational health assessment → dynamic widget UI (sliders, date pickers) → PDF health
              report with scores and risk factors. Travel: AI itinerary generation with real-time
              insurance coverage cross-referencing per activity + YouTube vlog integration via Maps API.
            </p>
          </div>
        </div>
      </StudySection>

      <StudySection label="Architecture & Data Flow">
        <ArchBlock
          lines={[
            "Layer 1: Next.js App Router — SSR (policy pages) + CSR (chat, camera, real-time)",
            "Layer 2: FastAPI — routing, JWT auth, AES-256 decryption, Pydantic validation",
            "Layer 3: 10+ microservices — chat, claims, vitals, pathocard, health quotient, travel, MCP",
            "Layer 4: PostgreSQL + Vertex AI + Discovery Engine (RAG) + CloudWatch",
          ]}
        />
        <div className="mt-6 space-y-2 text-sm text-zinc-500">
          <p><strong className="text-zinc-700 dark:text-zinc-300">Chat data flow:</strong> User types → encrypted POST → FastAPI decrypts + validates JWT → loads last 10–15 messages from PostgreSQL → Gemini selects tool → tool fetches data → Gemini streams tokens via SSE → response saved to DB.</p>
          <p className="mt-3"><strong className="text-zinc-700 dark:text-zinc-300">Rendering:</strong> SSR for policy detail pages (SEO). CSR for chat, camera vitals, real-time claim form. SSE for chat responses, Pathocard progress, travel itinerary generation.</p>
        </div>
      </StudySection>

      <StudySection label="Performance Optimizations">
        <div className="space-y-3">
          {[
            ["SSE Streaming", "Instead of waiting for full LLM response (3–8s), stream tokens via EventSource — perceived latency drops ~80%"],
            ["Session History Windowing", "Fetch only last 10–15 messages from DB (indexed on session_id + message_index) — avoids context overflow on long conversations"],
            ["Discovery Engine Caching", "Replaced full Gemini agent calls with fast semantic search + caching for simple actions — 65% latency reduction, 40% cost cut"],
            ["Async PostgreSQL Pooling", "asyncpg non-blocking pool handles thousands of concurrent sessions without thread-blocking"],
            ["Lazy-Loaded Feature Modules", "Camera module, PDF uploader, health assessment widgets only loaded when user navigates to that feature"],
            ["Section-Level RAG Chunking", "Switched from sentence-level to section-level chunking — LLM has full context, RAG accuracy jumped significantly"],
          ].map(([stat, desc]) => (
            <div key={stat as string} className="flex gap-4 border-b border-zinc-100 dark:border-white/5 pb-3 last:border-0">
              <span className="text-emerald-400 font-semibold text-sm shrink-0 w-52">{stat}</span>
              <span className="text-zinc-500 text-sm">{desc}</span>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Challenges & Solutions">
        <div className="space-y-8">
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Challenge 1 — Harmonic Locking in rPPG Heart Rate Detection</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              FFT-based HR estimation locked onto 2f/3f harmonics — reporting 140 BPM when actual HR was
              70 BPM. Starting accuracy: 65%.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              ✓ Solution: Two-stage estimation: coarse FFT → check if f/2 has significant power (if yes,
              f is a harmonic, prefer f/2) → fine peak detection. Ensemble + SNR-based selection
              consistently beats any single algorithm. Accuracy: 65% → 92%+.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Challenge 2 — RAG Context Conflation</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              &quot;Do I have roadside assistance?&quot; confused with &quot;What is roadside assistance?&quot; — wrong tool
              called, wrong context fetched.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              ✓ Solution: Rewrote Gemini tool descriptions with explicit disambiguation, examples, and
              edge cases. Tool descriptions are prompts — treat them as such. Wrong tool calls dropped
              80%.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Challenge 3 — Medical Report Format Chaos</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              100+ pathology report formats — different labs, layouts, handwritten notes, scanned images.
              No single parser worked reliably.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              ✓ Solution: Category detection first → PyMuPDF for digital PDFs → OCR for images → Gemini
              Vision as intelligent fallback. Result: 87% digital, 72% scanned accuracy.
            </p>
          </div>
        </div>
      </StudySection>

      <StudySection label="Impact & Results">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {[
            ["93% faster", "Query resolution (4.2 min → 18 sec)"],
            ["70% ↓", "Claim filing time (12 min → 3.5 min)"],
            ["94%", "Policy search accuracy (up from 78%)"],
            ["81%", "Medical comprehension (up from 23%)"],
            ["92%+", "rPPG accuracy (up from 65%)"],
            ["61%", "Queries resolved without human"],
            ["80% ↓", "Wrong RAG tool calls"],
            ["65% ↓", "LLM call latency via caching"],
            ["8 langs", "Indian languages — 600M+ reach"],
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
          <li>Voice interface with regional language STT — most Indian users prefer voice over typing</li>
          <li>Predictive claims model — use vitals + health quotient to predict claim likelihood</li>
          <li>AR damage assessment — phone camera + AR to estimate motor repair costs on-site</li>
          <li>Federated learning for rPPG — personalized on-device models per user</li>
          <li>Multi-agent collaboration — specialized claim/policy/health agents that coordinate</li>
          <li>Wearable sync — Apple Health / Google Fit integration for richer health context</li>
        </ul>
      </StudySection>

    </CaseStudyLayout>
  );
}
