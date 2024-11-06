import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setImageStatus } from '../../slices/imageStatusSlice';
import { setImageCustomSizeZoom } from '../../slices/imageCustomSizesSlice';

export const CustomSize = () => {
  const [widthHeight, setErrorHeight] = useState(false);
  const [widthError, setErrorWidth] = useState(false);

  const dispatch = useDispatch();

  const setImageSize = (e) => {
    const { name, value } = e.target;

    if (validateSize(name, value)) {
      dispatch(setImageCustomSizeZoom({ [name]: value }));
    }
  };

  const validateSize = (name, value) => {
    if (name === 'imageCustomWidth' && value > 40) {
      setErrorHeight(true);
      return false;
    } else {
      setErrorHeight(false);
    }

    if (name === 'imageCustomHeight' && value > 40) {
      setErrorWidth(true);
      return false;
    } else {
      setErrorWidth(false);
    }

    return true;
  };

  return (
    <>
      <div className="col-lg-5">
        <div>
          {' '}
          <button
            onClick={() => dispatch(setImageStatus({ imageStatus: 0 }))}
            className="btn btn-primary"
          >
            Back
          </button>
        </div>

        <div className="d-flex flex-column gap-3">
          <div className="uploaded-title text-center">
            Choose your custom size
          </div>
          <p className="text-center text-dark ">
            We adapt these formats to the aspect ratio of your photo always
            perfectly fitting.
          </p>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <div className="orientation-btn d-flex flex-column gap-2 align-items-center">
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label for="text" className="col-form-label">
                  Width
                </label>
              </div>
              <div className="col-auto">
                <input
                  className={`form-control ${widthHeight ? 'is-invalid' : ''}`}
                  name="imageCustomWidth"
                  onChange={(e) => setImageSize(e)}
                  type="number"
                  placeholder=" Enter width in inch"
                  id=""
                  aria-describedby="passwordHelpInline"
                />
              </div>
            </div>
          </div>
          <div className="rotate-btn d-flex flex-column gap-2 align-items-center">
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label for="text" className="col-form-label">
                  Height
                </label>
              </div>
              <div className="col-auto">
                <input
                  className={`form-control ${widthError ? 'is-invalid' : ''}`}
                  name="imageCustomHeight"
                  onChange={(e) => setImageSize(e)}
                  type="number"
                  placeholder=" Enter hright in inch"
                  id=""
                  aria-describedby="passwordHelpInline"
                />
              </div>
            </div>
          </div>
        </div>
        <a
          onClick={() => dispatch(setImageStatus({ imageStatus: 3 }))}
          className="select-size-btn m-auto mt-5 mx-5 bg-dark d-block text-center p-3  rounded text-white"
        >
          Next: Select Size
        </a>
      </div>
    </>
  );
};
