// This file is shown IMMEDIATELY when navigating to /compare,
// before the actual page RSC payload finishes loading.
// It eliminates the blank "stuck" screen on slow connections.

export default function CompareLoading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 animate-pulse">
      {/* Page title skeleton */}
      <div className="mb-12 flex justify-center">
        <div className="h-12 w-80 rounded-xl bg-slate-200" />
      </div>

      {/* 3 comparison card skeletons */}
      <div className="mb-24 grid gap-8 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-3xl bg-slate-100 p-8">
            <div className="mb-4 h-7 w-44 rounded-lg bg-slate-200" />
            <div className="mb-6 space-y-2">
              <div className="h-4 w-full rounded bg-slate-200" />
              <div className="h-4 w-3/4 rounded bg-slate-200" />
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map((j) => (
                <div key={j} className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-slate-300 shrink-0" />
                  <div className="h-4 w-32 rounded bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison table skeleton */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        {/* Table header */}
        <div className="grid grid-cols-5 border-b border-slate-200 bg-slate-50 p-6 gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 w-20 rounded bg-slate-200" />
          ))}
        </div>
        {/* Table rows */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="grid grid-cols-5 border-b border-slate-100 last:border-0 p-6 gap-4 items-center"
          >
            <div className="h-4 w-32 rounded bg-slate-200" />
            {[1, 2, 3, 4].map((j) => (
              <div key={j} className="flex justify-center">
                <div className="h-5 w-5 rounded-full bg-slate-100" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
