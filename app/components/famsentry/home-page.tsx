"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Shield, User, Check, ChevronDown, ArrowRight } from "lucide-react";
import {
  bottomActionIcons,
  featureCards,
  homePointIcon as HomePointIcon,
  homeValuePoints,
  valuePropCards,
  faqItems,
} from "./data";
import FeatureCard from "./feature-card";
import SectionHeading from "./section-heading";
import styles from "./home-page.module.css";

export default function HomePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [loopCount, setLoopCount] = useState<number>(0);

  const allPossibleMembers = ["MOM", "DAD", "SIS", "BRO", "DOG"];
  const memberCount = 3 + (loopCount % 3); // Cycles through 3, 4, 5
  const currentMembers = allPossibleMembers.slice(0, memberCount);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="relative mx-auto max-w-7xl px-6 pt-1 pb-1 md:pt-1 md:pb-5">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="z-5 text-center md:text-left">
            <h1
              className={`${styles.fadeUp} mb-6 text-5xl leading-[1.1] font-extrabold tracking-tight text-[#0f172a] md:text-7xl`}
              style={{ animationDelay: "0.1s" }}
            >
              Family Tracking <br />
              <span className="text-blue-600">Without Data Exposure</span>
            </h1>
            <p
              className={`${styles.fadeUp} mx-auto mb-10 max-w-lg text-lg leading-relaxed text-slate-600 md:mx-0 md:text-xl`}
              style={{ animationDelay: "0.2s" }}
            >
              FamSentry is a high-performance family safety ecosystem. We deliver real-time location intelligence and instant alerts through a private infrastructure, eliminating reliance on third-party map providers and data-mining ad systems. Your family&apos;s movement stays your business.
            </p>
            <div
              className={`${styles.fadeUp} flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start`}
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/compare"
                prefetch={false}
                className="w-full rounded-xl bg-blue-600 px-10 py-4 text-center text-lg font-bold text-white shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 hover:bg-blue-700 sm:w-auto"
              >
                Start Free
              </Link>
              <Link
                href="/features"
                prefetch={false}
                className="w-full rounded-xl border border-slate-200 bg-white px-10 py-4 text-center text-lg font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-1 hover:bg-slate-50 sm:w-auto"
              >
                See How It Works
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center items-center mt-12 md:mt-0">
            {/* Decorative background glow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="group relative z-20 rotate-3 transform transition-all duration-700 hover:rotate-0 hover:scale-[1.02]">
              {/* Phone Shadow Background */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[3.8rem] opacity-20 blur-xl group-hover:opacity-35 transition-opacity" />

              {/* The Phone Mockup Frame */}
              <div className="relative h-[590px] w-[290px] overflow-hidden rounded-[3.5rem] border-[6px] border-white bg-blue-600 p-3 shadow-[0_50px_100px_-20px_rgba(37,99,235,0.35)]">
                {/* Notch / Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 h-5 w-24 bg-black rounded-full z-50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-900/80 ml-auto mr-3 border border-slate-800/40" />
                </div>

                {/* Inner Screen */}
                <div className="relative h-full w-full overflow-hidden rounded-[2.8rem] bg-white shadow-inner flex flex-col">
                  {/* Status Bar */}
                  <div className="absolute top-0 flex w-full items-center justify-between px-6 pt-5 pb-2 text-[10px] font-black text-slate-400 z-40 bg-gradient-to-b from-white via-white/80 to-transparent">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <div className="h-2 w-3.5 rounded-sm bg-slate-300" />
                      <Shield size={10} className="text-blue-500 animate-pulse" />
                    </div>
                  </div>

                  {/* Inside Screen Content (The Map container!) */}
                  <div className="relative flex-1 overflow-hidden bg-slate-50">
                    {/* Map Grid */}
                    <div className="absolute inset-0 opacity-15">
                      <svg width="100%" height="100%">
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path
                            d="M 20 0 L 0 0 0 20"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="0.5"
                          />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>

                    {/* Step 1: Admin Login */}
                    <div
                      className={`${styles.adminLogin} absolute top-14 left-4 right-4 z-40 rounded-2xl bg-white/90 backdrop-blur-md p-3.5 border border-white/20 shadow-xl`}
                      onAnimationIteration={() => setLoopCount((prev) => prev + 1)}
                    >
                      <p className="text-[10px] font-bold uppercase text-black-600">
                        Admin Login
                      </p>
                      <div className="mt-2.5 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-md shadow-blue-500/20">
                          ADM
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800">Admin signed in</p>
                          <p className="text-[10px] font-bold text-green-500">
                            Secure session started
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 2: Register Family */}
                    <div className={`${styles.registerFamily} absolute top-14 left-4 right-4 z-40 rounded-2xl bg-white/90 backdrop-blur-md p-3.5 border border-white/20 shadow-xl`}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-black-600">
                        Register Family
                      </p>
                      <div className="mt-2.5 flex -space-x-2">
                        {currentMembers.map((member) => (
                          <div
                            key={member}
                            className="flex h-8.5 w-8.5 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-[8px] font-black text-white shadow-md shadow-blue-500/20"
                          >
                            {member}
                          </div>
                        ))}
                      </div>
                      <p className="mt-2.5 text-[10px] font-bold text-green-500">
                        {currentMembers.length} members added to family circle
                      </p>
                    </div>

                    {/* Step 3: Map Status */}
                    <div className={`${styles.mapStatus} absolute top-14 left-4 z-30 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 border border-white/20 shadow-md`}>
                      <p className="text-[9px] font-extrabold uppercase tracking-widest text-green-500">
                        Family Live on Map
                      </p>
                    </div>

                    {/* Admin Main Pin */}
                    <div className={`${styles.adminPin} absolute top-[45%] left-[45%] z-30`}>
                      <div className={`${styles.livePulse} flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-[9px] font-black text-white shadow-lg`}>
                        ADM
                      </div>
                    </div>

                    {/* Family Moving Pins */}
                    <div className={`${styles.familyMoveOne} absolute top-[28%] left-[28%] z-30`}>
                      <div className={`${styles.livePulse} flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-[8px] font-black text-white shadow-lg`}>
                        MOM
                      </div>
                    </div>

                    <div className={`${styles.familyMoveTwo} absolute top-[52%] left-[62%] z-30`}>
                      <div className={`${styles.livePulse} flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-[8px] font-black text-white shadow-lg`}>
                        DAD
                      </div>
                    </div>

                    <div className={`${styles.familyMoveThree} absolute top-[68%] left-[32%] z-30`}>
                      <div className={`${styles.livePulse} flex h-9 w-9 items-center justify-center rounded-full bg-purple-500 text-[8px] font-black text-white shadow-lg`}>
                        SIS
                      </div>
                    </div>

                    {currentMembers.includes("BRO") && (
                      <div className={`${styles.familyMoveFour} absolute top-[38%] left-[68%] z-30`}>
                        <div className={`${styles.livePulse} flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-[8px] font-black text-white shadow-lg`}>
                          BRO
                        </div>
                      </div>
                    )}

                    {currentMembers.includes("DOG") && (
                      <div className={`${styles.familyMoveFive} absolute top-[58%] left-[20%] z-30`}>
                        <div className={`${styles.livePulse} flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-[8px] font-black text-white shadow-lg`}>
                          DOG
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Tab */}
                  <div className="border-t border-slate-100 bg-white p-4.5 pb-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-inner animate-pulse">
                        <Shield size={20} className="stroke-[2.5]" />
                      </div>
                      <div>
                        <p className="text-xs leading-none font-extrabold text-slate-800">
                          Privacy Shield
                        </p>
                        <p className="mt-1.5 text-[9px] font-bold uppercase tracking-wider text-green-500">
                          Active &amp; Secure
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {bottomActionIcons.map((Icon) => (
                        <div
                          key={Icon.displayName ?? Icon.name}
                          className="flex aspect-square items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Icon size={16} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card: Sovereign Circle */}
            <div
              className={`${styles.float} absolute right-[-2rem] bottom-12 z-30 hidden sm:block`}
              style={{ animationDelay: "1.8s" }}
            >
              <div className="w-40 rounded-2xl border border-slate-100/80 bg-white/95 backdrop-blur-md p-3 shadow-2xl shadow-blue-500/10">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-500">
                      Sovereign Circle
                    </span>
                  </div>
                  <span className="text-[8px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-extrabold">Active</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400">Secure Links:</span>
                    <span className="font-mono text-slate-600 font-semibold">3 Active</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card: Zero-Trust */}
            <div
              className={`${styles.float} absolute left-[-2.5rem] top-[25%] z-30 hidden lg:block`}
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-40 rounded-2xl border border-slate-100/80 bg-white/95 backdrop-blur-md p-3.5 shadow-2xl shadow-slate-900/5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 shadow-inner">
                    <Shield size={14} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-800 uppercase tracking-tight">Zero-Trust</p>
                    <p className="text-[8px] font-bold text-slate-400">100% Encrypted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 px-6 py-15 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="grid-dark" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-dark)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                A Sovereign Standard for Family Safety
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-400">
                <span className="font-medium text-white">FamSentry</span> is engineered for absolute independence.
                By hosting its own secure mapping infrastructure, FamSentry ensures your family’s location data
                remains private, encrypted, and completely off the grid — giving you peace of mind without
                sacrificing control.
              </p>

              <ul className="space-y-4">
                {homeValuePoints.map((item) => (
                  <li key={item} className="group flex items-center gap-3">
                    <div className="rounded-full bg-blue-500/20 p-1 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                      <HomePointIcon size={24} />
                    </div>
                    <span className="font-medium text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg font-semibold italic text-blue-400">
                You stay in control of your family&apos;s location data at all times.
              </p>
              <div className="mt-8">
                <Link
                  href="/sovereign-choice"
                  prefetch={false}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  View Sovereign Choice
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {valuePropCards.map(({ icon: Icon, title, description, className }) => (
                <div
                  key={title}
                  className={`rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-colors hover:border-blue-500/50 ${className ?? ""
                    }`}
                >
                  <Icon className="mb-3 text-blue-400" size={32} />
                  <h4 className="mb-1 font-bold">{title}</h4>
                  <p className="text-xs text-slate-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionHeading subtitle="Everything You Expect - Without the Tradeoffs">
          Built for Everyday Safety
        </SectionHeading>
        <div className="grid gap-8 md:grid-cols-3">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section id="pricing" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white py-16 px-6 border-t border-slate-100">
        {/* Subtle decorative glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          {/* PRICING HEADER */}
          <div className="text-left mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-6">
              <Shield className="w-3.5 h-3.5 text-blue-600 animate-pulse" /> PRICING PLANS
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Flexible Plans, <span className="text-blue-600">Direct Security.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-2xl">
              Transparent, privacy-first family safety. No hidden tracking. No data selling. Cancel anytime.
            </p>
          </div>

          <div className="w-full">
            <div className="bg-white rounded-[40px] border border-slate-200 p-8 md:p-12 lg:p-16 shadow-2xl shadow-slate-100/50 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] hover:border-slate-300 transition-all duration-700 relative overflow-hidden group">
              {/* Premium Top Gradient Line */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />

              <div className="grid lg:grid-cols-12 gap-12 items-center">

                {/* Left Side: Pricing Info & CTA */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="inline-flex self-start bg-blue-100 text-blue-700 text-xs uppercase font-extrabold px-4 py-1.5 rounded-full tracking-wider mb-6">
                    Premium Safety Tier
                  </span>
                  <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Complete Family Coverage
                  </h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                    Access military-grade private tracking, advanced behavior analytics, and unlimited geofencing.
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-black text-slate-900 tracking-tight">$9.99</span>
                      <span className="text-slate-400 font-medium text-lg">/month</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 font-medium">No binding contracts. Cancel anytime with a single click.</p>
                  </div>

                  <Link
                    href="/pricing"
                    prefetch={false}
                    className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold rounded-2xl text-center shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    Activate Premium Protection
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Divider Line */}
                <div className="hidden lg:block lg:col-span-1 h-72 w-px bg-slate-100 mx-auto" />

                {/* Right Side: Features */}
                <div className="lg:col-span-6">
                  <h4 className="text-xs uppercase font-black tracking-widest text-slate-400 mb-6">
                    What&apos;s Included in Premium
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-4 h-4 font-bold" />
                      </div>
                      <div>
                        <p className="text-slate-800 text-sm font-bold">30-Day Timeline</p>
                        <p className="text-slate-400 text-xs">Full history log of movement.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-4 h-4 font-bold" />
                      </div>
                      <div>
                        <p className="text-slate-800 text-sm font-bold">Unlimited Safe Zones</p>
                        <p className="text-slate-400 text-xs">Instant entry &amp; exit alerts.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-4 h-4 font-bold" />
                      </div>
                      <div>
                        <p className="text-slate-800 text-sm font-bold">Driving Safety Reports</p>
                        <p className="text-slate-400 text-xs">Monitor speed &amp; behaviors.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-4 h-4 font-bold" />
                      </div>
                      <div>
                        <p className="text-slate-800 text-sm font-bold">Crime &amp; Safety Alerts</p>
                        <p className="text-slate-400 text-xs">Real-time local hazard alerts.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-4 h-4 font-bold" />
                      </div>
                      <div>
                        <p className="text-slate-800 text-sm font-bold">Priority Ghost-Sync</p>
                        <p className="text-slate-400 text-xs">Ultra low-latency coordinates.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-4 h-4 font-bold" />
                      </div>
                      <div>
                        <p className="text-slate-800 text-sm font-bold">Cross-Platform Sync</p>
                        <p className="text-slate-400 text-xs">Android &amp; iOS parity.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-8 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                      <Shield className="w-4.5 h-4.5" />
                    </span>
                    <p className="text-slate-500 text-xs leading-normal">
                      <strong>Privacy First:</strong> Location tracking operates strictly on independent mapping endpoints. No third-party Map SDKs can see or access your routes.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <p className="text-center text-slate-500 text-sm mt-12">
            Need custom options for a larger organization or school?{" "}
            <Link href="/contact-us" className="text-blue-600 font-semibold hover:underline">
              Contact Us
            </Link>
          </p>
        </div>
      </section>

      <section id="faq" className="py-16 px-6 mx-auto max-w-7xl border-t border-slate-100 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Side: Header & Context CTA */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-6">
                SUPPORT CENTER
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Frequently Asked <span className="text-blue-600">Questions</span>
              </h2>
            </div>
            <p className="text-slate-500 text-base leading-relaxed">
              Have questions? We have answers. Learn more about how FamSentry protects your family and respects your absolute data privacy.
            </p>

            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4">
              <h4 className="font-bold text-slate-900 text-sm">Still have questions?</h4>
              <p className="text-slate-500 text-xs leading-normal">
                Can&apos;t find the answer you&apos;re looking for? Reach out to our direct support team.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                Contact Support Team
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Side: Interactive Accordions */}
          <div className="lg:col-span-8 space-y-4">
            {faqItems.slice(0, 5).map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                    ? "border-blue-500 bg-white shadow-lg shadow-blue-500/10"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"
                    }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <h3 className={`text-lg md:text-xl font-bold pr-4 transition-colors duration-300 ${isOpen ? "text-blue-600" : "text-slate-900"}`}>
                      {faq.question}
                    </h3>
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                        ? "rotate-180 bg-blue-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-500"
                        }`}
                    >
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-0">
                        <div className="h-px w-full bg-slate-100 mb-6" />
                        <p className="text-base leading-relaxed text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="text-center md:text-left mt-8 pt-4">
              <Link
                href="/faq"
                prefetch={false}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-bold group"
              >
                View All Frequently Asked Questions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section className="relative overflow-hidden bg-blue-600 px-6 py-16 text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Switch to a Private Family Tracking System
          </h2>
          <p className="mb-10 text-lg text-blue-100">
            Start using FamSentry today and move away from traditional tracking
            apps that monetize your privacy.
          </p>
          <Link
            href="/compare"
            prefetch={false}
            className="rounded-2xl bg-white px-12 py-5 text-xl font-black text-blue-600 shadow-2xl transition-transform hover:scale-105 active:scale-95"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  );
}