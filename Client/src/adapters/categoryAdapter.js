export const categoryToApiCategory = (data = {}) => ({
  id: data.id,
  nombre: data.name,
});

export const categoryApiToCategory = (data = {}) => ({
  id: data.id,
  nombre: data.nombre,
});

export const categoryApiListToCategoryList = list =>
  list.map(item => categoryApiToCategory(item));
