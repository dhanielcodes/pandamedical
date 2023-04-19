import axios from 'axios';

const axiosCustom = () =>
  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: localStorage.getItem('auth_token')
        ? localStorage.getItem('auth_token')
        : null,
    },
  });

export default axiosCustom;
