import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline/Timeline";
import { Banner } from "../src/components/Banner";
import { useState } from "react";

function HomePage() {
  const [valorDaBusca, setValorDaBusca] = useState("");
  const [videoURL, setVideoURL] = useState("")
  const [videoUp, setVideoUp] = useState(false)
  const changeVideoUp = () => {
    videoUp? setVideoUp(false) : setVideoUp(true)
  }

  return (
    <>
      <div className="corpo"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Banner changeVideoUp={changeVideoUp} videoUp={videoUp} videoURL={videoURL} bg={config.bg} />
        <Menu valorDaBusca={valorDaBusca} setValorDaBusca={setValorDaBusca} />
        <Header />
        <Timeline setVideoUp={setVideoUp} setVideoURL={setVideoURL} valorDaBusca={valorDaBusca} playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;
const StyledHeader = styled.div`
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
`;
function Header() {
  return (
    <StyledHeader>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
