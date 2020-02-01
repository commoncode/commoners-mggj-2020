import { Container } from "./Lover.styles";

const Lover = ({ state }) => (
  <Container
    x={state.position.x}
    y={state.position.y}
    speed={state.position.duration}
  >
    Lover
  </Container>
);

export default Lover;
