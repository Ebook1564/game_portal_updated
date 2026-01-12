"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { games } from "../../data/games";

export default function GameDetailClient({ game }: any) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const similar = games
    .filter(
      (item) =>
        item.slug !== game.slug &&
        item.categories.some((cat) => game.categories.includes(cat))
    )
    .filter((item) => {
      const matchesQuery = item.title
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchesCategory =
        category === "All" || (item.categories as string[]).includes(category)


      return matchesQuery && matchesCategory;
    })
    .slice(0, 6);

  return (
    <>



      {/* Similar Games */}
      <section className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <div className="mb-6 border-b border-white/10 pb-4">
          <h3 className="text-2xl font-bold text-white">Similar games</h3>
          <p className="mt-1 text-sm text-slate-400">
            Handpicked for you based on your current play.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {similar.map((item) => (
            <Link
              key={item.slug}
              href={`/games/${item.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={item.thumb}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                  {item.title}
                </p>
                <div className="mt-1 flex gap-2 overflow-hidden">
                  {item.categories.slice(0, 2).map((cat) => (
                    <span key={cat} className="text-[10px] uppercase tracking-wider text-slate-400">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-white/20 group-hover:text-white/60 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
