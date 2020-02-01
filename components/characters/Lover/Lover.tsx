import { Container } from "./Lover.styles";

import Character from "./Character";

const Lover = ({ state, walking, expression }) => (
  <Container
    x={state.position.x}
    y={state.position.y}
    speed={state.position.duration}
  >
    <Character walking={walking} expression={expression} />
  </Container>
);

export default Lover;
