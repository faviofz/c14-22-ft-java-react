import { httpClient } from '@/utils/';

const path = 'marcas';

// CREATE
export function serviceCreateBrand(newBrand) {
  return new Promise((resolve, reject) => {
    httpClient
      .post(path, newBrand)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// READ
export function serviceGetAllBrands() {
  return new Promise((resolve, reject) => {
    httpClient
      .get(path)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

export function serviceGetBrand(id) {
  return new Promise((resolve, reject) => {
    httpClient
      .get(`${path}/${id}`)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// UPDATE
export function serviceUpdateBrand(modifiedBrand) {
  return new Promise((resolve, reject) => {
    httpClient
      .put(`${path}/${modifiedBrand.id}`, modifiedBrand)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// DELETE
export function serviceDeleteBrand(id) {
  return new Promise((resolve, reject) => {
    httpClient
      .delete(`${path}/${id}`)
      .then(() => resolve(id))
      .catch(error => reject(new Error(error)));
  });
}
