import React, { useEffect } from "react";
import { connect } from "react-redux";
import Styled from "./style";
import AddUserForm from "./Form";

const AddUsser = (props) => {
  return <AddUserForm Styled={Styled} />;
};

const mapState = (state) => {
  return { login: state.user };
};

const mapDispatch = (dispatch) => {
  return {
    fetchLogin: (data) => dispatch.login.fetchData(data),
  };
};
AddUsser.propTypes = {};
export default connect(mapState, mapDispatch)(AddUsser);
