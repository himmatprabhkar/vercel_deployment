import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({ message, type }) => {
  useEffect(() => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'warning':
        toast.warning(message);
        break;
      default:
        toast.info(message);
    }
  }, [message, type]);
  return null;
};

export default Toast;
