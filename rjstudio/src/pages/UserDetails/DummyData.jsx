/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import frameUp from '../../assets/images/FrameSides/4sideUp.jpeg';
import frameDown from '../../assets/images/FrameSides/4sideDown.jpeg';
import frameLeft from '../../assets/images/FrameSides/4sideLeft.jpeg';
import frameRight from '../../assets/images/FrameSides/4sideRight.jpeg';
import frameTopLeft from '../../assets/images/FrameSides/4topLeft.jpeg';
import frameTopRight from '../../assets/images/FrameSides/4topRight.jpeg';
import frameBottomLeft from '../../assets/images/FrameSides/4bottomLeft.jpeg';
import frameBottomRight from '../../assets/images/FrameSides/4bottomRight.jpeg';

import d1 from '../../assets/images/ImagesSample/d1.JPG';
import d2 from '../../assets/images/ImagesSample/d2.JPG';
import d3 from '../../assets/images/ImagesSample/d3.jpg';
import d4 from '../../assets/images/ImagesSample/d4.jpeg';
import d5 from '../../assets/images/ImagesSample/d5.jpg';
import d6 from '../../assets/images/ImagesSample/d6.jpg';
import d7 from '../../assets/images/ImagesSample/d7.jpg';
import d8 from '../../assets/images/ImagesSample/d8.jpeg';
import d9 from '../../assets/images/ImagesSample/d9.png';
import d10 from '../../assets/images/ImagesSample/d10.jpeg';

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [frameSizeInInches, setFrameSizeInInches] = useState(3); // Default to 0.5 inches
  const [whiteStripSizeInInches, setWhiteStripSizeInInches] = useState(1); // Default strip size

  const upImg = useRef(new Image());
  const downImg = useRef(new Image());
  const leftImg = useRef(new Image());
  const rightImg = useRef(new Image());
  const topLeftImg = useRef(new Image());
  const topRightImg = useRef(new Image());
  const bottomLeftImg = useRef(new Image());
  const bottomRightImg = useRef(new Image());

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = imageRef.current;

    const loadFrames = () => {
      const dpi = 96; // Typical web DPI (dots per inch)
      const frameSize = frameSizeInInches * dpi; // Convert inches to pixels
      const whiteStripSize = whiteStripSizeInInches * dpi; // Convert inches to pixels

      // Set canvas dimensions to fit the image, white strip, and frame
      const canvasWidth = image.width + 2 * (frameSize + whiteStripSize);
      const canvasHeight = image.height + 2 * (frameSize + whiteStripSize);
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // Clear the canvas before redrawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fill the canvas with white (for the white strip)
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Draw the image centered within the canvas, with the white strip around it
      ctx.drawImage(
        image,
        frameSize + whiteStripSize,
        frameSize + whiteStripSize
      );

      // Draw corners
      ctx.drawImage(topLeftImg.current, 0, 0, frameSize, frameSize);
      ctx.drawImage(
        topRightImg.current,
        canvasWidth - frameSize,
        0,
        frameSize,
        frameSize
      );
      ctx.drawImage(
        bottomLeftImg.current,
        0,
        canvasHeight - frameSize,
        frameSize,
        frameSize
      );
      ctx.drawImage(
        bottomRightImg.current,
        canvasWidth - frameSize,
        canvasHeight - frameSize,
        frameSize,
        frameSize
      );

      // Draw sides
      ctx.drawImage(
        upImg.current,
        frameSize,
        0,
        canvasWidth - 2 * frameSize,
        frameSize
      ); // Top
      ctx.drawImage(
        downImg.current,
        frameSize,
        canvasHeight - frameSize,
        canvasWidth - 2 * frameSize,
        frameSize
      ); // Bottom
      ctx.drawImage(
        leftImg.current,
        0,
        frameSize,
        frameSize,
        canvasHeight - 2 * frameSize
      ); // Left
      ctx.drawImage(
        rightImg.current,
        canvasWidth - frameSize,
        frameSize,
        frameSize,
        canvasHeight - 2 * frameSize
      ); // Right
    };

    const reloadImages = () => {
      // Append a timestamp to force reload
      const timestamp = new Date().getTime();
      upImg.current.src = `${frameUp}?t=${timestamp}`;
      downImg.current.src = `${frameDown}?t=${timestamp}`;
      leftImg.current.src = `${frameLeft}?t=${timestamp}`;
      rightImg.current.src = `${frameRight}?t=${timestamp}`;
      topLeftImg.current.src = `${frameTopLeft}?t=${timestamp}`;
      topRightImg.current.src = `${frameTopRight}?t=${timestamp}`;
      bottomLeftImg.current.src = `${frameBottomLeft}?t=${timestamp}`;
      bottomRightImg.current.src = `${frameBottomRight}?t=${timestamp}`;
    };

    // Load image and frame components before drawing
    image.onload = () => {
      Promise.all([
        new Promise((resolve) => (upImg.current.onload = resolve)),
        new Promise((resolve) => (downImg.current.onload = resolve)),
        new Promise((resolve) => (leftImg.current.onload = resolve)),
        new Promise((resolve) => (rightImg.current.onload = resolve)),
        new Promise((resolve) => (topLeftImg.current.onload = resolve)),
        new Promise((resolve) => (topRightImg.current.onload = resolve)),
        new Promise((resolve) => (bottomLeftImg.current.onload = resolve)),
        new Promise((resolve) => (bottomRightImg.current.onload = resolve)),
      ]).then(loadFrames);
    };

    reloadImages();
  }, [frameSizeInInches, whiteStripSizeInInches]);

  return (
    <>
      <div style={{ marginLeft: '22rem', marginTop: '5rem' }}>
        <canvas
          ref={canvasRef}
          style={{
            // border: '1px solid black',
            maxwidth: '150%',
            maxheight: '600px',
            border: '1px solid black',
          }}
        />
        <img
          ref={imageRef}
          src={d2}
          style={{ display: 'none' }}
          alt="content"
        />
      </div>
    </>
  );
};

export default CanvasComponent;
