"use client";
import { useEffect, useRef } from "react";

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Play the audio automatically once the component mounts
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    audioRef.current.play().catch((error: any) => {
      console.log("Error playing audio:", error);
    });
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="/audio/mozard-sonata.mp3" loop />
    </div>
  );
}
