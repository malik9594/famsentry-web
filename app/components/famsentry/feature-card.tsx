import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  badge,
}: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl">
      <div className="mb-4 flex items-start justify-between">
        <div className="rounded-xl bg-blue-50 p-3 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={24} className="transition-transform duration-300 group-hover:scale-110" />
        </div>
        {badge ? (
          <span className="rounded bg-blue-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
            {badge}
          </span>
        ) : null}
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}
