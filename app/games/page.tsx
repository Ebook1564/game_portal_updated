"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import MobileSidebar from "@/app/components/MobileSidebar";
import { Footer_on_page } from "@/app/components/Footeronpage";
import GameList from "@/app/components/GameList";
import { games } from "@/app/data/games";
import { Search, Filter } from "lucide-react";

export default function GamesListingPage() {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...Array.from(new Set(games.flatMap(g => g.categories)))];

    const filteredGames = games.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || game.categories.includes(selectedCategory as any);
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_50%)]" />

            <Navbar onOpenSidebar={() => setMobileSidebarOpen(true)} />
            <MobileSidebar open={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />

            <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-32">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="space-y-4">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">The Collection</p>
                        <h1 className="text-5xl font-black tracking-tight uppercase">
                            All <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">Games</span>
                        </h1>
                        <p className="text-slate-400 max-w-md">
                            Discover our hand-picked collection of premium HTML5 games. No downloads, no waiting—just instant play.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        
                    </div>
                </div>

                {/* Categories Bar */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${selectedCategory === cat
                                ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                                : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:border-white/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Game Grid */}
                <div className="min-h-[400px]">
                    {filteredGames.length > 0 ? (
                        <GameList games={filteredGames} />
                    ) : (
                        <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
                            <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center">
                                <Filter className="h-8 w-8 text-slate-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">No games found</h3>
                                <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
                            </div>
                            <button
                                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                                className="text-sm font-bold text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </main>

            <Footer_on_page />
        </div>
    );
}
