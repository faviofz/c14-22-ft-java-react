import { httpClient } from '@/utils/';

const path = '/proveedores';

// CREATE
export function serviceCreateProvider(newProvider) {
  return new Promise((resolve, reject) => {
    httpClient
      .post(path, newProvider)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// READ
export function serviceGetAllProviders() {
  return new Promise((resolve, reject) => {
    httpClient
      .get(path)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

export function serviceGetProvider(id) {
  return new Promise((resolve, reject) => {
    httpClient
      .get(`${path}/${id}`)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// UPDATE
export function serviceUpdateProvider(modifiedProvider) {
  return new Promise((resolve, reject) => {
    httpClient
      .put(`${path}/${modifiedProvider.id}`, modifiedProvider)
      .then(() => resolve(modifiedProvider))
      .catch(error => reject(new Error(error)));
  });
}

// DELETE
export function serviceDeleteProvider(id) {
  return new Promise((resolve, reject) => {
    httpClient
      .delete(`${path}/${id}`)
      .then(() => resolve(id))
      .catch(error => reject(new Error(error)));
  });
}
