import DarkModeSwitch from "./components/DarkModeSwitch";
import Search from "./components/Search";
import Image from "next/image";
import { StyledMenu } from "./styles";

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
      <Image src="/RedTape.png" width="64" height="64"/>
      <h1>RedTape</h1>
    </div>
  )
}