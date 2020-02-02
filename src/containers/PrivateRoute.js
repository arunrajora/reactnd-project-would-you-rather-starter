import { connect } from 'react-redux';

import PrivateRoute from '../components/PrivateRoute';

const mapStateToProps = ({ authedUser }) => ({
  isAuthenticated: authedUser !== null
});

export default connect(mapStateToProps)(PrivateRoute);
