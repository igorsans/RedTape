import { StyledSearch } from "./styles";

export default function Search({valorDaBusca, setValorDaBusca}) {
  return (
    <StyledSearch>
      <input
        type="text"
        onChange={(e) => setValorDaBusca(e.target.value)}
        value={valorDaBusca}
      />
      <button>&#128270;</button>
    </StyledSearch>
  );
}
