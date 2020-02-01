import { Container } from "./Hatch.styles";
import Background from "./Background";

const Hatch = ({ children, className }) => (
  <Container className={className}>
    <Background />
    {children}
  </Container>
);

export default Hatch;
