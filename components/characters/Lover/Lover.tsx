import { Container } from "./Lover.styles";

import Character from "./Character";

const Lover = ({ state }) => (
  <Container
    x={state.position.x}
    y={state.position.y}
    speed={state.position.duration}
  >
    <Character />
  </Container>
);

export default Lover;
