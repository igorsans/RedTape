import styled from "styled-components";
import { Favoritos } from "../Favoritos/Favoritos";
import config from "../../../config.json";

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px 8.7px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

export default function Timeline({valorDaBusca, setVideoURL, setVideoUp, body, playlist, ...props}) {

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
                  <a key={video.url} onClick={() =>{ 
                    setVideoURL(video.url.split('v=', 2)[1])
                    setVideoUp(true)
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth"
                    });
                  }} >
                    
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