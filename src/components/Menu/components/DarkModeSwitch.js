import React from "react";
import { ColorModeContext } from "./ColorMode";
import { StyledSwitch } from "./styles";

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
