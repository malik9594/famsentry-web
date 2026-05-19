import { Shield, Lock, History, SignalHigh, CheckCircle2 } from "lucide-react";
import { sovereignComparisonRows } from "./data";
import SectionHeading from "./section-heading";

export default function SovereignChoiceComparisonPage() {
  return (
    <div className="relative overflow-hidden bg-slate-50 pt-16 md:pt-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-50 to-transparent opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold tracking-wider text-blue-700 uppercase mb-4">
            Comparison Guide
          </span>
          <h1 className="text-3xl font-black tracking-tight text-blue-600 md:text-5xl mb-6">
            The Sovereign Choice
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 md:text-xl">
            Why families are switching from mainstream tracking apps to FamSentry's private, encrypted ecosystem.
          </p>
        </div>

        {/* Features Comparison Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {[
            { icon: Shield, title: "Data Sovereignty", desc: "You own your data. We just provide the tools." },
            { icon: Lock, title: "Zero-Knowledge", desc: "Encryption so strong even we can't see your location." },
            { icon: History, title: "365-Day Archive", desc: "A full year of movement history at your fingertips." },
            { icon: SignalHigh, title: "Ghost-Sync", desc: "Offline tracking that works even in dead zones." }
          ].map((item, index) => (
            <div key={index} className="group relative rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <item.icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Comparison Table */}
        <div className="mb-20">
          <SectionHeading subtitle="The Technical Reality">
            FamSentry vs Mainstream Apps
          </SectionHeading>

          <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-900 text-white font-bold text-lg">
              <div className="p-8 border-b border-slate-800 md:border-b-0 md:border-r">Feature</div>
              <div className="p-8 bg-blue-600 flex items-center justify-between border-b border-blue-500 md:border-b-0 md:border-r">
                FamSentry (Diamond)
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs uppercase tracking-widest">Recommended</span>
              </div>
              <div className="p-8 text-slate-400">Mainstream Apps</div>
            </div>

            {sovereignComparisonRows.map((row, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <div className="p-8 font-bold text-slate-900 flex items-center">{row.feature}</div>
                <div className="p-8 text-blue-700 bg-blue-50/30 flex items-center font-medium gap-3">
                  <CheckCircle2 size={20} className="text-blue-600 shrink-0" />
                  {row.famsentry}
                </div>
                <div className="p-8 text-slate-500 flex items-center italic">{row.mainstream}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive Call to Action */}
        <div className="rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-2xl font-black md:text-4xl mb-8">Ready for true privacy?</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/plans/diamond" className="rounded-full bg-white px-6 py-4 font-bold text-blue-600 shadow-lg transition-transform hover:scale-105">
                Upgrade to Diamond
              </a>
              <a href="/features" className="rounded-full border-2 border-white/30 bg-white/10 px-6 py-4 font-bold backdrop-blur-sm transition-all hover:bg-white/20">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
