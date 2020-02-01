import { Container } from "./Hatch.styles";

const Hatch = ({ children, className }) => (
  <Container className={className}>{children}</Container>
);

export default Hatch;
