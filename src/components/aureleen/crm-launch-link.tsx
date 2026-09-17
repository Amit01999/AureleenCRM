import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export function CrmLaunchLink({ product }: { product: Pick<Product, "name" | "appUrl"> }) {
  return (
    <a
      className="crm-launch-link"
      href={product.appUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Launch ${product.name} (opens in a new tab)`}
    >
      Launch CRM <ArrowUpRight aria-hidden="true" />
    </a>
  );
}
