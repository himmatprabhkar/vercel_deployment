import React, { useState, useRef, useEffect } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { useSelector, useDispatch } from 'react-redux';
import { setImageUrl } from '../../slices/uploadImageSlice';
import { uploadAttachment } from '../../services/uploadFile.service';
import axios from 'axios';
import { Loader } from '../loader/Loader.component';

const ImageFrameCropper = () => {
  const url = useSelector((state) => state.uploadImage.url);
  const sizeDetailsData = useSelector((state) => state.imageSize.sizeDetails);
  const customSizeWidth = useSelector(
    (state) => state.imageCustomSizeZoom.imageCustomWidth
  );
  const customSizeHeight = useSelector(
    (state) => state.imageCustomSizeZoom.imageCustomHeight
  );
  const cropperRef = useRef(null);
  const dispatch = useDispatch();
  const [isCropperReady, setIsCropperReady] = useState(false);
  const [isCrop, setIsCrop] = useState(false);
  const cancelToken = axios.CancelToken.source();

  const [banner, setBanner] = useState({
    isUploading: false,
    isUploaded: false,
    progress: 0,
    url: '',
  });

  const getCropData = () => {
    if (isCropperReady && cropperRef.current && cropperRef.current.cropper) {
      setIsCrop(true);
      const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();
      if (croppedCanvas) {
        croppedCanvas.toBlob(async (blob) => {
          if (blob) {
            const formData = new FormData();
            formData.append('image', blob, 'cropped-image.png');

            console.log('bannerbannerbanner', banner);
            setBanner((prevState) => ({
              ...prevState,
              isUploading: true,
              isUploaded: false,
              progress: 0,
            }));

            try {
              const response = await uploadAttachment(
                formData,
                setBanner,
                cancelToken
              );
              if (response.data.url) {
                dispatch(setImageUrl({ url: response.data.url }));
                setIsCrop(false);
              }
            } catch (error) {
              console.error('Error during image upload:', error);
            }
          }
        }, 'image/png');
      }
    } else {
      console.error('Cropper is not ready or canvas is null');
    }
  };

  const handleCropMove = () => {
    if (cropperRef.current && cropperRef.current.cropper) {
      const cropper = cropperRef.current.cropper;
      const cropBoxData = cropper.getCropBoxData();
      const containerData = cropper.getContainerData();

      if (cropBoxData.left < 0) {
        cropper.setCropBoxData({ left: 0 });
      }
      if (cropBoxData.top < 0) {
        cropper.setCropBoxData({ top: 0 });
      }
      if (cropBoxData.left + cropBoxData.width > containerData.width) {
        cropper.setCropBoxData({
          left: containerData.width - cropBoxData.width,
        });
      }
      if (cropBoxData.top + cropBoxData.height > containerData.height) {
        cropper.setCropBoxData({
          top: containerData.height - cropBoxData.height,
        });
      }
    }
  };

  useEffect(() => {
    if (cropperRef.current && cropperRef.current.cropper) {
      cropperRef.current.cropper.setAspectRatio(
        sizeDetailsData.width / sizeDetailsData.height
      );
      cropperRef.current.cropper.setCropBoxData({
        left: 0,
        top: 0,
        width: cropperRef.current.cropper.getContainerData().width,
        height: cropperRef.current.cropper.getContainerData().height,
      });
    }
  }, [url, sizeDetailsData]);

  useEffect(() => {
    if (cropperRef.current && cropperRef.current.cropper) {
      cropperRef.current.cropper.setAspectRatio(
        customSizeWidth / customSizeHeight
      );
      cropperRef.current.cropper.setCropBoxData({
        left: 0,
        top: 0,
        width: cropperRef.current.cropper.getContainerData().width,
        height: cropperRef.current.cropper.getContainerData().height,
      });
    }
  }, [customSizeWidth, customSizeHeight]);

  const handleReady = () => {
    setIsCropperReady(true);
  };

  return (
    <>
      {isCrop ? (
        <Loader />
      ) : (
        url &&
        sizeDetailsData && (
          <>
            <Cropper
              ref={cropperRef}
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                backgroundColor: '#CBC6C4',
              }}
              zoomTo={0}
              initialAspectRatio={
                sizeDetailsData
                  ? sizeDetailsData.width / sizeDetailsData.height
                  : 1
              }
              preview=".img-preview"
              src={url}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
              guides={true}
              cropmove={handleCropMove}
              ready={handleReady}
            />
            <button onClick={getCropData}>Crop Image</button>
          </>
        )
      )}
    </>
  );
};

export default ImageFrameCropper;
