 "use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Game } from "../data/games";

type Props = {
  game: Game;
  size?: "sm" | "lg";
};

export default function GameTile({ game, size = "sm" }: Props) {
  const { title, thumb, slug, categories } = game;
  const isLarge = size === "lg";
  const [imageFailed, setImageFailed] = useState(!thumb);

  return (
    <Link
      href={`/games/${slug}`}
      className={`group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl ${
  isLarge ? "min-h-60 md:min-h-70" : "min-h-40 sm:min-h-50"
      }`}
    >
      {imageFailed ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-700 p-6 text-center text-white">
          <span className="text-lg font-semibold">{title}</span>
        </div>
      ) : (
        <Image
          src={thumb}
          alt={title}
          fill
          onError={() => setImageFailed(true)}
          className="object-cover transition duration-500 group-hover:scale-105"
            sizes={isLarge ? "(max-width: 640px) 80vw, 40vw" : "(max-width: 640px) 60vw, 24vw"}
          priority={isLarge}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-indigo-100/80">
          {categories.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-medium text-indigo-50 backdrop-blur"
            >
              {cat}
            </span>
          ))}
        </div>
        <h3 className="mt-2 text-lg font-semibold text-white drop-shadow">
          {title}
        </h3>
      </div>
    </Link>
  );
}


