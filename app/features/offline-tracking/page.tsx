import { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import { CloudSync, Database, SignalLow, Zap } from "lucide-react";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Ghost-Sync | Offline Location Tracking | FamSentry",
  description: "Ghost-Sync solves the 'Dead Zone' problem by logging encrypted GPS coordinates locally and syncing instantly upon signal recovery.",
  keywords: "Offline GPS Tracker, Ghost-Sync, Dead Zone Tracking, Family Locator Offline",
};

export default function OfflineTrackingPage() {
  return (
    <FamsentrySiteShell>
      <div className="bg-white min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             {/* Simple grid pattern */}
             <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>
          
          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold mb-8">
                <Zap size={14} className="fill-blue-400" />
                Industry First
              </div>
              <h1 className="text-5xl font-black md:text-8xl mb-8 leading-[0.9]">
                Ghost-Sync <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Offline Intel.</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Solves the "Dead Zone" problem. The app logs encrypted GPS coordinates to a local secure vault on the device and syncs to the Mapifyit cloud instantly upon signal recovery.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: SignalLow,
                  title: "Signal Lost",
                  desc: "When data coverage drops, Ghost-Sync activates automatically in the background."
                },
                {
                  icon: Database,
                  title: "Local Vault",
                  desc: "Coordinates are stored in an encrypted local database using zero-knowledge protocols."
                },
                {
                  icon: CloudSync,
                  title: "Burst Sync",
                  desc: "The moment signal is recovered, all cached data is synced in a single optimized burst."
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 mb-8 border border-slate-100">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-24 md:py-48">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row gap-24 items-center">
              <div className="flex-1">
                <h2 className="text-4xl font-black text-slate-900 mb-8">No more gaps in your history.</h2>
                <p className="text-lg text-slate-600 mb-12">
                  Whether your family is hiking in a national park or driving through remote tunnels, FamSentry ensures their path is preserved with sub-meter precision.
                </p>
                <ul className="space-y-6">
                   <li className="flex items-start gap-4">
                      <div className="mt-1 bg-green-500 rounded-full p-1 text-white">
                        <Zap size={14} />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">Battery Optimized</span>
                        <p className="text-slate-600">Local logging uses less power than constant network pings.</p>
                      </div>
                   </li>
                   <li className="flex items-start gap-4">
                      <div className="mt-1 bg-green-500 rounded-full p-1 text-white">
                        <Zap size={14} />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block">Full Path Reconstruction</span>
                        <p className="text-slate-600">Syncs entire routes, not just the start and end points.</p>
                      </div>
                   </li>
                </ul>
              </div>
              <div className="flex-1 relative">
                <div className="aspect-video bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border-8 border-slate-800">
                   {/* Abstract visualization of path points syncing */}
                   <div className="h-full w-full p-12 flex flex-col justify-end">
                      <div className="flex gap-2 mb-4">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                          <div key={i} className={`h-8 w-1 rounded-full ${i < 4 ? 'bg-blue-500' : 'bg-slate-700 animate-pulse'}`} />
                        ))}
                      </div>
                      <div className="text-white font-mono text-xs opacity-50 mb-2">COORD_VAULT_SYNCING...</div>
                      <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-2/3" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </FamsentrySiteShell>
  );
}
