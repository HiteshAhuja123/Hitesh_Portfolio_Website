import type { Metadata } from "next";
import { ArchBlock, CaseStudyLayout, StudySection } from "@/components/case-study/CaseStudyLayout";

export const metadata: Metadata = {
  title: "OPD & Elevate Her Healthcare Marketplace",
  description:
    "Frontend / full-stack product engineering for a healthcare marketplace embedded in a Flutter WebView — Next.js 16, React 19, Zustand, TanStack Query, SignalR, with a typed WebView bridge and a custom API service layer.",
};

export default function OpdElevateHerCaseStudyPage() {
  return (
    <CaseStudyLayout title="OPD & Elevate Her Healthcare Marketplace">

      <StudySection label="Overview">
        <p>
          A healthcare marketplace inside ICICI Lombard&apos;s insurance ecosystem, embedded in a Flutter
          app through a WebView. It offers OPD and healthcare services across <strong>10+ verticals</strong> —
          doctor and teleconsultation, lab tests, medicines, vaccination, dental, vision, dermatology,
          minor / cashless procedures and location-based services. <strong>Elevate Her</strong> is a
          dedicated women&apos;s-health section within the same product, covering period tracking, health
          checkups, medicine ordering, and prenatal / postnatal and parenting guidance based on
          eligibility and plan.
        </p>
        <p className="mt-4 text-zinc-500">
          I contributed as a frontend / full-stack product engineer. Healthcare services are fulfilled
          by an external vendor platform (GetVisit); the frontend maps insurance and user context into
          their service flows.
        </p>
      </StudySection>

      <StudySection label="Problem / Context">
        <p>
          Members needed one place to use their health benefits instead of separate portals and manual
          coordination. The marketplace had to live inside an existing Flutter app, feel native, work
          across many service types, and integrate an external healthcare vendor while keeping insurance
          identity, authentication and encrypted data flows correct.
        </p>
      </StudySection>

      <StudySection label="My Contribution">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          <li>Built marketplace UI and flows across 10+ service verticals, including the Elevate Her women&apos;s-health section</li>
          <li>Set up client state with Zustand and server state with TanStack Query over an Axios-based service layer</li>
          <li>Implemented a typed Flutter ↔ WebView bridge — navigation, back-button handling, orientation control and file downloads</li>
          <li>Built a custom API / service layer handling authentication, insurance identifiers, token refresh, encrypted payloads, FormData and multiple API domains</li>
          <li>Integrated SignalR for real-time chat / AI coaching in Elevate Her</li>
          <li>Added Google Maps for location-based services, react-pdf for report / document viewing, CleverTap analytics, and PWA patterns with lazy loading and code splitting</li>
          <li>Worked with the Docker + Jenkins pipeline and AWS environment configuration</li>
        </ul>
        <p className="mt-4 text-zinc-500 text-sm">
          The GetVisit vendor platform and the insurance backend services were owned by their
          respective teams; my work was the marketplace client and its integration layer.
        </p>
      </StudySection>

      <StudySection label="Technical Architecture">
        <ArchBlock
          lines={[
            "Flutter app → WebView → Next.js 16 (App Router) marketplace",
            "Typed JS ↔ Flutter bridge: navigation, back, orientation, downloads",
            "Zustand (client state) + TanStack Query (server state)",
            "Custom API service layer → JWT auth, token refresh, encrypted payloads",
            "→ multiple API domains: insurance backend + GetVisit vendor APIs",
            "SignalR channel → real-time chat / AI coaching (Elevate Her)",
            "Google Maps · react-pdf · CleverTap · PWA (lazy-loaded modules)",
          ]}
        />
      </StudySection>

      <StudySection label="Key Engineering Challenges">
        <div className="space-y-8">
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Flutter ↔ WebView contract</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              A web app inside a native shell needs native behaviour — hardware back button, orientation,
              file downloads and navigation hand-off — without leaking untyped message passing everywhere.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: a single typed bridge module wraps every native call and event with defined
              payloads, so feature code calls typed methods instead of posting raw messages.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">One client, many API domains</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Requests span the insurance backend and the external vendor, each with its own auth,
              identifiers and payload rules, including encrypted bodies and FormData uploads.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: a custom service layer centralises base URLs, auth and token refresh, encryption,
              insurance-identifier injection and FormData handling, exposing clean typed methods to features.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Real-time coaching in Elevate Her</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              The women&apos;s-health section needed live chat / AI coaching alongside normal request/response flows.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: a SignalR connection with lifecycle handling (connect, reconnect, teardown on
              navigation) feeding a dedicated chat store, kept isolated from the TanStack Query cache.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">WebView performance budget</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Running inside a WebView on mid-range devices leaves little headroom for a multi-vertical app.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: route-level code splitting and lazy-loaded heavy modules (maps, PDF viewer,
              health widgets), so each vertical only loads what it needs.
            </p>
          </div>
        </div>
      </StudySection>

      <StudySection label="Impact">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          <li>Single embedded marketplace covering 10+ healthcare verticals plus a dedicated women&apos;s-health section</li>
          <li>Reusable typed WebView bridge and API service layer used across the whole marketplace</li>
          <li>Real-time chat / AI coaching shipped in Elevate Her via SignalR</li>
        </ul>
      </StudySection>

      <StudySection label="Tech Stack">
        <p className="text-sm">
          Next.js 16 · React 19 · TypeScript · Zustand · TanStack Query · Axios · SignalR · Google Maps ·
          react-pdf · CleverTap · PWA · Docker · Jenkins · AWS · GetVisit vendor APIs (integration)
        </p>
      </StudySection>

    </CaseStudyLayout>
  );
}
