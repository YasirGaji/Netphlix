import React, { useState, useContext, createContext } from "react";
import ReactDoM from "react-dom";
import { Container, Button, Overlay, Inner, Close } from "./styles/player";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer ? ReactDoM.createPortal(
    <Overlay onClick={() => setShowPlayer(false)} {...restProps} data-testid="player">
      <Inner>
        <video id="netphlix-player" controls>
          <source src={src} type="video/mp4" />
        </video>
        <Close />
      </Inner>
    </Overlay>,

    document.body

  ) : null;
}

Player.Button = function PlayerButton({ ...restProps }) {
  // eslint-disable-next-line no-unused-vars
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
      Play
    </Button>
  );
}