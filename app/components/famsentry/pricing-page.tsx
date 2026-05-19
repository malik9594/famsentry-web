"use client";
import React from 'react';
import { Check, ArrowLeft, ArrowRight, Shield, Target, Crown, Navigation } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface PricingCardProps {
    title: string;
    price: string;
    highlightedText: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    icon: React.ElementType;
}

const PricingCard = ({ title, price, highlightedText, description, features, highlighted = false, icon: Icon }: PricingCardProps) => (
    <article className={`p-8 rounded-[32px] border transition-all duration-500 h-full flex flex-col relative overflow-hidden group hover:-translate-y-2 ${highlighted ? 'bg-blue-600 text-white border-blue-500 shadow-2xl shadow-blue-600/20 md:-translate-y-4 hover:shadow-[0_20px_60px_rgba(37,99,235,0.4)]' : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300 hover:shadow-xl'}`}>
        {highlighted && (
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400" />
        )}

        <header className="mb-6 flex items-start justify-between relative z-10">
            <div>
                <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                <p className={`text-sm italic ${highlighted ? 'text-blue-100' : 'text-slate-500'}`}>{description}</p>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${highlighted ? 'bg-white/20 text-white' : 'bg-slate-100 text-blue-600'}`}>
                <Icon className="w-5 h-5" />
            </div>
        </header>

        <div className="mb-8 relative z-10">
            <div className="flex items-baseline gap-1 mb-3 mt-4">
                <span className={`text-5xl font-black tracking-tight drop-shadow-sm ${highlighted ? 'text-white' : 'text-slate-900'}`}>{price}</span>
                {price !== 'Custom' && <span className={`font-medium ${highlighted ? 'text-blue-200' : 'text-slate-500'}`}>/mo</span>}
            </div>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest ${highlighted ? 'bg-white/20 text-white border border-white/20' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                {highlightedText}
            </div>
        </div>

        <ul className="space-y-4 mb-10 flex-grow relative z-10" aria-label={`Features included in ${title} plan`}>
            {features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm group/item">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${highlighted ? 'text-white' : 'text-blue-600'}`} />
                    <span className={`transition-colors ${highlighted ? 'text-blue-50' : 'text-slate-600'}`}>{feature}</span>
                </li>
            ))}
        </ul>

        <footer className="mt-auto relative z-10">
            <Link
                href={title === 'Diamond' ? '/plans/diamond' : '#'}
                prefetch={false}
                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group/btn ${highlighted ? 'bg-white text-blue-600 hover:bg-slate-100 shadow-lg' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
                aria-label={`Get started with the ${title} plan`}
            >
                {price === 'Custom' ? 'Contact Us' : 'Get Started'}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
        </footer>
    </article>
);

export default function PricingPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-20 overflow-x-hidden font-sans">
            <div className="max-w-7xl mx-auto px-6">
                <header className="mb-16 text-center max-w-3xl mx-auto">
                    {/* <div className="pt-0 md:pt-4 mb-10 text-left">
                        <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold group cursor-pointer">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Go Back
                        </button>
                    </div> */}

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-6">
                        <Shield className="w-3.5 h-3.5" /> Family Safety Plans
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900 leading-tight">
                        Protect your family. <br />
                        <span className="text-blue-600">Secure your data.</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed">
                        No hidden fees. No data selling. Just absolute peace of mind with our transparent, privacy-first family safety plans.
                    </p>
                </header>

                <section className="mb-20" aria-labelledby="pricing-plans-heading">
                    <h2 id="pricing-plans-heading" className="sr-only">Our Pricing Plans</h2>
                    {/* <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"> */}
                    <div className="grid md:grid-cols-1 justify-items-center gap-6 lg:gap-8 max-w-6xl mx-auto">

                        {/* <PricingCard
                            title="Basic"
                            price="$0"
                            highlightedText="Essential Family Safety"
                            description="Perfect for keeping track of your loved ones."
                            icon={Navigation}
                            features={["Real-time Location Sharing", "2 Days Location History", "2 Safe Zones (Geofences)", "SOS Emergency Alerts", "Battery Monitoring"]}
                        /> */}
                        {/* <PricingCard
                            title="Premium"
                            price="$9.99"
                            highlightedText="Most Popular"
                            description="Advanced features for active families."
                            icon={Target}
                            features={["30 Days Location History", "Unlimited Safe Zones", "Crime & Safety Reports", "Basic Driving Analytics", "Individual Speed Alerts", "Priority Sync"]}
                        /> */}
                        {/* <PricingCard
                            title="Diamond"
                            price="$19.99"
                            highlightedText="Ultimate Protection"
                            description="The absolute best in family safety technology."
                            icon={Crown}
                            highlighted={true}
                            features={["365 Days Location History", "ImpactGuard™ Crash Detection", "DriveSentry™ Advanced Analytics", "Ghost-Sync Offline Tracking", "Priority Server Routing", "24/7 Priority Support"]}
                        /> */}
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
                </section>

                <section className="mb-16">
                    <div className="bg-slate-900 rounded-[40px] p-10 md:p-16 relative overflow-hidden text-center text-white">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6">Need a custom plan for a larger organization?</h2>
                            <p className="text-lg text-slate-400 mb-10">We offer specialized solutions for extended families, groups, and enterprises that require private location infrastructure.</p>
                            <Link href="/contact-us" prefetch={false} className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 font-extrabold rounded-2xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-xl">
                                Contact Us <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
