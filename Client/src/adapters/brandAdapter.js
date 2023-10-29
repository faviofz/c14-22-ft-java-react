// objeto que enviamos al API
export const brandToBrandApi = (data = {}) => ({
  id: data.id,
  nombre: data.name,
});
// objeto como lo usamos en la APP
export const brandApiToBrand = (data = {}) => ({
  id: data.id,
  name: data.nombre,
});

export const brandApiListToBrandList = list =>
  list.map(item => brandApiToBrand(item));
