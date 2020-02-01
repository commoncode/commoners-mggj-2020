import { Container } from "./Hatch.styles";

import Background from "./Background";
import Silhouette from "./Silhouette";

const Hatch = ({ children, className }) => (
  <Container className={className}>
    <Background />
    <Silhouette />

    {children}
  </Container>
);

export default Hatch;
