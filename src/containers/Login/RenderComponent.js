import React, { lazy } from "react";
import PropTypes from "prop-types";

import { Field } from "formik";

import FormStyle from "../../Components/Form/style";
import Label from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
const Input = lazy(() => import(`../../Components/Input`));
const RenderComponent = ({
  values,
  handleEdit,
  errors,
  isNotValid,
  validateForm,
  customProps: { Styled, login },
  submitAction,
}) => {
  return (
    <>
      <Styled.LoginHeader>
        <h1>Login</h1>
      </Styled.LoginHeader>
      {login.error && (
        <Styled.Message>Invalid username/password</Styled.Message>
      )}
      <Styled.userNameWrapper>
        <FormStyle.FieldsWrapper width="100%">
          <Label mode="light" className="labelSize">
            Email
          </Label>
          <FormStyle.TextWrapper mode="light">
            <Field
              name="username"
              handleOnChange={(event) =>
                handleEdit(event, { field: "username", type: "username" })
              }
              as={Input}
              mode="light"
              placeholder="Email or Employee Id"
              value={values.username}
              type="text"
            />
            {errors["username"] && !isNotValid && (
              <Styled.Message>{errors["username"]}</Styled.Message>
            )}
          </FormStyle.TextWrapper>
        </FormStyle.FieldsWrapper>
      </Styled.userNameWrapper>
      <Styled.passwordWrapper>
        <FormStyle.FieldsWrapper width="100%">
          <Label mode="light">password</Label>
          <FormStyle.TextWrapper>
            <Field
              name="password"
              handleOnChange={(event) =>
                handleEdit(event, { field: "password", type: "password" })
              }
              as={Input}
              mode="light"
              placeholder="password"
              value={values.password}
              type="password"
            />
            {errors["password"] && !isNotValid && (
              <Styled.Message>{errors.password}</Styled.Message>
            )}
          </FormStyle.TextWrapper>
        </FormStyle.FieldsWrapper>
      </Styled.passwordWrapper>
      <Styled.LoginButtonWrapper>
        <FormStyle.ButtonsWrapper>
          <Button
            type="submit"
            onClick={() => {
              const validateResponse = validateForm();
              validateResponse.then((data) => {
                submitAction(data);
              });
            }}
          >
            Log In
          </Button>
        </FormStyle.ButtonsWrapper>
      </Styled.LoginButtonWrapper>
    </>
  );
};

export default RenderComponent;

RenderComponent.propTypes = {
  values: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isNotValid: PropTypes.bool.isRequired,
  customProps: PropTypes.object.isRequired,
  validateForm: PropTypes.func.isRequired,
  submitAction: PropTypes.func.isRequired,
};
