import { Container } from "./Caption.styles"

const Caption = ({ children, x, y, isToggled }) => (
  <Container
    x={x}
    y={y}
    isToggled={isToggled}
  >
  {children}
  </Container>
)

export default Caption;