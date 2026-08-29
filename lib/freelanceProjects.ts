export type FreelanceProject = {
  name: string;
  client: string;
  description: string;
  url?: string;
  technologies: string[];
  year: string;
  role: string;
  image?: string;
  caseStudyHref?: string;
};

/**
 * Real freelance / personal project work only — no placeholders or fabricated projects.
 * Add new entries here as they ship; `image` is optional and only renders
 * if a real screenshot exists in /public.
 */
export const freelanceProjects: FreelanceProject[] = [
  {
    name: "CinePlex — Movie Ticket Booking System",
    client: "Personal project",
    description:
      "Full-stack movie-ticket booking platform: movie/showtime discovery, seat selection, and a concurrency-safe booking flow built on database-level pessimistic locking with a transactional hold/confirm/cancel model. Includes weekday/weekend/premium dynamic pricing and an agentic AI booking assistant using Spring AI and Gemini tool-calling.",
    technologies: ["Java 21", "Spring Boot", "PostgreSQL", "React", "Spring AI"],
    year: "2025",
    role: "Full Stack Development",
    image: "/cineplex.png",
    caseStudyHref: "/projects/cineplex",
  },
  {
    name: "Radheshyam Glass House",
    client: "Artisan glass & mirror business, Ulhasnagar",
    description:
      "End-to-end digital build for a 30-year-old artisan glass business — a Sanity-powered Next.js storefront with ISR and a live ₹/sqft price calculator, plus a Node.js + PostgreSQL CRM with JWT-based role access and a 9-stage inquiry-to-dispatch workflow.",
    technologies: ["Next.js 14", "Sanity CMS", "Node.js", "PostgreSQL", "ISR"],
    year: "2025",
    role: "Design & Full Stack Development",
    image: "/radheshyam-glass-house.png",
    caseStudyHref: "/projects/cms",
  },
];
