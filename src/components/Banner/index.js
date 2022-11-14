import { StyledBanner, StyledVideo } from "./styles";

export default function Banner({ bg, videoURL, videoUp, changeVideoUp }) {
  return (
    <StyledBanner videoUp={videoUp} bg={bg}>
      {videoUp ? (
        <StyledVideo>
          <iframe
            src={`https://www.youtube.com/embed/${videoURL}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
            allowfullscreen="true"
          ></iframe>
          <button onClick={() => changeVideoUp()}>X</button>
        </StyledVideo>
      ) : (
        ""
      )}
    </StyledBanner>
  );
}
