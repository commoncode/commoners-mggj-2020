import { Container } from "./Bedroom.styles";

import Silhouette from "./Silhouette";
import Background from "./Background";

const Bedroom = ({ children, className }) => (
  <Container className={className}>
    <Background />
    <Silhouette />

    {children}
  </Container>
);

export default Bedroom;
