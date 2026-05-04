import { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import { BarChart3, Clock, Gauge, PhoneOff } from "lucide-react";

export const metadata: Metadata = {
  title: "DriveSentry™ | Driving Safety Analytics | FamSentry",
  description: "Monitor driving behavior with DriveSentry™. Real-time telemetry, hard braking alerts, and weekly safety scores without compromising location privacy.",
  keywords: "Teen Driver Monitor, Driving Analytics, Speed Tracking, Road Safety, FamSentry",
};

export default function DrivingSafetyPage() {
  return (
    <FamsentrySiteShell>
      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <section className="bg-slate-50 py-24 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Coaching, Not Spying</span>
                <h1 className="text-4xl font-black text-slate-900 md:text-7xl mb-8">
                  DriveSentry™ <br />
                  <span className="text-slate-400">Analytics.</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                  Real-time telemetry monitoring including hard braking, rapid acceleration, and phone usage. 
                  Generates weekly encrypted "Safety Scores" to help coach teen drivers without compromising their location privacy to insurers.
                </p>
              </div>
              <div className="flex-1 w-full max-w-md">
                <div className="bg-white rounded-[2rem] p-8 shadow-2xl border border-slate-100">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="font-bold text-slate-900 text-xl">Weekly Score</h4>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Excellent</span>
                  </div>
                  <div className="relative h-48 w-48 mx-auto mb-8">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="16" fill="transparent" className="text-slate-100" />
                      <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="16" fill="transparent" strokeDasharray={552} strokeDashoffset={552 * (1 - 0.94)} className="text-blue-600" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-black text-slate-900">94</span>
                      <span className="text-slate-400 text-sm">Out of 100</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Hard Braking</span>
                      <span className="text-slate-900 font-bold">0 Events</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Speeding</span>
                      <span className="text-slate-900 font-bold">2 Events</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Phone Usage</span>
                      <span className="text-slate-900 font-bold">Low</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Gauge, title: "Speed Monitor", desc: "Get notified when speed limits are exceeded significantly." },
                { icon: PhoneOff, title: "Focus Mode", desc: "Detects if the phone is being used while the vehicle is in motion." },
                { icon: BarChart3, title: "Privacy First", desc: "Scores are for you and your family, never shared with insurance." },
                { icon: Clock, title: "Trip History", desc: "Detailed breakdown of every journey with safety event markers." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl transition-colors hover:bg-slate-50">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8">Better driving starts with better insights.</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              Join thousands of families who use DriveSentry™ to help their teen drivers build safe habits for life.
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Get Started for Free
            </button>
          </div>
        </section>
      </div>
    </FamsentrySiteShell>
  );
}
