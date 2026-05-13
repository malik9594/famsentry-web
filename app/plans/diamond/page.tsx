import { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import { Check, Crown, History, Server, Target } from "lucide-react";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Diamond Family Package | Premium Safety Archive | FamSentry",
  description: "The ultimate safety archive for high-security families. 1-year location history, priority server routing, and unlimited smart geofencing.",
  keywords: "Diamond Package, Premium Family Locator, 1 Year GPS History, Unlimited Geofencing, High Security Tracking",
};

export default function DiamondPlanPage() {
  return (
    <FamsentrySiteShell>
      <div className="bg-slate-900 min-h-screen text-white pt-24 pb-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-black uppercase tracking-widest mb-8">
              <Crown size={16} />
              The Diamond Standard
            </div>
            <h1 className="text-5xl font-black md:text-8xl mb-8 tracking-tighter">
              Ultimate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Family Archive.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Designed for high-security families requiring the longest encrypted history and the most precise tracking infrastructure available.
            </p>
          </div>

          {/* Core Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              {
                icon: History,
                title: "1-Year History",
                desc: "The industry's longest encrypted history archive. A full 365 days of movement data."
              },
              {
                icon: Server,
                title: "Priority Routing",
                desc: "Sub-second location updates via dedicated Mapifyit nodes for near-zero latency."
              },
              {
                icon: Target,
                title: "Unlimited Fences",
                desc: "Polygon-based geofencing with sub-meter precision. No limits on active zones."
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <item.icon size={120} />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-8">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing/Value Card */}
          <div className="max-w-4xl mx-auto">
             <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                   <div>
                      <h2 className="text-4xl font-black mb-6">Everything in Diamond.</h2>
                      <ul className="space-y-4">
                        {[
                          "ImpactGuard™ Crash Detection",
                          "DriveSentry™ Driving Analytics",
                          "Ghost-Sync Offline Tracking",
                          "365-Day Location History",
                          "Priority Support Access",
                          "Family Circle (Up to 15 members)"
                        ].map((point, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="shrink-0 bg-white/20 rounded-full p-1">
                              <Check size={14} />
                            </div>
                            <span className="font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div className="text-center md:text-right">
                      <div className="mb-8">
                        <span className="text-6xl font-black">$19.99</span>
                        <span className="text-white/70">/mo</span>
                        <p className="text-white/50 text-sm mt-2">Billed annually at $199.99/yr</p>
                      </div>
                      <button className="w-full bg-white text-blue-600 font-black py-5 rounded-full text-xl hover:scale-105 transition-transform">
                        Secure Your Family Now
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </FamsentrySiteShell>
  );
}
