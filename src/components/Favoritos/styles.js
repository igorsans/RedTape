import styled from "styled-components";

export const StyledFavorites = styled.div`
  display: flex;
  flex-wrap: wrap;
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