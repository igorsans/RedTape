import styled from "styled-components";

const StyledFavorites = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
    .iconFav{
        border-radius: 50%;
        width: 80px;
        height: 80px;
    }
    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export function Favoritos({ favoritos }) {
  // console.log(favoritos)
  return (
    <StyledFavorites>
      {favoritos.map((item) => {
        return (
          <div key={item.name}>
            <a className="card" href={item.url}>
              <img className="iconFav" src={item.img} />
              <span>{item.name}</span>
            </a>
          </div>
        );
      })}
    </StyledFavorites>
  );
}
