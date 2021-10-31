import styled from "styled-components";
import Box from "@mui/material/Box";
import img from "../../assets/images/clutchLogin.png";
import Label from "@mui/material/FormLabel";

const Wrapper = styled.div`
  background-image: url(${img});
  background-position: center;
  background-color: rgba(248, 248, 241, 0.2);
  background-size: cover;

  width: 100%;
  background-repeat: no-repeat;
  .loginformwrap {
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flexbox;
    display: flex;
    max-width: 450px;
    margin: 0 auto;
    min-height: 100vh;
    position: relative;
  }

  .MuiInputBase-root,
  input {
    background-color: #fff !important;
    color: #000 !important;
  }

  .MuiFormLabel-root {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 10px;
  }
`;
const LoginWrapper = styled.div`
  width: 100%;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .formLogin {
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.02);
    background: #fff;
    padding: 5% 10%;
    border-radius: 3px;
  }
  .buttonWrapper {
    margin-top: 1%;
    width: 50% !important;
    margin-left: 37% !important;
  }
  .loginForm {
    flex: 0 0 85%;
  }
`;

const LoginHeader = styled(Box)`
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flexbox;
  display: flex;
  flex-direction: column;
`;

const userNameWrapper = styled.div`
  margin-bottom: 10px;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    margin-bottom: 53px;
  }
  .MuiFormLabel-root {
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      padding-bottom: 26px !important;
    }
  }
  .MuiBox-root:first-child {
    flex-direction: column;
  }

  .MuiInputBase-root {
    height: 41px;
    margin-bottom: 0;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;
const passwordWrapper = styled.div`
  margin-bottom: 10px;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE10+ CSS styles go here */
    margin-bottom: 53px;
  }
  .MuiFormLabel-root{
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      /* IE10+ CSS styles go here */
      padding-bottom: 26px !important;
    }
  }
  .MuiBox-root:first-child {
    flex-direction: column;
  }
  .MuiInputBase-root {
    height: 41px;
    margin-bottom: 0;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
  .password-labels{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .forgot-password{
      font-weight: bold;
    }
  }
}
`;
const LoginButtonWrapper = styled.div`
  ${({ width }) => `
  #forgotPasswordButton {
    margin-top: -10px;
    background: red;
    color: #fff;
  }
  .MuiBox-root {
    .MuiBox-root {
      width: ${width ? width : `100%`} ;
      margin-top: 15px;
    }
  }
  .MuiButton-root:hover {
    outline: none;
    cursor: pointer;
    background: #bdd731;
  }
  #loginButton {
    color: #000;
    font-size: 12px;
    font-weight: 700;
    -webkit-letter-spacing: 0.6px;
    -moz-letter-spacing: 0.6px;
    -ms-letter-spacing: 0.6px;
    letter-spacing: 0.6px;
    background: red;
    padding: 12px 18px;
    border-radius: 4px;
    border: 0;
    text-align: left;
    min-width: 160px;
  }
  `}
`;
const LoginError = styled.div`
  padding-bottom: 10px;
`;
const Message = styled.span`
  color: red !important;
`;

const Styled = {
  Wrapper,
  LoginWrapper,
  LoginHeader,
  userNameWrapper,
  passwordWrapper,
  LoginButtonWrapper,
  LoginError,
  Message,
};
export default Styled;
