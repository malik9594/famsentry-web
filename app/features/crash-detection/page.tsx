import { Metadata } from "next";
import FamsentrySiteShell from "@/app/components/famsentry/famsentry-site-shell";
import { Activity, Bell, MapPin, ShieldAlert } from "lucide-react";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "ImpactGuard™ | Crash Detection & SOS | FamSentry",
  description: "FamSentry's ImpactGuard™ uses advanced sensor-fusion technology to detect vehicle collisions and trigger automatic SOS with live audio and video.",
  keywords: "Car Crash Detection App, SOS Emergency, Road Safety, Family Safety, ImpactGuard",
};

export default function CrashDetectionPage() {
  return (
    <FamsentrySiteShell>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-13 pb-32 md:pt-23 md:pb-48">
          <div className="absolute top-0 left-0 w-full h-full bg-slate-900 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 text-center text-white">
            {/* <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm font-bold text-red-400 ring-1 ring-inset ring-red-500/20 mb-4">
              <ShieldAlert size={16} />
              ImpactGuard™ Technology
            </div> */}
            <h1 className="text-4xl font-black text-blue-600 tracking-tight md:text-6xl mb-8">
              Safety that doesn't blink.
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-slate-300 leading-relaxed">
              Utilizes advanced sensor-fusion technology to detect high-G impacts consistent with vehicle collisions.
              Triggers an automatic SOS with live audio, video, and precise Mapifyit coordinates even if the driver is unresponsive.
            </p>
          </div>
        </section>

        {/* Features Detail */}
        <section className="mx-auto max-w-7xl px-6 -mt-24 relative z-10">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Activity,
                title: "Sensor-Fusion",
                desc: "Analyzes accelerometer, gyroscope, and GPS data simultaneously to verify impact severity."
              },
              {
                icon: Bell,
                title: "Automatic SOS",
                desc: "Zero-tap emergency response. If we detect a crash, help is already on the way."
              },
              {
                icon: MapPin,
                title: "Precise Coordinates",
                desc: "Live Mapifyit tracking provides first responders with exact lane-level location data."
              }
            ].map((item, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/50">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <item.icon size={28} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Animation Mockup (Visual Representation) */}
        <section className="py-18 md:py-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">Beyond simple detection.</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Instant Verification</h4>
                      <p className="text-slate-600">Our algorithms filter out false positives like dropped phones or hard braking.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Live Stream Activation</h4>
                      <p className="text-slate-600">Automatic audio and video transmission to your Circle members for immediate context.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Cloud-Recovery Sync</h4>
                      <p className="text-slate-600">Emergency data is prioritized and synced across all devices instantly.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[3rem] bg-slate-900 overflow-hidden border-[12px] border-slate-800 shadow-2xl relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                    <div className="w-24 h-24 rounded-full bg-red-600 animate-ping absolute opacity-20" />
                    <ShieldAlert size={80} className="text-red-500 mb-6" />
                    <h3 className="text-white text-3xl font-black mb-4 uppercase tracking-tighter">Impact Detected</h3>
                    <p className="text-slate-400">Notifying Emergency Contacts...</p>
                    <div className="mt-8 w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="bg-red-500 h-full w-2/3 animate-pulse" />
                    </div>
                  </div>
                </div>
                {/* Decoration */}
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </FamsentrySiteShell>
  );
}
