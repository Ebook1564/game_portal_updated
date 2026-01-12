"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import MobileSidebar from "@/app/components/MobileSidebar";
import { Footer_on_page } from "@/app/components/Footeronpage";

export default function TermsPage() {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.1),transparent_35%)]" />

            <Navbar onOpenSidebar={() => setMobileSidebarOpen(true)} />
            <MobileSidebar open={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />

            <main className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-32">
                <div className="space-y-4 mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">Legal Framework</p>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight">Terms of Service</h1>
                    <p className="text-slate-400">Last updated: January 12, 2026</p>
                </div>

                <div className="space-y-12 rounded-3xl border border-white/5 bg-white/5 p-8 md:p-12 backdrop-blur-xl leading-relaxed text-slate-300">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using SnappGames (the "Service"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. Description of Service</h2>
                        <p>
                            SnappGames is a platform providing access to HTML5 games. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time without notice.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. User Conduct</h2>
                        <p>You agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Use the Service for any illegal purpose.</li>
                            <li>Attempt to gain unauthorized access to our systems.</li>
                            <li>Modify, adapt, or hack the Service.</li>
                            <li>Transmit any worms, viruses, or any code of a destructive nature.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. Intellectual Property</h2>
                        <p>
                            All content on the Service, including games, text, graphics, and logos, is the property of SnappGames or its content suppliers and is protected by intellectual property laws.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Limitation of Liability</h2>
                        <p>
                            SnappGames shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Service.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">6. Governing Law</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section className="space-y-4 pt-8 border-t border-white/5">
                        <p className="text-sm">
                            If you have any questions about these Terms, please contact us at <strong className="text-indigo-400">legal@snappgames.com</strong>
                        </p>
                    </section>
                </div>
            </main>

            <Footer_on_page />
        </div>
    );
}
