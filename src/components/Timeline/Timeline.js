import { Favoritos } from "../Favoritos/Favoritos";
import config from "../../../config.json";
import { StyledTimeline } from "./styles";

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