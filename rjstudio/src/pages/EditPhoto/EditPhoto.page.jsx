import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { HeaderEditUpload } from '../../layout/headerEditUpload/headerEditUpload';
import { LandingSelectButtons } from '../../components/landingSelectButtons/LandingSelectButtons.comonent';
import { CustomSize } from '../../components/customSize/CustomSize.component';
import { ImageSizes } from '../../components/imageSizes/ImageSizes.components';
import { EditFrame } from '../../components/EditFrames/EditFrame.components';
import { MotifBorder } from '../../components/motifBorder/MotifBorder.component';
import { AddToCart } from '../AddToCart/AddToCart.page';
import { Checkout } from '../Checkout/Checkout.page';
import ImageFrameCropper from '../../components/CropImage/CropImage.component';
import { setImageUrl } from '../../slices/uploadImageSlice';
import { useDispatch } from 'react-redux';

export const EditPhoto = () => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.uploadImage.url);
  const DPI = useSelector((state) => state.uploadImage.dpi);
  const imageStatus = useSelector((state) => state.imageStatus.imageStatus);
  const frames = useSelector((state) => state.frames.borders);
  const selectedFrameIndex = useSelector(
    (state) => state.frames.imageBorderIndex
  );
  const imageSize = useSelector((state) => state.imageSize.imageSize);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [frameSizeInInches, setFrameSizeInInches] = useState('');
  const selectedMotifBorder = useSelector(
    (state) => state.selectMotifBorder.selectedMotifBorder
  );
  const upImg = useRef(new Image());
  const downImg = useRef(new Image());
  const leftImg = useRef(new Image());
  const rightImg = useRef(new Image());
  const topLeftImg = useRef(new Image());
  const topRightImg = useRef(new Image());
  const bottomLeftImg = useRef(new Image());
  const bottomRightImg = useRef(new Image());

  const calculateFrameSizeInInches = (imageWidth, imageHeight) => {
    const baseWidth = 1280;
    const baseHeight = 797;
    const baseFrameSizeInInches = 2;
    const widthScale = imageWidth / baseWidth;
    const heightScale = imageHeight / baseHeight;
    const scaleFactor = Math.min(widthScale, heightScale);
    return baseFrameSizeInInches * scaleFactor;
  };

  const calculateImageType = (imageWidth, imageHeight) => {
    let imageType = '';

    if (imageWidth > imageHeight) {
      imageType = 'landscape';
    } else if (imageWidth < imageHeight) {
      imageType = 'portrait';
    } else {
      imageType = 'square';
    }

    dispatch(setImageUrl({ imageType: imageType }));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const image = imageRef.current;

    if (!canvas || !image) {
      // console.error('Canvas or Image is not available.');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Could not get 2D context for the canvas.');
      return;
    }

    setTimeout(() => {
      handleImageLoad();
    }, 3000);

    const frameImages = [
      { img: upImg.current, src: frames[selectedFrameIndex].sideUp },
      { img: downImg.current, src: frames[selectedFrameIndex].sideDown },
      { img: leftImg.current, src: frames[selectedFrameIndex].sideLeft },
      { img: rightImg.current, src: frames[selectedFrameIndex].sideRight },
      { img: topLeftImg.current, src: frames[selectedFrameIndex].topLeft },
      { img: topRightImg.current, src: frames[selectedFrameIndex].topRight },
      {
        img: bottomLeftImg.current,
        src: frames[selectedFrameIndex].bottomLeft,
      },
      {
        img: bottomRightImg.current,
        src: frames[selectedFrameIndex].bottomRight,
      },
    ];

    let loadedImagesCount = 0;

    const handleImageLoad = () => {
      loadedImagesCount += 1;
      if (loadedImagesCount === frameImages.length) {
        drawCanvas();
      }
    };

    const drawCanvas = () => {
      setFrameSizeInInches(
        calculateFrameSizeInInches(image.width, image.height)
      );
      calculateImageType(image.width, image.height);

      const frameSizeInPixels = frameSizeInInches * DPI.x;
      const whiteStripSizeInPixels = selectedMotifBorder * DPI.y;

      // Set canvas dimensions based on image size, frame, and white strip
      const canvasWidth =
        image.width + 2 * (frameSizeInPixels + whiteStripSizeInPixels);
      const canvasHeight =
        image.height + 2 * (frameSizeInPixels + whiteStripSizeInPixels);
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fill the entire canvas with white to create the white strip
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Draw the image centered with the white strip around it
      ctx.drawImage(
        image,
        frameSizeInPixels + whiteStripSizeInPixels,
        frameSizeInPixels + whiteStripSizeInPixels
      );

      // Draw the corners
      ctx.drawImage(
        topLeftImg.current,
        0,
        0,
        frameSizeInPixels,
        frameSizeInPixels
      );

      ctx.drawImage(
        topRightImg.current,
        canvasWidth - frameSizeInPixels,
        0,
        frameSizeInPixels,
        frameSizeInPixels
      );

      ctx.drawImage(
        bottomLeftImg.current,
        0,
        canvasHeight - frameSizeInPixels,
        frameSizeInPixels,
        frameSizeInPixels
      );

      ctx.drawImage(
        bottomRightImg.current,
        canvasWidth - frameSizeInPixels,
        canvasHeight - frameSizeInPixels,
        frameSizeInPixels,
        frameSizeInPixels
      );

      // Draw the edges
      ctx.drawImage(
        upImg.current,
        frameSizeInPixels,
        0,
        canvasWidth - 2 * frameSizeInPixels,
        frameSizeInPixels
      ); // Top

      ctx.drawImage(
        downImg.current,
        frameSizeInPixels,
        canvasHeight - frameSizeInPixels,
        canvasWidth - 2 * frameSizeInPixels,
        frameSizeInPixels
      ); // Bottom

      ctx.drawImage(
        leftImg.current,
        0,
        frameSizeInPixels,
        frameSizeInPixels,
        canvasHeight - 2 * frameSizeInPixels
      ); // Left

      ctx.drawImage(
        rightImg.current,
        canvasWidth - frameSizeInPixels,
        frameSizeInPixels,
        frameSizeInPixels,
        canvasHeight - 2 * frameSizeInPixels
      ); // Right
    };

    frameImages.forEach(({ img, src }) => {
      img.onload = handleImageLoad;
      img.src = src;
    });
  }, [
    frameSizeInInches,
    selectedMotifBorder,
    selectedFrameIndex,
    frames,
    imageSize,
    url,
    imageStatus,
  ]);

  return (
    <>
      <HeaderEditUpload />
      <div className="container-fluid">
        <div className="row align-items-center mb-5">
          <div className="col-lg-7 ps-0 position-sticky">
            <div className="upload-overlay">
              {imageStatus === 1 || imageStatus === 2 ? (
                <ImageFrameCropper />
              ) : (
                <div className="inner-img">
                  {selectedFrameIndex === 0 ? (
                    <img
                      ref={imageRef}
                      src={url}
                      style={{
                        width: '100%',
                        maxWidth: '80%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                      }}
                      alt="content"
                    />
                  ) : (
                    <>
                      <canvas
                        ref={canvasRef}
                        style={{
                          border: '1px solid black',
                          width: '100%',
                          maxWidth: '80%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                        }}
                      />
                      <img
                        ref={imageRef}
                        src={url}
                        style={{ display: 'none' }}
                        alt="content"
                      />
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          {imageStatus === 0 && <LandingSelectButtons />}
          {imageStatus === 1 && <ImageSizes />}
          {imageStatus === 2 && <CustomSize />}
          {imageStatus === 3 && <EditFrame />}
          {imageStatus === 4 && <MotifBorder />}
          {imageStatus === 5 && (
            <AddToCart
              productName="Product Name"
              initialQuantity={1}
              price={10}
            />
          )}
          {imageStatus === 6 && <Checkout cartItems={[5]} total={10} />}
          {imageStatus === 7 && <ImageSizes />}
        </div>
      </div>
    </>
  );
};
