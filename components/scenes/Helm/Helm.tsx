import { Container } from "./Helm.styles";

const Helm = ({ children, className }) => (
  <Container className={className}>{children}</Container>
);

export default Helm;
