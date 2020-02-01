import { Container } from "./Bedroom.styles";
import Background from "./Background";

const Bedroom = ({ children }) => (
  <Container>
    <Background />
    {children}
  </Container>
);

export default Bedroom;
