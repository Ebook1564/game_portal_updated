"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import MobileSidebar from "@/app/components/MobileSidebar";
import { Footer_on_page } from "@/app/components/Footeronpage";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function EnquirePage() {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setFormStatus("success");
        }, 1500);
    };

    return (
        <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_35%),radial-gradient(circle_at_80%_0,rgba(236,72,153,0.1),transparent_30%)]" />

            <Navbar onOpenSidebar={() => setMobileSidebarOpen(true)} />
            <MobileSidebar open={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />

            <main className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Content Side */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">Collaborate with us</p>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                                Let's Build the <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">Future of Gaming</span> Together.
                            </h1>
                            <p className="text-lg text-slate-400 max-w-md">
                                Whether you're a publisher looking to distribute your game or an advertiser seeking premium placement, we're here to help.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                                <h3 className="font-bold mb-2">Publishers</h3>
                                <p className="text-sm text-slate-400">Get your HTML5 games in front of millions of players worldwide.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                                <h3 className="font-bold mb-2">Advertisers</h3>
                                <p className="text-sm text-slate-400">High-engagement placements in our curated gaming environment.</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-indigo-500 to-pink-500 opacity-20 blur-2xl px-1" />
                        <div className="relative rounded-3xl border border-white/10 bg-slate-900/50 p-8 md:p-10 backdrop-blur-xl shadow-2xl">
                            {formStatus === "success" ? (
                                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                                        <CheckCircle2 className="h-10 w-10" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Message Received!</h2>
                                    <p className="text-slate-400">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => setFormStatus("idle")}
                                        className="mt-6 text-sm font-bold text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                                            <input required type="text" placeholder="John Doe" className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                                            <input required type="email" placeholder="john@example.com" className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none transition-all" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Subject</label>
                                        <select className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none transition-all appearance-none">
                                            <option className="bg-slate-900">Game Publishing</option>
                                            <option className="bg-slate-900">Advertising Inquiry</option>
                                            <option className="bg-slate-900">Partnership Opportunity</option>
                                            <option className="bg-slate-900">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
                                        <textarea required rows={4} placeholder="How can we help you?" className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none transition-all resize-none" />
                                    </div>
                                    <button
                                        disabled={formStatus === "submitting"}
                                        className="group w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 font-bold text-white hover:bg-indigo-500 active:scale-[0.98] transition-all disabled:opacity-50"
                                    >
                                        {formStatus === "submitting" ? (
                                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </main>

            <Footer_on_page />
        </div>
    );
}
