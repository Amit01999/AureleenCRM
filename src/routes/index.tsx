import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleHelp,
  Database,
  GitBranch,
  GraduationCap,
  Layers3,
  LayoutDashboard,
  MessageSquare,
  Plane,
  Scale,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { AppShell } from "@/components/aureleen/site-shell";
import { CrmLaunchLink } from "@/components/aureleen/crm-launch-link";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aureleen — Industry-Specific CRM Systems" },
      {
        name: "description",
        content:
          "Aureleen develops specialized CRM platforms for training institutes, legal practices and study-abroad operations.",
      },
      { property: "og:title", content: "Aureleen — Industry-Specific CRM Systems" },
      {
        property: "og:description",
        content: "Digital systems, built for the industries that matter.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const industryIcons = [GraduationCap, Scale, Plane];
const industryLabels = ["Education", "Legal practice", "Study abroad"];
const industryArtwork: Record<string, { src: string; alt: string }> = {
  "training-institute": {
    src: "/images/industries/education",
    alt: "A lavender glass graduation cap floating above ivory books",
  },
  "law-firm": {
    src: "/images/industries/legal",
    alt: "Peach glass and champagne-metal scales beside an ivory document folio",
  },
  "higher-study": {
    src: "/images/industries/study-abroad",
    alt: "A mint glass globe with an orbiting airplane and a passport",
  },
};

function WorkspacePreview() {
  const [selected, setSelected] = useState(0);
  const product = products[selected];
  if (!product) return null;
  return (
    <div className="suite-showcase">
      <div className="suite-switcher" aria-label="Choose a product preview">
        {products.map((item, index) => {
          const Icon = industryIcons[index] ?? Layers3;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              <Icon aria-hidden="true" />
              {item.shortName}
            </button>
          );
        })}
      </div>
      <div className="suite-browser">
        <div className="suite-browser-bar">
          <div aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>
            <ShieldCheck /> aureleen / {product.slug}
          </span>
          <small>Product preview</small>
        </div>
        <div className="suite-dashboard">
          <aside className="suite-sidebar">
            <div className="suite-workspace-brand">
              <span>A</span>
              <strong>
                {product.shortName}
                <small>Operations workspace</small>
              </strong>
            </div>
            <span className="suite-nav-label">WORKSPACE</span>
            <div className="suite-side-active">
              <LayoutDashboard />
              Overview
            </div>
            {product.modules
              .filter((item) => item !== "Dashboard")
              .slice(0, 4)
              .map((item, index) => {
                const Icon = [Users, Layers3, Database, Workflow][index] ?? Layers3;
                return (
                  <div key={item}>
                    <Icon />
                    {item}
                  </div>
                );
              })}
            <div className="suite-sidebar-bottom">
              <CircleHelp />
              Purpose-built for your team
            </div>
          </aside>
          <div className="suite-dashboard-main" aria-live="polite" aria-atomic="true">
            <div className="suite-dashboard-heading">
              <div>
                <span>Your operation, in focus</span>
                <h3>{product.screens[0]?.label ?? product.name}</h3>
              </div>
              <span className="suite-demo-label">Sample workspace</span>
            </div>
            <div className="suite-stat-grid">
              {[
                ["Connected modules", product.modules.length, Layers3],
                ["Team roles", product.roles.length, Users],
                ["Workflow stages", product.workflow.length, GitBranch],
              ].map(([label, value, Icon]) => {
                const StatIcon = Icon as typeof Layers3;
                return (
                  <div key={String(label)}>
                    <span>
                      {String(label)}
                      <StatIcon />
                    </span>
                    <strong>{String(value).padStart(2, "0")}</strong>
                    <small>
                      <Check /> Built into your system
                    </small>
                  </div>
                );
              })}
            </div>
            <div className="suite-dashboard-panels">
              <div className="suite-workflow-panel">
                <div className="suite-panel-title">
                  <strong>Workflow overview</strong>
                  <GitBranch />
                </div>
                <p>A connected journey, from start to finish.</p>
                <div className="suite-workflow-nodes">
                  {product.workflow.slice(0, 4).map((step, index) => (
                    <div key={step}>
                      <span>{index === 0 ? <Check /> : String(index + 1).padStart(2, "0")}</span>
                      <strong>{step}</strong>
                      <small>{index === 0 ? "Starting point" : "Connected stage"}</small>
                    </div>
                  ))}
                </div>
              </div>
              <div className="suite-roles-panel">
                <div className="suite-panel-title">
                  <strong>Your team, aligned</strong>
                  <Users />
                </div>
                {product.roles.slice(0, 3).map((role, index) => (
                  <div className="suite-role" key={role.name}>
                    <span className={`suite-avatar avatar-${index}`}>{role.name.slice(0, 1)}</span>
                    <div>
                      <strong>{role.name}</strong>
                      <small>Role-specific workspace</small>
                    </div>
                    <Check />
                  </div>
                ))}
              </div>
            </div>
            <div className="suite-dashboard-bottom">
              <span>
                <span />
                One source of truth for your entire operation
              </span>
              <Link to="/products/$slug" params={{ slug: product.slug }}>
                Explore this system <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="suite-floating-note">
        <span>
          <GitBranch />
        </span>
        <div>
          <strong>Everything, connected.</strong>
          <small>People. Processes. Possibilities.</small>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <AppShell>
      <div className="premium-home">
        <section className="suite-hero">
          <div className="suite-hero-glow" aria-hidden="true" />
          <div className="suite-hero-content page-width">
            <Link to="/products" className="suite-announcement">
              <span>
                <Sparkles /> Purpose-built. Beautifully connected.
              </span>
              <ArrowUpRight />
            </Link>
            <h1>
              Complex operations.
              <br />
              <em>Beautifully simple.</em>
            </h1>
            <p>
              Specialized CRM systems for the way your industry works.
              <br className="suite-desktop-break" /> Bring your people, processes, and possibilities
              together.
            </p>
            <div className="suite-hero-actions">
              <Link to="/products" className="suite-button suite-button-primary">
                Find your system <ArrowUpRight />
              </Link>
              <Link to="/about" className="suite-button suite-button-white">
                Discover Aureleen <ArrowRight />
              </Link>
            </div>
            <div className="suite-hero-benefits">
              <span>
                <Check /> Industry-specific workflows
              </span>
              <span>
                <Check /> Connected by design
              </span>
              <span>
                <Check /> Built to grow with you
              </span>
            </div>
            <WorkspacePreview />
          </div>
        </section>
        <section className="suite-industry-band page-width" aria-label="Industries we serve">
          <p>
            Different industries.
            <br />
            <strong>The same attention to detail.</strong>
          </p>
          {products.map((product, index) => {
            const Icon = industryIcons[index] ?? Layers3;
            return (
              <Link key={product.id} to="/products/$slug" params={{ slug: product.slug }}>
                <Icon />
                <span>{industryLabels[index]}</span>
                <ArrowUpRight />
              </Link>
            );
          })}
        </section>

        <section className="suite-products page-width" id="ecosystem">
          <div className="suite-section-heading">
            <div>
              <span className="suite-kicker">THE AURELEEN COLLECTION</span>
              <h2>
                Your industry.
                <br />
                <em>Your operating system.</em>
              </h2>
            </div>
            <p>
              Every industry has its own rhythm. Your software should understand it. Explore systems
              designed around the work you actually do.
            </p>
          </div>
          <div className="suite-product-grid">
            {products.map((product, index) => {
              const Icon = industryIcons[index] ?? Layers3;
              const artwork = industryArtwork[product.id];
              return (
                <article className={`suite-product-card suite-product-${index}`} key={product.id}>
                  {artwork && (
                    <Link
                      to="/products/$slug"
                      params={{ slug: product.slug }}
                      className="suite-product-art"
                      aria-label={`Explore ${product.name}`}
                    >
                      <img
                        src={`${artwork.src}.webp`}
                        srcSet={`${artwork.src}-480.webp 480w, ${artwork.src}.webp 960w`}
                        sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1280px) 33vw, 400px"
                        width="960"
                        height="640"
                        alt={artwork.alt}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="suite-art-action" aria-hidden="true">
                        <ArrowUpRight />
                      </span>
                    </Link>
                  )}
                  <div className="suite-product-top">
                    <span>
                      <Icon />
                    </span>
                    <small>
                      0{index + 1} / {industryLabels[index]}
                    </small>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="suite-module-tags">
                    {product.modules.slice(0, 4).map((module) => (
                      <span key={module}>{module}</span>
                    ))}
                  </div>
                  <div className="suite-product-actions">
                    <Link
                      to="/products/$slug"
                      params={{ slug: product.slug }}
                      className="suite-product-cta"
                    >
                      Explore the system{" "}
                      <span>
                        <ArrowUpRight />
                      </span>
                    </Link>
                    <CrmLaunchLink product={product} />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="suite-features">
          <div className="page-width">
            <div className="suite-centered-heading">
              <span className="suite-kicker">LESS FRICTION. MORE FORWARD.</span>
              <h2>
                A better way to work.
                <br />
                <em>At every level.</em>
              </h2>
              <p>Thoughtfully engineered foundations. A more connected everyday.</p>
            </div>
            <div className="suite-feature-grid">
              <article className="suite-feature-card suite-feature-wide">
                <div className="suite-feature-copy">
                  <span className="suite-feature-icon">
                    <GitBranch />
                  </span>
                  <h3>Built around your workflow.</h3>
                  <p>
                    From the first interaction to the final outcome, keep every step connected in a
                    system that speaks your industry's language.
                  </p>
                  <Link to="/about">
                    Our approach <ArrowRight />
                  </Link>
                </div>
                <div className="suite-flow-visual" aria-hidden="true">
                  <div>
                    <Users />
                    <span>People</span>
                    <Check />
                  </div>
                  <i />
                  <div className="suite-flow-focus">
                    <Workflow />
                    <span>Your workflow</span>
                    <Sparkles />
                  </div>
                  <i />
                  <div>
                    <Database />
                    <span>Connected records</span>
                    <Check />
                  </div>
                </div>
              </article>
              <article className="suite-feature-card">
                <span className="suite-feature-icon">
                  <ShieldCheck />
                </span>
                <h3>
                  The right view.
                  <br />
                  For every role.
                </h3>
                <p>
                  Give each team a focused workspace, with the information and responsibilities that
                  matter to them.
                </p>
                <div className="suite-role-pills">
                  <span>
                    <Users /> Your team
                  </span>
                  <span>
                    <Settings2 /> Your controls
                  </span>
                </div>
              </article>
              <article className="suite-feature-card">
                <span className="suite-feature-icon">
                  <Layers3 />
                </span>
                <h3>
                  One foundation.
                  <br />
                  Room to evolve.
                </h3>
                <p>
                  Bring operations, communication, reporting, and administration together through
                  shared system architecture.
                </p>
                <div className="suite-layer-visual" aria-hidden="true">
                  <span>Operations</span>
                  <span>Business logic</span>
                  <span>
                    Aureleen foundation <Layers3 />
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="suite-approach page-width">
          <div>
            <span className="suite-kicker">THOUGHTFUL BY DESIGN</span>
            <h2>
              Not just software.
              <br />
              <em>A clearer way forward.</em>
            </h2>
            <p>
              Great systems start with understanding the work. We turn complex industry requirements
              into an experience that feels considered, connected, and intuitive.
            </p>
            <Link to="/about" className="suite-button suite-button-white">
              Meet Aureleen <ArrowUpRight />
            </Link>
          </div>
          <div className="suite-steps">
            {[
              [
                "Understand the industry",
                "Start with the people, processes, and operational realities that make your industry unique.",
              ],
              [
                "Design around the work",
                "Connect workflows, records, and responsibilities in one coherent system.",
              ],
              [
                "Create clarity at every level",
                "Give teams focused workspaces and a shared view of the operation.",
              ],
            ].map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="suite-closing page-width">
          <div className="suite-closing-orbit" aria-hidden="true" />
          <span className="suite-kicker">YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>
            Make room for
            <br />
            <em>better work.</em>
          </h2>
          <p>Find the system that understands your industry.</p>
          <div>
            <Link to="/products" className="suite-button suite-button-primary">
              Explore our products <ArrowUpRight />
            </Link>
            <a
              href="mailto:hello@aureleen.com?subject=Aureleen%20product%20enquiry"
              className="suite-contact-link"
            >
              Let's talk <MessageSquare />
            </a>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
