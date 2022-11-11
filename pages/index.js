import { useState } from "react";
import config from "../config.json";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header/Header";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline/Timeline";

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
        <Header config={config} />
        <Timeline setVideoUp={setVideoUp} setVideoURL={setVideoURL} valorDaBusca={valorDaBusca} playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;
