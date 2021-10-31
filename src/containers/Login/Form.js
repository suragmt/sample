import React, { lazy } from "react";
import PropTypes from "prop-types";
import { object, string } from "yup";
import RenderComponent from "./RenderComponent";
import Form from "../../Components/Form";
import { setLocalStorage } from "../../services/storage";
const LoginForm = ({ Styled, fetchLogin, login }) => {
  return (
    <Styled.LoginWrapper>
      <div className="formLogin">
        <Form
          type="server"
          direction="column"
          initialValues={{ username: "", password: "" }}
          RenderComponent={RenderComponent}
          handleOnSubmit={(fields) => {
            fetchLogin({
              data: fields,
              callback: (out) => {
                setLocalStorage("loggedIn", out);
                let redirectUrl = "/";
                window.location.href = redirectUrl;
              },
            });
          }}
          customProps={{
            // hasLoginApiStatus,
            // history,
            login,
            Styled,
          }}
          validationSchema={object().shape({
            username: string().required("required"),
            password: string().required("required"),
          })}
        />
      </div>
    </Styled.LoginWrapper>
  );
};
export default LoginForm;
