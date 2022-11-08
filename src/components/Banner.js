import styled from "styled-components";

const StyledBanner = styled.div`
    width: 100%;
    height: 280px;
    background-image: url(${({bg}) => bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`
export function Banner({bg}) {
    return (
        <StyledBanner bg={bg}/>
    )
}