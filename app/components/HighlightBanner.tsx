import type { Game } from "../data/games";
import GameTile from "./GameTile";

type Props = {
  featured: Game[];
};

export default function HighlightBanner({ featured }: Props) {
  return (
    <section
      id="featured"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-r from-indigo-600/70 via-indigo-500/60 to-purple-500/60 p-6 shadow-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_0,rgba(255,255,255,0.12),transparent_35%)]" />
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row">
        <div className="flex-1 space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-indigo-50/80">
            Spotlight
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Dive into featured picks curated for quick fun.
          </h2>
          <p className="text-indigo-50/90">
            Shortlisted games with great replayability. Jump straight in or
            explore more from the portal below.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
          {featured.map((game) => (
            <GameTile key={game.slug} game={game} size="lg" />
          ))}
        </div>
      </div>
    </section>
  );
}


