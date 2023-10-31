import { httpClient } from '@/utils/';

const path = '/categorias';

// CREATE
export function serviceCreateCategory(newCategory) {
  return new Promise((resolve, reject) => {
    httpClient
      .post(path, newCategory)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// READ
export function serviceGetAllCategories() {
  return new Promise((resolve, reject) => {
    httpClient
      .get(path)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

export function serviceGetCategory(id) {
  return new Promise((resolve, reject) => {
    httpClient
      .get(`${path}/${id}`)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// UPDATE
export function serviceUpdateCategory(modifiedCategory) {
  return new Promise((resolve, reject) => {
    httpClient
      .put(`${path}/${modifiedCategory.id}`, modifiedCategory)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// DELETE
export function serviceDeleteCategory(id) {
  return new Promise((resolve, reject) => {
    httpClient
      .delete(`${path}/${id}`)
      .then(() => resolve(id))
      .catch(error => reject(new Error(error)));
  });
}
