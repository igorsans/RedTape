import styled from "styled-components";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Search from "./components/Search";
const logo = "./RedTape.png"
// import logo from "/RedTape.png"

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    width: 50px;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

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
      <img className="logo" src={logo}/>
      
    </div>
  )
}