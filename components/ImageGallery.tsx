"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ImageGallery = () => {
  const images = [
    "/images/visual-stimulation-01.jpg",
    "/images/visual-stimulation-02.jpg",
    "/images/visual-stimulation-03.jpg",
    "/images/visual-stimulation-04.jpg",
    "/images/visual-stimulation-05.jpg",
    "/images/visual-stimulation-06.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(images.length - 1); // Initialize currentIndex to the last image

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [images.length]);

  return (
    <div className=" w-full h-autobg-cover bg-center bg-no-repeat  mx-auto overflow-hidden flex justify-center items-center">
      <Image
        key={images[currentIndex]}
        src={images[currentIndex]}
        alt="Gallery Image"
        width={1200}
        height={1700}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ImageGallery;
