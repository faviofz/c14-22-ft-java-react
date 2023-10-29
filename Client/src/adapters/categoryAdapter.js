// objeto que enviamos al API
export const categoryToCategoryApi = (data = {}) => ({
  id: data.id,
  nombre: data.name,
});
// objeto como lo usamos en la APP
export const categoryApiToCategory = (data = {}) => ({
  id: data.id,
  name: data.nombre,
});

export const categoryApiListToCategoryList = list =>
  list.map(item => categoryApiToCategory(item));
