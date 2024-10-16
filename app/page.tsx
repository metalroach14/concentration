"use client";
import AudioPlayer from "@/components/AudioPlayer";
import ImageGallery from "@/components/ImageGallery";
import useKeepAwake from "@/hooks/useKeepAwake";
import { useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [changeAfterSeconds, setChangeAfterSeconds] = useState(6);
  useKeepAwake(isPlaying);
  return (
    <>
      <div className="flex justify-center gap-4 items-center pt-4">
        {isPlaying && (
          <div className="flex items-start gap-1 justify-start">
            <button
              className="rounded-full border border-solid border-transparent
                transition-colors flex items-center justify-center bg-foreground
                text-background gap-2 
              text-base h-10 sm:h-12 px-4 sm:px-5 w-3/8"
              onClick={() => setChangeAfterSeconds(changeAfterSeconds + 1)}
            >
              +
            </button>
            <input
              type="number"
              value={changeAfterSeconds}
              onChange={(e) => setChangeAfterSeconds(Number(e.target.value))}
              className="w-16 text-center text-black h-10 sm:h-12 px-4 sm:px-5 border border-solid border-gray-300 rounded-md"
            />
            <button
              className="rounded-full 
              transition-colors flex items-center justify-center bg-foreground
              text-background gap-2  
            text-base h-10 sm:h-12 px-4 sm:px-5 w-3/8 focus:ring-blue-500 focus:border-blue-500"
              onClick={() =>
                setChangeAfterSeconds(Math.max(1, changeAfterSeconds - 1))
              }
            >
              -
            </button>
          </div>
        )}
        <div className="flex justify-center items-center gap-4">
          <button
            className="rounded-full border border-solid border-transparent
            transition-colors flex items-center justify-center bg-foreground
            text-background gap-2 
            text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? "Stop" : "Play →"}
          </button>
        </div>
      </div>

      <main className="overflow-hidden min-h-40">
        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
          {isPlaying && (
            <div>
              <ImageGallery changeAfterSeconds={changeAfterSeconds} />
              <AudioPlayer />
            </div>
          )}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 pt-10 pb-4 flex-wrap items-center justify-center">
        <span> &copy; Toma Tomov</span>
      </footer>
    </>
  );
}
