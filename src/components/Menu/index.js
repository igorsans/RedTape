import DarkModeSwitch from "./components/DarkModeSwitch";
import Search from "./components/Search";
// import Image from "next/image";
import { StyledLogo, StyledMenu } from "./styles";

export default function Menu({setValorDaBusca, valorDaBusca}) {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search setValorDaBusca={setValorDaBusca} valorDaBusca={valorDaBusca} />
      <DarkModeSwitch/>
    </StyledMenu>
  );
}

function Logo() {
  return (
    <div>
      <StyledLogo>RedTape</StyledLogo>
    </div>
  )
}