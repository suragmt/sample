import React, { useEffect } from "react";
import { connect } from "react-redux";
import Styled from "./style";
import LoginForm from "./Form";

const Login = ({ fetchLogin, login, ...rest }) => {
  return (
    <Styled.Wrapper>
      <div className="loginformwrap">
        <LoginForm Styled={Styled} fetchLogin={fetchLogin} login={login} />
      </div>
    </Styled.Wrapper>
  );
};

const mapState = (state) => {
  return { login: state.login };
};

const mapDispatch = (dispatch) => {
  return {
    fetchLogin: (data) => dispatch.login.fetchData(data),
  };
};
Login.propTypes = {};
export default connect(mapState, mapDispatch)(Login);
