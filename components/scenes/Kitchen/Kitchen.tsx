import { Container } from "./Kitchen.styles";
import Background from "./Background";

const Kitchen = ({ children, className }) => (
  <Container className={className}>
    <Background />
    {children}
  </Container>
);

export default Kitchen;
