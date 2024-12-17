/*
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
*/


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
