export const userToUserApi = (data = {}) => ({
  username: data.userName,
  password: data.password,
});
export const userApiToUser = (data = {}) => ({
  userName: data.username,
  password: data.password,
});
