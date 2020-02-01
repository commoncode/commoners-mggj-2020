import { Container } from "./Kitchen.styles";

const Kitchen = ({ children, className }) => (
  <Container className={className}>{children}</Container>
);

export default Kitchen;
