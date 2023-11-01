import axios from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

httpClient.interceptors.request.use(
  config => {
    const token = JSON.parse(localStorage.getItem('userLogger'))?.token ?? null;

    if (token) {
      const newHeaders = {
        authorization: `${token}`,
        'Content-Type': 'application/json',
      };
      config.headers = newHeaders;
    }

    return config;
  },
  error => Promise.reject(error)
);

/**
 * * RESPONSE INTERCEPTOR
 */
httpClient.interceptors.response.use(
  response => response,
  error => {
    // if (error.response.status === 500) window.location.replace("/");
    if (
      error.response.request.status === 401 &&
      JSON.parse(localStorage.getItem('userLogger'))?.token
    ) {
      setTimeout(() => {
        localStorage.setItem('userLogger', JSON.stringify(null));
        localStorage.setItem('isLogged', JSON.stringify(false));
        window.location.href = '/';
      }, 2000);
    }

    return Promise.reject(error);
  }
);
