import { connect } from "react-redux";

import { NavigationBar } from "../components";
import { logoutUser } from "../redux/actions/authedUser";

const mapStateToProps = ({ users, authedUser }) => ({
  isAuthenticated: authedUser !== null,
  userName: authedUser && users[authedUser].name
});

const mapDispatchToProps = {
  logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
