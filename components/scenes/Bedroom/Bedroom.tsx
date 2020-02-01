import { Container } from "./Bedroom.styles";
import Background from "./Background";

const Bedroom = ({ children, className }) => (
  <Container className={className}>
    <Background />
    {children}
  </Container>
);

export default Bedroom;
