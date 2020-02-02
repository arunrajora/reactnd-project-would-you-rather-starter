import { connect } from 'react-redux';

import Login from '../components/Login';
import { authenticateUser } from '../redux/actions/authedUser';

const mapStateToProps = ({ users, authedUser }) => ({
  users: Object.values(users).map(({ id, name, avatarURL }) => ({
    id,
    name,
    avatarURL
  })),
  isAuthenticated: authedUser !== null
});

const mapDispatchToProps = { authenticateUser };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
