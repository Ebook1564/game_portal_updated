"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar({ onOpenSidebar }: { onOpenSidebar?: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-30">
      <div className="backdrop-blur-md bg-linear-to-r from-black/40 via-transparent to-black/30 border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              {/* mobile sidebar open button */}
              <button
                type="button"
                onClick={() => onOpenSidebar?.()}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/6 hover:bg-white/10"
                aria-label="Open sidebar"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-pink-500 shadow-md">
                  <span className="text-xl font-black text-white italic">S</span>
                </div>
                <span className="text-xl font-bold text-white tracking-wide">snappgames</span>
              </Link>

              <div className="hidden md:flex md:items-center md:space-x-4">
                <Link href="#trending" className="text-sm font-medium text-slate-200 hover:text-white">Trending</Link>
                <Link href="#puzzle" className="text-sm font-medium text-slate-200 hover:text-white">Puzzle</Link>
                <Link href="#arcade" className="text-sm font-medium text-slate-200 hover:text-white">Arcade</Link>
                <Link href="#strategy" className="text-sm font-medium text-slate-200 hover:text-white">Strategy</Link>
                <Link href="#casual" className="text-sm font-medium text-slate-200 hover:text-white">Casual</Link>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center bg-white/6 hover:bg-white/10 rounded-md px-2 py-1 transition">
                <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21l-4.35-4.35" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="11" cy="11" r="6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input aria-label="Search games" placeholder="Search games..." className="bg-transparent placeholder-slate-200/70 text-sm outline-none w-40" />
              </div>

              <Link href="#all" className="hidden sm:inline-block rounded-md bg-indigo-600/90 hover:bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md">Play Now</Link>

              <button
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/6 hover:bg-white/10"
              >
                {open ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${open ? "block" : "hidden"} md:hidden border-t border-white/5 bg-black/30`}>
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <div className="space-y-2">
              <Link href="#trending" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white">Trending</Link>
              <Link href="#puzzle" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white">Puzzle</Link>
              <Link href="#arcade" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white">Arcade</Link>
              <Link href="#strategy" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white">Strategy</Link>
              <Link href="#casual" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white">Casual</Link>
              <Link href="#all" className="block px-3 py-2 rounded-md text-base font-semibold text-white bg-indigo-600/90">Play Now</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
