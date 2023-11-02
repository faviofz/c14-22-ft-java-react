import { httpClient } from '@/utils/';

const path = '/movimientos';

// READ
export function serviceGetAllMovements() {
  return new Promise((resolve, reject) => {
    httpClient
      .get(path)
      .then(({ data }) => resolve(data))
      .catch(error => reject(new Error(error)));
  });
}
