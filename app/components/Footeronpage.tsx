import Link from "next/link"
import { Github, Twitter, Mail, Instagram, Linkedin, Send } from "lucide-react"
import Image from "next/image"

export function Footer_on_page() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0f0f13] relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF007F]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7F00FF]/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-12 flex items-center justify-center p-1 group-hover:scale-110 transition-transform duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src="/s-logo.png"
                    alt="snappgames"
                    fill
                    className="object-contain drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]"
                  />
                </div>
              </div>
              <span className="text-3xl font-black tracking-tight flex items-center">
                <span className="text-white drop-shadow-sm pb-1">SNAPP</span>
                <span className="text-[#a800ff] drop-shadow-[0_0_8px_rgba(168,0,255,0.4)] transition-all pb-1">
                  GAMES
                </span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Transforming the digital landscape with premium HTML5 gaming experiences. Play instantly, anywhere, on any device.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50 transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-[#E1306C]/20 hover:text-[#E1306C] hover:border-[#E1306C]/50 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-[#0077B5]/20 hover:text-[#0077B5] hover:border-[#0077B5]/50 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-white/20 hover:text-white transition-all duration-300">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF007F] drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">Navigation</h3>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm text-slate-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2"><span className="h-px w-3 bg-slate-700"></span>Home</Link>
              <Link href="/games" className="text-sm text-slate-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2"><span className="h-px w-3 bg-slate-700"></span>All Games</Link>
              <Link href="/#trending" className="text-sm text-slate-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2"><span className="h-px w-3 bg-slate-700"></span>Trending</Link>
              <Link href="/#featured" className="text-sm text-slate-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2"><span className="h-px w-3 bg-slate-700"></span>Featured</Link>
            </nav>
          </div>

          {/* Legal & Support */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#7F00FF] drop-shadow-[0_0_8px_rgba(127,0,255,0.5)]">Legal</h3>
            <nav className="flex flex-col gap-4">
              <Link href="/privacy" className="text-sm text-slate-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2"><span className="h-px w-3 bg-slate-700"></span>Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-slate-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2"><span className="h-px w-3 bg-slate-700"></span>Terms of Service</Link>
              <Link href="/enquire" className="text-sm text-slate-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2"><span className="h-px w-3 bg-slate-700"></span>Business Enquiries</Link>
              <Link href="mailto:support@snappgames.com" className="text-sm text-slate-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2"><span className="h-px w-3 bg-slate-700"></span>Support</Link>
            </nav>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Stay Updated</h3>
            <p className="text-sm text-slate-400">Join our newsletter to get latest updates on new games and features.</p>
            <div className="flex gap-2 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                type="email"
                placeholder="Enter email"
                className="w-full rounded-xl border border-white/10 bg-black/40 pl-10 pr-4 py-3 text-sm text-white focus:border-[#7F00FF] focus:ring-1 focus:ring-[#7F00FF] focus:outline-none transition-all"
              />
              <button className="flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FF007F] to-[#7F00FF] px-4 py-3 text-sm font-bold text-white hover:opacity-90 shadow-[0_0_15px_rgba(127,0,255,0.4)] transition-all hover:scale-105 active:scale-95">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} SnappGames. Engineered with heart in India.
          </p>
          <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <div className="relative flex h-3 w-3 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </div>
            <p className="text-sm font-medium text-slate-300">All systems operational</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
