import { Container } from "./Helm.styles";

import Background from "./Background";
import Silhouette from "./Silhouette";

const Helm = ({ children, className }) => (
  <Container className={className}>
    <Background />
    <Silhouette />

    {children}
  </Container>
);

export default Helm;
