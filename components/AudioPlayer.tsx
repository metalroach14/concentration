/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Play the audio automatically once the component mounts
    audioRef.current?.play().catch((error: any) => {
      console.log("Error playing audio:", error);
    });
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="/audio/mozard-sonata.mp3" loop />
    </div>
  );
}
