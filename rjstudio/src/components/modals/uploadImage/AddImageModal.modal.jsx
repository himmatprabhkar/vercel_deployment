/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setImageUrl } from '../../../slices/uploadImageSlice';
import axios from 'axios';
import { uploadAttachment } from '../../../services/uploadFile.service';
import 'react-image-crop/dist/ReactCrop.css';
import EXIF from 'exif-js';
import './uploadImageStyle.css';

export const AddImageModal = ({ isShow, closeModal, toastCallBack }) => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const [banner, setBanner] = useState({
    isUploading: false,
    isUploaded: false,
    progress: 0,
    url: '',
  });

  const onSubmit = async () => {
    if (banner) {
      toastCallBack(image);
      closeModal();
    }
  };

  const extractDPI = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error('Network response was not ok');

      const blob = await response.blob(); // Get the image as a Blob
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
          EXIF.getData(img, function () {
            const xDPI = EXIF.getTag(this, 'XResolution');
            const yDPI = EXIF.getTag(this, 'YResolution');

            if (xDPI && yDPI) {
              const dpiData = { x: xDPI, y: yDPI };
              dispatch(setImageUrl({ dpi: dpiData }));
            } else {
              console.warn('DPI data not available; using default values');
              const defaultDPI = { x: 96, y: 96 };
              dispatch(setImageUrl({ dpi: defaultDPI }));
            }
          });
        };

        img.onerror = () => {
          console.error('Error loading image for DPI extraction');
        };
      };

      reader.onerror = () => {
        console.error('Error reading file');
      };

      reader.readAsDataURL(blob); // Read the Blob as Data URL
    } catch (error) {
      console.error('Error extracting DPI:', error);
    }
  };

  const getAttachment = async (e) => {
    const selectedFile = e.target.files[0]; // Get the selected file
    if (!selectedFile) return; // Ensure a file is selected

    const cancelToken = axios.CancelToken.source();
    const path = (window.URL || window.webkitURL).createObjectURL(selectedFile);

    setBanner({
      isUploading: true,
      isUploaded: false,
      progress: 0,
      url: path,
    });

    const formData = new FormData();
    formData.append('image', selectedFile);

    const response = await uploadAttachment(formData, setBanner, cancelToken);

    if (response && response.data.url) {
      dispatch(setImageUrl({ url: response.data.url }));
      extractDPI(response.data.url);
      setBanner((prevState) => ({
        ...prevState,
        isUploading: false,
        isUploaded: true,
        progress: 0,
        url: response.data.url,
      }));
    } else {
      setBanner((prevState) => ({
        ...prevState,
        isUploading: false,
        isUploaded: false,
      }));
    }
  };

  useEffect(() => {
    setBanner({
      isUploading: false,
      isUploaded: false,
      progress: 0,
      url: '',
    });
  }, [isShow]);

  const removeImage = () => {
    // document.getElementById('file').value = ""
    setImage(null);
    setBanner({
      isUploading: false,
      isUploaded: false,
      progress: 0,
      url: '',
    });
    setImageName('');
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
        <div className="modal-content p-4">
          <div className="modal-header border-0">
            <span className="modal-title h4 text-p-dark-blue line-height-10">
              Upload Photos
            </span>
            <button
              onClick={() => closeModal(false)}
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body text-center d-flex flex-column gap-3 align-items-center p-5">
            {errorMessage && (
              <div style={{ color: 'red', marginTop: '10px' }}>
                {errorMessage}
              </div>
            )}

            {banner.isUploading ? (
              <div
                className="progress"
                style={{ width: '100%', height: '2rem !important' }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={banner.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${banner.progress}%` }}
                >
                  {banner.progress}%
                </div>
              </div>
            ) : banner.url ? (
              <>
                <span
                  onClick={removeImage}
                  className="bg-icons cursor-pointer-file"
                >
                  <svg
                    fill="#EF4343"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                </span>
                <a href="#">
                  <img
                    className="img-fluid"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '400px',
                      objectFit: 'contain',
                    }}
                    src={banner.url}
                    alt=""
                  />
                </a>
              </>
            ) : (
              <>
                <span>
                  Drag & Drop Your Files Here, or{' '}
                  <label htmlFor="file" className="browse cursor-pointer-file">
                    browse
                  </label>{' '}
                  <input
                    id="file"
                    accept=".jpg,.jpeg,.tif,.tiff"
                    type="file"
                    onChange={getAttachment}
                    style={{ display: 'none' }}
                  />
                </span>
                <p>
                  JPG/TIF, min 700 * 700 px, max 50,000 px or 1,000 MP, max 2GB.
                  We Save uploaded photos in your customer account for 90 days.
                </p>
              </>
            )}
          </div>

          <div className="modal-footer p-2 border-0">
            <button
              type="button"
              className="btn btn-outline-danger btn-lg"
              onClick={closeModal}
            >
              Cancel
            </button>

            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={onSubmit}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
