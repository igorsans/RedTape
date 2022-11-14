import styled from "styled-components";
export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundLevel1};
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  & .gitsec{
    background-color: ${({theme}) => theme.backgroundLevel2};
    border-radius: 15%;
    /* width: 40px; */
    padding: 5px;
    margin: 20px;
    display: flex;
    justify-content: center;
    font-size: 15px;
    & a{
      display: flex;
      flex-direction: column;
      align-items: center;
      & p{
        
        width: 25px;
        text-align: center;
        margin: 2px 0px;
        
      }
    }
  }
`;