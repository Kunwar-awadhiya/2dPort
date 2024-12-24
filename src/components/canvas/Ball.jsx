import React, { useEffect, useRef } from "react";

const BallCanvas = ({ icon }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = 150; // Fixed size or customize as needed
    canvas.height = 150;

    const image = new Image();
    image.src = icon;

    image.onload = () => {
      // Draw a circular "ball" with the image inside it
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw circle
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = "#fff8eb"; // Background color
      ctx.fill();

      // Clip image to circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      // Draw the image
      ctx.drawImage(
        image,
        canvas.width / 2 - 60,
        canvas.height / 2 - 60,
        120,
        120
      );
      ctx.restore();
    };
  }, [icon]);

  return (
    <div className="w-[150px] h-[150px] flex justify-center items-center">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default BallCanvas;
