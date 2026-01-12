"use client";

import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
};

const navLinks = [
  { label: "Featured", href: "/#featured" },
  { label: "Trending", href: "/#trending" },
  { label: "Puzzles", href: "/#puzzle" },
  { label: "Arcade", href: "/#arcade" },
  { label: "Strategy", href: "/#strategy" },
  { label: "Casual", href: "/#casual" },
];

const utilityLinks = [
  { label: "All Games", href: "#all" },
  { label: "Feedback", href: "mailto:team@example.com" },
  { label: "Support", href: "#support" },
];

export default function MobileSidebar({ open, onClose }: Props) {
  return (
    // only visible on small screens
    <div className={`lg:hidden fixed inset-0 z-40 ${open ? "" : "pointer-events-none"}`}>
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-hidden
      />

      <aside
        className={`absolute left-0 top-0 bottom-0 w-72 transform bg-[#0c1220] bg-linear-to-b from-slate-900/95 to-[#071026]/95 p-6 shadow-xl transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-white">Quick Links</div>
          <button
            aria-label="Close sidebar"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/6 hover:bg-white/10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <nav className="mt-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-3 text-lg font-semibold text-slate-100 hover:bg-white/6"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 border-t border-white/6 pt-4">
          <p className="text-xs uppercase tracking-widest text-indigo-200/80">Portal</p>
          <div className="mt-3 space-y-2">
            {utilityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-100 hover:bg-white/6"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
