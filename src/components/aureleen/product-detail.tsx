import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Product } from "@/data/products";
import { products } from "@/data/products";
import { ProductInterface } from "./product-interface";
import { AppShell } from "./site-shell";
import { Eyebrow, SectionIntro } from "./section";

export function ProductDetailPage({ product }: { product: Product }) {
  const otherProducts = products.filter((item) => item.id !== product.id);
  return <AppShell>
    <section className="product-hero page-width">
      <div className="product-hero-copy">
        <Eyebrow>{product.eyebrow}</Eyebrow>
        <p className="product-kicker">{product.name}</p>
        <h1>{product.hero}</h1>
        <p className="hero-body">{product.description}</p>
        <div className="hero-actions"><Button asChild variant="signal" size="lg"><a href="#interface">Explore the system <ArrowDown /></a></Button><Button asChild variant="outlineLight" size="lg"><a href="mailto:hello@aureleen.com?subject=Product%20demonstration">Request a demonstration <ArrowUpRight /></a></Button></div>
      </div>
      <div className="product-hero-visual"><ProductInterface product={product} /></div>
    </section>

    <section className="overview-band page-width">
      <div><Eyebrow>Product overview</Eyebrow><h2>Built around the operation,<br />not around a generic pipeline.</h2></div>
      <p>{product.overview}</p>
    </section>

    <section className="problem-solution page-width">
      <article><span>01 / Industry problem</span><h3>Fragmented work creates fragmented visibility.</h3><p>{product.problem}</p></article>
      <article><span>02 / System response</span><h3>One structured operating context.</h3><p>{product.solution}</p></article>
    </section>

    <section className="system-map page-width">
      <SectionIntro eyebrow="Core modules" title="A system map, not a feature checklist." body="The architecture groups related operational capabilities into one connected product environment." />
      <div className="module-map">
        <div className="module-core"><span>A</span><strong>{product.shortName}</strong><small>System core</small></div>
        <div className="module-list">{product.modules.map((module, index) => <div key={module}><span>{String(index + 1).padStart(2, "0")}</span>{module}</div>)}</div>
      </div>
    </section>

    <section className="workflow-section page-width">
      <SectionIntro eyebrow="Operational workflow" title="Every stage keeps its context." />
      <div className="workflow-track">{product.workflow.map((step, index) => <div key={step} className="workflow-step"><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < product.workflow.length - 1 && <ArrowRight />}</div>)}</div>
    </section>

    <section className="interface-showcase" id="interface">
      <div className="page-width"><SectionIntro eyebrow="Interface showcase" title="The system becomes the working environment." body="Explore representative interface structures designed for focused operational work. Final product imagery can replace these views without changing the presentation system." />
        <Tabs defaultValue={product.screens[0].name} className="screen-tabs">
          <TabsList>{product.screens.map((screen) => <TabsTrigger key={screen.name} value={screen.name}>{screen.name}</TabsTrigger>)}</TabsList>
          {product.screens.map((screen) => <TabsContent key={screen.name} value={screen.name}><div className="screen-caption"><span>{screen.label}</span><p>{screen.description}</p></div><ProductInterface product={product} /></TabsContent>)}
        </Tabs>
      </div>
    </section>

    <section className="roles-section page-width">
      <SectionIntro eyebrow="Role-based system" title="One system. Different operational views." body="Each role works from the same underlying records while seeing the responsibilities, information and actions relevant to its work." />
      <div className="role-chain">{product.roles.map((role, index) => <article key={role.name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{role.name}</h3><p>{role.focus}</p>{index < product.roles.length - 1 && <ArrowRight />}</article>)}</div>
    </section>

    <section className="benefits-section page-width">
      <SectionIntro eyebrow="Operational benefits" title="Designed for continuity at every level." />
      <div className="benefit-lines">{product.features.map((feature) => <article key={feature.title}><Check /><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div>
    </section>

    <section className="architecture-section page-width">
      <div><Eyebrow>System architecture</Eyebrow><h2>One engineering philosophy.<br />Different operational realities.</h2></div>
      <div className="architecture-stack">{["Role experience", "Workflow", "Business logic", "Operational data", "Administration"].map((layer, index) => <div key={layer}><span>0{index + 1}</span><strong>{layer}</strong><small>{index === 4 ? "System foundation" : "Connected layer"}</small></div>)}</div>
    </section>

    <section className="related-products page-width">
      <SectionIntro eyebrow="Aureleen ecosystem" title="Explore another operating system." />
      <div>{otherProducts.map((item) => <Link key={item.id} to="/products/$slug" params={{ slug: item.slug }}><span>{item.category}</span><strong>{item.name}</strong><ArrowUpRight /></Link>)}</div>
    </section>
  </AppShell>;
}
