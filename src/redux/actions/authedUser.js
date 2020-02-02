import { AUTHENTCATE_USER, LOGOUT_USER } from '../actionsTypes';

export const authenticateUser = id => ({
  id,
  type: AUTHENTCATE_USER
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});
