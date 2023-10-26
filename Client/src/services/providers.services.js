import { httpClient } from '@/utils/';

// CREATE
export function serviceCreateProvider(newProvider) {
  return new Promise((resolve, reject) => {
    httpClient
      .post(`/proveedores`, newProvider)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// READ
export function serviceGetAllProviders() {
  return new Promise((resolve, reject) => {
    httpClient
      .get('/proveedores')
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

export function serviceGetProvider(id) {
  return new Promise((resolve, reject) => {
    httpClient
      .get(`/proveedores/${id}`)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// DELETE
export function serviceDeleteProvider(id) {
  return new Promise((resolve, reject) => {
    httpClient
      .delete(`/proveedores/${id}`)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// // UPDATE
// export function serviceUpdateProvider(id, modifiedProvider) {
//   return new Promise((resolve, reject) => {
//     httpClient
//   .put(`/proveedores/${id}`, modifiedProvider)
//   .then(({ data }) => resolve(data))
//   .catch(error => reject(new Error(error)));
//   });
// }
