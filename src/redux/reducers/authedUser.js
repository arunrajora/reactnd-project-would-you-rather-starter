import { AUTHENTCATE_USER, LOGOUT_USER } from "../actionsTypes";

const authedUser = (state = null, action) => {
  switch (action.type) {
    case AUTHENTCATE_USER:
      return action.id;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

export default authedUser;
