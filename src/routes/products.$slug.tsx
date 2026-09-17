import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { getProduct } from "@/data/products";
import { ProductDetailPage } from "@/components/aureleen/product-detail";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    if (params.slug === "cse-academy-crm") {
      throw redirect({ to: "/products/$slug", params: { slug: "training-institute-crm" }, statusCode: 301 });
    }
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Product unavailable — Aureleen" }, { name: "robots", content: "noindex" }] };
    return { meta: [
      { title: `${loaderData.name} — Aureleen` },
      { name: "description", content: loaderData.description },
      { property: "og:title", content: `${loaderData.name} — Aureleen` },
      { property: "og:description", content: loaderData.description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: `/products/${params.slug}` },
      { name: "twitter:card", content: "summary_large_image" },
    ], links: [{ rel: "canonical", href: `/products/${params.slug}` }] };
  },
  component: ProductRoute,
});

function ProductRoute() { return <ProductDetailPage product={Route.useLoaderData()} />; }
