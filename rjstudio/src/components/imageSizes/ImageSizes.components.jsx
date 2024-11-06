import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setImageStatus } from '../../slices/imageStatusSlice';
import { setImageSize } from '../../slices/imageSizesSlice';
import { getSizesAndPrice } from '../../services/imageSize.service';
import { triggerGetCropData } from '../../slices/uploadImageSlice';

export const ImageSizes = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const zoom = useSelector((state) => state.imageSize.imageSize);
  const imageType = useSelector((state) => state.uploadImage.imageType);

  // Fetch sizes data from API
  const callApi = async () => {
    const getResult = await getSizesAndPrice(imageType);
    if (getResult) {
      setData(getResult?.data?.getSizes);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  const setOrderValues = (ele) => {
    dispatch(setImageSize({ sizeDetails: ele }));
  };

  const handleClick = () => {
    dispatch(setImageStatus({ imageStatus: 3 }));
    dispatch(triggerGetCropData());
  };

  return (
    <div className="col-lg-5">
      <div>
        <button
          onClick={() => dispatch(setImageStatus({ imageStatus: 0 }))}
          className="btn btn-primary"
        >
          Back
        </button>
      </div>

      <div className="d-flex flex-column gap-3">
        <div className="uploaded-title text-center">Choose your size</div>
        <p className="text-center text-dark">
          We adapt these formats to the aspect ratio of your photo always
          perfectly fitting.
        </p>
      </div>

      <div className="accordion" id="accordionExample">
        {data.map((format, index) => (
          <div className="accordion-item" key={format._id}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {format.format}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {format.sizes.map((size) => (
                  <div
                    key={size.sizeName}
                    style={{
                      backgroundColor: size.sizeName === zoom ? '#B3D7FE' : '',
                    }}
                    onClick={() => setOrderValues(size)}
                    className="d-flex justify-content-between mx-4 ratio-item p-2 cursor-pointer-file"
                  >
                    <div className="ratio-img">{size.sizeName}</div>
                    <div className="price fw-bold">${size.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex flex-column gap-3 mt-3">
        <a
          onClick={() => dispatch(setImageStatus({ imageStatus: 2 }))}
          className="custom-size text-black m-auto mx-5 d-block text-center p-3 rounded"
        >
          Select Custom Size
        </a>
        <a
          onClick={() => handleClick()}
          className="select-size-btn size-btn m-auto mx-5 d-block text-center p-3 rounded text-white"
        >
          Next: Select Frame
        </a>
      </div>
    </div>
  );
};
