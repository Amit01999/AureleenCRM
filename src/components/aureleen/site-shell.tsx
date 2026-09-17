import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const contactHref = "mailto:hello@aureleen.com?subject=Aureleen%20product%20enquiry";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-glass">
        <Link to="/" className="brand" aria-label="Aureleen home">
          <span>A</span>
          <strong>Aureleen</strong>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link to="/products" activeProps={{ className: "active" }}>
            Products
          </Link>
          <Link to="/about" activeProps={{ className: "active" }}>
            About
          </Link>
          <a href={contactHref}>Contact</a>
        </nav>
        <Button asChild variant="light" className="header-cta">
          <Link to="/products">
            Explore products <ArrowUpRight />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link to="/products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <a href={contactHref}>Contact</a>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div>
          <Link to="/" className="brand">
            <span>A</span>
            <strong>Aureleen</strong>
          </Link>
          <p>Specialized digital systems for organizations with complex operational workflows.</p>
        </div>
        <div>
          <small>Navigate</small>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <a href="#footer-contact">Contact</a>
        </div>
        <div>
          <small>Products</small>
          {products.map((product) => (
            <Link key={product.id} to="/products/$slug" params={{ slug: product.slug }}>
              {product.name}
            </Link>
          ))}
        </div>
      </div>
      <section
        className="footer-contact"
        id="footer-contact"
        aria-labelledby="footer-contact-title"
      >
        <div className="footer-contact-intro">
          <h2 id="footer-contact-title">Contact Us</h2>
          <a href="mailto:contact@fly8.study">
            <Mail aria-hidden="true" />
            contact@fly8.study
          </a>
        </div>
        <address className="footer-office">
          <h3>
            <MapPin aria-hidden="true" />
            Dhaka Office
          </h3>
          <p>2nd Floor, 13/B, Road 108, Gulshan 2, Dhaka</p>
          <a href="tel:+8801686395927">
            <Phone aria-hidden="true" />
            +880 1686-395927
          </a>
        </address>
        <address className="footer-office">
          <h3>
            <MapPin aria-hidden="true" />
            Khulna Office
          </h3>
          <p>4, KDA Avenue, United Tower, Shibbari (6th Floor)</p>
          <a href="tel:+8801626085836">
            <Phone aria-hidden="true" />
            +880 1626-085836
          </a>
        </address>
      </section>
      <div className="footer-base">
        <span>Purpose-built systems for complex industries.</span>
        <span>
          Developed by{" "}
          <a href="https://it.bepro.com.bd/" target="_blank" rel="noopener noreferrer">
            BePro IT
          </a>
        </span>
        <span>© 2026 Aureleen</span>
      </div>
    </footer>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
