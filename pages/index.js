import { useEffect, useState } from "react";
import config from "../config.json";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header/Header";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline/Timeline";
import { supabase } from "../src/services/videoService";
import { videoService } from "../src/services/videoService";





function HomePage() {
  const [valorDaBusca, setValorDaBusca] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [videoUp, setVideoUp] = useState(false);
  const [playlists, setPlaylists] = useState({})
  
  const changeVideoUp = () => {
    videoUp ? setVideoUp(false) : setVideoUp(true);
  };
  
  useEffect(() => {
    const service = videoService();
    service.getAllVideos()
    .then((data) => {
      const novasPlaylists = { ...playlists };
      data.data.forEach((video) => {
        if (!novasPlaylists[video.playlist]) {
          novasPlaylists[video.playlist] = [];
        }
        novasPlaylists[video.playlist].push(video);
      });
      setPlaylists(novasPlaylists);
    });
  }, []);

  return (
    <>
      <div
        className="corpo"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Banner
          changeVideoUp={changeVideoUp}
          videoUp={videoUp}
          videoURL={videoURL}
          bg={config.bg}
        />
        <Menu valorDaBusca={valorDaBusca} setValorDaBusca={setValorDaBusca} />
        <Header config={config} />
        <Timeline
          setVideoUp={setVideoUp}
          setVideoURL={setVideoURL}
          valorDaBusca={valorDaBusca}
          playlists={playlists}
          playlist={playlists}
        />
      </div>
    </>
  );
}

export default HomePage;
