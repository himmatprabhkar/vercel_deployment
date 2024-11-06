// import React, { useState, useRef, useEffect } from "react";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import "./style.css";

// const ImageFrameCropper = () => {
//   const [image, setImage] = useState(null);
//   const [frameSizes] = useState([
//     { width: 12, height: 8, label: "12x8" },
//     { width: 16, height: 12, label: "16x12" },
//     { width: 24, height: 16, label: "24x16" },
//   ]);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [cropData, setCropData] = useState(null);
//   const cropperRef = useRef(null);

//   const handleFileSelect = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setImage(reader.result);
//       setSelectedSize(null); // Reset selected size when a new image is loaded
//       setCropData(null); // Reset crop data
//     };

//     reader.readAsDataURL(file);
//   };

//   const handleSizeSelection = (size) => {
//     setSelectedSize(size);
//     setCropData(null); // Reset crop data when size changes

//     if (cropperRef.current && cropperRef.current.cropper) {
//       cropperRef.current.cropper.setAspectRatio(size.width / size.height); // Update aspect ratio
//     }
//   };

//   const getCropData = () => {
//     if (cropperRef.current && cropperRef.current.cropper) {
//       setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
//     }
//   };

//   useEffect(() => {
//     if (cropperRef.current && selectedSize) {
//       cropperRef.current.cropper.setAspectRatio(selectedSize.width / selectedSize.height);
//     }
//   }, [selectedSize]);

//   return (
//     <div className="image-frame-cropper">
//       <div className="upload-section">
//         <h2>Upload Image</h2>
//         <input type="file" onChange={handleFileSelect} />
//       </div>

//       {image && (
//         <div className="image-display-section">
//           <h3>Uploaded Image</h3>
//           <img
//             src={image}
//             alt="Uploaded"
//             style={{ maxwidth: "100%", height: "auto" }}
//           />
//         </div>
//       )}

//       {image && (
//         <div className="frame-size-section">
//           <h3>Select Frame Size</h3>
//           <ul>
//             {frameSizes.map((size, index) => (
//               <li key={index}>
//                 <button onClick={() => handleSizeSelection(size)}>
//                   {size.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {selectedSize && (
//         <div className="crop-section">
//           <h3>Crop Image to Fit {selectedSize.label}</h3>
//           <Cropper
//             src={image}
//             style={{ height: 400, width: "100%" }}
//             initialAspectRatio={selectedSize.width / selectedSize.height}
//             guides={false}
//             ref={cropperRef}
//           />
//           <button onClick={getCropData} type="button">
//             Crop Image
//           </button>
//         </div>
//       )}

//       {cropData && (
//         <div className="result-section">
//           <h3>Cropped Image</h3>
//           <img src={cropData} alt="Cropped" style={{ maxwidth: "100%" }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageFrameCropper;

// import React, { useState, useRef } from "react";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import "./style.css";

// const ImageFrameCropper = () => {
//   const [image, setImage] = useState(null);
//   const [frameSizes] = useState([
//     { width: 12, height: 8, label: "12x8" },
//     { width: 16, height: 12, label: "16x12" },
//     { width: 24, height: 16, label: "24x16" },
//     { width: 18, height: 24, label: "18x24" },
//     { width: 36, height: 24, label: "36x24" }
//   ]);
//   const [possibleFrameSizes, setPossibleFrameSizes] = useState([]);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [cropData, setCropData] = useState(null);
//   const cropperRef = useRef(null);

//   const handleFileSelect = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       const img = new Image();
//       img.src = reader.result;
//       img.onload = () => {
//         const aspectRatio = img.width / img.height;
//         // Adjust the tolerance as needed
//         const tolerance = 0.01;
//         const filteredSizes = frameSizes.filter(
//           (size) =>
//             Math.abs(size.width / size.height - aspectRatio) <= tolerance ||
//             Math.abs(size.height / size.width - aspectRatio) <= tolerance
//         );
//         setPossibleFrameSizes(filteredSizes);
//         setImage(reader.result);
//         setSelectedSize(null); // Reset selected size
//         setCropData(null); // Reset crop data
//       };
//     };

//     reader.readAsDataURL(file);
//   };

//   const handleSizeSelection = (size) => {
//     setSelectedSize(size);
//     setCropData(null); // Reset crop data when size changes

//     if (cropperRef.current && cropperRef.current.cropper) {
//       cropperRef.current.cropper.setAspectRatio(size.width / size.height); // Update aspect ratio
//     }
//   };

//   const getCropData = () => {
//     if (cropperRef.current && cropperRef.current.cropper) {
//       setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
//     }
//   };

//   return (
//     <div className="image-frame-cropper">
//       <div className="upload-section">
//         <h2>Upload Image</h2>
//         <input type="file" onChange={handleFileSelect} />
//       </div>

//       {image && possibleFrameSizes.length > 0 && (
//         <div className="frame-size-section">
//           <h3>Select Frame Size</h3>
//           <ul>
//             {possibleFrameSizes.map((size, index) => (
//               <li key={index}>
//                 <button onClick={() => handleSizeSelection(size)}>
//                   {size.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {selectedSize && (
//         <div className="crop-section">
//           <h3>Crop Image to Fit {selectedSize.label}</h3>
//           <Cropper
//             src={image}
//             style={{ height: 400, width: "100%" }}
//             initialAspectRatio={selectedSize.width / selectedSize.height}
//             guides={false}
//             ref={cropperRef}
//           />
//           <button onClick={getCropData} type="button">
//             Crop Image
//           </button>
//         </div>
//       )}

//       {cropData && (
//         <div className="result-section">
//           <h3>Cropped Image</h3>
//           <img src={cropData} alt="Cropped" style={{ maxwidth: "100%" }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageFrameCropper;

// import React, { useState, useRef } from "react";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import "./style.css";

// const ImageFrameCropper = () => {
//   const [image, setImage] = useState(null);
//   const [possibleFrameSizes, setPossibleFrameSizes] = useState([]);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [cropData, setCropData] = useState(null);
//   const cropperRef = useRef(null);

//   const handleFileSelect = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       const img = new Image();
//       img.src = reader.result;
//       img.onload = () => {
//         const aspectRatio = img.width / img.height;

//         // Generate dynamic frame sizes based on aspect ratio
//         const generatedSizes = generateFrameSizes(aspectRatio, img.width, img.height);

//         setPossibleFrameSizes(generatedSizes);
//         setImage(reader.result);
//         setSelectedSize(null); // Reset selected size
//         setCropData(null); // Reset crop data
//       };
//     };

//     reader.readAsDataURL(file);
//   };

//   // Generate dynamic frame sizes based on image aspect ratio
//   const generateFrameSizes = (aspectRatio, imgWidth, imgHeight) => {
//     const minDimension = 6; // Minimum size in inches
//     const maxDimension = 40; // Maximum size in inches
//     const sizes = [];

//     for (let width = minDimension; width <= maxDimension; width += 2) {
//       const height = width / aspectRatio;
//       if (height >= minDimension && height <= maxDimension) {
//         sizes.push({
//           width,
//           height: Math.round(height), // Ensure height is a rounded value
//           label: `${width}x${Math.round(height)}`
//         });
//       }
//     }

//     return sizes;
//   };

//   const handleSizeSelection = (size) => {
//     setSelectedSize(size);
//     setCropData(null); // Reset crop data when size changes

//     if (cropperRef.current && cropperRef.current.cropper) {
//       cropperRef.current.cropper.setAspectRatio(size.width / size.height); // Update aspect ratio
//     }
//   };

//   const getCropData = () => {
//     if (cropperRef.current && cropperRef.current.cropper) {
//       setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
//     }
//   };

//   return (
//     <div className="image-frame-cropper">
//       <div className="upload-section">
//         <h2>Upload Image</h2>
//         <input type="file" onChange={handleFileSelect} />
//       </div>

//       {image && possibleFrameSizes.length > 0 && (
//         <div className="frame-size-section">
//           <h3>Select Frame Size</h3>
//           <ul>
//             {possibleFrameSizes.map((size, index) => (
//               <li key={index}>
//                 <button onClick={() => handleSizeSelection(size)}>
//                   {size.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {selectedSize && (
//         <div className="crop-section">
//           <h3>Crop Image to Fit {selectedSize.label}</h3>
//           <Cropper
//             src={image}
//             style={{ height: 400, width: "100%" }}
//             initialAspectRatio={selectedSize.width / selectedSize.height}
//             guides={false}
//             ref={cropperRef}
//           />
//           <button onClick={getCropData} type="button">
//             Crop Image
//           </button>
//         </div>
//       )}

//       {cropData && (
//         <div className="result-section">
//           <h3>Cropped Image</h3>
//           <img src={cropData} alt="Cropped" style={{ maxwidth: "100%" }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageFrameCropper;

// import React, { useState, useRef } from "react";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import "./style.css";

// const ImageFrameCropper = () => {
//   const [image, setImage] = useState(null);
//   const [possibleFrameSizes, setPossibleFrameSizes] = useState([]);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [cropData, setCropData] = useState(null);
//   const cropperRef = useRef(null);

//   const aspectRatios = {
//     "3:2": 3 / 2,
//     "4:3": 4 / 3,
//     "Square": 1,
//     "Classic Formats": 1.414, // Classic Formats (like paper size 1:√2)
//     "DIN/ISO": 1.414,         // Same as Classic Formats (DIN A sizes)
//     "16:9": 16 / 9,
//   };

//   const handleFileSelect = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       const img = new Image();
//       img.src = reader.result;
//       img.onload = () => {
//         const imageWidth = img.width;
//         const imageHeight = img.height;

//         // Generate sizes based on predefined ratios
//         const generatedSizes = generateFrameSizes(imageWidth, imageHeight);
//         setPossibleFrameSizes(generatedSizes);

//         setImage(reader.result);
//         setSelectedSize(null); // Reset selected size
//         setCropData(null); // Reset crop data
//       };
//     };

//     reader.readAsDataURL(file);
//   };

//   const generateFrameSizes = (imageWidth, imageHeight) => {
//     const sizes = [];

//     Object.keys(aspectRatios).forEach((label) => {
//       const aspectRatio = aspectRatios[label];

//       // Calculate width and height based on the aspect ratio and image dimensions
//       let width = imageWidth;
//       let height = width / aspectRatio;

//       if (height > imageHeight) {
//         height = imageHeight;
//         width = height * aspectRatio;
//       }

//       sizes.push({
//         width: Math.round(width),
//         height: Math.round(height),
//         label: `${label} (${Math.round(width)}x${Math.round(height)})`,
//       });
//     });

//     return sizes;
//   };

//   const handleSizeSelection = (size) => {
//     setSelectedSize(size);
//     setCropData(null); // Reset crop data when size changes

//     if (cropperRef.current && cropperRef.current.cropper) {
//       cropperRef.current.cropper.setAspectRatio(size.width / size.height); // Update aspect ratio
//     }
//   };

//   const getCropData = () => {
//     if (cropperRef.current && cropperRef.current.cropper) {
//       setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
//     }
//   };

//   return (
//     <div className="image-frame-cropper">
//       <div className="upload-section">
//         <h2>Upload Image</h2>
//         <input type="file" onChange={handleFileSelect} />
//       </div>

//       {image && possibleFrameSizes.length > 0 && (
//         <div className="frame-size-section">
//           <h3>Select Frame Size</h3>
//           <ul>
//             {possibleFrameSizes.map((size, index) => (
//               <li key={index}>
//                 <button onClick={() => handleSizeSelection(size)}>
//                   {size.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {selectedSize && (
//         <div className="crop-section">
//           <h3>Crop Image to Fit {selectedSize.label}</h3>
//           <Cropper
//             src={image}
//             style={{ height: 400, width: "100%" }}
//             initialAspectRatio={selectedSize.width / selectedSize.height}
//             guides={false}
//             ref={cropperRef}
//           />
//           <button onClick={getCropData} type="button">
//             Crop Image
//           </button>
//         </div>
//       )}

//       {cropData && (
//         <div className="result-section">
//           <h3>Cropped Image</h3>
//           <img src={cropData} alt="Cropped" style={{ maxwidth: "100%" }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageFrameCropper;

// import React, { useState, useRef } from "react";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import "./style.css";

// const predefinedSizes = [
//   // 3:2 sizes
//   { format: "3:2", size: "3x2", width: 3, height: 2 },
//   { format: "3:2", size: "6x4", width: 6, height: 4 },
//   { format: "3:2", size: "9x6", width: 9, height: 6 },
//   { format: "3:2", size: "12x8", width: 12, height: 8 },
//   { format: "3:2", size: "15x10", width: 15, height: 10 },
//   { format: "3:2", size: "18x12", width: 18, height: 12 },

//   // 4:3 sizes
//   { format: "4:3", size: "4x3", width: 4, height: 3 },
//   { format: "4:3", size: "8x6", width: 8, height: 6 },
//   { format: "4:3", size: "12x9", width: 12, height: 9 },
//   { format: "4:3", size: "16x12", width: 16, height: 12 },
//   { format: "4:3", size: "20x15", width: 20, height: 15 },
//   { format: "4:3", size: "24x18", width: 24, height: 18 },

//   // Square sizes
//   { format: "Square", size: "5x5", width: 5, height: 5 },
//   { format: "Square", size: "10x10", width: 10, height: 10 },
//   { format: "Square", size: "15x15", width: 15, height: 15 },
//   { format: "Square", size: "20x20", width: 20, height: 20 },
//   { format: "Square", size: "30x30", width: 30, height: 30 },
//   { format: "Square", size: "40x40", width: 40, height: 40 },

//   // Classic Formats sizes
//   { format: "Classic Formats", size: "8x10", width: 8, height: 10 },
//   { format: "Classic Formats", size: "11x14", width: 11, height: 14 },
//   { format: "Classic Formats", size: "16x20", width: 16, height: 20 },
//   { format: "Classic Formats", size: "20x24", width: 20, height: 24 },
//   { format: "Classic Formats", size: "24x30", width: 24, height: 30 },
//   { format: "Classic Formats", size: "30x40", width: 30, height: 40 },

//   // DIN/ISO sizes
//   { format: "DIN/ISO", size: "A5", width: 8.3, height: 5.8 },
//   { format: "DIN/ISO", size: "A4", width: 11.7, height: 8.3 },
//   { format: "DIN/ISO", size: "A3", width: 16.5, height: 11.7 },
//   { format: "DIN/ISO", size: "A2", width: 23.4, height: 16.5 },
//   { format: "DIN/ISO", size: "A1", width: 33.1, height: 23.4 },
//   { format: "DIN/ISO", size: "A0", width: 46.8, height: 33.1 },

//   // 16:9 sizes
//   { format: "16:9", size: "16x9", width: 16, height: 9 },
//   { format: "16:9", size: "24x13.5", width: 24, height: 13.5 },
//   { format: "16:9", size: "32x18", width: 32, height: 18 },
//   { format: "16:9", size: "48x27", width: 48, height: 27 },
//   { format: "16:9", size: "60x33.75", width: 60, height: 33.75 },
//   { format: "16:9", size: "72x40.5", width: 72, height: 40.5 },
//   { format: "16:9", size: "84x47.25", width: 84, height: 47.25 }
// ];

// const ImageFrameCropper = () => {
//   const [image, setImage] = useState(null);
//   const [possibleFrameSizes, setPossibleFrameSizes] = useState([]);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [cropData, setCropData] = useState(null);
//   const cropperRef = useRef(null);

//   const handleFileSelect = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       const img = new Image();
//       img.src = reader.result;
//       img.onload = () => {
//         const imageWidth = img.width;
//         const imageHeight = img.height;

//         // Calculate possible frame sizes based on image dimensions and predefined sizes
//         const filteredSizes = predefinedSizes.filter(size =>
//           (size.width <= imageWidth && size.height <= imageHeight) ||
//           (size.height <= imageWidth && size.width <= imageHeight)
//         ).map(size => ({
//           ...size,
//           label: `${size.size} (${size.width}x${size.height})`,
//         }));

//         setPossibleFrameSizes(filteredSizes);
//         setImage(reader.result);
//         setSelectedSize(null); // Reset selected size
//         setCropData(null); // Reset crop data
//       };
//     };

//     reader.readAsDataURL(file);
//   };

//   const handleSizeSelection = (size) => {
//     setSelectedSize(size);
//     setCropData(null); // Reset crop data when size changes

//     if (cropperRef.current && cropperRef.current.cropper) {
//       cropperRef.current.cropper.setAspectRatio(size.width / size.height); // Update aspect ratio
//     }
//   };

//   const getCropData = () => {
//     if (cropperRef.current && cropperRef.current.cropper) {
//       setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
//     }
//   };

//   return (
//     <div className="image-frame-cropper">
//       <div className="upload-section">
//         <h2>Upload Image</h2>
//         <input type="file" onChange={handleFileSelect} />
//       </div>

//       {image && possibleFrameSizes.length > 0 && (
//         <div className="frame-size-section">
//           <h3>Select Frame Size</h3>
//           <ul>
//             {possibleFrameSizes.map((size, index) => (
//               <li key={index}>
//                 <button onClick={() => handleSizeSelection(size)}>
//                   {size.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {selectedSize && (
//         <div className="crop-section">
//           <h3>Crop Image to Fit {selectedSize.label}</h3>
//           <Cropper
//             src={image}
//             style={{ height: 400, width: "100%" }}
//             initialAspectRatio={selectedSize.width / selectedSize.height}
//             guides={false}
//             ref={cropperRef}
//           />
//           <button onClick={getCropData} type="button">
//             Crop Image
//           </button>
//         </div>
//       )}

//       {cropData && (
//         <div className="result-section">
//           <h3>Cropped Image</h3>
//           <img src={cropData} alt="Cropped" style={{ maxwidth: "100%" }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageFrameCropper;

// import React, { useState, useRef } from "react";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import "./style.css";

// const aspectRatios = [
//   { format: "3:2", ratio: 3 / 2 },
//   { format: "4:3", ratio: 4 / 3 },
//   { format: "Square", ratio: 1 },
//   { format: "DIN/ISO", ratio: 1.414 }, // Approximate aspect ratio for DIN A4 (8.3x11.7)
//   { format: "16:9", ratio: 16 / 9 }
// ];

// const ImageFrameCropper = () => {
//   const [image, setImage] = useState(null);
//   const [possibleFrameSizes, setPossibleFrameSizes] = useState([]);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [cropData, setCropData] = useState(null);
//   const cropperRef = useRef(null);

//   const handleFileSelect = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       const img = new Image();
//       img.src = reader.result;
//       img.onload = () => {
//         const imageWidth = img.width;
//         const imageHeight = img.height;

//         // Calculate possible frame sizes based on image dimensions and aspect ratios
//         const filteredSizes = aspectRatios.map(({ format, ratio }) => {
//           // Calculate sizes that fit within the image dimensions
//           const width = Math.min(imageWidth, imageHeight * ratio);
//           const height = Math.min(imageHeight, imageWidth / ratio);

//           return {
//             format,
//             width: Math.round(width),
//             height: Math.round(height),
//             label: `${Math.round(width)}x${Math.round(height)} (${format})`,
//           };
//         });

//         setPossibleFrameSizes(filteredSizes);
//         setImage(reader.result);
//         setSelectedSize(null); // Reset selected size
//         setCropData(null); // Reset crop data
//       };
//     };

//     reader.readAsDataURL(file);
//   };

//   const handleSizeSelection = (size) => {
//     setSelectedSize(size);
//     setCropData(null); // Reset crop data when size changes

//     if (cropperRef.current && cropperRef.current.cropper) {
//       cropperRef.current.cropper.setAspectRatio(size.width / size.height); // Update aspect ratio
//     }
//   };

//   const getCropData = () => {
//     if (cropperRef.current && cropperRef.current.cropper) {
//       setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
//     }
//   };

//   return (
//     <div className="image-frame-cropper">
//       <div className="upload-section">
//         <h2>Upload Image</h2>
//         <input type="file" onChange={handleFileSelect} />
//       </div>

//       {image && possibleFrameSizes.length > 0 && (
//         <div className="frame-size-section">
//           <h3>Select Frame Size</h3>
//           <ul>
//             {possibleFrameSizes.map((size, index) => (
//               <li key={index}>
//                 <button onClick={() => handleSizeSelection(size)}>
//                   {size.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {selectedSize && (
//         <div className="crop-section">
//           <h3>Crop Image to Fit {selectedSize.label}</h3>
//           <Cropper
//             src={image}
//             style={{ height: 400, width: "100%" }}
//             initialAspectRatio={selectedSize.width / selectedSize.height}
//             guides={false}
//             ref={cropperRef}
//           />
//           <button onClick={getCropData} type="button">
//             Crop Image
//           </button>
//         </div>
//       )}

//       {cropData && (
//         <div className="result-section">
//           <h3>Cropped Image</h3>
//           <img src={cropData} alt="Cropped" style={{ maxwidth: "100%" }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageFrameCropper;

// import React, { useState, useRef } from "react";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import "./style.css";

// const aspectRatios = [
//   { format: "3:2", ratio: 3 / 2 },
//   { format: "4:3", ratio: 4 / 3 },
//   { format: "Square", ratio: 1 },
//   { format: "DIN/ISO", ratio: 1.414 }, // Approximate aspect ratio for DIN A4 (8.3x11.7)
//   { format: "16:9", ratio: 16 / 9 }
// ];

// const generateSizes = (ratio, imageWidth, imageHeight, count = 10) => {
//   const sizes = [];
//   const minDimension = Math.min(imageWidth, imageHeight);
//   const maxSize = Math.min(imageWidth, imageHeight);

//   for (let i = 1; i <= count; i++) {
//     const width = (maxSize / count) * i;
//     const height = width / ratio;

//     if (width <= imageWidth && height <= imageHeight) {
//       sizes.push({
//         width: Math.round(width),
//         height: Math.round(height),
//         label: `${Math.round(width)}x${Math.round(height)}`,
//       });
//     }
//   }

//   return sizes;
// };

// const ImageFrameCropper = () => {
//   const [image, setImage] = useState(null);
//   const [possibleFrameSizes, setPossibleFrameSizes] = useState([]);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [cropData, setCropData] = useState(null);
//   const cropperRef = useRef(null);

//   const handleFileSelect = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       const img = new Image();
//       img.src = reader.result;
//       img.onload = () => {
//         const imageWidth = img.width;
//         const imageHeight = img.height;

//         // Calculate possible frame sizes based on image dimensions and aspect ratios
//         const allSizes = aspectRatios.flatMap(({ format, ratio }) => {
//           return generateSizes(ratio, imageWidth, imageHeight).map(size => ({
//             ...size,
//             format,
//             label: `${size.width}x${size.height} (${format})`,
//           }));
//         });

//         setPossibleFrameSizes(allSizes);
//         setImage(reader.result);
//         setSelectedSize(null); // Reset selected size
//         setCropData(null); // Reset crop data
//       };
//     };

//     reader.readAsDataURL(file);
//   };

//   const handleSizeSelection = (size) => {
//     setSelectedSize(size);
//     setCropData(null); // Reset crop data when size changes

//     if (cropperRef.current && cropperRef.current.cropper) {
//       cropperRef.current.cropper.setAspectRatio(size.width / size.height); // Update aspect ratio
//     }
//   };

//   const getCropData = () => {
//     if (cropperRef.current && cropperRef.current.cropper) {
//       setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
//     }
//   };

//   return (
//     <div className="image-frame-cropper">
//       <div className="upload-section">
//         <h2>Upload Image</h2>
//         <input type="file" onChange={handleFileSelect} />
//       </div>

//       {image && possibleFrameSizes.length > 0 && (
//         <div className="frame-size-section">
//           <h3>Select Frame Size</h3>
//           <ul>
//             {possibleFrameSizes.map((size, index) => (
//               <li key={index}>
//                 <button onClick={() => handleSizeSelection(size)}>
//                   {size.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {selectedSize && (
//         <div className="crop-section">
//           <h3>Crop Image to Fit {selectedSize.label}</h3>
//           <Cropper
//             src={image}
//             style={{ height: 400, width: "100%" }}
//             initialAspectRatio={selectedSize.width / selectedSize.height}
//             guides={false}
//             ref={cropperRef}
//           />
//           <button onClick={getCropData} type="button">
//             Crop Image
//           </button>
//         </div>
//       )}

//       {cropData && (
//         <div className="result-section">
//           <h3>Cropped Image</h3>
//           <img src={cropData} alt="Cropped" style={{ maxwidth: "100%" }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageFrameCropper;

// import React, { useState, useRef } from "react";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import "./style.css";

// const aspectRatios = [
//   { format: "3:2", ratio: 3 / 2 },
//   { format: "4:3", ratio: 4 / 3 },
//   { format: "Square", ratio: 1 },
//   { format: "DIN/ISO", ratio: 1.414 }, // Approximate aspect ratio for DIN A4 (8.3x11.7)
//   { format: "16:9", ratio: 16 / 9 }
// ];

// const generateSizes = (ratio, imageWidth, imageHeight, count = 10) => {
//   const sizes = [];
//   const maxSize = Math.min(imageWidth, imageHeight);

//   for (let i = 1; i <= count; i++) {
//     const width = (maxSize / count) * i;
//     const height = width / ratio;

//     if (width <= imageWidth && height <= imageHeight) {
//       sizes.push({
//         width: Math.round(width),
//         height: Math.round(height),
//         label: `${Math.round(width)}x${Math.round(height)}`,
//       });
//     }
//   }

//   return sizes;
// };

// const ImageFrameCropper = () => {
//   const [image, setImage] = useState(null);
//   const [possibleFrameSizes, setPossibleFrameSizes] = useState([]);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [cropData, setCropData] = useState(null);
//   const cropperRef = useRef(null);

//   const handleFileSelect = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       const img = new Image();
//       img.src = reader.result;
//       img.onload = () => {
//         const imageWidth = img.width;
//         const imageHeight = img.height;

//         const allSizes = aspectRatios.flatMap(({ format, ratio }) => {
//           return generateSizes(ratio, imageWidth, imageHeight).map(size => ({
//             ...size,
//             format,
//             label: `${size.width}x${size.height} (${format})`,
//           }));
//         });

//         setPossibleFrameSizes(allSizes);
//         setImage(reader.result);
//         setSelectedSize(null); // Reset selected size
//         setCropData(null); // Reset crop data
//       };
//     };

//     reader.readAsDataURL(file);
//   };

//   const handleSizeSelection = (size) => {
//     setSelectedSize(size);
//     setCropData(null); // Reset crop data when size changes

//     if (cropperRef.current && cropperRef.current.cropper) {
//       cropperRef.current.cropper.setAspectRatio(size.width / size.height); // Update aspect ratio
//     }
//   };

//   const getCropData = () => {
//     if (cropperRef.current && cropperRef.current.cropper) {
//       setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
//     }
//   };

//   return (
//     <div className="image-frame-cropper">
//       <div className="upload-section">
//         <h2>Upload Image</h2>
//         <input type="file" onChange={handleFileSelect} />
//       </div>

//       {image && possibleFrameSizes.length > 0 && (
//         <div className="frame-size-section">
//           <h3>Select Frame Size</h3>
//           <ul className="frame-size-list">
//             {possibleFrameSizes.map((size, index) => (
//               <li key={index} className="frame-size-item">
//                 <button onClick={() => handleSizeSelection(size)}>
//                   {size.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {selectedSize && (
//         <div className="crop-section">
//           <h3>Crop Image to Fit {selectedSize.label}</h3>
//           <Cropper
//             src={image}
//             style={{ height: 400, width: "100%" }}
//             initialAspectRatio={selectedSize.width / selectedSize.height}
//             guides={false}
//             ref={cropperRef}
//           />
//           <button onClick={getCropData} type="button">
//             Crop Image
//           </button>
//         </div>
//       )}

//       {cropData && (
//         <div className="result-section">
//           <h3>Cropped Image</h3>
//           <img src={cropData} alt="Cropped" style={{ maxwidth: "100%" }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageFrameCropper;

// import React, { useState, useRef } from "react";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import "./style.css";

// const aspectRatios = [
//   { format: "3:2", ratio: 3 / 2 },
//   { format: "4:3", ratio: 4 / 3 },
//   { format: "Square", ratio: 1 },
//   { format: "DIN/ISO", ratio: 1.414 }, // Approximate aspect ratio for DIN A4 (8.3x11.7)
//   { format: "16:9", ratio: 16 / 9 }
// ];

// const generateSizes = (ratio, imageWidth, imageHeight, count = 10) => {
//   const sizes = [];
//   const maxSize = Math.min(imageWidth, imageHeight);

//   for (let i = 1; i <= count; i++) {
//     const width = (maxSize / count) * i;
//     const height = width / ratio;

//     if (width <= imageWidth && height <= imageHeight) {
//       sizes.push({
//         width: Math.round(width),
//         height: Math.round(height),
//         label: `${Math.round(width)}x${Math.round(height)}`,
//       });
//     }
//   }

//   return sizes;
// };

// const ImageFrameCropper = () => {
//   const [image, setImage] = useState(null);
//   const [possibleFrameSizes, setPossibleFrameSizes] = useState([]);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [cropData, setCropData] = useState(null);
//   const cropperRef = useRef(null);

//   const handleFileSelect = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       const img = new Image();
//       img.src = reader.result;
//       img.onload = () => {
//         const imageWidth = img.width;
//         const imageHeight = img.height;

//         const allSizes = aspectRatios.flatMap(({ format, ratio }) => {
//           return generateSizes(ratio, imageWidth, imageHeight).map(size => ({
//             ...size,
//             format,
//             label: `${size.width}x${size.height}`,
//           }));
//         });

//         setPossibleFrameSizes(allSizes);
//         setImage(reader.result);
//         setSelectedSize(null); // Reset selected size
//         setCropData(null); // Reset crop data
//       };
//     };

//     reader.readAsDataURL(file);
//   };

//   const handleSizeSelection = (size) => {
//     setSelectedSize(size);
//     setCropData(null); // Reset crop data when size changes

//     if (cropperRef.current && cropperRef.current.cropper) {
//       cropperRef.current.cropper.setAspectRatio(size.width / size.height); // Update aspect ratio
//     }
//   };

//   const getCropData = () => {
//     if (cropperRef.current && cropperRef.current.cropper) {
//       setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
//     }
//   };

//   const groupedSizes = aspectRatios.reduce((acc, { format, ratio }) => {
//     acc[format] = possibleFrameSizes.filter(size => size.format === format);
//     return acc;
//   }, {});

//   return (
//     <div className="image-frame-cropper">
//       <div className="upload-section">
//         <h2>Upload Image</h2>
//         <input type="file" onChange={handleFileSelect} />
//       </div>

//       {image && possibleFrameSizes.length > 0 && (
//         <div className="frame-size-section">
//           {Object.keys(groupedSizes).map((format) => (
//             <div key={format} className="frame-size-category">
//               <h3>{format} Ratio Sizes</h3>
//               <ul className="frame-size-list">
//                 {groupedSizes[format].map((size, index) => (
//                   <li key={index} className="frame-size-item">
//                     <button onClick={() => handleSizeSelection(size)}>
//                       {size.label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}

//       {selectedSize && (
//         <div className="crop-section">
//           <h3>Crop Image to Fit {selectedSize.label}</h3>
//           <Cropper
//             src={image}
//             style={{ height: 400, width: "100%" }}
//             initialAspectRatio={selectedSize.width / selectedSize.height}
//             guides={false}
//             ref={cropperRef}
//           />
//           <button onClick={getCropData} type="button">
//             Crop Image
//           </button>
//         </div>
//       )}

//       {cropData && (
//         <div className="result-section">
//           <h3>Cropped Image</h3>
//           <img src={cropData} alt="Cropped" style={{ maxwidth: "100%" }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageFrameCropper;

// import React, { useState, useRef, useEffect } from "react";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import "./style.css";

// const aspectRatios = [
//   { format: "3:2", ratio: 3 / 2 },
//   { format: "4:3", ratio: 4 / 3 },
//   { format: "Square", ratio: 1 },
//   { format: "DIN/ISO", ratio: 1.414 }, // Approximate aspect ratio for DIN A4 (8.3x11.7)
//   { format: "16:9", ratio: 16 / 9 }
// ];

// const generateSizes = (ratio, imageWidth, imageHeight, count = 10) => {
//   const sizes = [];
//   const maxSize = Math.min(imageWidth, imageHeight);

//   for (let i = 1; i <= count; i++) {
//     const width = (maxSize / count) * i;
//     const height = width / ratio;

//     if (width <= imageWidth && height <= imageHeight) {
//       sizes.push({
//         width: Math.round(width),
//         height: Math.round(height),
//         label: `${Math.round(width)}x${Math.round(height)}`,
//       });
//     }
//   }

//   return sizes;
// };

// const ImageFrameCropper = () => {
//   const [image, setImage] = useState(null);
//   const [possibleFrameSizes, setPossibleFrameSizes] = useState([]);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [cropData, setCropData] = useState(null);
//   const cropperRef = useRef(null);

//   useEffect(() => {
//     if (cropperRef.current && cropperRef.current.cropper) {
//       cropperRef.current.cropper.setCropBoxData({
//         left: 0,
//         top: 0,
//         width: cropperRef.current.cropper.getContainerData().width,
//         height: cropperRef.current.cropper.getContainerData().height,
//       });
//     }
//   }, [image, selectedSize]);

//   const handleFileSelect = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       const img = new Image();
//       img.src = reader.result;
//       img.onload = () => {
//         const imageWidth = img.width;
//         const imageHeight = img.height;

//         const allSizes = aspectRatios.flatMap(({ format, ratio }) => {
//           return generateSizes(ratio, imageWidth, imageHeight).map(size => ({
//             ...size,
//             format,
//             label: `${size.width}x${size.height}`,
//           }));
//         });

//         setPossibleFrameSizes(allSizes);
//         setImage(reader.result);
//         setSelectedSize(null); // Reset selected size
//         setCropData(null); // Reset crop data
//       };
//     };

//     reader.readAsDataURL(file);
//   };

//   const handleSizeSelection = (size) => {
//     setSelectedSize(size);
//     setCropData(null); // Reset crop data when size changes

//     if (cropperRef.current && cropperRef.current.cropper) {
//       cropperRef.current.cropper.setAspectRatio(size.width / size.height); // Update aspect ratio
//     }
//   };

//   const getCropData = () => {
//     if (cropperRef.current && cropperRef.current.cropper) {
//       setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
//     }
//   };

//   const handleCropMove = () => {
//     if (cropperRef.current && cropperRef.current.cropper) {
//       const cropper = cropperRef.current.cropper;
//       const cropBoxData = cropper.getCropBoxData();
//       const containerData = cropper.getContainerData();

//       // Prevent crop box from going out of bounds
//       if (cropBoxData.left < 0) {
//         cropper.setCropBoxData({ left: 0 });
//       }
//       if (cropBoxData.top < 0) {
//         cropper.setCropBoxData({ top: 0 });
//       }
//       if (cropBoxData.left + cropBoxData.width > containerData.width) {
//         cropper.setCropBoxData({
//           left: containerData.width - cropBoxData.width,
//         });
//       }
//       if (cropBoxData.top + cropBoxData.height > containerData.height) {
//         cropper.setCropBoxData({
//           top: containerData.height - cropBoxData.height,
//         });
//       }
//     }
//   };

//   const groupedSizes = aspectRatios.reduce((acc, { format, ratio }) => {
//     acc[format] = possibleFrameSizes.filter(size => size.format === format);
//     return acc;
//   }, {});

//   return (
//     <div className="image-frame-cropper">
//       <div className="upload-section">
//         <h2>Upload Image</h2>
//         <input type="file" onChange={handleFileSelect} />
//       </div>

//       {image && possibleFrameSizes.length > 0 && (
//         <div className="frame-size-section">
//           {Object.keys(groupedSizes).map((format) => (
//             <div key={format} className="frame-size-category">
//               <h3>{format} Ratio Sizes</h3>
//               <ul className="frame-size-list">
//                 {groupedSizes[format].map((size, index) => (
//                   <li key={index} className="frame-size-item">
//                     <button onClick={() => handleSizeSelection(size)}>
//                       {size.label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}

//       {selectedSize && (
//         <div className="crop-section">
//           <h3>Crop Image to Fit {selectedSize.label}</h3>
//           <Cropper
//             src={image}
//             style={{ height: 400, width: "100%" }}
//             initialAspectRatio={selectedSize.width / selectedSize.height}
//             guides={false}
//             ref={cropperRef}
//             viewMode={1} // Ensure crop box stays within image
//             cropmove={handleCropMove} // Handle crop box movement
//           />
//           <button onClick={getCropData} type="button">
//             Crop Image
//           </button>
//         </div>
//       )}

//       {cropData && (
//         <div className="result-section">
//           <h3>Cropped Image</h3>
//           <img src={cropData} alt="Cropped" style={{ maxwidth: "100%" }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageFrameCropper;

// import React, { useState, useRef } from "react";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import "./style.css";

// const predefinedSizes = [
//   // 3:2 sizes
//   { format: "3:2", size: "6x4", width: 6, height: 4 },
//   { format: "3:2", size: "12x8", width: 12, height: 8 },
//   { format: "3:2", size: "15x10", width: 15, height: 10 },
//   { format: "3:2", size: "18x12", width: 18, height: 12 },
//   { format: "3:2", size: "24x16", width: 24, height: 16 },
//   { format: "3:2", size: "30x20", width: 30, height: 20 },

//   // 4:3 sizes
//   { format: "4:3", size: "8x6", width: 8, height: 6 },
//   { format: "4:3", size: "12x9", width: 12, height: 9 },
//   { format: "4:3", size: "16x12", width: 16, height: 12 },
//   { format: "4:3", size: "20x15", width: 20, height: 15 },
//   { format: "4:3", size: "24x18", width: 24, height: 18 },

//   // Square sizes
//   { format: "Square", size: "5x5", width: 5, height: 5 },
//   { format: "Square", size: "8x8", width: 8, height: 8 },
//   { format: "Square", size: "10x10", width: 10, height: 10 },
//   { format: "Square", size: "15x15", width: 15, height: 15 },
//   { format: "Square", size: "20x20", width: 20, height: 20 },
//   { format: "Square", size: "30x30", width: 30, height: 30 },

//   // Classic Formats sizes
//   { format: "Classic Formats", size: "8x10", width: 8, height: 10 },
//   { format: "Classic Formats", size: "11x14", width: 11, height: 14 },
//   { format: "Classic Formats", size: "16x20", width: 16, height: 20 },
//   { format: "Classic Formats", size: "20x24", width: 20, height: 24 },
//   { format: "Classic Formats", size: "24x30", width: 24, height: 30 },
//   { format: "Classic Formats", size: "30x40", width: 30, height: 40 },

//   // DIN/ISO sizes
//   { format: "DIN/ISO", size: "A5", width: 8.3, height: 5.8 },
//   { format: "DIN/ISO", size: "A4", width: 11.7, height: 8.3 },
//   { format: "DIN/ISO", size: "A3", width: 16.5, height: 11.7 },
//   { format: "DIN/ISO", size: "A2", width: 23.4, height: 16.5 },
//   { format: "DIN/ISO", size: "A1", width: 33.1, height: 23.4 },

//   // 16:9 sizes
//   { format: "16:9", size: "16x9", width: 16, height: 9 },
//   { format: "16:9", size: "24x13.5", width: 24, height: 13.5 },
//   { format: "16:9", size: "32x18", width: 32, height: 18 },
//   { format: "16:9", size: "48x27", width: 48, height: 27 },
//   { format: "16:9", size: "60x33.75", width: 60, height: 33.75 }
// ];

// const ImageFrameCropper = () => {
//   const [image, setImage] = useState(null);
//   const [possibleFrameSizes, setPossibleFrameSizes] = useState([]);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [cropData, setCropData] = useState(null);
//   const cropperRef = useRef(null);

//   const handleFileSelect = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       const img = new Image();
//       img.src = reader.result;
//       img.onload = () => {
//         setPossibleFrameSizes(predefinedSizes);
//         setImage(reader.result);
//         setSelectedSize(null);
//         setCropData(null);
//       };
//     };

//     reader.readAsDataURL(file);
//   };

//   const handleSizeSelection = (size) => {
//     setSelectedSize(size);
//     setCropData(null);

//     if (cropperRef.current && cropperRef.current.cropper) {
//       cropperRef.current.cropper.setAspectRatio(size.width / size.height);
//     }
//   };

//   const getCropData = () => {
//     if (cropperRef.current && cropperRef.current.cropper) {
//       setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
//     }
//   };

//   return (
//     <div className="image-frame-cropper">
//       <div className="upload-section">
//         <h2>Upload Image</h2>
//         <input type="file" onChange={handleFileSelect} />
//       </div>

//       {image && possibleFrameSizes.length > 0 && (
//         <div className="frame-size-section">
//           {["3:2", "4:3", "Square", "Classic Formats", "DIN/ISO", "16:9"].map(
//             (format) => (
//               <div key={format} className="format-section">
//                 <h3>{format} Ratio Sizes</h3>
//                 <ul>
//                   {possibleFrameSizes
//                     .filter((size) => size.format === format)
//                     .map((size, index) => (
//                       <li key={index}>
//                         <button onClick={() => handleSizeSelection(size)}>
//                           {size.size} ({size.width}x{size.height})
//                         </button>
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//             )
//           )}
//         </div>
//       )}

//       {selectedSize && (
//         <div className="crop-section">
//           <h3>Crop Image to Fit {selectedSize.size}</h3>
//           <Cropper
//             src={image}
//             style={{ height: 400, width: "100%" }}
//             initialAspectRatio={selectedSize.width / selectedSize.height}
//             guides={false}
//             ref={cropperRef}
//             viewMode={1}
//             dragMode="move"
//             cropBoxMovable={false}
//             cropBoxResizable={false}
//           />
//           <button onClick={getCropData} type="button">
//             Crop Image
//           </button>
//         </div>
//       )}

//       {cropData && (
//         <div className="result-section">
//           <h3>Cropped Image</h3>
//           <img src={cropData} alt="Cropped" style={{ maxwidth: "100%" }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageFrameCropper;

import React, { useState, useRef, useEffect } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './style.css';

const predefinedSizes = [
  // 3:2 sizes
  { format: '3:2', size: '6x4', width: 6, height: 4 },
  { format: '3:2', size: '12x8', width: 12, height: 8 },
  { format: '3:2', size: '15x10', width: 15, height: 10 },
  { format: '3:2', size: '18x12', width: 18, height: 12 },
  { format: '3:2', size: '24x16', width: 24, height: 16 },
  { format: '3:2', size: '30x20', width: 30, height: 20 },

  // 4:3 sizes
  { format: '4:3', size: '8x6', width: 8, height: 6 },
  { format: '4:3', size: '12x9', width: 12, height: 9 },
  { format: '4:3', size: '16x12', width: 16, height: 12 },
  { format: '4:3', size: '20x15', width: 20, height: 15 },
  { format: '4:3', size: '24x18', width: 24, height: 18 },

  // Square sizes
  { format: 'Square', size: '5x5', width: 5, height: 5 },
  { format: 'Square', size: '8x8', width: 8, height: 8 },
  { format: 'Square', size: '10x10', width: 10, height: 10 },
  { format: 'Square', size: '15x15', width: 15, height: 15 },
  { format: 'Square', size: '20x20', width: 20, height: 20 },
  { format: 'Square', size: '30x30', width: 30, height: 30 },

  // Classic Formats sizes
  { format: 'Classic Formats', size: '8x10', width: 8, height: 10 },
  { format: 'Classic Formats', size: '11x14', width: 11, height: 14 },
  { format: 'Classic Formats', size: '16x20', width: 16, height: 20 },
  { format: '20x24', size: '20x24', width: 20, height: 24 },
  { format: 'Classic Formats', size: '24x30', width: 24, height: 30 },
  { format: 'Classic Formats', size: '30x40', width: 30, height: 40 },

  // DIN/ISO sizes
  { format: 'DIN/ISO', size: 'A5', width: 8.3, height: 5.8 },
  { format: 'DIN/ISO', size: 'A4', width: 11.7, height: 8.3 },
  { format: 'DIN/ISO', size: 'A3', width: 16.5, height: 11.7 },
  { format: 'DIN/ISO', size: 'A2', width: 23.4, height: 16.5 },
  { format: 'DIN/ISO', size: 'A1', width: 33.1, height: 23.4 },

  // 16:9 sizes
  { format: '16:9', size: '16x9', width: 16, height: 9 },
  { format: '16:9', size: '24x13.5', width: 24, height: 13.5 },
  { format: '16:9', size: '32x18', width: 32, height: 18 },
  { format: '16:9', size: '48x27', width: 48, height: 27 },
  { format: '16:9', size: '60x33.75', width: 60, height: 33.75 },
];

const ImageFrameCropper = () => {
  const [image, setImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [cropData, setCropData] = useState(null);
  const cropperRef = useRef(null);

  useEffect(() => {
    if (cropperRef.current && cropperRef.current.cropper) {
      cropperRef.current.cropper.setCropBoxData({
        left: 0,
        top: 0,
        width: cropperRef.current.cropper.getContainerData().width,
        height: cropperRef.current.cropper.getContainerData().height,
      });
    }
  }, [image, selectedSize]);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
      setSelectedSize(null); // Reset selected size
      setCropData(null); // Reset crop data
    };

    reader.readAsDataURL(file);
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    setCropData(null); // Reset crop data when size changes

    if (cropperRef.current && cropperRef.current.cropper) {
      cropperRef.current.cropper.setAspectRatio(size.width / size.height); // Update aspect ratio
    }
  };

  const getCropData = () => {
    if (cropperRef.current && cropperRef.current.cropper) {
      setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
    }
  };

  const handleCropMove = () => {
    if (cropperRef.current && cropperRef.current.cropper) {
      const cropper = cropperRef.current.cropper;
      const cropBoxData = cropper.getCropBoxData();
      const containerData = cropper.getContainerData();

      // Prevent crop box from going out of bounds
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

  const groupedSizes = predefinedSizes.reduce((acc, { format }) => {
    acc[format] = predefinedSizes.filter((size) => size.format === format);
    return acc;
  }, {});

  return (
    <div className="image-frame-cropper">
      <div className="upload-section">
        <h2>Upload Image</h2>
        <input type="file" onChange={handleFileSelect} />
      </div>

      {image && predefinedSizes.length > 0 && (
        <div className="frame-size-section">
          {Object.keys(groupedSizes).map((format) => (
            <div key={format} className="frame-size-category">
              <h3>{format} Ratio Sizes</h3>
              <p className="frame-size-list">
                {groupedSizes[format].map((size, index) => (
                  <li key={index} className="frame-size-item">
                    <button onClick={() => handleSizeSelection(size)}>
                      {size.size}
                    </button>
                  </li>
                ))}
              </p>
            </div>
          ))}
        </div>
      )}

      {selectedSize && (
        <div className="crop-section">
          <h3>Crop Image to Fit {selectedSize.size}</h3>
          <div maxwidth="300" maxheight="3000">
            <Cropper
              src={image}
              style={{ height: '400', width: '30%' }}
              initialAspectRatio={selectedSize.height / selectedSize.width}
              guides={false}
              ref={cropperRef}
              viewMode={1}
              cropmove={handleCropMove}
            />
          </div>
          <button onClick={getCropData} type="button">
            Crop Image
          </button>
        </div>
      )}

      {cropData && (
        <div className="result-section">
          <h3>Cropped Image</h3>
          <img src={cropData} alt="Cropped" style={{ maxwidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default ImageFrameCropper;
