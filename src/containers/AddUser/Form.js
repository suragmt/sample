import React, { lazy } from "react";
import PropTypes from "prop-types";
import { object, string } from "yup";
import RenderComponent from "./RenderComponent";
import Form from "../../Components/Form";
import { setLocalStorage } from "../../services/storage";
const LoginForm = ({ Styled, login }) => {
  return (
    <Styled.LoginWrapper>
      <div className="formLogin">
        <Form
          type="server"
          direction="column"
          initialValues={{
            gender: "",
            title: "",
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            dob: "",
            phone: "",
          }}
          RenderComponent={RenderComponent}
          handleOnSubmit={(fields) => {}}
          customProps={{
            // hasLoginApiStatus,
            // history,
            login,
            Styled,
          }}
          validationSchema={object().shape({
            username: string().required("required"),
            password: string().required("required"),
            gender: string().required("required"),
            title: string().required("required"),
            firstName: string().required("required"),
            lastName: string().required("required"),
            email: string().required("required"),
            dob: string().required("required"),
            phone: string().required("required"),
          })}
        />
      </div>
    </Styled.LoginWrapper>
  );
};
export default LoginForm;
