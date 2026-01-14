"use client";

import { useState } from "react";
import Link from "next/link";

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

const companyLinks =[
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Business Enquiries", href: "/enquire" },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
  // hidden on small screens, sticky within the centered layout on large screens
  <aside className="lg:block z-20 mb-8 h-fit sticky self-start w-56 rounded-3xl border border-white/8 bg-linear-to-b from-slate-900/90 to-[#071026]/80 backdrop-blur-lg shadow-lg transition-all duration-300 lg:sticky lg:top-28">
      {isOpen && (
        <div className="flex flex-col items-center space-y-6 p-6">
          <div className="w-full">
            <p className="text-xs uppercase tracking-widest text-indigo-200/80 pl-1">Quick Links</p>

            <nav className="mt-4 flex w-full flex-col items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block w-full text-center px-2 py-3 text-lg font-semibold text-slate-100 hover:text-indigo-300"
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      setIsOpen(false);
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="w-full border-t border-white/6 pt-4">
            <p className="text-xs uppercase tracking-widest text-indigo-200/80 pl-1">Portal</p>

            <div className="mt-4 flex w-full flex-col items-center space-y-2">
              {utilityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block w-full text-center px-2 py-3 text-base font-medium text-slate-100 hover:text-indigo-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full border-t border-white/6 pt-4">
            <p className="text-xs uppercase tracking-widest text-indigo-200/80 pl-1">Company</p>

            <div className="mt-4 flex w-full flex-col items-center space-y-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block w-full text-center px-2 py-3 text-base font-medium text-slate-100 hover:text-indigo-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
