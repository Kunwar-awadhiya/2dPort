import React, { useRef, useEffect, useState } from "react";

const EarthCanvas = ({ imageUrl }) => {
  const canvasRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false); // Track if image is loaded

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = 300;
    canvas.height = 300;

    const image = new Image();
    image.src = imageUrl;

    // Set up the event listener for when the image is loaded
    image.onload = () => {
      setImageLoaded(true); // Mark image as loaded
      // Clear the canvas before drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw a circular clipping mask
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      // Draw image into the circular clipped area
      ctx.drawImage(
        image,
        canvas.width / 2 - 120, // Position image to center
        canvas.height / 2 - 120, // Position image to center
        240, // Width of the image
        240  // Height of the image
      );
    };

    // Handle errors in loading the image
    image.onerror = () => {
      console.error("Error loading image.");
    };
  }, [imageUrl]);

  return (
    <div className="w-[300px] h-[300px] flex justify-center items-center">
      
      <canvas ref={canvasRef} width={300} height={300} />
    </div>
  );
};

export default EarthCanvas;
