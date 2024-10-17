import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css"; // Import the CSS file for styles

const images = [
  "/images/visual-stimulation-01.jpg",
  "/images/visual-stimulation-02.jpg",
  "/images/visual-stimulation-03.jpg",
  "/images/visual-stimulation-04.jpg",
  "/images/visual-stimulation-05.jpg",
  "/images/visual-stimulation-06.jpg",
];

const ImageGallery = ({ changeAfterSeconds = 6 }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current image index
  const [rotation, setRotation] = useState(0); // Track rotation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setRotation((prevRotation) => prevRotation - 90); // Rotate by 90 degrees
    }, changeAfterSeconds * 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [changeAfterSeconds]);

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.cube}
        style={{ transform: `rotateY(${rotation}deg)` }} // Rotate based on state
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.face} ${
              index === currentIndex ? styles.active : ""
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
