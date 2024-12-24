import React, { useEffect, useState, useRef } from "react";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check screen size for mobile or desktop
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    // Listen for screen size changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size based on mobile or desktop view
    canvas.width = isMobile ? 400 : 600;
    canvas.height = isMobile ? 400 : 600;

    const image = new Image();
    image.src = "./desktop_pc_image.png"; // Path to your image (replace with actual image URL)

    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw image to the center of the canvas
      const x = (canvas.width - image.width) / 2;
      const y = (canvas.height - image.height) / 2;
      ctx.drawImage(image, x, y);
    };

    image.onerror = () => {
      console.error("Error loading the image");
    };
  }, [isMobile]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ComputersCanvas;

