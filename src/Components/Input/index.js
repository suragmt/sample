import React, { forwardRef, useRef, useState } from "react";
import PropTypes from "prop-types";
import Styled from "./style";
const Input = forwardRef((props, ref) => {
  let textInput = useRef(null);
  const [value, setValue] = useState("");
  const {
    style,
    autoComplete,
    placeholder,
    name,
    id,
    type,
    disabled,
    mode,
    updateValue,
    multiLine,
    onClick,
  } = props;

  const handleOnChange = (e) => {
    const value = updateValue ? updateValue(e.target.value) : e.target.value;
    props.handleOnChange && props.handleOnChange(value, e);
  };
  const handleOnBlur = (e) => {
    props.onBlur && e?.currentTarget && props.onBlur(e.currentTarget.value);
  };
  return (
    <React.Fragment>
      <Styled.MainWrapper
        width={props.width}
        height={props.height}
        multiLine={props.multiLine}
        mode={mode}
      >
        <Styled.InputWrapper
          type={type}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          id={id || id}
          name={name ? name : "text_input"}
          style={style}
          placeholder={placeholder}
          value={props.value ? props.value : value}
          autoComplete={autoComplete || "off"}
          disableUnderline={true}
          rows={2}
          // inputref={textInput}
          disabled={disabled ? disabled : false}
          mode={mode}
          autoFocus={props.onLoadFocus}
          onClick={(e) => onClick && onClick(e)}
        />
      </Styled.MainWrapper>
    </React.Fragment>
  );
});

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

Input.defaultProps = {
  type: "",
  onChange: () => {},
};
export default Input;
