import type { Metadata } from "next";
import { ArchBlock, CaseStudyLayout, StudySection } from "@/components/case-study/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Radheshyam Glass House — Web Storefront | Hitesh Ahuja",
  description: "Full web storefront for a 30-year-old artisan business. Next.js 14, Sanity CMS, ISR, Resend, live price calculator. Built from scratch with zero ongoing dev dependency.",
};

export default function CmsCaseStudyPage() {
  return (
    <CaseStudyLayout title="Radheshyam Glass House — Web Storefront">

      <StudySection label="Overview">
        <p>
          Radheshyam Glass House is a 30-year-old artisan mirror and glass business in Ulhasnagar,
          Maharashtra that operated entirely on word-of-mouth with no digital presence. I designed and
          built their complete web storefront from scratch — a performant, content-managed site that
          lets a non-technical client independently manage their entire catalogue, gallery, and pricing.
        </p>
      </StudySection>

      <StudySection label="Problem Statement">
        <p>
          Local artisan businesses with premium products lose customers to competitors who simply show
          up on Google. The client&apos;s target audience — interior designers, hotels, homeowners — starts
          their search online. Without a website, Radheshyam Glass House was completely invisible to
          this discovery channel.
        </p>
        <p style={{ marginTop: 14, color: "var(--text-subtle)" }}>
          The second, harder problem: even after building a website, who maintains it? The client is
          non-technical. Any solution requiring a developer for routine content updates would become a
          bottleneck within weeks. The real product challenge was building something the client could
          own independently — forever.
        </p>
      </StudySection>

      <StudySection label="Product Thinking">
        <p><strong style={{ color: "var(--text)" }}>Target users:</strong></p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginTop: 12, marginBottom: 20 }}>
          {["Interior designers", "Homeowners (premium)", "Hotel / office procurement", "Business owner (CMS)"].map(u => (
            <div key={u} style={{ background: "rgba(124,110,247,0.06)", border: "1px solid rgba(124,110,247,0.15)", borderRadius: 10, padding: "10px 14px", fontSize: 13, color: "var(--text-muted)" }}>{u}</div>
          ))}
        </div>
        <p><strong style={{ color: "var(--text)" }}>Key use cases:</strong></p>
        <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "Browse product catalogue → enquire via WhatsApp or contact form",
            "Estimate project cost → get instant ₹/sqft calculation with no API calls",
            "View past project gallery → build trust before reaching out",
            "Client adds new products/photos in Sanity → ISR auto-publishes within 1 hour",
          ].map((uc, i) => (
            <div key={i} style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--text-subtle)" }}>
              <span style={{ color: "#7C6EF7", fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
              {uc}
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Key Features">
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            ["Dynamic product collections", "CMS-driven catalogue with categories (Designer Mirrors, Illuminated Mirrors, etc.), with individual detail pages per product driven by slug-based routing."],
            ["Live price calculator", "H × W input gives instant ₹ estimate at ₹600/sqft base rate. Pure CSR React state — zero API calls. Rate is configurable in lib/constants.ts."],
            ["Project gallery", "Showcases completed installations (residences, hotels, offices) with Sanity-managed photos served via CDN with auto-format transforms."],
            ["Enquiry form + email", "Server Route Handler → Resend API → owner's inbox. WhatsApp CTA runs in parallel as a fast-response channel."],
            ["Headless CMS studio", "Sanity Studio deployed on separate subdomain. Client has Editor-role access to manage products, gallery images, and hero banners independently — zero developer dependency."],
          ].map(([title, desc]) => (
            <div key={title as string}>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>{title}</h4>
              <p style={{ fontSize: 13, color: "var(--text-subtle)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Tech Stack with Reasoning">
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            ["Next.js 14 App Router", "ISR support is built-in and zero-config on Vercel. File-system routing maps cleanly to product slugs. Server Components cut client JS bundle for content-heavy pages. Route Handlers replace a separate Express backend for the email endpoint."],
            ["Sanity.io", "Sanity Studio can be deployed to a dedicated subdomain and given to the client as a standalone admin panel — no account dependency on developer credentials. GROQ is more flexible than REST for nested content queries. CDN image transforms (crop, resize, auto-format) are baked into the URL, so no image processing code needed."],
            ["Resend over Nodemailer/SMTP", "Serverless functions have execution time limits and cold starts — SMTP connections often time out. Resend's HTTP API is reliable on serverless with better deliverability defaults and a generous free tier."],
            ["Vercel", "ISR + Edge CDN without infra management. Free tier is sufficient for a local business site with modest traffic. Deploy previews work out of the box."],
          ].map(([tech, reason]) => (
            <div key={tech as string} style={{ borderBottom: "1px solid var(--card-border)", paddingBottom: 14 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 5 }}>{tech}</p>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{reason}</p>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Architecture & Data Flow">
        <ArchBlock
          lines={[
            "Product page (ISR): Browser → Vercel Edge CDN → Server Component → GROQ query → Sanity CDN",
            "Enquiry form: Form submit → POST /api/contact → Resend API → Owner email",
            "Rendering strategy:",
            "  ISR (1hr revalidation) — /collections, /collections/[slug], /gallery",
            "  CSR — Price calculator (pure React state, zero API calls)",
            "  SSG — /about, /contact",
          ]}
        />
      </StudySection>

      <StudySection label="Performance Optimisations">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            ["Next.js Image + Sanity CDN URLs", "Automatic WebP/AVIF conversion, lazy loading, srcset. Sanity's ?auto=format&w=400&q=75 params cut payload ~55–65%."],
            ["Server Components by default", "Product listing and gallery pages render on the server. Zero JS hydration cost for static content."],
            ["ISR caching on Vercel Edge", "Pages served from CDN; content changes reflect within 60 min without touching all cached pages."],
            ["lib/constants.ts for static business config", "Zero runtime fetch for base rate, WhatsApp number, contact details. Bundled at build time."],
          ].map(([opt, desc]) => (
            <div key={opt as string} style={{ display: "flex", gap: 12, borderBottom: "1px solid var(--card-border)", paddingBottom: 10 }}>
              <span style={{ color: "#7C6EF7", fontWeight: 700, fontSize: 13, flexShrink: 0, minWidth: 220 }}>{opt}</span>
              <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{desc}</span>
            </div>
          ))}
        </div>
      </StudySection>

      <StudySection label="Challenges & Solutions">
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Challenge 1 — Non-technical client who can&apos;t use a GitHub repo or call a dev</h4>
            <p style={{ fontSize: 13, color: "var(--text-subtle)", lineHeight: 1.7, margin: "0 0 8px" }}>
              The client manages a physical store and has no technical background. Any CMS requiring developer access for updates would break within weeks.
            </p>
            <p style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500, margin: 0 }}>
              ✓ Solution: Deployed Sanity Studio to a dedicated subdomain. The client logs in with their own Sanity account (Editor role). Documented a step-by-step guide covering exactly what they can manage. Zero developer dependency for content — permanently.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Challenge 2 — Pricing is variable — per product and per custom finish</h4>
            <p style={{ fontSize: 13, color: "var(--text-subtle)", lineHeight: 1.7, margin: "0 0 8px" }}>
              Glass pricing depends on size, thickness, finish, and complexity. A single flat rate calculator would mislead customers.
            </p>
            <p style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500, margin: 0 }}>
              ✓ Solution: Two-layer system. Global base rate in constants.ts for the calculator widget (labelled as indicative). Per-product pricing fields in Sanity for the detail page. Calculator clearly prompts users to contact for custom finishes.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>Challenge 3 — ISR content lag — client wants &quot;publish now&quot; behaviour</h4>
            <p style={{ fontSize: 13, color: "var(--text-subtle)", lineHeight: 1.7, margin: "0 0 8px" }}>
              ISR revalidates every 60 minutes. If the client adds a product, it won&apos;t appear immediately.
            </p>
            <p style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500, margin: 0 }}>
              ✓ Solution: Documented the 1-hour revalidation window clearly upfront. For urgent cases, a manual Vercel redeploy takes 30 seconds. Long-term fix: Sanity webhook → Vercel revalidatePath() for on-demand ISR — noted as a future improvement.
            </p>
          </div>
        </div>
      </StudySection>

      <StudySection label="Impact & Results">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14 }}>
          {[
            ["0 → Live", "Digital presence built from scratch"],
            ["~60%", "Image payload reduction via CDN + Next/Image"],
            ["<2s", "Target LCP on mobile networks"],
            ["0 devs", "Needed for content updates post-launch"],
          ].map(([val, label]) => (
            <div key={label} style={{ borderRadius: 14, border: "1px solid var(--card-border)", background: "var(--card-bg)", padding: "20px 16px", textAlign: "center" }}>
              <p style={{ fontSize: 26, fontWeight: 800, fontFamily: "var(--font-display)", background: "linear-gradient(135deg, #7C6EF7, #E879F9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", margin: "0 0 6px" }}>{val}</p>
              <p style={{ fontSize: 11, color: "var(--text-subtle)", margin: 0, lineHeight: 1.5 }}>{label}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, padding: "16px 20px", background: "rgba(124,110,247,0.06)", border: "1px solid rgba(124,110,247,0.15)", borderRadius: 12, fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>
          The most meaningful outcome isn&apos;t a performance number — it&apos;s that a 30-year-old traditional business now has a professional digital storefront that runs without ongoing developer cost. The client manages their own catalogue. That&apos;s the real product success metric.
        </div>
      </StudySection>

      <StudySection label="Future Improvements">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            "Sanity webhook → Vercel revalidatePath() for instant on-demand ISR — removes the 1-hour content lag",
            "Product search + category filtering with URL state (?category=illuminated) for SEO-friendly discovery at scale",
            "Move base rate from constants.ts to a Sanity singleton document — full client control, zero code deployment needed",
            "Google Analytics 4 + WhatsApp CTA click tracking for conversion visibility",
            "Multi-language support (Marathi / Hindi) for the local customer base",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 12, fontSize: 13, color: "var(--text-subtle)", alignItems: "flex-start" }}>
              <span style={{ color: "rgba(124,110,247,0.6)", flexShrink: 0, fontFamily: "var(--font-display)", fontWeight: 600 }}>{i + 1}</span>
              {item}
            </div>
          ))}
        </div>
      </StudySection>

    </CaseStudyLayout>
  );
}
