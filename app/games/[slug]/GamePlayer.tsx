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
    scrollYRef.current = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    setScrollLocked(true);
  }, [scrollLocked]);

  const unlockScroll = useCallback(() => {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";

    window.scrollTo(0, scrollYRef.current);
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
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
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
          }}
          className="absolute inset-0 z-20 cursor-pointer"
        />
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
