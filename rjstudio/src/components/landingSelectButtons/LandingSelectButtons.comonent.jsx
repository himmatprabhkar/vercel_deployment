import React from 'react';
import { useDispatch } from 'react-redux';
import { setImageStatus } from '../../slices/imageStatusSlice';

export const LandingSelectButtons = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="col-lg-5">
        <div className="d-flex flex-column gap-3">
          <div className="uploaded-title text-center">
            Looking good! <br /> Want to make any edits?
          </div>
          <p className="text-center text-dark ">
            Now’s the time to crop or enhance your photo if you’d like.
          </p>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <div className="orientation-btn d-flex flex-column gap-2 align-items-center">
            <svg
              onClick={() => dispatch(setImageStatus({ imageStatus: 1 }))}
              className="cursor-pointer-file"
              height="20"
              viewBox="0 0 48 48"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h48v48h-48z" fill="none" />
              <path d="M34 30h4v-16c0-2.21-1.79-4-4-4h-16v4h16v16zm-20 4v-32h-4v8h-8v4h8v20c0 2.21 1.79 4 4 4h20v8h4v-8h8v-4h-32z" />
            </svg>
            <span className="fs-14">Image Sizes</span>
          </div>

          <div className="brighten-btn d-flex flex-column gap-2 align-items-center">
            <svg
              onClick={() => dispatch(setImageStatus({ imageStatus: 2 }))}
              className="cursor-pointer-file"
              height="20"
              viewBox="0 0 48 48"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h48v48h-48z" fill="none" />
              <path d="M34 30h4v-16c0-2.21-1.79-4-4-4h-16v4h16v16zm-20 4v-32h-4v8h-8v4h8v20c0 2.21 1.79 4 4 4h20v8h4v-8h8v-4h-32z" />
            </svg>
            <span className="fs-14">Custom Size</span>
          </div>

          <div className="rotate-btn d-flex flex-column gap-2 align-items-center">
            <svg
              onClick={() => dispatch(setImageStatus({ imageStatus: 3 }))}
              className="cursor-pointer-file"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="fs-14">Frame Profile</span>
          </div>

          <div className="rotate-btn d-flex flex-column gap-2 align-items-center">
            <svg
              onClick={() => dispatch(setImageStatus({ imageStatus: 4 }))}
              className="cursor-pointer-file"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="fs-14"> Motif border</span>
          </div>
        </div>
        {/* <a onClick={() => navigate("/edit-frame")} className="select-size-btn m-auto mt-5 mx-5 bg-dark d-block text-center p-3  rounded text-white">Next: Select Size</a> */}
      </div>
    </>
  );
};
