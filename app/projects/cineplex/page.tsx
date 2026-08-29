import type { Metadata } from "next";
import { ArchBlock, CaseStudyLayout, StudySection } from "@/components/case-study/CaseStudyLayout";

export const metadata: Metadata = {
  title: "CinePlex — Movie Ticket Booking System",
  description:
    "Full-stack movie-ticket booking platform — Java 21, Spring Boot, PostgreSQL and React — with concurrency-safe seat booking via database-level pessimistic locking and an agentic AI booking assistant built on Spring AI.",
};

export default function CineplexCaseStudyPage() {
  return (
    <CaseStudyLayout title="CinePlex — Movie Ticket Booking System">

      <StudySection label="Overview">
        <p>
          A full-stack movie-ticket booking platform built with Java 21, Spring Boot, PostgreSQL and
          React. It covers movie and showtime discovery, seat selection, and a booking and payment flow
          designed to stay correct under concurrent demand for the same seats. A conversational AI
          assistant, built with Spring AI and Gemini tool-calling, can search shows and place bookings
          on the user&apos;s behalf.
        </p>
      </StudySection>

      <StudySection label="Problem / Context">
        <p>
          Seat booking is a classic concurrency problem: two users can select the same seat at the same
          moment, and naive checks let both bookings through. The system needs a reservation model that
          holds seats safely during checkout, releases them on timeout or cancellation, and never
          double-sells.
        </p>
      </StudySection>

      <StudySection label="My Contribution">
        <p>Built the whole system — backend, database design, frontend and the AI assistant.</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500 mt-3">
          <li>Spring Boot REST services for movies, showtimes, seat inventory, bookings and payments</li>
          <li>Concurrency-safe seat booking using database-level pessimistic locking</li>
          <li>Transactional hold / confirm / cancel flow with automatic release of expired holds</li>
          <li>Dynamic pricing — weekday, weekend and premium rates — via a Strategy-pattern pricing layer</li>
          <li>React frontend for discovery, seat-map selection and checkout</li>
          <li>Agentic AI booking assistant with Spring AI + Gemini tool-calling, containerised with Docker</li>
        </ul>
      </StudySection>

      <StudySection label="Technical Architecture">
        <ArchBlock
          lines={[
            "React client → Spring Boot REST API",
            "Booking request → @Transactional service",
            "→ SELECT ... FOR UPDATE on the target seat rows (pessimistic lock)",
            "→ create HOLD with expiry → return hold reference",
            "Confirm → payment → HOLD → CONFIRMED (same transaction)",
            "Scheduler → releases expired HOLDs back to available",
            "Pricing → Strategy pattern (weekday / weekend / premium)",
            "AI assistant → Spring AI + Gemini tool-calling → same booking API",
            "PostgreSQL · Docker",
          ]}
        />
      </StudySection>

      <StudySection label="Key Engineering Challenges">
        <div className="space-y-8">
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Preventing double-booked seats</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              Concurrent requests for the same seat must not both succeed, and the check has to survive
              race windows between &quot;is it free?&quot; and &quot;book it&quot;.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: pessimistic row locks (<code>SELECT ... FOR UPDATE</code>) on the seat rows
              inside a single transaction, so a competing transaction blocks until the first commits or
              rolls back, then re-reads the true state.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Holds that never leak inventory</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              A seat held during checkout must be released if the user abandons or payment fails —
              without a manual cleanup step.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: an explicit hold / confirm / cancel state model with expiry timestamps and a
              scheduled job that returns lapsed holds to the available pool.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">Letting an AI agent book safely</h4>
            <p className="text-zinc-500 mt-2 text-sm">
              The assistant needed to take real actions (search, hold, confirm) rather than just answer
              questions.
            </p>
            <p className="text-zinc-400 text-sm mt-3 font-medium">
              Solution: expose booking operations as Spring AI tools that call the same transactional
              service the UI uses, so the concurrency and pricing guarantees hold regardless of caller.
            </p>
          </div>
        </div>
      </StudySection>

      <StudySection label="Impact">
        <ul className="list-disc space-y-2 pl-5 marker:text-zinc-500">
          <li>Demonstrates backend depth — Java / Spring Boot, PostgreSQL, transactions and concurrency control</li>
          <li>Concurrency-safe booking with no double-sold seats under parallel load in testing</li>
          <li>End-to-end AI integration: an agent that transacts through the real booking API</li>
        </ul>
      </StudySection>

      <StudySection label="Tech Stack">
        <p className="text-sm">
          Java 21 · Spring Boot · Spring AI · PostgreSQL · React · Docker · Gemini (tool-calling)
        </p>
      </StudySection>

    </CaseStudyLayout>
  );
}
