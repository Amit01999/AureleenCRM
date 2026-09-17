import { BarChart3, CalendarDays, Check, ChevronDown, FileText, Search, Users } from "lucide-react";
import type { Product } from "@/data/products";

const rowsByAccent = {
  academy: ["Full Stack Development", "UI/UX Design", "Digital Marketing"],
  legal: ["Rahman v. Holdings", "Property Transfer", "Commercial Advisory"],
  study: ["MSc Data Science", "MBA International", "BEng Computing"],
};

export function ProductInterface({ product, compact = false }: { product: Product; compact?: boolean }) {
  const rows = rowsByAccent[product.accent];
  return (
    <div className={`interface-shell accent-${product.accent} ${compact ? "interface-compact" : ""}`}>
      <div className="interface-topbar">
        <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
        <span>{product.shortName.toLowerCase().replaceAll(" ", "-")}.aureleen / operations</span>
        <span className="interface-live"><i /> System view</span>
      </div>
      <div className="interface-body">
        <aside className="interface-sidebar" aria-hidden="true">
          <div className="interface-mark">A</div>
          {[BarChart3, Users, CalendarDays, FileText].map((Icon, index) => <Icon key={index} />)}
        </aside>
        <div className="interface-main">
          <div className="interface-heading">
            <div><span>Operational workspace</span><strong>{product.screens[0].label}</strong></div>
            <div className="interface-search"><Search /><span>Search records</span></div>
          </div>
          <div className="interface-metrics">
            {product.modules.slice(0, 3).map((module, index) => (
              <div key={module}><span>{module}</span><strong>{index === 0 ? "Active" : index === 1 ? "In review" : "Scheduled"}</strong><small>{String(index + 1).padStart(2, "0")} / system</small></div>
            ))}
          </div>
          <div className="interface-table">
            <div className="interface-table-head"><span>Record</span><span>Owner</span><span>Status</span><span>Updated</span></div>
            {rows.map((row, index) => (
              <div className="interface-row" key={row}>
                <span><i>{row.slice(0, 1)}</i>{row}</span><span>Operations {index + 1}</span><span><Check /> Active</span><span>Today <ChevronDown /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
