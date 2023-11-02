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
      .post('/signup', newUser)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

export function serviceGetUser() {
  return new Promise((resolve, reject) => {
    httpClient
      .get('/user')
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

export function serviceUpdateUser(newUser) {
  return new Promise((resolve, reject) => {
    httpClient
      .put('/user', newUser)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

export function serviceResetPassword(email) {
  return new Promise((resolve, reject) => {
    httpClient
      .post(`/resetPassword?email=${email}`)
      .then(() => resolve(true))
      .catch(error => reject(new Error(error)));
  });
}

export function serviceChangePassword({ password, email, token }) {
  return new Promise((resolve, reject) => {
    httpClient
      .post(`/changePassword?email=${email}&token=${token}`, { password })
      .then(() => resolve(true))
      .catch(error => reject(new Error(error)));
  });
}
