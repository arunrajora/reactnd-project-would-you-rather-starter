import { LOAD_USERS } from "../actionsTypes";

const users = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.users;
    default:
      return state;
  }
};

export default users;
