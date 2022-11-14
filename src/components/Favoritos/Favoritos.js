import { StyledFavorites } from "./styles";

export function Favoritos({ favoritos }) {
  return (
    <StyledFavorites>
      {favoritos.map((item) => {
        return (
          <div key={item.name}>
            <a target="_Blank" className="card" href={item.url}>
              <img className="iconFav" src={item.img} />
              <span>{item.name}</span>
            </a>
          </div>
        );
      })}
    </StyledFavorites>
  );
}
