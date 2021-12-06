import axios from 'axios';

export const client = axios.create({});

const handleSuccess = (response) => response || null;

const handleError = (error) => {
  if (error.response) {
    console.error('Error response:', error.response);
  } else {
    console.error('Error message:', error.message);
  }
  return Promise.reject(error.response || error.message);
};

const request = (options) => client(options).then(handleSuccess).catch(handleError);

export default request;
