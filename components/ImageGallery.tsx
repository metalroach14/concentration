"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  changeAfterSeconds: number;
}

const images = [
  "/images/visual-stimulation-01.jpg",
  "/images/visual-stimulation-02.jpg",
  "/images/visual-stimulation-03.jpg",
  "/images/visual-stimulation-04.jpg",
  "/images/visual-stimulation-05.jpg",
  "/images/visual-stimulation-06.jpg",
];

const ImageGallery = ({ changeAfterSeconds = 6 }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(images.length - 1);
  const [opacity, setOpacity] = useState(1); // State to manage opacity

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setOpacity(0); // Decrease opacity for fade out

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Change image
        // Delay a bit before gradually setting opacity back to 1 for the new image fade-in
        setTimeout(() => {
          setOpacity(1); // Slowly fade in the new image
        }, 500); // Small delay to ensure the new image is rendered before fading in
      }, 500); // Match this with fade-out duration
    }, changeAfterSeconds * 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [images.length, changeAfterSeconds]);

  return (
    <div className="w-full h-auto bg-cover bg-center bg-no-repeat mx-auto overflow-hidden flex justify-center items-center">
      <Image
        key={images[currentIndex]}
        src={images[currentIndex]}
        alt="Gallery Image"
        width={1200}
        height={1700}
        className={`object-cover transition-opacity duration-300 ease-in-out`}
        style={{ opacity }} // Control opacity based on state
      />
    </div>
  );
};

export default ImageGallery;
