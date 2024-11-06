import { api } from './api';
import { Constants } from '../utils/constants';

export const uploadAttachment = async (file, setFile, cancelToken) => {
  return api
    .post(Constants?.URL?.uploadFile, file, {
      headers: {
        'content-type': 'multipart/form-data',
      },
      cancelToken: cancelToken.token,
      onUploadProgress: (progressEvent) => {
        const progress = Math.round(
          (progressEvent.loaded / progressEvent.total) * 100
        );
        setFile((prevState) => ({
          ...prevState,
          isUploading: true,
          isUploaded: false,
          progress: progress,
        }));
      },
    })
    .catch((error) => {
      console.log(error);
      setFile((prevState) => ({
        ...prevState,
        isUploading: false,
        isUploaded: false,
      }));
    });
};