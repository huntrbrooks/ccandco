"use client";

import { Music, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const MUSIC_SRC = "/Music/White_Linen_Morning.mp3";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function toggleMusic() {
    const audio = audioRef.current;

    if (!audio || hasError) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      audio.volume = 0.32;
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
      setHasError(true);
    }
  }

  return (
    <div className="fixed bottom-20 right-4 z-50 lg:bottom-5 lg:right-5">
      <audio
        ref={audioRef}
        loop
        preload="none"
        src={MUSIC_SRC}
        onError={() => {
          setIsPlaying(false);
          setHasError(true);
        }}
      />
      <Button
        type="button"
        size="sm"
        variant="outline"
        className="gap-2 border-white/70 bg-ivory/90 text-charcoal shadow-2xl backdrop-blur hover:bg-primary hover:text-primary-foreground"
        aria-label={
          hasError
            ? "Background music unavailable"
            : isPlaying
              ? "Pause background music"
              : "Play background music"
        }
        aria-pressed={isPlaying}
        disabled={hasError}
        onClick={toggleMusic}
      >
        <Music className="h-4 w-4" aria-hidden="true" />
        <span>{hasError ? "Music unavailable" : "Music"}</span>
        {isPlaying ? (
          <Volume2 className="h-4 w-4" aria-hidden="true" />
        ) : (
          <VolumeX className="h-4 w-4" aria-hidden="true" />
        )}
      </Button>
    </div>
  );
}
