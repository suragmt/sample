import React, { useState } from "react";
import { object } from "yup";
import { Formik } from "formik";
import Styled from "./style";
import "react-datepicker/dist/react-datepicker.css";

const generateAndValidateForm = ({
  initialValues,
  validationSchema,
  ...rest
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema || object().shape({})}
      enableReinitialize
      onSubmit={() => {}}
    >
      {(props) => {
        return <Form {...props} {...rest} />;
      }}
    </Formik>
  );
};

export default generateAndValidateForm;

const Form = ({
  initialValues,
  errors,
  validateForm,
  values,
  handleOnSubmit,
  direction,
  setFieldValue,
  setValues,
  RenderComponent,
  className,
  customProps,
  handleOnCancel,
  ...rest
}) => {
  const [isNotValid, setIsNotvalid] = useState(true);
  const handleEdit = (event, source) => {
    let value = event;
    if (source?.callback) {
      source.callback({ ...source, value });
    }
    setFieldValue(source?.field, value);
  };

  const getFieldValues = (source) => {
    const result = {};
    Object.keys(source).map((key) => {
      return (result[key] = source[key]);
    });
    return result;
  };

  return (
    <Styled.FormWrapper direction={direction} className={className}>
      <RenderComponent
        values={values}
        handleEdit={handleEdit}
        errors={errors}
        isNotValid={isNotValid}
        validateForm={validateForm}
        {...rest}
        onClear={() => {
          setValues({ ...initialValues });
        }}
        cancelAction={() => handleOnCancel()}
        customProps={customProps}
        submitAction={(data) => {
          if (Object.keys(data).length === 0) {
            setIsNotvalid(true);

            handleOnSubmit(getFieldValues(values));
          } else {
            setIsNotvalid(false);
          }
        }}
      />
    </Styled.FormWrapper>
  );
};
