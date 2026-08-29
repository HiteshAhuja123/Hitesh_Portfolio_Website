import type { Metadata } from "next";
import { ArchBlock, CaseStudyLayout, StudySection } from "@/components/case-study/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Home Insurance Platform",
  description:
    "Angular home-insurance purchase journey at ICICI Lombard — reactive forms, RxJS state, premium and add-on integrations against .NET Core REST APIs with encrypted request flows.",
};

export default function HomeInsuranceCaseStudyPage() {
  return (
    <CaseStudyLayout title="Home Insurance Platform">

      <StudySection label="Overview">
        <p>
          A digital home-insurance platform at ICICI Lombard that takes a customer from property details
          to an issued policy online — quote generation, coverage customisation, add-on selection, KYC,
          payment and policy issuance. I worked primarily on the Angular frontend and its integration
          with the backend APIs.
        </p>
      </StudySection>

      <StudySection label="Problem / Context">
        <p>
          Home insurance traditionally meant paperwork, agent back-and-forth and opaque pricing. The
          platform needed to make the full purchase self-service while keeping compliance, encryption
          and premium accuracy intact.
        </p>
      </StudySection>

      <StudySection label="My Contribution">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          <li>Built parts of the Angular purchase flow — reactive forms, step navigation and RxJS-driven state</li>
          <li>Integrated real-time premium calculation and add-on selection against the pricing APIs</li>
          <li>Worked on authentication, encrypted request flows, KYC, payment and policy issuance on the client</li>
          <li>Delivered around 7–8 business-driven change requests across insurance products — mostly Angular frontend work, plus 1–2 .NET Core backend changes (API handling, validation, encrypted request flows)</li>
        </ul>
        <p className="mt-4 text-zinc-500 text-sm">
          The .NET Core services and their architecture were owned by the backend team; my backend
          contribution was scoped to specific endpoints, validation and encrypted request handling.
        </p>
      </StudySection>

      <StudySection label="Technical Architecture">
        <ArchBlock
          lines={[
            "Angular SPA — reactive forms + RxJS state per step",
            "Pincode / ownership → determines available coverages",
            "Base premium API → tenure pricing cards (1Y / 3Y / 5Y)",
            "Add-on toggle → premium recalculation API (debounced via RxJS)",
            "KYC → identity verification service",
            "Half-proposal saved pre-payment → encrypted gateway redirect",
            "On success → proposal API issues policy + confirmation",
          ]}
        />
        <p className="mt-6 text-zinc-500 text-sm">
          A central HTTP interceptor (with CryptoJS) handles encryption and auth so components stay free
          of crypto detail; requests use encrypted payloads with a JWT contract matching the .NET Core
          backend.
        </p>
      </StudySection>

      <StudySection label="Key Engineering Challenges">
        <div className="space-y-8">
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Real-time premium recalculation</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Premium had to update on every add-on toggle, tenure change or sum-insured edit, combining
              base premium, add-on cost, discounts and tax.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: a centralised calculation service using RxJS subjects with debouncing to prevent
              API floods, and cached base-premium responses to avoid redundant calls.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Add-on eligibility rules</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Add-ons carried interdependent eligibility rules — some auto-included, some requiring extra
              data, some tied to property type.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: a single add-on form service holds the business rules; conditional rendering and
              modal data collection keep the UI consistent, with server-side validation as a second layer.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Encryption contract</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              The backend required an encrypted body plus a separately encrypted key in a header, with no
              documentation for the Angular client.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: reproduced the contract inside an HTTP interceptor abstraction so all crypto
              complexity is hidden from feature code.
            </p>
          </div>
        </div>
      </StudySection>

      <StudySection label="Impact">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          <li>Full quote-to-policy purchase available self-service online</li>
          <li>Sub-second premium updates on add-on and tenure changes</li>
          <li>~7–8 business-driven CRs shipped across insurance products, including 1–2 .NET changes</li>
        </ul>
      </StudySection>

      <StudySection label="Tech Stack">
        <p className="text-sm">
          Angular · TypeScript · RxJS · CryptoJS · JWT · GTM · .NET Core REST APIs (backend integration)
        </p>
      </StudySection>

    </CaseStudyLayout>
  );
}
