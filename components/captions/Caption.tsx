import { Container } from "./Caption.styles"

const Caption = ({ state }) => (

  <Container
    x={state.position.x}
    y={state.position.y}
    speed={state.position.speed}
>
  {state.text}
  </Container>
)

export default Caption;