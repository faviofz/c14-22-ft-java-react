export const userToUserApi = (data = {}) => ({
  id: data.id,
  username: data.userName,
  password: data.password,
  email: data.email,
});
export const userApiToUser = (data = {}) => ({
  id: data.id,
  userName: data.username,
  password: data.password,
  email: data.email,
});
