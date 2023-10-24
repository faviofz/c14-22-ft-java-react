import { httpClient } from '@/utils/';

export function serviceLogin(loginUser) {
  return new Promise((resolve, reject) => {
    httpClient
      .post('/login', loginUser)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

export function serviceSignUp(newUser) {
  return new Promise((resolve, reject) => {
    httpClient
      .post('/login', newUser)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}
