import { MapPin, Shield, User } from "lucide-react";
import {
  bottomActionIcons,
  featureCards,
  homePointIcon as HomePointIcon,
  homeValuePoints,
  valuePropCards,
} from "./data";
import FeatureCard from "./feature-card";
import SectionHeading from "./section-heading";
import type { FamsentryPageId } from "./types";
import styles from "./home-page.module.css";

type HomePageProps = {
  onSelectPage: (page: FamsentryPageId) => void;
};

export default function HomePage({ onSelectPage }: HomePageProps) {
  return (
    <>
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pt-12 pb-20 md:pt-24 md:pb-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="z-10 text-center md:text-left">
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
              FamSentry is a privacy-first family safety platform that gives you
              real-time location, alerts, and tracking without relying on
              third-party map providers or ad-based data systems.
            </p>
            <div
              className={`${styles.fadeUp} flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start`}
              style={{ animationDelay: "0.3s" }}
            >
              <button
                type="button"
                className="w-full rounded-xl bg-blue-600 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 hover:bg-blue-700 sm:w-auto"
              >
                Start Free
              </button>
              <button
                type="button"
                onClick={() => onSelectPage("features")}
                className="w-full rounded-xl border border-slate-200 bg-white px-10 py-4 text-lg font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-1 hover:bg-slate-50 sm:w-auto"
              >
                See How It Works
              </button>
            </div>
          </div>

          <div className="relative flex h-[500px] items-center justify-center md:h-[650px]">
            <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible">
              <path
                d="M 150,150 Q 250,50 450,150"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                strokeDasharray="8,8"
                strokeDashoffset="100"
                className={styles.pathOne}
              />
              <path
                d="M 50,450 Q 200,350 400,450"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                strokeDasharray="8,8"
                strokeDashoffset="200"
                className={styles.pathTwo}
              />
            </svg>

            <div className={`${styles.drift} absolute top-1/2 left-1/4 z-30`}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="#ef4444"
                className="drop-shadow-lg"
              >
                <path
                  d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div
              className={`${styles.float} absolute top-[10%] right-[10%] z-40`}
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex min-w-[160px] items-center gap-3 rounded-2xl border border-white bg-white/95 p-3 shadow-xl backdrop-blur-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-[10px] font-bold text-white">
                  SIS
                </div>
                <div>
                  <p className="text-xs leading-none font-bold text-slate-800">
                    Sis
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Leaving now! - 09:30
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${styles.float} absolute top-[25%] left-[5%] z-40`}
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex min-w-[160px] items-center gap-3 rounded-2xl border border-white bg-white/95 p-3 shadow-xl backdrop-blur-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                  DAD
                </div>
                <div>
                  <p className="text-xs leading-none font-bold text-slate-800">
                    Dad
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Ok done!! - 08:15
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative z-20 rotate-3 transform transition-transform duration-700 hover:rotate-0">
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-[400px] w-[400px] opacity-10 transition-transform duration-1000 group-hover:scale-105">
                <svg viewBox="0 0 200 200" fill="currentColor" className="text-slate-900">
                  <path d="M150,150 Q130,120 110,130 Q90,140 80,120 Q70,100 90,80 Q110,60 130,70 Q150,80 160,110 Z" />
                </svg>
              </div>

              <div className="relative h-[580px] w-[280px] overflow-hidden rounded-[3.5rem] border-[6px] border-white bg-blue-600 p-3 shadow-[0_50px_100px_-20px_rgba(37,99,235,0.3)]">
                <div className="relative h-full w-full overflow-hidden rounded-[2.8rem] bg-white shadow-inner">
                  <div className="absolute top-0 flex w-full items-center justify-between p-4 text-[10px] font-black text-slate-300">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <div className="h-2 w-4 rounded-sm bg-slate-200" />
                      <Shield size={10} className="text-blue-200" />
                    </div>
                  </div>

                  <div className="relative mt-12 h-[340px] overflow-hidden bg-blue-50/50">
                    <div className="absolute inset-0 opacity-10">
                      <svg width="100%" height="100%">
                        <pattern
                          id="grid"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 20 0 L 0 0 0 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                          />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-20" />
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-blue-600 shadow-lg">
                          <User size={24} />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-1/4 right-1/4 animate-bounce">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-red-500 text-white shadow-md">
                        <MapPin size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 w-full border-t border-slate-100 bg-white/90 p-4 backdrop-blur-md">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-blue-600">
                        <Shield size={20} />
                      </div>
                      <div>
                        <p className="text-xs leading-none font-bold text-slate-800">
                          Privacy Shield
                        </p>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-green-500">
                          Active &amp; Secure
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {bottomActionIcons.map((Icon) => (
                        <div
                          key={Icon.displayName ?? Icon.name}
                          className="flex aspect-square items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors hover:text-blue-600"
                        >
                          <Icon size={16} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${styles.float} absolute right-[-1rem] bottom-10 z-30 md:right-[-2.5rem]`}
              style={{ animationDelay: "1.8s" }}
            >
              <div className="w-48 rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Team Live
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-slate-100" />
                  <div className="h-2 w-2/3 rounded-full bg-slate-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 px-6 py-24 text-white">
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
                A Smarter Alternative to Traditional Tracking Apps
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-400">
                Most apps like{" "}
                <span className="font-medium text-white">Life360</span> and{" "}
                <span className="font-medium text-white">Google Maps</span>{" "}
                depend on third-party infrastructure and ad-driven models.
                FamSentry is built differently.
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
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {valuePropCards.map(({ icon: Icon, title, description, className }) => (
                <div
                  key={title}
                  className={`rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-colors hover:border-blue-500/50 ${
                    className ?? ""
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

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading subtitle="Everything You Expect - Without the Tradeoffs">
          Built for Everyday Safety
        </SectionHeading>
        <div className="grid gap-8 md:grid-cols-3">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue-600 px-6 py-20 text-center text-white">
        <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Switch to a Private Family Tracking System
          </h2>
          <p className="mb-10 text-lg text-blue-100">
            Start using FamSentry today and move away from traditional tracking
            apps that monetize your privacy.
          </p>
          <button
            type="button"
            onClick={() => onSelectPage("compare")}
            className="rounded-2xl bg-white px-12 py-5 text-xl font-black text-blue-600 shadow-2xl transition-transform hover:scale-105 active:scale-95"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </>
  );
}
