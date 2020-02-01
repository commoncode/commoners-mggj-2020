import { Container } from "./Helm.styles";
import Background from "./Background";

const Helm = ({ children, className }) => (
  <Container className={className}>
    <Background />
    {children}
  </Container>
);

export default Helm;
