import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { Banner } from "../src/components/Banner";
import { Favoritos } from "../src/components/Favoritos";
import { useState } from "react";

function HomePage() {
  const [valorDaBusca, setValorDaBusca] = useState("")
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Banner bg={config.bg}/>
        <Menu valorDaBusca={valorDaBusca} setValorDaBusca={setValorDaBusca} />
        <Header />
        <Timeline valorDaBusca={valorDaBusca} playlists={config.playlists} />
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
      {/* <img src="" /> */}

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
function Timeline({valorDaBusca, ...props}) {
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) => {
                return video.title.toLowerCase()
                .includes(valorDaBusca.toLowerCase())
              }).map((video) => {
                return (
                  <a key={video.url} href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
      <Favoritos favoritos={config.favorites}/>
    </StyledTimeline>
  );
}
