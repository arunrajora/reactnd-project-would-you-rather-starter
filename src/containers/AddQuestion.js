import { connect } from "react-redux";

import { AddQuestion } from "../components";
import { handleCreateQuestion } from "../redux/actions/shared";

const mapStateToProps = ({authedUser}) => ({authedUser});

const mapDispatchToProps = { handleCreateQuestion };

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
