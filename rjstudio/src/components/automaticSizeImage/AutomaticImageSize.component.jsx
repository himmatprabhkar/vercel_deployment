import React from 'react';
import '../../assets/css/ImageContainer.css';
import { useSelector } from 'react-redux';

export const AutomaticImageSize = () => {
  const imageUrl = useSelector((state) => state.uploadImage.url);

  const imageOrientation = getImageOrientation(imageUrl);

  const containerClassName =
    imageOrientation === 'horizontal' ? 'horizontal' : 'vertical';

  return (
    <div className={`image-container ${containerClassName}`}>
      <img src={imageUrl} alt="Image" />
    </div>
  );
};

const getImageOrientation = (imageUrl) => {
  const image = new Image();
  image.src = imageUrl;

  return image.width > image.height ? 'horizontal' : 'vertical';
};
