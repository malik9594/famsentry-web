import { CheckCircle2 } from "lucide-react";
import { comparisonCellIcons, comparisonCards, comparisonRows } from "./data";

export default function ComparisonPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="mb-12 text-center text-4xl font-black text-slate-900 md:text-6xl">
        FamSentry vs Other Apps
      </h1>

      <div className="mb-24 grid gap-8 md:grid-cols-3">
        {comparisonCards.map((card) => (
          <div key={card.title} className={`rounded-3xl p-8 ${card.className}`}>
            <h3 className="mb-4 text-2xl font-bold">{card.title}</h3>
            <p className="mb-6 text-sm leading-relaxed opacity-90">
              {card.description}
            </p>
            <ul className="space-y-3 text-sm">
              {card.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-widest text-slate-400 md:grid-cols-5">
          <div className="p-6 md:col-span-1">Feature</div>
          <div className="bg-blue-50 p-6 text-center text-blue-600">
            FamSentry
          </div>
          <div className="hidden p-6 text-center md:block">Life360</div>
          <div className="hidden p-6 text-center md:block">Google Maps</div>
          <div className="hidden p-6 text-center md:block">Find My</div>
        </div>

        {comparisonRows.map((row) => {
          const Life360Icon =
            comparisonCellIcons[String(row.life360) as "true" | "false"];
          const GoogleMapsIcon =
            comparisonCellIcons[String(row.googleMaps) as "true" | "false"];
          const FindMyIcon =
            comparisonCellIcons[String(row.findMy) as "true" | "false"];

          return (
            <div
              key={row.feature}
              className="grid grid-cols-2 border-b border-slate-100 transition-colors hover:bg-slate-50 last:border-0 md:grid-cols-5"
            >
              <div className="p-6 font-bold text-slate-700">{row.feature}</div>
              <div className="flex items-center justify-center bg-blue-50/30 p-6 text-blue-600">
                <CheckCircle2 size={20} />
              </div>
              <div className="hidden items-center justify-center p-6 text-slate-300 md:flex">
                <Life360Icon size={20} />
              </div>
              <div className="hidden items-center justify-center p-6 text-slate-300 md:flex">
                <GoogleMapsIcon size={20} />
              </div>
              <div className="hidden items-center justify-center p-6 text-slate-300 md:flex">
                <FindMyIcon size={20} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
