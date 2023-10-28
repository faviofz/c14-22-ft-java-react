// objeto que enviamos al API
export const providerToProviderApi = (data = {}) => ({
  id: data.id ?? 0,
  nombre: data.name,
  empresa: data.company,
  email: data.email,
  telefono: data.phone,
});
// objeto como lo usamos en la APP
export const providerApiToProvider = (data = {}) => ({
  id: data.id,
  name: data.nombre,
  company: data.empresa,
  email: data.email,
  phone: data.telefono,
});

export const providerApiListToProviderList = list =>
  list.map(item => providerApiToProvider(item));
