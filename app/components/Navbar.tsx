"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { games, type Game } from "../data/games"; // Adjust path

export default function Navbar({ onOpenSidebar }: { onOpenSidebar?: () => void }) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Game[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter games
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = games.filter((game) =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.categories.some((cat) =>
        cat.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      game.slug.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 6);

    setSearchResults(results);
    setShowResults(results.length > 0);
  }, [searchQuery]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
        setIsMobileSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowResults(false);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    if (!isMobileSearchOpen) {
      setSearchQuery("");
      setShowResults(false);
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="glass-gradient">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenSidebar?.()}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/6 hover:bg-white/10"
                aria-label="Open sidebar"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <Link href="/" className="flex items-center gap-3 flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 shadow-md">
                  <span className="text-xl font-black text-white italic">S</span>
                </div>
                <span className="text-xl font-bold text-white tracking-wide hidden sm:inline">snappgames</span>
              </Link>

          </div>  
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Mobile: Search Icon Only */}
              <button
                onClick={toggleMobileSearch}
                className="md:hidden flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 shadow-xl transition-all"
                aria-label="Search games"
              >
                <svg className="w-5 h-5 text-slate-300 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Desktop: Full Search Bar */}
              <div className="hidden md:block relative" ref={searchRef}>
                <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all group px-4 py-3 shadow-xl w-64 lg:w-150">
                  <svg className="w-5 h-5 text-slate-300 group-hover:text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search 100+ games..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => searchResults.length > 0 && setShowResults(true)}
                    className="bg-transparent outline-none flex-1 text-sm placeholder-slate-300 text-white"
                    autoComplete="off"
                  />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="ml-2 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-all flex-shrink-0"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Desktop Search Results */}
                {showResults && (
                    <div className="absolute top-full left-0 right-0 mt-2 w-full max-w-[28rem] glass-gradient rounded-2xl shadow-2xl z-50 max-h-96 overflow-hidden animate-in slide-in-from-top-2 duration-200">                    
                    <div className="max-h-96 overflow-y-auto">
                      {searchResults.map((game) => (
                        <Link
                          key={game.uid}
                          href={`/games/${game.slug}`}
                          className="flex items-center gap-3 p-4 hover:bg-white/10 transition-all border-b border-white/5 last:border-b-0 group"
                          onClick={() => setShowResults(false)}
                        >
                          <div className="relative h-14 w-20 flex-shrink-0 rounded-xl overflow-hidden bg-white/5 group-hover:bg-white/10 border border-white/10">
                            <Image
                              src={game.thumb}
                              alt={game.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h5 className="font-semibold text-white truncate mb-1 group-hover:text-indigo-300">
                              {game.title}
                            </h5>
                            <p className="text-sm text-slate-300 line-clamp-2 mb-1">
                              {game.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {game.categories.slice(0, 2).map((cat) => (
                                <span
                                  key={cat}
                                  className="px-2 py-0.5 bg-indigo-500/20 text-xs rounded-full text-indigo-200 border border-indigo-500/30"
                                >
                                  {cat}
                                </span>
                              ))}
                              {game.categories.length > 2 && (
                                <span className="text-xs text-slate-400">+{game.categories.length - 2}</span>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {searchResults.length === 6 && (
                      <div className="p-4 border-t border-white/10 bg-white/3">
                        <Link
                          href={`/search?q=${encodeURIComponent(searchQuery)}`}
                          className="text-sm text-indigo-300 hover:text-indigo-200 font-medium block text-center transition-colors"
                        >
                          View all results
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Play Now Button */}
              <Link 
                href="/games" 
                className="hidden sm:inline-block rounded-2xl bg-gradient-to-r from-indigo-600/90 to-purple-600/90 hover:from-indigo-500 hover:to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 border border-white/10 backdrop-blur-sm whitespace-nowrap"
              >
                Play Now
              </Link>

              {/* Mobile Menu Button */}
              <button
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/6 hover:bg-white/10"
              >
                {open ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Search */}
      {isMobileSearchOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-xl flex items-center justify-center p-4">
          <div ref={searchRef} className="w-full max-w-md relative">
            <div className="flex items-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl px-5 py-4">
              <svg className="w-6 h-6 text-slate-300 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setShowResults(true)}
                className="bg-transparent outline-none flex-1 text-lg placeholder-slate-300 text-white"
                autoComplete="off"
              />
              <button
                onClick={toggleMobileSearch}
                className="text-slate-400 hover:text-white p-1 rounded-xl hover:bg-white/10 transition-all ml-2 flex-shrink-0"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Search Results */}
            {showResults && (
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl max-h-96 overflow-hidden">
                <div className="max-h-96 overflow-y-auto">
                  {searchResults.map((game) => (
                    <Link
                      key={game.uid}
                      href={`/games/${game.slug}`}
                      className="flex items-center gap-4 p-5 hover:bg-white/10 transition-all border-b border-white/5 last:border-b-0 group"
                      onClick={() => {
                        setShowResults(false);
                        setIsMobileSearchOpen(false);
                      }}
                    >
                      <div className="relative h-16 w-24 flex-shrink-0 rounded-xl overflow-hidden bg-white/10 group-hover:bg-white/20 border border-white/10">
                        <Image
                          src={game.thumb}
                          alt={game.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5 className="font-semibold text-white text-lg truncate mb-1 group-hover:text-indigo-300">
                          {game.title}
                        </h5>
                        <p className="text-base text-slate-300 line-clamp-2 mb-2">
                          {game.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {game.categories.slice(0, 2).map((cat) => (
                            <span
                              key={cat}
                              className="px-3 py-1 bg-indigo-500/20 text-sm rounded-full text-indigo-200 border border-indigo-500/30"
                            >
                              {cat}
                            </span>
                          ))}
                          {game.categories.length > 2 && (
                            <span className="text-sm text-slate-400 font-medium">+{game.categories.length - 2}</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {searchResults.length === 6 && (
                  <div className="p-5 border-t border-white/10 bg-white/5">
                    <Link
                      href={`/search?q=${encodeURIComponent(searchQuery)}`}
                      className="text-base text-indigo-300 hover:text-indigo-200 font-semibold block text-center transition-colors"
                      onClick={() => setIsMobileSearchOpen(false)}
                    >
                      View all results
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      <div className={`${open ? "block" : "hidden"} md:hidden border-t border-white/5 bg-black/30 backdrop-blur-md`}>
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <div className="space-y-2">
            <Link href="#trending" className="block px-3 py-2 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/10 backdrop-blur transition-all">Trending</Link>
            <Link href="#puzzle" className="block px-3 py-2 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/10 backdrop-blur transition-all">Puzzle</Link>
            <Link href="#arcade" className="block px-3 py-2 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/10 backdrop-blur transition-all">Arcade</Link>
            <Link href="#strategy" className="block px-3 py-2 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/10 backdrop-blur transition-all">Strategy</Link>
            <Link href="#casual" className="block px-3 py-2 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/10 backdrop-blur transition-all">Casual</Link>
            <Link href="/games" className="block px-3 py-2 rounded-xl text-base font-semibold text-white bg-indigo-600/90 hover:bg-indigo-500 backdrop-blur shadow-lg">Play Now</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
