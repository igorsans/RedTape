import styled from "styled-components";

export const StyledBanner = styled.div`
  width: 100%;
  height: ${({ videoUp }) => (videoUp ? "400px" : "300px")};
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 425px)
{
    height: ${({ videoUp }) => (videoUp ? "285px" : "200px")};
}
`;

export const StyledVideo = styled.div`
  display: flex;
  align-items: flex-start;

  iframe {
    width: 650px;
    height: 350px;
  }
  button {
    margin: 10px 5px;
    border: none;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.backgroundBase || "#222222"};
    color: ${({ theme }) => theme.textColorBase || "#222222"};
    width: 15px;
    height: 15px;
  }
  @media (max-width: 767px)
{
    iframe
   {
    width: 400px;
    height: 350px;
   }
}
@media (max-width: 425px)
{
    flex-direction: column-reverse;
    align-items: center;
    iframe
   {
    width: 100%;
    height: 200px;
   }
}
`;