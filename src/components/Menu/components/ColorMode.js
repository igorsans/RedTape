import React from "react";

export const ColorModeContext = React.createContext({
  mode: "",
  setMode: () => {
    alert("Você precisa me configurar primeiro!");
  },
  handleChange: () => {
    alert("Você precisa me configurar primeiro!");
  },
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = React.useState(props.initialMode);

  const handleChange = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };
  return (
    <ColorModeContext.Provider
      value={{ mode: mode, handleChange: handleChange }}
    >
      {props.children}
    </ColorModeContext.Provider>
  );
}
