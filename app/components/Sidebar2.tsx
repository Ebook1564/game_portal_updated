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

export default function Sidebar2() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className="
        sticky top-24 z-20 mb-8 hidden lg:block
        h-min w-[180px] shrink-0
        rounded-4xl border border-white/10
        bg-white/5 backdrop-blur
        transition-all duration-300 ml-4
      "
    >
      {isOpen && (
        <div className="space-y-6 p-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-indigo-200/80">
              Quick Links
            </p>

            <nav className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    relative block px-3 py-2 text-sm text-slate-100
                    after:absolute after:left-3 after:bottom-1
                    after:h-[2px] after:w-0 after:bg-indigo-400
                    after:transition-all after:duration-200
                    hover:after:w-[calc(100%-1.5rem)]
                    hover:text-indigo-300
                  "
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

          <div className="border-t border-white/10 pt-4">
            <p className="text-xs uppercase tracking-[0.28em] text-indigo-200/80">
              Portal
            </p>

            <div className="mt-3 space-y-2">
              {utilityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    relative block px-3 py-2 text-sm text-slate-100
                    after:absolute after:left-3 after:bottom-1
                    after:h-[2px] after:w-0 after:bg-indigo-400
                    after:transition-all after:duration-200
                    hover:after:w-[calc(100%-1.5rem)]
                    hover:text-indigo-300
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="text-xs uppercase tracking-[0.28em] text-indigo-200/80">
              Company
            </p>

            <div className="mt-3 space-y-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    relative block px-3 py-2 text-sm text-slate-100
                    after:absolute after:left-3 after:bottom-1
                    after:h-[2px] after:w-0 after:bg-indigo-400
                    after:transition-all after:duration-200
                    hover:after:w-[calc(100%-1.5rem)]
                    hover:text-indigo-300
                  "
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
