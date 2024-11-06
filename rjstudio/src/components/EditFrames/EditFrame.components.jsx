import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setImageStatus } from '../../slices/imageStatusSlice';
import { FrameDives } from '../FrameDives/FrameDives.component';
import thumbnailFrame from '../../assets/images/BackgroundImage/thumbnail-Frame.png';

export const EditFrame = () => {
  const [isSelected, setIsSelected] = useState(0);
  const dispatch = useDispatch();

  const handleBackButtonClick = () => {
    if (isSelected) {
      setIsSelected(0);
    } else {
      dispatch(setImageStatus({ imageStatus: 1 }));
    }
  };

  const handleFrameSelection = (index) => {
    setIsSelected(index);
  };

  const frameSizes = [
    { size: 0.8, label: 'Hamburg 0.8' },
    { size: 1, label: 'Hamburg 1.0' },
    { size: 1.5, label: 'Hamburg 1.5' },
    { size: 2, label: 'Hamburg 2.0' },
    { size: 3, label: 'Hamburg 3.0' },
  ];

  return (
    <>
      <div className="col-lg-5 mx-auto">
        <div className="d-flex flex-column gap-3 mt-4 text-center">
          <div className="uploaded-title">Choose your frame</div>
          <p className="text-dark">
            We adapt these formats to the aspect ratio of your photo, always
            perfectly fitting.
          </p>
        </div>
        <div className="row justify-content-center">
          <div>
            <button
              onClick={handleBackButtonClick}
              className="btn btn-primary mb-3"
            >
              Back
            </button>
          </div>

          {isSelected > 0 ? (
            <>
              <FrameDives selectedFrameSet={isSelected} />
            </>
          ) : (
            <>
              {frameSizes.map((frame, index) => (
                <div
                  key={index}
                  className="col-4 d-flex flex-column align-items-center"
                >
                  <div
                    className="card mt-3"
                    style={{
                      height: 120,
                      width: 120,
                      background: '#f8f9fa',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onClick={() => handleFrameSelection(index + 1)}
                  >
                    <img
                      src={thumbnailFrame}
                      alt={frame.label}
                      style={{
                        height: '80%',
                        width: '80%',
                        objectfit: 'cover',
                      }}
                    />
                  </div>
                  <span className="mt-2 text-center">{frame.label}</span>
                </div>
              ))}
            </>
          )}
        </div>
        <a
          onClick={() => dispatch(setImageStatus({ imageStatus: 4 }))}
          className="select-size-btn m-auto mt-5 bg-dark d-block text-center p-3 rounded text-white"
        >
          Next: Select Motif Size
        </a>
      </div>
    </>
  );
};
