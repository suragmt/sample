import styled from "styled-components";
import { Form } from "formik";
import Box from "@mui/material/Box";

const FormWrapper = styled(Form)`
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flexbox;
  display: flex;
  flex-direction: column;
  flex-wrap: "no-wrap";
  justify-content: space-between;
  .ButtonHolder {
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flexbox;
    display: flex;
    justify-content: flex-end;
  }
  .MuiTypography-h1 {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .MuiButtonBase-root {
    width: 100%;
    color: #fff;
    font-size: 23px;
    border-radius: 0px;
  }
`;

const FieldsWrapper = styled(Box)`
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flexbox;
  display: flex;
  margin-bottom: 18px;
`;
const TextWrapper = styled(Box)`
  flex: 0 0 75%;
`;

const ButtonsWrapper = styled(Box)`
  justify-content: flex-end;
  display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flexbox;
  display: flex; 

  .MuiButtonBase-root {  
    margin-top: 20px;
    padding: 1px 30px;
    font-size: 23px;
    height: 45px;
    background: #bdd731;
  }

`;

const FormStyle = {
  ButtonsWrapper,
  FieldsWrapper,
  TextWrapper,
  FormWrapper,
};

export default FormStyle;
