"use client";
import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
    const router = useRouter();
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Thank you for contacting us. We'll get back to you shortly.");
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-20 font-sans">
            <div className="max-w-7xl mx-auto px-6">
                {/* <div className="mb-10 pt-0 md:pt-4">
                    <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold group cursor-pointer">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Go Back
                    </button>
                </div> */}

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Get in <span className="text-blue-600">touch.</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Have questions about our family safety platform? Need help with your plan? Our team is here to help you secure what matters most.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                                    <p className="text-slate-600 mb-1">Our friendly team is here to help.</p>
                                    <a href="mailto:support@famsentry.com" className="text-blue-600 font-semibold hover:underline">support@famsentry.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                                    <p className="text-slate-600 mb-1">Mon-Fri from 8am to 5pm.</p>
                                    <a href="tel:+18005550199" className="text-blue-600 font-semibold hover:underline">+1 (800) 555-0199</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Office</h3>
                                    <p className="text-slate-600 mb-1">Come say hello at our HQ.</p>
                                    <span className="text-slate-800 font-semibold">Office #9100 Southwest Fwy<br />Houston, TX 77074, USA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>

                        {status ? (
                            <div className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 mb-6 font-medium text-center">
                                {status}
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name</label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors text-slate-700"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="billing">Billing Question</option>
                                        <option value="enterprise">Enterprise/Organization Sales</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    Send Message <Send className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <section className="mt-20 rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                        Why Families Contact FamSentry
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Parents usually reach out to us when they realize traditional tracking apps are selling their children&apos;s location data to third-party brokers. They need a secure alternative that offers the same real-time visibility without compromising privacy. Our team helps families migrate to our zero-knowledge infrastructure easily.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We also work with larger organizations, schools, and care groups that need reliable location intelligence at scale. Whether you need custom geofencing solutions or bulk deployment for a team, our enterprise support can help design a rollout path that fits your requirements.
                            </p>
                        </div>
                        <div>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                A good first conversation includes your family&apos;s specific needs, the devices you use, and any privacy concerns you might have. From there, we can guide you on setting up Ghost-Sync offline tracking, configuring smart alerts, and managing your 365-day location archive securely.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2">Typical Response Topics:</h4>
                                <ul className="text-sm text-slate-600 space-y-2">
                                    <li>• Account setup and device pairing</li>
                                    <li>• Upgrading to Premium or Diamond</li>
                                    <li>• Managing location history and privacy settings</li>
                                    <li>• Enterprise and group licensing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
