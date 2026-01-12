/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useMemo, useState } from "react";
import GameTile from "./GameTile";
import type { Game, GameCategory } from "../data/games";

type Props = {
  games: Game[];
};

export default function GameList({ games }: Props) {
  const categories = useMemo(
    () =>
      ["all", ...new Set(games.flatMap((game) => game.categories))] as (
        | "all"
        | GameCategory
      )[],
    [games],
  );

  const [selectedCategory, setSelectedCategory] = useState<"all" | GameCategory>("all");

  const filteredGames =
    selectedCategory === "all"
      ? games
      : games.filter((game) => game.categories.includes(selectedCategory));

  return (
    <section className="w-full space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === selectedCategory;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-transparent bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                  : "border-black/10 bg-white/70 text-black hover:border-transparent hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredGames.map((game) => (
          <GameTile key={game.slug} game={game} />
        ))}
      </div>
    </section>
  );
}

