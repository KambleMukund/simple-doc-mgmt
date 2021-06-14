import axios from 'axios';
import { toast } from 'react-toastify';

export const DATA_FORMAT = 'dd MMMM yyyy HH:mm';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const displayErrorToast = (msg) => {
  return toast.error(msg, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const displayWarningToast = (msg) => {
  return toast.warn(msg, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const displaySuccessToast = (msg) => {
  return toast.success(msg, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const allowUploadTypes = {
  'application/pdf': 'pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    'docx',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
  'application/vnd.ms-excel.sheet.macroEnabled.12': 'xlsm',
};

export const ICON_COLOR = 'white';
