import { privacySections } from "./data";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h1 className="mb-8 text-4xl font-black md:text-6xl">
        Privacy-First Location Tracking
      </h1>
      <p className="mb-16 text-xl leading-relaxed text-slate-500">
        FamSentry is fundamentally different from apps like Life360 and Google
        Maps. We prioritize your sovereignty over your data.
      </p>

      <div className="space-y-16">
        {privacySections.map((section) => (
          <div key={section.title}>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              {section.title}
            </h2>
            <p className="leading-relaxed text-slate-600">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
