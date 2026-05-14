// This file is shown IMMEDIATELY when navigating to /features,
// before the actual page RSC payload finishes loading.
// It eliminates the blank "stuck" screen on slow connections.

export default function FeaturesLoading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 animate-pulse">
      {/* Section heading skeleton */}
      <div className="mb-12 text-center md:text-left">
        <div className="h-9 w-72 rounded-lg bg-slate-200 mb-4" />
        <div className="h-5 w-56 rounded bg-slate-100" />
      </div>

      {/* 9 feature card skeletons — matches the real grid layout */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
          >
            <div className="mb-4 flex items-start justify-between">
              {/* Icon placeholder */}
              <div className="h-12 w-12 rounded-xl bg-slate-100" />
              {/* Badge placeholder */}
              <div className="h-5 w-14 rounded bg-slate-100" />
            </div>
            {/* Title */}
            <div className="mb-2 h-6 w-36 rounded bg-slate-200" />
            {/* Description lines */}
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-slate-100" />
              <div className="h-4 w-4/5 rounded bg-slate-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
