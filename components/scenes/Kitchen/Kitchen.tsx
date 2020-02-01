import { Container } from "./Kitchen.styles";

import Background from "./Background";
import Silhouette from "./Silhouette";

const Kitchen = ({ children, className }) => (
  <Container className={className}>
    <Background />
    <Silhouette />

    {children}
  </Container>
);

export default Kitchen;
