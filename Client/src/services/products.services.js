import { httpClient } from '@/utils/';

// CREATE
export function serviceCreateProduct(newProduct) {
  console.log(newProduct,"data")
  return new Promise((resolve, reject) => {
    httpClient
      .post(`/productos`, newProduct)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// READ
export function serviceGetAllProducts() {
  return new Promise((resolve, reject) => {
    httpClient
      .get('/productos')
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

export function serviceGetProduct(id) {
  return new Promise((resolve, reject) => {
    httpClient
      .get(`/productos/${id}`)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}

// // UPDATE
// export function serviceUpdateProduct(id, modifiedProduct) {
//   return new Promise((resolve, reject) => {
//     httpClient
//   .put(`/productos/${id}`, modifiedProduct)
//   .then(({ data }) => resolve(data))
//   .catch(error => reject(new Error(error)));
//   });
// }

// * DELETE
export function serviceDeleteProduct(id) {
  return new Promise((resolve, reject) => {
    httpClient
      .delete(`/productos/${id}`)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}
