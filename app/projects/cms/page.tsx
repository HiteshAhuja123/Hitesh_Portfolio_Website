import type { Metadata } from "next";
import { CaseStudyLayout, StudySection } from "@/components/case-study/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Headless CMS Migration (400+ Pages) | Hitesh Ahuja",
  description:
    "Sitefinity to headless CMS: Next.js, component-based rendering, SEO, 400+ pages.",
};

export default function CmsCaseStudyPage() {
  return (
    <CaseStudyLayout title="Headless CMS Migration (400+ Pages)">
      <StudySection label="Problem">
        <p>
          The stack was a monolithic CMS (Sitefinity): hard to scale, expensive to change, and slow
          for content teams. Shipping frontend improvements meant fighting the platform instead of
          iterating on product.
        </p>
      </StudySection>

      <StudySection label="Approach">
        <p>
          Migrated toward a headless model with Next.js as the delivery layer: frontend decoupled
          from content storage, component-based rendering, and centralized content operations.
        </p>
      </StudySection>

      <StudySection label="Implementation">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-600">
          <li>Reusable UI components mapped to content types</li>
          <li>Dynamic rendering driven by structured content APIs</li>
          <li>400+ pages migrated with consistent patterns</li>
        </ul>
      </StudySection>

      <StudySection label="Challenges">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-600">
          <li>Visual and structural consistency across a large surface area</li>
          <li>Large-scale migration without freezing the business</li>
          <li>Protecting SEO and URL behavior during the transition</li>
        </ul>
      </StudySection>

      <StudySection label="Solutions">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-600">
          <li>Modular component system with clear content contracts</li>
          <li>Structured content APIs instead of page-by-page one-offs</li>
          <li>SEO-aware routing and rendering conventions</li>
        </ul>
      </StudySection>

      <StudySection label="Impact">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-600">
          <li>Better performance and room to scale</li>
          <li>Faster iteration for frontend and content</li>
          <li>Improved developer experience on a maintainable architecture</li>
        </ul>
      </StudySection>
    </CaseStudyLayout>
  );
}
