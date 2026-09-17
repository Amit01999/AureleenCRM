import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AppShell } from "@/components/aureleen/site-shell";
import { Eyebrow, SectionIntro } from "@/components/aureleen/section";
import { products } from "@/data/products";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Aureleen — Industry-Specific Software" },
    { name: "description", content: "Aureleen builds maintainable digital systems around the real operations of complex industries." },
    { property: "og:title", content: "About Aureleen — Industry-Specific Software" },
    { property: "og:description", content: "We build software around real operations." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/about" }] }),
  component: AboutPage,
});

const principles = [
  ["Industry-specific product design", "The operational model begins with the industry—not with a generic software template."],
  ["Workflow-driven engineering", "People, decisions, handoffs and records are mapped before the interface is shaped."],
  ["Scalable architecture", "Systems are structured to grow in scope without becoming fragmented or difficult to govern."],
  ["Operational visibility", "Data is organized to help teams understand the current state of work and act with context."],
  ["Role-based systems", "Every role receives a focused experience while working from the same operational foundation."],
  ["Long-term maintainability", "Products are designed as durable systems that can evolve with the organizations using them."],
];

function AboutPage() {
  return <AppShell><section className="about-hero page-width"><Eyebrow>About Aureleen</Eyebrow><h1>We build software around real operations.</h1><p>Aureleen creates specialized digital systems for organizations whose workflows are too complex, interconnected or industry-specific for generic software.</p></section>
    <section className="manifesto page-width"><div><span>Our position</span><h2>Software should understand the industry it serves.</h2></div><div><p>Generic platforms often ask organizations to reshape their work around the assumptions of the software.</p><p>Aureleen takes the opposite approach. We study how an industry coordinates people, information and decisions—then build the operating system around that reality.</p></div></section>
    <section className="principles page-width"><SectionIntro eyebrow="Product principles" title="A disciplined approach to operational software." /><div>{principles.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="about-system page-width"><div className="about-system-copy"><Eyebrow>How we think</Eyebrow><h2>From operational reality to maintainable system.</h2><p>The interface is the visible layer. Under it sits the workflow model, role structure, business logic, operational data and administration that make the product dependable.</p></div><div className="architecture-stack">{["Industry", "Workflow", "Roles", "Business logic", "Data", "System"].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><small>{index === 5 ? "Operational product" : "Design input"}</small></div>)}</div></section>
    <section className="about-products page-width"><SectionIntro eyebrow="Current ecosystem" title="Three industries. One product standard." /><div>{products.map((product) => <Link key={product.id} to="/products/$slug" params={{ slug: product.slug }}><span>{product.category}</span><strong>{product.name}</strong><ArrowUpRight /></Link>)}</div></section>
  </AppShell>;
}
