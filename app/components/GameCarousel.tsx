"use client";

import { useEffect, useRef, useState } from "react";
import type { Game } from "../data/games";
import GameTile from "./GameTile";

type Props = {
  id: string;
  title: string;
  description?: string;
  games: Game[];
};

const SCROLL_STEP = 320;

export default function GameCarousel({ id, title, description, games }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    const el = trackRef.current;
    if (!el) return;
    
    const hasOverflow = el.scrollWidth > el.clientWidth;
    setCanScrollLeft(hasOverflow && el.scrollLeft > 0);
    setCanScrollRight(
      hasOverflow && el.scrollLeft < el.scrollWidth - el.clientWidth - 1,
    );
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Initial check after a short delay to allow images to load
    const timeoutId = setTimeout(checkScrollability, 100);
    checkScrollability();
    
    el.addEventListener("scroll", checkScrollability);

    const resizeObserver = new ResizeObserver(() => {
      // Small delay to ensure layout has settled
      setTimeout(checkScrollability, 50);
    });
    resizeObserver.observe(el);

    // Also observe the parent container for size changes
    if (el.parentElement) {
      resizeObserver.observe(el.parentElement);
    }

    // Check again after images load
    const images = el.querySelectorAll("img");
    let loadedCount = 0;
    const checkAfterImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length || images.length === 0) {
        setTimeout(checkScrollability, 100);
      }
    };
    
    images.forEach((img) => {
      if (img.complete) {
        checkAfterImageLoad();
      } else {
        img.addEventListener("load", checkAfterImageLoad);
        img.addEventListener("error", checkAfterImageLoad);
      }
    });

    return () => {
      clearTimeout(timeoutId);
      el.removeEventListener("scroll", checkScrollability);
      resizeObserver.disconnect();
      images.forEach((img) => {
        img.removeEventListener("load", checkAfterImageLoad);
        img.removeEventListener("error", checkAfterImageLoad);
      });
    };
  }, [games]);

  const scrollBy = (delta: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id={id} className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.26em] text-indigo-200/80">
            {title}
          </p>
          {description ? (
            <p className="truncate text-sm text-slate-200/80">{description}</p>
          ) : null}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-SCROLL_STEP)}
            disabled={!canScrollLeft}
            className={`rounded-full border border-white/15 px-3 py-1 text-sm font-semibold text-white transition hover:border-transparent hover:bg-white/10 ${
              !canScrollLeft ? "opacity-30 cursor-not-allowed" : ""
            }`}
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy(SCROLL_STEP)}
            disabled={!canScrollRight}
            className={`rounded-full border border-white/15 px-3 py-1 text-sm font-semibold text-white transition hover:border-transparent hover:bg-white/10 ${
              !canScrollRight ? "opacity-30 cursor-not-allowed" : ""
            }`}
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="hide-scrollbar flex w-full min-w-0 flex-nowrap gap-4 overflow-x-auto pb-2"
        >
          {games.map((game) => (
            <div
              key={game.slug}
              className="flex-none w-48 sm:w-56 md:w-60 lg:w-64"
            >
              <GameTile game={game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
