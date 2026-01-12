import Image from "next/image";
import type { Game } from "../data/games";

type Props = {
  game: Game;
};

export default function GameCard({ game }: Props) {
  const { thumb, title, embedUrl, orientation } = game;
  const isPortrait = orientation === "portrait";

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/70 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl dark:bg-white/5">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={thumb}
          alt={title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(min-width: 1280px) 320px, (min-width: 768px) 45vw, 90vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h3 className="absolute bottom-3 left-4 text-lg font-semibold text-white drop-shadow">
          {title}
        </h3>
      </div>
      <div className="p-4">
        <div
          className={`overflow-hidden rounded-xl border border-white/10 bg-black/80 shadow-inner ${
            isPortrait ? "aspect-[3/4]" : "aspect-video"
          }`}
        >
          <iframe
            src={embedUrl}
            title={title}
            sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-popups"
            className="h-full w-full"
          />
        </div>
      </div>
    </article>
  );
}

