/*
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
*/



// for disappear

/*
import React, { useEffect, useRef, useState } from "react";

const EarthCanvas = ({ imageUrl }) => {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 300, height: 300 });

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth / 3, // 1/3 of window width for responsiveness
        height: window.innerWidth / 3,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw a circle background
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = "#000"; // Black background
      ctx.fill();

      // Clip the image into a circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      // Draw the image
      ctx.drawImage(
        image,
        canvas.width / 2 - 120,
        canvas.height / 2 - 120,
        240,
        240
      );
      ctx.restore();
    };
  }, [imageUrl, canvasSize]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default EarthCanvas;
*/



// for image fixing 

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


/*
without errors

import React, { useEffect, useRef } from "react";

const EarthCanvas = ({ imageUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = 300; // Customize size as needed
    canvas.height = 300;

    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw a circular background to simulate Earth
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = "#000"; // Background color
      ctx.fill();

      // Simulate shading for a 3D effect by applying a radial gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        120
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.3)"); // Light effect
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.6)"); // Shadow effect

      ctx.save();
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();

      // Clip the image into a circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      // Draw the Earth image
      ctx.drawImage(
        image,
        canvas.width / 2 - 120,
        canvas.height / 2 - 120,
        240,
        240
      );
      ctx.restore();
    };
  }, [imageUrl]);

  return (
    <div className="w-[300px] h-[300px] flex justify-center items-center">
      <canvas ref={canvasRef} />
    </div>
  );
};
*/

// rotation simple
/*
import React from 'react';

const TOTAL_SPIRALS = 25;
const TOTAL_STARS = 100;

export default function EarthSpiral() {
  return (
    <div className="w-full h-screen bg-black overflow-hidden flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div className="earth-container w-64 h-64 relative rounded-full" style={{ animation: 'spin 30s linear infinite', transformStyle: 'preserve-3d' }}>
        <div className="earth w-full h-full rounded-full absolute overflow-hidden">
          <div className="earth-surface"></div>
          <div className="earth-clouds"></div>
        </div>
        {Array.from({ length: TOTAL_SPIRALS }).map((_, index) => (
          <Spiral key={index} index={index} totalSpirals={TOTAL_SPIRALS} />
        ))}
      </div>
      <Stars />
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: scale(1.05); }
          50% { opacity: 0.3; transform: scale(1); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes cloudMove {
          0% { background-position: 0 0; }
          100% { background-position: 200px 0; }
        }
        .earth {
          background: radial-gradient(circle at 30% 30%, #4b50d3, #000957);
          box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 255, 255, 0.2);
        }
        .earth-surface {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: 
            radial-gradient(circle at 30% 30%, #42c98d, transparent 30%),
            radial-gradient(circle at 70% 50%, #4aaf7c, transparent 20%),
            radial-gradient(circle at 20% 70%, #51b788, transparent 25%);
          overflow: hidden;
        }
        .earth-clouds {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' fill='%23FFF' opacity='0.3'%3E%3Ccircle cx='25' cy='25' r='25'/%3E%3Ccircle cx='100' cy='50' r='35'/%3E%3Ccircle cx='175' cy='75' r='25'/%3E%3Ccircle cx='75' cy='175' r='35'/%3E%3C/svg%3E");
          animation: cloudMove 20s linear infinite;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

function Spiral({ index, totalSpirals }) {
  const rotation = (index / totalSpirals) * 360;
  return (
    <div 
      className="spiral absolute w-full h-full rounded-full opacity-70"
      style={{
        transform: `rotateX(80deg) rotateY(${rotation}deg) scale(1.05)`,
        boxShadow: '0 0 10px rgba(255, 158, 205, 0.5), 0 0 20px rgba(255, 158, 205, 0.3)',
        animation: `pulse 3s infinite alternate-reverse ${index * 0.1}s`,
        border: '1px solid',
        borderImage: 'linear-gradient(to right, rgba(255, 158, 205, 0.8), rgba(255, 158, 205, 0.2)) 1'
      }}
    ></div>
  );
}

function Stars() {
  return (
    <div className="stars absolute inset-0">
      {Array.from({ length: TOTAL_STARS }).map((_, index) => (
        <div
          key={index}
          className="star absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`
          }}
        ></div>
      ))}
    </div>
  );
}
*/






















