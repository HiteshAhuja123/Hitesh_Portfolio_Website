import type { Metadata } from "next";
import { CaseStudyLayout, StudySection } from "@/components/case-study/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Flick Ticket System | Hitesh Ahuja",
  description:
    "Laravel and React ticket booking: seat selection, scheduling, and conflict-safe bookings.",
};

export default function FlickTicketCaseStudyPage() {
  return (
    <CaseStudyLayout title="Flick Ticket System">
      <StudySection label="Problem">
        <p>
          The product needed reliable ticket booking: users pick seats, shows run on schedules,
          and the system must resolve conflicts when demand overlaps the same inventory or time
          windows.
        </p>
      </StudySection>

      <StudySection label="Approach">
        <p>
          Built full-stack with Laravel and React: interactive seat selection on the client,
          scheduling and persistence on the server, with explicit validation at the boundaries.
        </p>
      </StudySection>

      <StudySection label="Implementation">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          <li>Dynamic seat selection UI tied to availability</li>
          <li>Backend rules for schedules and overlaps</li>
          <li>Database design that reflects bookings, seats, and events</li>
        </ul>
      </StudySection>

      <StudySection label="Challenges">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          <li>Preventing double booking under concurrency</li>
          <li>Overlapping schedules and edge cases in the calendar</li>
        </ul>
      </StudySection>

      <StudySection label="Solutions">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          <li>Server-side validation and transactional safeguards</li>
          <li>Queries and constraints aligned to how seats and slots are actually claimed</li>
        </ul>
      </StudySection>

      <StudySection label="Impact">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          <li>Dependable booking behavior for users</li>
          <li>Clearer UX around seat and time selection</li>
        </ul>
      </StudySection>
    </CaseStudyLayout>
  );
}
