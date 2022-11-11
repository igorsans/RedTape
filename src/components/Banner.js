import styled from "styled-components";

const StyledBanner = styled.div`
    width: 100%;
    height: ${({ videoUp }) => videoUp? "400px" : "300px"};
    background-image: url(${({bg}) => bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`
const StyledVideo = styled.div`
display: flex;
align-items: flex-start;
    button{
        margin: 10px 5px;
        border: none;
        border-radius: 50%;
        background-color: ${({theme}) => theme.backgroundBase || "#222222" };
        color: ${({ theme }) => theme.textColorBase || "#222222"} ;
        width: 15px;
        height: 15px
    }
`
export function Banner({bg, videoURL, videoUp, changeVideoUp}) {

    return (
        <StyledBanner videoUp={videoUp} bg={bg}>
            {videoUp? <StyledVideo>
            <iframe width="650px" height="350px" src={`https://www.youtube.com/embed/${videoURL}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen="true"></iframe>
            <button onClick={() => changeVideoUp()}>X</button>
            </StyledVideo>: ""}
        </StyledBanner>
    )
}