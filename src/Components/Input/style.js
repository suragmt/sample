import styled from "styled-components";
import Input from "@mui/material/Input";
const InputWrapper = styled(Input)`
  height: 45px;
  font-size: 1.2em;
  padding: 0;
  .MuiInputBase-input.Mui-disabled {
    opacity: 0.5;
  }
  .MuiInputBase-input {
    padding: 8px 15px;
  }
`;

const MainWrapper = styled.div`
  ${({ style, theme, mode, width, height }) => `
  input,
  .MuiInputBase-root {
  }
  .MuiInputBase-root {
    .MuiInput-underline:after {
      border: none;
    }
  }
  width: ${width || "100%"};
  height: ${height || "auto"};
  .MuiInputBase-inputMultiline {
    height: 150px;
    padding: 5px;

  }
  /* Change the white to any color ;) */
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 

  
  /*Change text in autofill textbox*/

  `}
`;

const Styled = { InputWrapper, MainWrapper };
export default Styled;
