
"use client";

import HighlightBanner from "./components/HighlightBanner";
import GameCarousel from "./components/GameCarousel";
import GameList from "./components/GameList";
import Sidebar from "./components/Sidebar";
import { games } from "./data/games";
import { Footer_on_page } from "./components/Footeronpage";
import Navbar from "./components/Navbar";
import MobileSidebar from "./components/MobileSidebar";
import { useState } from "react";

export default function Home() {
  const featured = games.slice(0, 2);
  const trending = games;

  const puzzleGames = games.filter((game) => game.categories.includes("puzzle"));
  const arcadeGames = games.filter((game) => game.categories.includes("arcade"));
  const strategyGames = games.filter((game) =>
    game.categories.includes("strategy"),
  );
  const casualGames = games.filter((game) => game.categories.includes("casual"));

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
  <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 px-0 pb-1 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.2),transparent_35%),radial-gradient(circle_at_80%_0,rgba(236,72,153,0.12),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.12),transparent_32%)]" />
    <Navbar onOpenSidebar={() => setMobileSidebarOpen(true)} />
    <MobileSidebar open={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />

  <main className="relative z-10 w-full overflow-x-hidden pt-24 flex-1">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="flex w-full flex-col lg:flex-row justify-center items-start gap-8">
        <Sidebar />

        <div className="w-full max-w-4xl">
          <div className="space-y-12">
            <header className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-200/80">
                Game Portal
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Play Instantly. No Installs Required.
              </h1>
              <p className="max-w-2xl text-lg text-slate-200/90">
                A curated shelf of lightweight web games. Explore featured picks,
                browse by category, or jump straight into what is trending.
              </p>
            </header>

            <HighlightBanner featured={featured} />

            <GameCarousel
              id="trending"
              title="Trending now"
              description="Players are diving into these right now."
              games={trending}
            />

            <GameCarousel
              id="puzzle"
              title="Puzzle"
              description="Thinky challenges and tile sliders."
              games={puzzleGames}
            />

            <GameCarousel
              id="arcade"
              title="Arcade"
              description="Fast reflex, fast rounds."
              games={arcadeGames}
            />

            <GameCarousel
              id="strategy"
              title="Strategy"
              description="Plan ahead and outsmart the board."
              games={strategyGames}
            />

            <GameCarousel
              id="casual"
              title="Casual"
              description="Pick up, play, and relax."
              games={casualGames}
            />

        
            
          

            <section id="all" className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-indigo-200/80">
                  All games
                </p>
                <p className="text-sm text-slate-200/80">
                  Browse everything in one place with quick filters.
                </p>
              </div>
              <GameList games={games} />
            </section>
            
          </div>
        </div>
      </div>
    </div>
  </main>
      <div className="relative   ">
        <Footer_on_page />
      </div>

    </div>
    
  );
}
