import Link from "next/link"
import { Github, Twitter, Mail, Instagram, Linkedin } from "lucide-react"

export function Footer_on_page() {
  return (
    <footer className="w-full border-t border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-black text-white italic">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-indigo-400">
                SnappGames
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Transforming the digital landscape with premium HTML5 gaming experiences. Play instantly, anywhere, on any device.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-pink-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-400">Navigation</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all">Home</Link>
              <Link href="/games" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all">All Games</Link>
              <Link href="/#trending" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all">Trending</Link>
              <Link href="/#featured" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all">Featured</Link>
            </nav>
          </div>

          {/* Legal & Support */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-400">Legal</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/privacy" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all">Terms of Service</Link>
              <Link href="/enquire" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all">Business Enquiries</Link>
              <Link href="mailto:support@snappgames.com" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all">Support</Link>
            </nav>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-400">Stay Updated</h3>
            <p className="text-sm text-slate-400">Join our newsletter to get latest updates on new games and features.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full rounded-lg border border-white/5 bg-white/5 px-4 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none transition-colors"
              />
              <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-500 transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SnappGames. Engineered with heart in India.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs text-slate-500">Crafted for Publishers & Players</p>
            <div className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  )
}
