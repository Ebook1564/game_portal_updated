"use client";

import { useRef, useEffect, useState, useCallback } from "react";

type Props = {
  embedUrl: string;
  title: string;
  orientation: "portrait" | "landscape";
};

export default function GamePlayer({ embedUrl, title, orientation }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [scrollLocked, setScrollLocked] = useState(false);
  const [interactionCaptured, setInteractionCaptured] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const scrollYRef = useRef(0);

  /* ---------------- SCROLL LOCK ---------------- */
  const lockScroll = useCallback(() => {
    if (scrollLocked) return;
    document.body.style.overflow = "hidden";
    setScrollLocked(true);
  }, [scrollLocked]);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    setScrollLocked(false);
    setInteractionCaptured(false);
  }, []);

  // Click outside → unlock scroll
  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      if (
        scrollLocked &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        unlockScroll();
      }
    };
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, [scrollLocked, unlockScroll]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* ---------------- FULLSCREEN ---------------- */
  const toggleFullscreen = async () => {
    if (!iframeRef.current) return;

    if (!document.fullscreenElement) {
      await iframeRef.current.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  useEffect(() => {
    const fsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", fsChange);
    return () => document.removeEventListener("fullscreenchange", fsChange);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "f") toggleFullscreen();
      else if (e.code === "AudioVolumeMute") toggleMute();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ---------------- MUTE ---------------- */
  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);

    // Send message to iframe game to mute/unmute
    iframeRef.current?.contentWindow?.postMessage(
      { type: "TOGGLE_MUTE" },
      "*"
    );
  }, []);

  const isPortrait = orientation === "portrait";

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black/70 shadow-xl w-full mx-auto transition-all duration-500 ${isPortrait ? "max-w-[500px]" : "max-w-full"
        }`}
      style={{
        height: isPortrait ? "calc(min(80vh, 700px))" : "auto",
        aspectRatio: isPortrait ? "3 / 4" : "16 / 9",
      }}
    >
      {/* 👇 CLICK CATCHER - lock scroll on first click */}
      {!interactionCaptured && (
        <div
          onPointerDown={() => {
            lockScroll();
            setInteractionCaptured(true);
            containerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center bg-black/20 backdrop-blur-[2px] group"
        >
          <div className="rounded-full bg-indigo-600/90 p-6 shadow-2xl transition-transform group-hover:scale-110">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={embedUrl}
        title={title}
        sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-popups allow-fullscreen"
        className="relative z-10 h-full w-full"
      />

      {/* Controls */}
      <div className="absolute bottom-4 right-4 z-30 flex gap-2">
        <button
          onClick={toggleFullscreen}
          className="h-12 w-12 rounded-2xl bg-black/70 text-white hover:bg-white/20 transition-all"
        >
          ⤢
        </button>

        <button
          onClick={toggleMute}
          className="h-12 w-12 rounded-2xl bg-black/70 text-white hover:bg-white/20 transition-all"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>
    </div>
  );
}
