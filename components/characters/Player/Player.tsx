import { Container } from "./Player.styles";

import Character from "./Character";

const Player = ({ state, walking, expression }) => (
  <Container
    x={state.position.x}
    y={state.position.y}
    speed={state.position.duration}
  >
    <Character expression={expression} walking={walking} />
  </Container>
);

export default Player;
