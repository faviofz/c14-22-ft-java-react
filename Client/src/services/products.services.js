import { httpClient } from '@/utils/';

// CREATE
export function createProduct(product) {
  return new Promise((resolve, reject) => {
    httpClient
      .post(`/productos`, product)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// READ
export function getAllProducts() {
  return new Promise((resolve, reject) => {
    httpClient
      .get('/productos')
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

export function getProductById(id) {
  return new Promise((resolve, reject) => {
    httpClient
      .get(`/productos/${id}`)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// // UPDATE
// export function updateProductById(id, product) {
//   return new Promise((resolve, reject) => {
//     throw new Error('Implement getProductById');
//   });
// }

// DELETE
export function deleteProductById(id) {
  return new Promise((resolve, reject) => {
    httpClient
      .delete(`/productos/${id}`)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}
