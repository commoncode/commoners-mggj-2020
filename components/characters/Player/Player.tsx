import { Container } from "./Player.styles";

const Player = ({ state }) => (
  <Container x={state.position.x} y={state.position.y}>
    Player
  </Container>
);

export default Player;
