"use client";

import { useState } from "react";

type Props = {
  title: string;
  slug: string;
};

export default function GameShareButton({ title, slug }: Props) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = `${window.location.origin}/games/${slug}`;

    if ((navigator as any).share) {
      try {
        await (navigator as any).share({ title, url });
      } catch (e) {
        // user cancelled or not supported
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (e) {
      // fallback: open new window to let user copy
      window.open(url, "_blank");
    }
  };

  return (
    <button
      onClick={share}
      className="w-full py-3 px-4 bg-white text-black font-bold rounded-xl transition-transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
    >
      <span>{copied ? "Link copied!" : "Share Game"}</span>
      <span className="text-sm text-black/60">{copied ? "✔" : "🔗"}</span>
    </button>
  );
}
