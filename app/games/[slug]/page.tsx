import GameDetailClient from "./GameDetailClient";
import GamePlayer from "./GamePlayer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { games } from "../../data/games";
import GameDetailLayout from "./GameDetailLayout";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export default async function GameDetailPage({ params }: Props) {
  const { slug } = await params;

  const game = games.find((item) => item.slug === slug);

  if (!game) {
    return notFound();
  }

  return (
    <GameDetailLayout>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        {/* HEADER SECTION */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-indigo-400">
              Now Playing
            </p>
            <div className="flex items-center gap-4">
              {game.thumb ? (
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 shadow-2xl">
                  <Image
                    src={game.thumb}
                    alt={game.title}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl font-bold text-white">
                  {game.title.slice(0, 1)}
                </div>
              )}
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {game.title}
                </h1>
                <div className="mt-2 flex flex-wrap gap-2">
                  {game.categories.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-indigo-200/70 border border-white/5"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to portal
          </Link>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]">
          {/* GAME PLAYER SIDE */}
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
              <GamePlayer
                embedUrl={game.embedUrl}
                title={game.title}
                orientation={game.orientation}
              />
            </div>

            {/* ABOUT SECTION - Moved here for better flow on mobile */}
            <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h2 className="mb-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                About this game
              </h2>
              <p className="text-lg leading-relaxed text-slate-300">
                {game.description}
              </p>
            </section>
          </div>

          {/* SIDEBAR SIDE */}
          <div className="flex flex-col gap-8">
            <div className="lg:sticky lg:top-24 space-y-8">
              <GameDetailClient game={game} />

              {/* Optional: Add a call to action or community section here */}
              <div className="rounded-3xl bg-gradient-to-br from-indigo-600/20 to-pink-600/20 p-8 border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Enjoying {game.title}?</h3>
                <p className="text-slate-300 text-sm mb-4">Share it with your friends and compete for the high score!</p>
                <button className="w-full py-3 px-4 bg-white text-black font-bold rounded-xl transition-transform hover:scale-[1.02] active:scale-95">
                  Share Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GameDetailLayout>
  );
}
