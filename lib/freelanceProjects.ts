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
 * Real freelance/client work only — no placeholders or fabricated projects.
 * Add new entries here as they ship; `image` is optional and only renders
 * if a real screenshot exists in /public.
 */
export const freelanceProjects: FreelanceProject[] = [
  {
    name: "Radheshyam Glass House",
    client: "Artisan glass & mirror business, Ulhasnagar",
    description:
      "Full web storefront for a 30-year-old artisan glass business built entirely from scratch — headless CMS, a live ₹/sqft price calculator, and zero ongoing dev dependency for the client.",
    technologies: ["Next.js 14", "Sanity CMS", "ISR", "Resend"],
    year: "2025",
    role: "Design & Full Stack Development",
    caseStudyHref: "/projects/cms",
  },
];
