import React, { useState } from 'react';

export const ShowImageModal = ({ isShow, closeModal, getImage }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom * 1.2);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => prevZoom / 1.2);
  };

  const onCenter = () => {
    setZoomLevel(1);
  };

  const editSize = (size) => {
    setZoomLevel(size / 100);
  };

  return (
    <div
      className={`overflow-auto modal fade ${isShow && 'show'}`}
      id="add"
      role="dialog"
      aria-modal="true"
      style={{ display: isShow ? 'block' : 'none' }}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <button
              onClick={() => closeModal(false)}
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div
              className="row border border-primary mb-3 d-flex justify-content-center align-items-center text-center"
              style={{ height: '300px' }}
            >
              {getImage && (
                <div style={{ backgroundColor: 'ButtonHighlight' }}>
                  <img
                    height={200}
                    style={{
                      transition: 'all 0.8s',
                      transform: `scale(${zoomLevel})`,
                    }}
                    src={getImage}
                    alt="Selected Image"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="modal-footer p-2">
            <button className="btn btn-primary" onClick={() => editSize(4)}>
              4x4
            </button>
            <button className="btn btn-primary" onClick={() => editSize(8)}>
              8x8
            </button>
            <button className="btn btn-primary" onClick={() => editSize(12)}>
              12x12
            </button>
            <button className="btn btn-primary" onClick={() => editSize(16)}>
              16x16
            </button>
            <button className="btn btn-primary" onClick={onCenter}>
              Center
            </button>
            <button className="btn btn-primary" onClick={handleZoomIn}>
              Zoom In
            </button>
            <button className="btn btn-primary" onClick={handleZoomOut}>
              Zoom Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
