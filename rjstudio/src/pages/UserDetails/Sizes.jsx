import React, { useState } from 'react';

const FRAME_SIZES = {
  '2x2': { width: 2, height: 2 },
  '4x4': { width: 4, height: 4 },
  '8x8': { width: 8, height: 8 },
  '16x16': { width: 16, height: 16 },
};

const DPI = 96; // Example DPI value. Adjust according to your requirements.

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [ setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [fitResults, setFitResults] = useState({});

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          setImage(img.src);
          setImageDimensions({ width: img.width, height: img.height });
          checkFit(img.width, img.height);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const checkFit = (imgWidth, imgHeight) => {
    const results = {};
    Object.entries(FRAME_SIZES).forEach(([key, { width, height }]) => {
      const requiredWidth = width * DPI;
      const requiredHeight = height * DPI;
      const fits = imgWidth >= requiredWidth && imgHeight >= requiredHeight;
      results[key] = fits;
    });
    setFitResults(results);
  };

  return (
    <div
      style={{
        maxwidth: '12%',
        marginLeft: '28rem',
        marginTop: '16rem',
      }}
    >
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" style={{ maxwidth: '100%' }} />}
      <div>
        {Object.entries(FRAME_SIZES).map(([key, { width, height }]) => (
          <div key={key}>
            <strong>
              {key} ({width}x{height} inches):
            </strong>{' '}
            {fitResults[key] ? 'Fits' : 'Does not fit'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
