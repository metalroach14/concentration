"use client";
import AudioPlayer from "@/components/AudioPlayer";
import ImageGallery from "@/components/ImageGallery";
import { useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center pt-6">
        <button
          className="rounded-full border border-solid border-transparent
            transition-colors flex items-center justify-center bg-foreground
            text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc]
            text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "Stop" : "Play →"}
        </button>
      </div>
      <main className="overflow-hidden min-h-40">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {isPlaying && (
            <div>
              <ImageGallery />
              <AudioPlayer />
            </div>
          )}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <span> &copy; Toma Tomov</span>
      </footer>
    </>
  );
}
