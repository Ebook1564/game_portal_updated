"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import MobileSidebar from "@/app/components/MobileSidebar";
import Sidebar2 from "@/app/components/Sidebar2";
import { Footer_on_page } from "@/app/components/Footeronpage";

export default function GameDetailLayout({ children }: { children: React.ReactNode }) {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.2),transparent_35%),radial-gradient(circle_at_80%_0,rgba(236,72,153,0.12),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.12),transparent_32%)]" />

            <Navbar onOpenSidebar={() => setMobileSidebarOpen(true)} />
            <MobileSidebar open={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />

            <div className="relative flex min-h-screen pt-20">
                <div className="hidden lg:block">
                    <Sidebar2 />
                </div>

                <main className="flex-1 px-4 py-8 md:px-8 lg:px-12 lg:pl-4 overflow-hidden">
                    {children}
                </main>
            </div>

            <Footer_on_page />
        </div>
    );
}
