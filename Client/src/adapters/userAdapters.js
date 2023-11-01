export const userToUserApi = (data = {}) => ({
  id: data.id,
  nombre: data.name,
  apellido: data.surname,
  username: data.userName,
  password: data.password,
  email: data.email,
  url: data.url
});
export const userApiToUser = (data = {}) => ({
  id: data.id,
  name: data.nombre,
  surname: data.apellido,
  userName: data.username,
  password: data.password,
  email: data.email,
  url: data.url
});
