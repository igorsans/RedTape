import styled from "styled-components";

const StyledBanner = styled.div`
    width: 100%;
    height: 230px;
    background-image: url(https://images.unsplash.com/photo-1459233313842-cd392ee2c388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`
export function Banner() {
    return (
        <StyledBanner/>
    )
}