import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductInterface } from "@/components/aureleen/product-interface";
import { AppShell } from "@/components/aureleen/site-shell";
import { Eyebrow } from "@/components/aureleen/section";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [
    { title: "CRM Product Ecosystem — Aureleen" },
    { name: "description", content: "Explore Aureleen's specialized CRM systems for training institutes, legal practices and study-abroad operations." },
    { property: "og:title", content: "CRM Product Ecosystem — Aureleen" },
    { property: "og:description", content: "Purpose-built CRM systems for complex industry operations." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/products" }] }),
  component: ProductsPage,
});

function ProductsPage() {
  return <AppShell><section className="catalog-hero page-width"><Eyebrow>Product ecosystem / {String(products.length).padStart(2, "0")}</Eyebrow><h1>Systems built around the way industries actually work.</h1><p>Aureleen does not force every organization into one generic CRM. Each product is structured around the people, data and operational sequence of a specific industry.</p></section>
    <section className="product-catalog page-width">{products.map((product, index) => <article key={product.id} className="catalog-item"><div className="catalog-index">0{index + 1}</div><div className="catalog-copy"><span>{product.category}</span><h2>{product.name}</h2><p>{product.description}</p><Link to="/products/$slug" params={{ slug: product.slug }}>Explore system <ArrowUpRight /></Link></div><div className="catalog-visual"><ProductInterface product={product} compact /></div></article>)}</section>
    <section className="portfolio-ready page-width"><span>Portfolio architecture</span><h2>Designed to expand without changing the system.</h2><p>New CRM products enter the same catalogue, navigation and reusable product architecture—preserving a coherent Aureleen ecosystem as the portfolio grows.</p></section>
  </AppShell>;
}
