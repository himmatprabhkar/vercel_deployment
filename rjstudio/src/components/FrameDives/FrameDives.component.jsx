import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImageBorder } from '../../slices/selectFrameSlice';
// import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export const FrameDives = () => {
  const dispatch = useDispatch();
  const frames = useSelector((state) => state.frames.borders);
  const url = useSelector((state) => state.uploadImage.url);
  const selectedFrameIndex = useSelector(
    (state) => state.frames.imageBorderIndex
  );
  const canvasRefs = useRef([]);
  const imageRef = useRef(null);
  const [frameSizeInInches, setFrameSizeInInches] = useState(5); // Default to 5 inches

  const calculateFrameSizeInInches = (imageWidth, imageHeight) => {
    // Base dimensions to compare against
    const baseWidth = 1280;
    const baseHeight = 797;

    // Base frame size in inches for the base dimensions
    const baseFrameSizeInInches = 0.8;

    // Determine the scaling factor for the frame size based on the image dimensions
    const widthScale = imageWidth / baseWidth;
    const heightScale = imageHeight / baseHeight;

    // Choose the smaller scale factor to maintain aspect ratio
    const scaleFactor = Math.min(widthScale, heightScale);

    // Calculate the frame size in inches
    const frameSizeInInches = baseFrameSizeInInches * scaleFactor;

    return frameSizeInInches;
  };

  useEffect(() => {
    if (!imageRef.current) return;

    const image = imageRef.current;

    frames.forEach((frame, index) => {
      const canvas = canvasRefs.current[index];
      if (!canvas) return;

      const ctx = canvas.getContext('2d');

      // Create and load frame images
      const frameImages = [
        { img: new Image(), src: frame.sideUp },
        { img: new Image(), src: frame.sideDown },
        { img: new Image(), src: frame.sideLeft },
        { img: new Image(), src: frame.sideRight },
        { img: new Image(), src: frame.topLeft },
        { img: new Image(), src: frame.topRight },
        { img: new Image(), src: frame.bottomLeft },
        { img: new Image(), src: frame.bottomRight },
      ];

      let loadedImagesCount = 0;

      const handleImageLoad = () => {
        loadedImagesCount += 1;
        if (loadedImagesCount === frameImages.length) {
          drawCanvas(ctx, image, frameImages);
        }
      };

      const drawCanvas = (ctx, image, frameImages) => {
        setFrameSizeInInches(
          calculateFrameSizeInInches(canvas.width, canvas.height)
        );
        const dpi = 96;
        const frameSize = frameSizeInInches * dpi;
        const canvasWidth = image.width + 2 * frameSize;
        const canvasHeight = image.height + 2 * frameSize;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

        ctx.drawImage(image, frameSize, frameSize);

        ctx.drawImage(frameImages[4].img, 0, 0, frameSize, frameSize); // Top Left
        ctx.drawImage(
          frameImages[5].img,
          canvasWidth - frameSize,
          0,
          frameSize,
          frameSize
        ); // Top Right
        ctx.drawImage(
          frameImages[6].img,
          0,
          canvasHeight - frameSize,
          frameSize,
          frameSize
        ); // Bottom Left
        ctx.drawImage(
          frameImages[7].img,
          canvasWidth - frameSize,
          canvasHeight - frameSize,
          frameSize,
          frameSize
        ); // Bottom Right

        ctx.drawImage(frameImages[0].img, frameSize, 0, image.width, frameSize); // Top
        ctx.drawImage(
          frameImages[1].img,
          frameSize,
          canvasHeight - frameSize,
          image.width,
          frameSize
        ); // Bottom
        ctx.drawImage(
          frameImages[2].img,
          0,
          frameSize,
          frameSize,
          image.height
        ); // Left
        ctx.drawImage(
          frameImages[3].img,
          canvasWidth - frameSize,
          frameSize,
          frameSize,
          image.height
        ); // Right
      };

      frameImages.forEach(({ img, src }) => {
        img.onload = handleImageLoad;
        img.src = src;
      });
    });
  }, [frames, selectedFrameIndex, frameSizeInInches]);

  const setFrameIndex = (index) => {
    dispatch(setImageBorder({ imageBorderIndex: index}));
  };

  return (
    <>
      <div className="row">
        {frames.map((frame, index) => (
          <div className="col-12 col-sm-6 col-lg-4" key={index+1}>
            <div
              className="frame-container position-relative mt-4"
              data-tooltip-id={`frame-tooltip-${index}`}
              data-tooltip-content={`Frame Name: ${frame.name || 'Unknown'} \n Frame Width: ${frame.width || 'Unknown'} \n Frame Depth: ${frame.depth || 'Unknown'}`}
              onClick={() => setFrameIndex(index)}
              style={{
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <canvas
                ref={(el) => (canvasRefs.current[index] = el)}
                className="img-fluid"
                style={{
                  maxwidth: '100%',
                  maxheight: '100%',
                  objectfit: 'contain',
                }}
              />
              <img
                ref={(el) => (imageRef.current = el)}
                src={url}
                style={{ display: 'none' }}
                alt="content"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
