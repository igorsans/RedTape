import React from "react";
import styled from "styled-components";
import { ColorModeContext } from "./ColorMode";

const StyledSwitch = styled.div`
  background-color: #333333;
  border: 0;
  padding: 3px;
  font-size: 12px;
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: space-around;
  border-radius: 10000px;
  position: relative;
  label {
    width: 50px;
  }
  span {
    display: inline-flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
  }

  label:before {
    content: "";
    background-color: #fafafa;
    border: 1px solid #333333;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: 0.3s;
    cursor: pointer;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 17px;
    width: 17px;
    border-radius: 50%;
    left: 62%;
    bottom: 24%;
    box-shadow: inset 15px -4px 0px 15px #333333;
    transition: 0.5s;
    cursor: pointer;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked + label:before {
    transform: translateX(100%);
  }
`;


export default function DarkModeSwitch() {
  const contexto = React.useContext(ColorModeContext)
  return (
    <StyledSwitch>
      <input id="darkmode" type="checkbox" onChange={() => {
        contexto.handleChange()
      }} />
      <label htmlFor="darkmode" className="darkmode-switch">
        <span className="slider"></span>
      </label>
    </StyledSwitch>
  );
}
